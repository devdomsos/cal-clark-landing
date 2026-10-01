import type { ReactNode } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { LanguageSelect } from "@/components/LanguageSelect";
import { HtmlLang } from "@/components/HtmlLang";
import {
  LEGAL_NAV,
  OPERATOR,
  legalHref,
  type LegalLocale,
  type LegalPath,
} from "@/lib/legal";
import { homePath } from "@/lib/i18n/config";
import { LegalReferences, type LegalRefVariant } from "./LegalReferences";

export type { LegalLocale, LegalPath };

const HOME_LABEL: Record<LegalLocale, string> = {
  en: "Home",
  pl: "Strona główna",
  de: "Startseite",
  es: "Inicio",
};

type Props = {
  locale: LegalLocale;
  path: LegalPath;
  title: string;
  updated: string;
  children: ReactNode;
  references?: LegalRefVariant;
};

export function LegalShell({ locale, path, title, updated, children, references }: Props) {
  const homeHref = homePath(locale);
  return (
    <main className="mx-auto w-full min-w-0 max-w-3xl px-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] pb-16 pt-8 sm:py-16">
      <HtmlLang locale={locale} />
      <div className="flex items-center justify-between gap-4">
        <Link href={homeHref} className="focus-ring">
          <Logo />
        </Link>
        <LanguageSelect />
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        <Link href={homeHref} className="focus-ring hover:text-foreground">
          {HOME_LABEL[locale]}
        </Link>
      </p>
      <h1 className="mt-3 text-pretty text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{updated}</p>
      <div className="legal-prose mt-8 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
      {references ? <LegalReferences locale={locale} variant={references} /> : null}
      <nav
        aria-label="Legal"
        className="mt-16 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-6 text-sm text-muted-foreground"
      >
        {LEGAL_NAV.map((item) => (
          <Link
            key={item.path}
            href={legalHref(locale, item.path)}
            className={`focus-ring hover:text-foreground ${item.path === path ? "font-semibold text-foreground" : ""}`}
          >
            {item.label[locale]}
          </Link>
        ))}
        <a href="mailto:support@calclark.app" className="focus-ring hover:text-foreground">
          support@calclark.app
        </a>
      </nav>
    </main>
  );
}

export function LegalH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-4 text-base font-semibold text-foreground">{children}</h2>
  );
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5">{children}</ul>;
}

export function LegalMail() {
  return (
    <a className="text-primary underline underline-offset-2" href="mailto:support@calclark.app">
      support@calclark.app
    </a>
  );
}

const OPERATOR_LABELS: Record<LegalLocale, { address: string; vatId: string; email: string }> = {
  en: { address: "Address", vatId: "VAT ID", email: "Email" },
  pl: { address: "Adres", vatId: "Numer VAT UE", email: "E-mail" },
  de: { address: "Anschrift", vatId: "USt-IdNr.", email: "E-Mail" },
  es: { address: "Domicilio", vatId: "NIF-IVA", email: "Correo" },
};

/** Name, address, VAT ID and email of the operator. Empty fields are skipped. */
export function OperatorDetails({ locale }: { locale: LegalLocale }) {
  const l = OPERATOR_LABELS[locale];
  return (
    <p>
      <span className="font-semibold text-foreground">{OPERATOR.name}</span>
      {OPERATOR.address.length > 0 && (
        <>
          <br />
          {l.address}: {OPERATOR.address.join(", ")}
        </>
      )}
      {OPERATOR.vatId && (
        <>
          <br />
          {l.vatId}: {OPERATOR.vatId}
        </>
      )}
      <br />
      {l.email}: <LegalMail />
    </p>
  );
}
