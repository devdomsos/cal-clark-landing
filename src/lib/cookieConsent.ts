// Cookie consent for calclark.app. Since 2026-09-18 the same notice as the
// app: IAB purposes + a partner list (src/lib/consent/catalog.ts, copy in
// src/lib/consent/copy/<lang>.json - both generated from the app repo by
// `npm run consent:sync` there).
//
// - Vercel Web Analytics is cookieless, so it is NOT behind this gate. It runs
//   in the root layout for every visitor (partner "vercel", required).
// - Google Analytics loads only with NEXT_PUBLIC_GA_MEASUREMENT_ID set AND the
//   Google partner allowed. Consent Mode signals mirror the purposes.
// - AppsFlyer OneLink Smart Script loads only with the OneLink env set AND the
//   AppsFlyer partner allowed; it rewrites store links with campaign params.

import {
  CONSENT_VERSION,
  normalizeChoices,
  partnerAllowed,
  type ConsentChoices,
} from "@/lib/consent/catalog";

export const CONSENT_COOKIE_NAME = "calclark-cookie-consent";
export const CONSENT_EXPIRY_DAYS = 365;

export type StoredConsent = ConsentChoices & {
  v: number;
  ts: string;
};

function readCookie(name: string): string | undefined {
  const prefix = `${name}=`;
  for (const part of document.cookie.split("; ")) {
    if (part.startsWith(prefix)) return decodeURIComponent(part.slice(prefix.length));
  }
  return undefined;
}

function parseStoredConsent(raw: string | undefined): StoredConsent | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    // An older cookie (v1 had {essential, analytics}) means the person never
    // saw this notice: ask again.
    if (parsed.v !== CONSENT_VERSION) return null;
    if (typeof parsed.ts !== "string") return null;
    if (!parsed.purposes || !parsed.partners) return null;
    const { purposes, partners } = normalizeChoices(parsed);
    return { purposes, partners, v: parsed.v, ts: parsed.ts };
  } catch {
    return null;
  }
}

export function readConsent(): StoredConsent | null {
  if (typeof document === "undefined") return null;
  return parseStoredConsent(readCookie(CONSENT_COOKIE_NAME));
}

export function saveConsent(choices: ConsentChoices): StoredConsent {
  const { purposes, partners } = normalizeChoices(choices);
  const stored: StoredConsent = {
    purposes,
    partners,
    v: CONSENT_VERSION,
    ts: new Date().toISOString(),
  };
  const maxAge = CONSENT_EXPIRY_DAYS * 24 * 60 * 60;
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(stored))}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;
  return stored;
}

let gaLoaded = false;

function gaConsentSignals(choices: ConsentChoices): string {
  const grant = (on: boolean) => (on ? "'granted'" : "'denied'");
  return `{
      analytics_storage: ${grant(choices.purposes.understand_audiences || choices.purposes.measure_content)},
      ad_storage: ${grant(choices.purposes.store_access)},
      ad_user_data: ${grant(choices.purposes.store_access && choices.purposes.measure_ad_performance)},
      ad_personalization: ${grant(choices.purposes.use_ad_profiles)}
    }`;
}

function loadGoogleAnalytics(measurementId: string, choices: ConsentChoices): void {
  if (!/^G-[A-Z0-9]+$/.test(measurementId)) return;
  if (gaLoaded) {
    // Already on the page: only the consent signals change.
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    w.gtag?.("consent", "update", JSON.parse(gaConsentSignals(choices).replace(/'/g, '"')));
    return;
  }
  gaLoaded = true;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);

  const inline = document.createElement("script");
  inline.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('consent', 'update', ${gaConsentSignals(choices)});
    gtag('config', '${measurementId}', { anonymize_ip: true });
  `;
  document.head.appendChild(inline);
}

let oneLinkLoaded = false;

/**
 * AppsFlyer OneLink Smart Script: turns the store buttons into OneLink URLs
 * that carry the campaign params of the page the visitor landed on, so the
 * install is attributed to the right link. Needs the OneLink subdomain and
 * template id from the AppsFlyer dashboard.
 */
function loadAppsFlyerOneLink(subdomain: string, templateId: string): void {
  if (oneLinkLoaded) return;
  oneLinkLoaded = true;
  const script = document.createElement("script");
  script.src = "https://onelinksmartscript.appsflyer.com/onelink-smart-script-latest.js";
  script.async = true;
  script.onload = () => {
    const w = window as unknown as {
      AF_SMART_SCRIPT?: { generateOneLinkURL: (o: unknown) => { clickURL: string } | null };
    };
    const result = w.AF_SMART_SCRIPT?.generateOneLinkURL({
      oneLinkURL: `https://${subdomain}.onelink.me/${templateId}`,
      afParameters: {
        mediaSource: { keys: ["utm_source"], defaultValue: "calclark_web" },
        campaign: { keys: ["utm_campaign"] },
        channel: { keys: ["utm_medium"] },
        afSub1: { keys: ["utm_content"] },
      },
    });
    if (!result?.clickURL) return;
    document
      .querySelectorAll<HTMLAnchorElement>("a[data-store-link]")
      .forEach((a) => {
        a.href = result.clickURL;
      });
  };
  document.head.appendChild(script);
}

/** Loads the optional tools the visitor allowed. Safe to call many times. */
export function applyConsentScripts(choices: ConsentChoices): void {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (gaId && partnerAllowed(choices, "google_ads")) loadGoogleAnalytics(gaId, choices);

  const subdomain = process.env.NEXT_PUBLIC_APPSFLYER_ONELINK_SUBDOMAIN;
  const templateId = process.env.NEXT_PUBLIC_APPSFLYER_ONELINK_TEMPLATE_ID;
  if (subdomain && templateId && partnerAllowed(choices, "appsflyer")) {
    loadAppsFlyerOneLink(subdomain, templateId);
  }
}
