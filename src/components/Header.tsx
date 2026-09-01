"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { StoreBadges } from "./StoreBadges";

const NAV = [
  { href: "#why", label: "Why Cal Clark" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl backdrop-saturate-150">
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-[61px] z-40 bg-foreground/25 lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Link href="/" className="focus-ring" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring text-[0.8125rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#waitlist"
            className="btn-primary focus-ring px-4 py-2.5 text-[0.8125rem]"
          >
            Join waitlist
          </a>
          <StoreBadges />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="btn-primary focus-ring px-4 py-2.5 text-sm"
          >
            Join waitlist
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-foreground"
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
            className="absolute inset-x-0 top-full z-50 border-t border-border/70 bg-surface shadow-[var(--shadow-lg)] lg:hidden"
          >
            <nav
              className="mx-auto flex max-w-6xl flex-col gap-0.5 px-5 py-4"
              aria-label="Mobile"
            >
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 border-t border-border/70 pt-4">
                <StoreBadges />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
