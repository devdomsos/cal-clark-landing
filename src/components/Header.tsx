"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Logo, LogoMark } from "./Logo";
import { LanguageSelect } from "./LanguageSelect";
import { homePath, type Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = getMessages(locale);
  const home = homePath(locale);
  const nav = [
    { href: `${home}#how-it-works`, label: t.nav.how },
    { href: `${home}#goals`, label: t.nav.goals },
    { href: `${home}#pricing`, label: t.nav.pricing },
    { href: `${home}#faq`, label: t.nav.faq },
  ];

  const sentinel = useRef<HTMLDivElement>(null);

  // Watch a marker at the top of the page instead of reading scrollY on every scroll event.
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry!.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div ref={sentinel} className="pointer-events-none absolute left-0 top-0 h-2 w-px" aria-hidden="true" />
      <header
        className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          scrolled || open
            ? "bg-background/95 shadow-[0_1px_0_rgba(11,11,12,0.08)] lg:bg-background/85 lg:backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:h-[72px] lg:px-8">
          <Link
            href={home}
            className="focus-ring shrink-0"
            onClick={() => setOpen(false)}
            aria-label="Cal Clark"
          >
            <span className="lg:hidden">
              <LogoMark className="h-9 w-9 text-foreground" />
            </span>
            <span className="hidden lg:block">
              <Logo />
            </span>
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label={t.nav.primary}
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring text-[15px] font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSelect />
            <a
              href={`${home}#join`}
              className="focus-ring inline-flex h-10 items-center gap-1.5 rounded-full bg-ink px-5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              {t.nav.waitlist}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSelect />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
              className="focus-ring relative inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground"
            >
              <span
                className={`absolute h-[2px] w-5 rounded-full bg-current transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[4px]"}`}
              />
              <span
                className={`absolute h-[2px] w-5 rounded-full bg-current transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[4px]"}`}
              />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-16 z-[45] flex flex-col bg-background px-5 pb-8 pt-6 lg:hidden"
          >
            <nav className="flex flex-col" aria-label={t.nav.mobile}>
              {nav.map((item, i) => (
                <m.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.04 + i * 0.05,
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="focus-ring flex items-center justify-between border-b border-border py-5 text-[28px] font-semibold tracking-[-0.03em] text-foreground"
                >
                  {item.label}
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </m.a>
              ))}
            </nav>
            <m.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="mt-auto"
            >
              <a
                href={`${home}#join`}
                onClick={() => setOpen(false)}
                className="focus-ring flex h-14 w-full items-center justify-center rounded-full bg-ink text-base font-semibold text-white active:scale-[0.99]"
              >
                {t.nav.waitlist}
              </a>
              <p className="mt-3 text-center text-sm text-muted-foreground">
                {t.nav.soon}
              </p>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
