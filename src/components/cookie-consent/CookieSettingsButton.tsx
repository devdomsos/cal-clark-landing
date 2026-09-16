"use client";

import { useCookieConsent } from "./CookieConsentProvider";

export function CookieSettingsButton({ label, className = "" }: { label: string; className?: string }) {
  const { openPreferences } = useCookieConsent();
  return (
    <button type="button" onClick={openPreferences} className={className}>
      {label}
    </button>
  );
}
