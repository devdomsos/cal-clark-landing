/**
 * Shared grind helpers.
 *
 * Cursor-native loop: stop hook + followup_message (see cursor.com/docs/hooks
 * and Cursor agent best practices). Completion signal = plan YAML open todos.
 * Binding is automatic (prompt attachments/paths, fuzzy name, plan file touch).
 */

import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, relative, resolve } from "node:path";

export const GRIND_ROOT = ".cursor/grind";
export const CONVERSATIONS_DIR = join(GRIND_ROOT, "conversations");
export const PLANS_ROOT = ".cursor/plans";

export function ensureGrindDirs() {
  mkdirSync(CONVERSATIONS_DIR, { recursive: true });
}

export function sanitizeConversationId(id) {
  const raw = String(id ?? "").trim();
  if (!raw || raw === "(none)") return null;
  const safe = raw.replace(/[^a-zA-Z0-9._-]/g, "_");
  return safe.length > 0 ? safe : null;
}

export function conversationSessionPath(conversationId) {
  const safe = sanitizeConversationId(conversationId);
  if (!safe) return null;
  return join(CONVERSATIONS_DIR, `${safe}.json`);
}

/** @returns {string | null} */
export function extractPlanPath(text) {
  if (!text) return null;
  const planLine = text.match(/^\s*PLAN:\s*(.+?)\s*$/m);
  if (planLine) {
    return normalizePlanRel(planLine[1].replace(/^["']|["']$/g, "").trim());
  }
  const owning = text.match(/Owning plan:\s*(\S+\.plan\.md)/i);
  if (owning) return normalizePlanRel(owning[1].trim());
  const pathMatch = text.match(
    /(\.cursor\/plans\/[A-Za-z0-9_./-]+\.plan\.md)/,
  );
  if (pathMatch) return normalizePlanRel(pathMatch[1].trim());
  return null;
}

export function normalizePlanRel(pathOrRel) {
  if (!pathOrRel) return null;
  let p = String(pathOrRel).trim().replace(/\\/g, "/");
  const marker = ".cursor/plans/";
  const idx = p.indexOf(marker);
  if (idx >= 0) p = p.slice(idx);
  if (!p.startsWith(".cursor/plans/") || !p.endsWith(".plan.md")) return null;
  return p;
}

export function toPlanRelFromAbsolute(root, absPath) {
  if (!absPath) return null;
  const rel = relative(resolve(root), resolve(absPath)).replace(/\\/g, "/");
  return normalizePlanRel(rel);
}

/**
 * Open todos = items whose own status is pending or in_progress.
 */
export function countOpenTodos(planText) {
  const open = [];
  const blocks = planText.split(/(?=^\s*-\s*id:\s*)/m);
  for (const block of blocks) {
    const idMatch = block.match(/^\s*-\s*id:\s*(.+?)\s*$/m);
    if (!idMatch) continue;
    const statusMatch = block.match(/^\s*status:\s*(\S+)\s*$/m);
    if (!statusMatch) continue;
    const status = statusMatch[1].toLowerCase();
    if (
      status === "pending" ||
      status === "in_progress" ||
      status === "in-progress"
    ) {
      open.push(idMatch[1].trim());
    }
  }
  return open;
}

export function readPlanOpenTodos(root, planRel) {
  const abs = resolve(root, planRel);
  if (!existsSync(abs)) return [];
  return countOpenTodos(readFileSync(abs, "utf8"));
}

/**
 * @returns {{ autoGrind: boolean, plan: string | null, source?: string, updatedAt?: string } | null}
 */
export function readSessionFile(path) {
  if (!path || !existsSync(path)) return null;
  try {
    const raw = JSON.parse(readFileSync(path, "utf8"));
    if (!raw || typeof raw !== "object") return null;
    return {
      autoGrind: Boolean(raw.autoGrind),
      plan: typeof raw.plan === "string" ? raw.plan : null,
      source: typeof raw.source === "string" ? raw.source : undefined,
      updatedAt: typeof raw.updatedAt === "string" ? raw.updatedAt : undefined,
    };
  } catch {
    return null;
  }
}

export function writeSessionFile(path, session) {
  ensureGrindDirs();
  mkdirSync(dirname(path), { recursive: true });
  const payload = {
    autoGrind: Boolean(session.autoGrind),
    plan: session.plan ?? null,
    source: session.source ?? "auto",
    updatedAt: new Date().toISOString(),
  };
  writeFileSync(path, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  return payload;
}

export function bindConversation(conversationId, planRel, source, autoGrind = true) {
  const sessionPath = conversationSessionPath(conversationId);
  if (!sessionPath || !planRel) return null;
  return writeSessionFile(sessionPath, {
    autoGrind,
    plan: planRel,
    source,
  });
}

export function planExists(root, planRel) {
  return Boolean(planRel) && existsSync(resolve(root, planRel));
}

function walkPlanFiles(dir, out) {
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    let st;
    try {
      st = statSync(full);
    } catch {
      continue;
    }
    if (st.isDirectory()) {
      walkPlanFiles(full, out);
      continue;
    }
    if (name.endsWith(".plan.md")) out.push(full);
  }
}

/**
 * @returns {Array<{ rel: string, slug: string, tier: number, title: string }>}
 */
export function listPlans(root) {
  const absPlans = resolve(root, PLANS_ROOT);
  const files = [];
  walkPlanFiles(absPlans, files);
  return files.map((abs) => {
    const rel = normalizePlanRel(relative(root, abs).replace(/\\/g, "/"));
    const base = abs.split("/").pop().replace(/\.plan\.md$/, "");
    const slug = base.replace(/_[0-9a-f]{6,}$/i, "").replace(/_/g, " ");
    let tier = 3;
    if (rel.includes("/todo/")) tier = 0;
    else if (rel.includes("/partial/")) tier = 1;
    else if (rel.includes("/done/")) tier = 2;
    let title = "";
    try {
      const head = readFileSync(abs, "utf8").slice(0, 4000);
      const nameMatch = head.match(/^(?:#\s+|name:\s*)(.+)$/m);
      if (nameMatch) title = nameMatch[1].trim();
    } catch {
      // ignore
    }
    return { rel, slug, tier, title, base };
  });
}

export function looksLikeWorkIntent(text) {
  if (!text) return false;
  return /\b(grind|continue|keep going|finish|implement|build|complete|ship|execute|work on|do next|next todo|autopilot|go ahead|start|resume)\b/i.test(
    text,
  );
}

/** Stop-hook injected continue. Must not *start* a grind; only continue an already-on bind. */
export function isGrindFollowupPrompt(text) {
  if (!text) return false;
  return /\[Iteration\s+\d+\s*\/\s*\d+\]\s*Continue\.\s*Owning plan:/i.test(
    text,
  );
}

/**
 * Resolve owning plan from prompt + optional attachments. No user register step.
 * @returns {{ plan: string, source: string } | null}
 */
export function resolvePlanFromPrompt(root, prompt, attachments = []) {
  for (const att of attachments) {
    const fp = att?.file_path ?? att?.path ?? "";
    const rel = toPlanRelFromAbsolute(root, fp) ?? normalizePlanRel(fp);
    if (rel && planExists(root, rel)) {
      return { plan: rel, source: "attachment" };
    }
  }

  const explicit = extractPlanPath(prompt);
  if (explicit && planExists(root, explicit)) {
    return { plan: explicit, source: "prompt-path" };
  }

  const plans = listPlans(root);
  if (plans.length === 0 || !prompt) return null;

  const hay = prompt.toLowerCase();
  const scored = [];
  for (const p of plans) {
    let score = 0;
    if (hay.includes(p.rel.toLowerCase())) score += 100;
    if (hay.includes(`${p.base}.plan.md`.toLowerCase())) score += 80;
    if (hay.includes(p.base.toLowerCase().replace(/_/g, " "))) score += 40;
    if (hay.includes(p.base.toLowerCase())) score += 35;
    if (p.slug.length >= 8 && hay.includes(p.slug.toLowerCase())) score += 30;
    if (p.title && p.title.length >= 6 && hay.includes(p.title.toLowerCase())) {
      score += 25;
    }
    if (score <= 0) continue;
    const open = readPlanOpenTodos(root, p.rel).length;
    score += Math.max(0, 10 - p.tier * 3);
    if (open > 0) score += 15;
    else score -= 20;
    scored.push({ ...p, score, open });
  }

  scored.sort((a, b) => b.score - a.score || a.tier - b.tier);
  if (scored.length === 0) return null;
  const top = scored[0];
  const second = scored[1];
  if (top.score < 30) return null;
  if (second && second.score >= top.score - 5) return null;
  return { plan: top.rel, source: "fuzzy-name" };
}

/** Last-resort: scan transcript for an owning plan path. */
export function resolvePlanFromTranscript(root, transcriptPath) {
  if (!transcriptPath || !existsSync(transcriptPath)) return null;
  try {
    const text = readFileSync(transcriptPath, "utf8");
    const slice = text.length > 200_000 ? text.slice(-200_000) : text;
    const matches = [
      ...slice.matchAll(/(\.cursor\/plans\/[A-Za-z0-9_./-]+\.plan\.md)/g),
    ].map((m) => normalizePlanRel(m[1]));
    for (let i = matches.length - 1; i >= 0; i -= 1) {
      const rel = matches[i];
      if (rel && planExists(root, rel)) {
        return { plan: rel, source: "transcript" };
      }
    }
  } catch {
    // ignore
  }
  return null;
}
