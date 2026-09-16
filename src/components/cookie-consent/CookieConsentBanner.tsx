"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { localeFromPath } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { legalHref } from "@/lib/legal";
import { ESSENTIAL_ONLY, type ConsentPreferences } from "@/lib/cookieConsent";
import { useCookieConsent } from "./CookieConsentProvider";

const secondaryButton =
  "focus-ring inline-flex h-11 items-center justify-center rounded-full border border-border bg-surface px-5 text-sm font-semibold text-foreground transition-colors hover:bg-muted";
const primaryButton =
  "focus-ring inline-flex h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90";

function ConsentToggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (next: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`focus-ring relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
        disabled ? "cursor-not-allowed bg-fat/50" : checked ? "bg-fat" : "bg-foreground/20"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

export function CookieConsentBanner() {
  const locale = localeFromPath(usePathname() || "/");
  const copy = getMessages(locale).cookieConsent;
  const {
    preferences,
    hasChoice,
    showPreferences,
    acceptAll,
    rejectNonEssential,
    saveCustomPreferences,
    openPreferences,
    closePreferences,
    backToSummary,
  } = useCookieConsent();

  const [draft, setDraft] = useState<ConsentPreferences>(preferences ?? ESSENTIAL_ONLY);

  const categories = [
    { key: "essential" as const, checked: true, locked: true },
    { key: "analytics" as const, checked: draft.analytics, locked: false },
  ];

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-5"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
    >
      <div className="pointer-events-auto mx-auto max-w-2xl rounded-3xl border border-border bg-surface shadow-[0_24px_48px_-16px_rgba(3,7,18,0.25)]">
        <div className="p-5 sm:p-6">
          <div className="mb-2 flex items-start justify-between gap-4">
            <h2 id="cookie-consent-title" className="text-lg font-bold tracking-tight text-foreground">
              {copy.bannerTitle}
            </h2>
            {showPreferences && hasChoice ? (
              <button
                type="button"
                onClick={closePreferences}
                className="focus-ring rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                aria-label={copy.close}
              >
                <X size={18} aria-hidden />
              </button>
            ) : null}
          </div>

          {!showPreferences ? (
            <>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {copy.bannerBody}{" "}
                <Link
                  href={legalHref(locale, "cookies")}
                  className="focus-ring font-medium text-foreground underline underline-offset-2"
                >
                  {copy.policyLink}
                </Link>
              </p>
              <div className="flex flex-col-reverse gap-2.5 sm:flex-row sm:flex-wrap sm:justify-end">
                <button type="button" onClick={rejectNonEssential} className={secondaryButton}>
                  {copy.rejectNonEssential}
                </button>
                <button type="button" onClick={openPreferences} className={secondaryButton}>
                  {copy.customize}
                </button>
                <button type="button" onClick={acceptAll} className={primaryButton}>
                  {copy.acceptAll}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="mb-5 mt-3 space-y-3">
                {categories.map(({ key, checked, locked }) => {
                  const category = copy.categories[key];
                  return (
                    <div
                      key={key}
                      className="flex items-start justify-between gap-4 rounded-2xl border border-border bg-background px-4 py-3.5"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">{category.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                          {category.description}
                        </p>
                        {locked ? (
                          <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                            {copy.alwaysOn}
                          </p>
                        ) : null}
                      </div>
                      <ConsentToggle
                        checked={checked}
                        disabled={locked}
                        onChange={(next) => setDraft((current) => ({ ...current, analytics: next }))}
                        label={category.title}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col-reverse gap-2.5 sm:flex-row sm:flex-wrap sm:justify-end">
                <button type="button" onClick={backToSummary} className={secondaryButton}>
                  {copy.back}
                </button>
                <button type="button" onClick={() => saveCustomPreferences(draft)} className={primaryButton}>
                  {copy.savePreferences}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
