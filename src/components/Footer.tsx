import Link from "next/link";
import { Logo } from "./Logo";
import { LanguageSelect } from "./LanguageSelect";
import { LEGAL_NAV, legalHref } from "@/lib/legal";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

export function Footer({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div>
            <Logo />
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4">
            <LanguageSelect />
            <nav
              aria-label={t.footer.legal}
              className="flex max-w-xl flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground"
            >
              {LEGAL_NAV.map((item) => (
                <Link
                  key={item.path}
                  href={legalHref(locale, item.path)}
                  className="focus-ring hover:text-foreground"
                >
                  {item.label[locale]}
                </Link>
              ))}
              <a
                href="mailto:support@calclark.app"
                className="focus-ring hover:text-foreground"
              >
                support@calclark.app
              </a>
            </nav>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
