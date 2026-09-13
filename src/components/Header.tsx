"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { StoreBadges } from "./StoreBadges";
import { LanguageSelect } from "./LanguageSelect";
import { homePath, type Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { legalHref } from "@/lib/legal";

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const t = getMessages(locale);
  const home = homePath(locale);
  const nav = [
    { href: `${home}#why`, label: t.nav.why },
    { href: `${home}#how-it-works`, label: t.nav.how },
    { href: legalHref(locale, "data-sources"), label: t.nav.sources },
    { href: `${home}#pricing`, label: t.nav.pricing },
    { href: `${home}#faq`, label: t.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-[57px] z-40 bg-foreground/20 lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href={home} className="focus-ring" onClick={() => setOpen(false)} aria-label="Cal Clark">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label={t.nav.primary}>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSelect />
          <StoreBadges locale={locale} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSelect />
          <a
            href={`${home}#waitlist`}
            onClick={() => setOpen(false)}
            className="focus-ring inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            {t.nav.waitlist}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-full z-50 border-t border-border/70 bg-background shadow-lg lg:hidden"
          >
            <nav
              className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4"
              aria-label={t.nav.mobile}
            >
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-lg px-2 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-surface"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 border-t border-border/70 pt-4">
                <StoreBadges locale={locale} />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
