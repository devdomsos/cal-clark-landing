import type { ReactNode } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { LanguageSelect } from "@/components/LanguageSelect";
import { HtmlLang } from "@/components/HtmlLang";
import {
  LEGAL_NAV,
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
    <main className="mx-auto max-w-3xl px-5 py-16">
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
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">{title}</h1>
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
