import Link from "next/link";
import { Logo } from "./Logo";
import { LanguageSelect } from "./LanguageSelect";
import { CookieSettingsButton } from "./cookie-consent/CookieSettingsButton";
import { LEGAL_NAV, legalHref } from "@/lib/legal";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

export function Footer({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <footer className="mt-auto">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
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
            <CookieSettingsButton
              label={t.footer.cookieSettings}
              className="focus-ring text-left hover:text-foreground"
            />
            <a
              href="mailto:support@calclark.app"
              className="focus-ring hover:text-foreground"
            >
              support@calclark.app
            </a>
          </nav>
        </div>

        <div className="mt-14 flex justify-center lg:mt-20">
          <Logo className="text-[clamp(56px,10vw,136px)]" />
        </div>

        <p className="mt-10 border-t border-foreground/10 pt-6 text-xs text-muted-foreground">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
