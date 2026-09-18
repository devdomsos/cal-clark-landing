"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ChevronDown, ChevronRight, X } from "lucide-react";
import { localeFromPath } from "@/lib/i18n/config";
import { legalHref } from "@/lib/legal";
import {
  CONSENT_VERSION,
  FEATURE_IDS,
  PURPOSE_BASIS,
  PURPOSE_IDS,
  defaultChoices,
  partnersFor,
  type ConsentChoices,
  type Partner,
  type PurposeId,
} from "@/lib/consent/catalog";
import { fill, getConsentCopy } from "@/lib/consent/copy";
import { useCookieConsent } from "./CookieConsentProvider";

export type ConsentView = "notice" | "manage" | "partners";

const PARTNERS = partnersFor("web");

const secondaryButton =
  "focus-ring inline-flex h-11 items-center justify-center rounded-full border border-border bg-surface px-5 text-sm font-semibold text-foreground transition-colors hover:bg-muted";
const primaryButton =
  "focus-ring inline-flex h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90";
const linkClass = "focus-ring font-semibold text-foreground underline underline-offset-2";

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

/** "+ Title / toggle" row; the title expands the explanation. */
function ConsentRow({
  title,
  basis,
  description,
  checked,
  locked,
  onChange,
  children,
}: {
  title: string;
  basis?: string;
  description: string;
  checked: boolean;
  locked?: boolean;
  onChange?: (next: boolean) => void;
  children?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const Chevron = open ? ChevronDown : ChevronRight;
  return (
    <div className="border-b border-border px-4 py-3 last:border-b-0">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="focus-ring flex min-w-0 flex-1 items-center gap-2 rounded-md text-left"
        >
          <Chevron size={18} className="shrink-0 text-muted-foreground" aria-hidden />
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-foreground">{title}</span>
            {basis ? <span className="block text-xs text-muted-foreground">{basis}</span> : null}
          </span>
        </button>
        {locked ? null : (
          <ConsentToggle checked={checked} onChange={(next) => onChange?.(next)} label={title} />
        )}
      </div>
      {open ? (
        <div className="mt-2 space-y-2 pl-7 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          <p>{description}</p>
          {children}
        </div>
      ) : null}
    </div>
  );
}

function FeatureRow({ title, description }: { title: string; description: string }) {
  const [open, setOpen] = useState(false);
  const Chevron = open ? ChevronDown : ChevronRight;
  return (
    <div className="border-b border-border px-4 py-2.5 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="focus-ring flex w-full items-center gap-2 rounded-md text-left text-sm font-semibold text-foreground"
      >
        <Chevron size={18} className="shrink-0 text-muted-foreground" aria-hidden />
        {title}
      </button>
      {open ? (
        <p className="mt-2 pl-7 text-xs leading-relaxed text-muted-foreground sm:text-sm">{description}</p>
      ) : null}
    </div>
  );
}

/** The intro sentence has two inline links; split on the placeholders so each language keeps its word order. */
function IntroText({
  template,
  partners,
  privacy,
}: {
  template: string;
  partners: ReactNode;
  privacy: ReactNode;
}) {
  const parts = template.split(/(\{partnersLink\}|\{privacyLink\})/);
  return (
    <>
      {parts.map((part, i) => {
        if (part === "{partnersLink}") return <span key={i}>{partners}</span>;
        if (part === "{privacyLink}") return <span key={i}>{privacy}</span>;
        return part;
      })}
    </>
  );
}

function groupByLetter(partners: readonly Partner[]) {
  const sorted = [...partners].sort((a, b) => a.name.localeCompare(b.name));
  const groups: { letter: string; partners: Partner[] }[] = [];
  for (const p of sorted) {
    const letter = p.name[0]!.toUpperCase();
    const last = groups[groups.length - 1];
    if (last && last.letter === letter) last.partners.push(p);
    else groups.push({ letter, partners: [p] });
  }
  return groups;
}

export function CookieConsentBanner() {
  const locale = localeFromPath(usePathname() || "/");
  const copy = getConsentCopy(locale);
  const { choices, savedAt, hasChoice, view, setView, acceptAll, rejectAll, saveChoices, close } =
    useCookieConsent();

  const [draft, setDraft] = useState<ConsentChoices>(choices ?? defaultChoices());
  const [userInfoOpen, setUserInfoOpen] = useState(false);

  const setPurpose = (id: PurposeId, value: boolean) =>
    setDraft((d) => ({ ...d, purposes: { ...d.purposes, [id]: value } }));
  const setPartner = (id: Partner["id"], value: boolean) =>
    setDraft((d) => ({ ...d, partners: { ...d.partners, [id]: value } }));

  const optionalPartners = PARTNERS.filter((p) => !p.required);
  const allPartnersOn = optionalPartners.every((p) => draft.partners[p.id]);

  const header = (title: string, back?: () => void) => (
    <div className="mb-3 flex items-center gap-2">
      {back ? (
        <button
          type="button"
          onClick={back}
          className="focus-ring rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label={copy.back}
        >
          <ArrowLeft size={18} aria-hidden />
        </button>
      ) : null}
      <h2 id="cookie-consent-title" className="flex-1 text-base font-bold tracking-tight text-foreground sm:text-lg">
        {title}
      </h2>
      {hasChoice ? (
        <button
          type="button"
          onClick={close}
          className="focus-ring rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label={copy.close}
        >
          <X size={18} aria-hidden />
        </button>
      ) : null}
    </div>
  );

  const actionButtons = (
    <>
      <button type="button" onClick={rejectAll} className={secondaryButton}>
        {copy.rejectAll}
      </button>
      <button type="button" onClick={acceptAll} className={primaryButton}>
        {copy.acceptAll}
      </button>
    </>
  );

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-5"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
    >
      <div className="pointer-events-auto mx-auto flex max-h-[min(80vh,40rem)] max-w-2xl flex-col rounded-2xl border border-border bg-surface shadow-[0_24px_48px_-16px_rgba(3,7,18,0.25)] sm:rounded-3xl">
        <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6">
          {view === "notice" ? (
            <>
              {header(copy.title)}
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                <IntroText
                  template={copy.introWeb}
                  partners={
                    <button type="button" onClick={() => setView("partners")} className={linkClass}>
                      {fill(copy.partnersLink, { count: PARTNERS.length })}
                    </button>
                  }
                  privacy={
                    <Link href={legalHref(locale, "privacy")} className={linkClass}>
                      {copy.privacyPolicy}
                    </Link>
                  }
                />
              </p>
              <p className="mb-1 text-xs font-bold text-foreground sm:text-sm">{copy.purposesHeading}</p>
              <p className="text-xs font-semibold leading-relaxed text-muted-foreground sm:text-sm">
                {PURPOSE_IDS.map((id) => copy.purposes[id].title).join(", ")}
              </p>
            </>
          ) : null}

          {view === "manage" ? (
            <>
              {header(copy.manage.title, hasChoice ? undefined : () => setView("notice"))}
              <p className="mb-2 text-sm leading-relaxed text-muted-foreground">{copy.manage.intro}</p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{copy.manage.skip}</p>
              <div className="mb-4 rounded-2xl border border-border bg-background">
                {PURPOSE_IDS.map((id) => {
                  const basis = PURPOSE_BASIS[id];
                  return (
                    <ConsentRow
                      key={id}
                      title={copy.purposes[id].title}
                      basis={
                        basis === "required"
                          ? copy.alwaysOn
                          : basis === "legitimate_interest"
                            ? copy.legitimateInterest
                            : copy.consentBasis
                      }
                      description={copy.purposes[id].description}
                      checked={draft.purposes[id]}
                      locked={basis === "required"}
                      onChange={(next) => setPurpose(id, next)}
                    />
                  );
                })}
              </div>
              <p className="mb-2 text-sm leading-relaxed text-muted-foreground">{copy.manage.featuresIntroWeb}</p>
              <div className="mb-4 rounded-2xl border border-border bg-background">
                {FEATURE_IDS.map((id) => (
                  <FeatureRow key={id} title={copy.features[id].title} description={copy.features[id].description} />
                ))}
              </div>
              <button type="button" onClick={() => setView("partners")} className={secondaryButton}>
                {copy.vendors} ({PARTNERS.length})
              </button>
            </>
          ) : null}

          {view === "partners" ? (
            <>
              {header(copy.partnersScreen.title, () => setView("manage"))}
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{copy.partnersScreen.intro}</p>
              <div className="mb-3 flex items-center justify-between gap-4 rounded-2xl border border-border bg-muted px-4 py-3">
                <span className="text-sm font-bold text-foreground">{copy.partnersScreen.all}</span>
                <ConsentToggle
                  checked={allPartnersOn}
                  onChange={(next) =>
                    setDraft((d) => {
                      const partners = { ...d.partners };
                      for (const p of optionalPartners) partners[p.id] = next;
                      return { ...d, partners };
                    })
                  }
                  label={copy.partnersScreen.all}
                />
              </div>
              <div className="mb-3 rounded-2xl border border-border bg-background">
                {groupByLetter(PARTNERS).map(({ letter, partners }) => (
                  <div key={letter}>
                    <p className="px-4 pb-0.5 pt-3 text-xs font-bold text-muted-foreground">{letter}</p>
                    {partners.map((p) => (
                      <ConsentRow
                        key={p.id}
                        title={p.name}
                        basis={p.required ? copy.partnersScreen.required : undefined}
                        description={copy.partners[p.id].description}
                        checked={draft.partners[p.id]}
                        locked={p.required}
                        onChange={(next) => setPartner(p.id, next)}
                      >
                        <p>
                          <span className="font-bold">{copy.partnersScreen.purposesLabel}: </span>
                          {p.purposes.map((id) => copy.purposes[id].title).join(", ")}
                        </p>
                        {p.features.length ? (
                          <p>
                            <span className="font-bold">{copy.partnersScreen.featuresLabel}: </span>
                            {p.features.map((id) => copy.features[id].title).join(", ")}
                          </p>
                        ) : null}
                        <a href={p.privacyUrl} target="_blank" rel="noreferrer" className={linkClass}>
                          {copy.partnersScreen.privacyLink}
                        </a>
                      </ConsentRow>
                    ))}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setUserInfoOpen((o) => !o)}
                aria-expanded={userInfoOpen}
                className="focus-ring flex items-center gap-1.5 rounded-md text-xs font-semibold text-muted-foreground"
              >
                {userInfoOpen ? <ChevronDown size={14} aria-hidden /> : <ChevronRight size={14} aria-hidden />}
                {copy.partnersScreen.userInfo}
              </button>
              {userInfoOpen ? (
                <div className="mt-1 pl-5 text-xs text-muted-foreground">
                  <p>
                    {copy.partnersScreen.consentDate}:{" "}
                    {savedAt ? new Date(savedAt).toLocaleString(locale) : copy.partnersScreen.noChoice}
                  </p>
                  <p>
                    {copy.partnersScreen.consentVersion}: {CONSENT_VERSION}
                  </p>
                </div>
              ) : null}
            </>
          ) : null}
        </div>

        <div className="flex flex-col-reverse gap-2.5 border-t border-border p-4 sm:flex-row sm:flex-wrap sm:justify-end sm:p-5">
          {view === "notice" ? (
            <>
              <button type="button" onClick={() => setView("manage")} className={secondaryButton}>
                {copy.manageButton}
              </button>
              {actionButtons}
            </>
          ) : null}
          {view === "manage" ? (
            <>
              {actionButtons}
              <button type="button" onClick={() => saveChoices(draft)} className={primaryButton}>
                {copy.saveAndExit}
              </button>
            </>
          ) : null}
          {view === "partners" ? (
            <button type="button" onClick={() => saveChoices(draft)} className={primaryButton}>
              {copy.saveAndExit}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
