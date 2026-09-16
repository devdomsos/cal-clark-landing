// Cookie consent for calclark.app. Ported from jastado-landing
// (app/lib/cookie-consent/*), trimmed to the categories this site really has.
//
// - essential: the consent cookie itself. Always on.
// - analytics: optional cookie-based analytics. Nothing loads today unless
//   NEXT_PUBLIC_GA_MEASUREMENT_ID is set.
//
// Vercel Web Analytics is cookieless, so it is NOT behind this gate. It runs in
// the root layout for every visitor.

export const CONSENT_COOKIE_NAME = "calclark-cookie-consent";
export const CONSENT_VERSION = 1;
export const CONSENT_EXPIRY_DAYS = 365;

export type ConsentPreferences = {
  essential: true;
  analytics: boolean;
};

export type StoredConsent = ConsentPreferences & {
  v: number;
  ts: string;
};

export const ESSENTIAL_ONLY: ConsentPreferences = { essential: true, analytics: false };
export const ACCEPT_ALL: ConsentPreferences = { essential: true, analytics: true };

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
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.v !== CONSENT_VERSION) return null;
    if (parsed.essential !== true) return null;
    if (typeof parsed.analytics !== "boolean") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function readConsent(): StoredConsent | null {
  if (typeof document === "undefined") return null;
  return parseStoredConsent(readCookie(CONSENT_COOKIE_NAME));
}

export function saveConsent(preferences: ConsentPreferences): StoredConsent {
  const stored: StoredConsent = {
    essential: true,
    analytics: preferences.analytics,
    v: CONSENT_VERSION,
    ts: new Date().toISOString(),
  };
  const maxAge = CONSENT_EXPIRY_DAYS * 24 * 60 * 60;
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(stored))}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;
  return stored;
}

let gaLoaded = false;

function loadGoogleAnalytics(measurementId: string): void {
  if (gaLoaded || !/^G-[A-Z0-9]+$/.test(measurementId)) return;
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
    gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
    gtag('config', '${measurementId}', { anonymize_ip: true });
  `;
  document.head.appendChild(inline);
}

/** Loads the optional tools the visitor allowed. Safe to call many times. */
export function applyConsentScripts(preferences: ConsentPreferences): void {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (preferences.analytics && gaId) loadGoogleAnalytics(gaId);
}
