// Mobile perf probe: LCP/CLS/TBT on load, then frame pacing per section while touch-scrolling.
// usage: PLAYWRIGHT_PATH=/path/to/node_modules/playwright node scripts/perf/mobile-perf.cjs <baseUrl> [path] [label] [runs]
// Measure a production build (next build && next start) or the deployed site, never `next dev`.
// Budgets: LCP < 2500 ms, TBT < 300 ms, CLS < 0.1, dropped frames per section < 3%.
const { chromium, devices } = require(process.env.PLAYWRIGHT_PATH || "playwright");
const base = process.argv[2] || "http://localhost:7788";
const path = process.argv[3] || "/";
const label = process.argv[4] || "run";
const runs = Number(process.argv[5] || 2);

const INIT = `
  window.__perf = { lcp: null, lcpEl: null, cls: 0, longtasks: [], loaf: [], frames: [] };
  new PerformanceObserver(l => { for (const e of l.getEntries()) { __perf.lcp = e.startTime; __perf.lcpEl = (e.element && (e.element.tagName + ' ' + (e.element.textContent||e.element.getAttribute('src')||'').slice(0,40))) || e.url; } }).observe({ type: 'largest-contentful-paint', buffered: true });
  new PerformanceObserver(l => { for (const e of l.getEntries()) if (!e.hadRecentInput) __perf.cls += e.value; }).observe({ type: 'layout-shift', buffered: true });
  new PerformanceObserver(l => { for (const e of l.getEntries()) __perf.longtasks.push([e.startTime, e.duration]); }).observe({ type: 'longtask', buffered: true });
  try { new PerformanceObserver(l => { for (const e of l.getEntries()) __perf.loaf.push({ t: e.startTime, d: e.duration, block: e.blockingDuration, scripts: (e.scripts||[]).map(s => (s.sourceFunctionName||'') + '@' + (s.sourceURL||'').split('/').pop() + ':' + Math.round(s.duration)).slice(0,3) }); }).observe({ type: 'long-animation-frame', buffered: true }); } catch {}
`;

function stats(intervals) {
  if (!intervals.length) return { frames: 0 };
  const s = [...intervals].sort((a, b) => a - b);
  const p = (q) => s[Math.min(s.length - 1, Math.floor(q * s.length))];
  const dropped = intervals.reduce((n, d) => n + Math.max(0, Math.round(d / 16.67) - 1), 0);
  return { frames: intervals.length, p50: +p(0.5).toFixed(1), p95: +p(0.95).toFixed(1), worst: +s[s.length - 1].toFixed(0), janky: intervals.filter((d) => d > 34).length, droppedPct: +((dropped / (intervals.length + dropped)) * 100).toFixed(1) };
}

(async () => {
  const browser = await chromium.launch({ args: ["--enable-gpu-rasterization"] });
  const all = [];
  for (let r = 0; r < runs; r++) {
    const ctx = await browser.newContext({ ...devices["Pixel 7"], viewport: { width: 390, height: 844 }, deviceScaleFactor: 3 });
    const page = await ctx.newPage();
    const cdp = await ctx.newCDPSession(page);
    await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });
    await cdp.send("Network.enable");
    await cdp.send("Network.emulateNetworkConditions", { offline: false, latency: 150, downloadThroughput: (1.6 * 1024 * 1024) / 8, uploadThroughput: (750 * 1024) / 8 });
    await page.addInitScript(INIT);
    let bytes = 0;
    cdp.on("Network.loadingFinished", (e) => (bytes += e.encodedDataLength));
    const t0 = Date.now();
    await page.goto(base + path, { waitUntil: "load", timeout: 120000 });
    await page.waitForTimeout(4000);
    const load = await page.evaluate(() => {
      const fcp = performance.getEntriesByName("first-contentful-paint")[0]?.startTime ?? 0;
      const tbt = __perf.longtasks.filter(([s]) => s > fcp).reduce((a, [, d]) => a + Math.max(0, d - 50), 0);
      const nav = performance.getEntriesByType("navigation")[0];
      return { ttfb: Math.round(nav.responseStart), fcp: Math.round(fcp), lcp: Math.round(__perf.lcp), lcpEl: __perf.lcpEl, cls: +__perf.cls.toFixed(3), tbt: Math.round(tbt) };
    });
    load.kb = Math.round(bytes / 1024);

    // Scroll pass: unthrottled network, CPU still 4x.
    await cdp.send("Network.emulateNetworkConditions", { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
    // idle with hero in view (phone demo animating)
    await page.evaluate(() => { __perf.frames = []; __perf.loaf = []; let last = performance.now(); const tick = (t) => { __perf.frames.push(t - last); last = t; if (!__perf.stop) requestAnimationFrame(tick); }; __perf.stop = false; requestAnimationFrame(tick); });
    await page.waitForTimeout(6000);
    const idle = await page.evaluate(() => { const f = __perf.frames.slice(1); __perf.frames = []; return f; });

    const sections = await page.evaluate(() => [...document.querySelectorAll("main > section")].map((s) => ({ id: s.id || s.querySelector("h1,h2")?.textContent?.slice(0, 22) || "section", top: s.getBoundingClientRect().top + scrollY, h: s.offsetHeight })));
    const per = [];
    for (const s of sections) {
      await page.evaluate(() => { __perf.frames = []; __perf.loaf = []; });
      const start = await page.evaluate(() => scrollY);
      const dist = Math.max(200, s.top + s.h - 844 - start + 400);
      await cdp.send("Input.synthesizeScrollGesture", { x: 200, y: 600, yDistance: -Math.round(dist), speed: 1400, gestureSourceType: "touch", preventFling: true });
      await page.waitForTimeout(300);
      const res = await page.evaluate(() => ({ f: __perf.frames.slice(1), loaf: __perf.loaf.filter((l) => l.d > 50).sort((a, b) => b.d - a.d).slice(0, 2) }));
      per.push({ section: s.id, ...stats(res.f), topLoaf: res.loaf.map((l) => `${Math.round(l.d)}ms ${l.scripts.join(",")}`).join(" | ") });
    }
    await page.evaluate(() => (__perf.stop = true));
    all.push({ load, idle: stats(idle), per });
    await ctx.close();
  }
  await browser.close();

  console.log(`\n=== ${label} ${base}${path} (${runs} runs, mobile 390x844 dpr3, CPU 4x) ===`);
  all.forEach((r, i) => console.log(`run ${i + 1} load:`, JSON.stringify(r.load)));
  all.forEach((r, i) => console.log(`run ${i + 1} idle hero 6s:`, JSON.stringify(r.idle)));
  const secs = all[0].per.map((p) => p.section);
  console.log("\nsection | frames | p95 ms | worst ms | janky(>34ms) | dropped% | top long frames (run 1)");
  secs.forEach((name, i) => {
    const rows = all.map((r) => r.per[i]);
    const avg = (k) => +(rows.reduce((a, x) => a + (x[k] || 0), 0) / rows.length).toFixed(1);
    console.log(`${name.padEnd(22)} | ${avg("frames")} | ${avg("p95")} | ${avg("worst")} | ${avg("janky")} | ${avg("droppedPct")} | ${rows[0].topLoaf}`);
  });
})();
