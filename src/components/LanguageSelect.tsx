"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  LOCALES,
  LOCALE_META,
  localeFromPath,
  localePath,
  type Locale,
} from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { FlagIcon } from "./FlagIcon";

export function LanguageSelect({ className = "" }: { className?: string }) {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const t = getMessages(locale);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={`relative ${className}`} ref={rootRef}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.lang.ariaSelect}
        onClick={() => setOpen((v) => !v)}
        className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
      >
        <FlagIcon locale={locale} />
        <span className="uppercase tracking-wide">{locale}</span>
        <ChevronDown
          size={14}
          className={`shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-[60] mt-2 min-w-[12.5rem] overflow-hidden rounded-xl border border-border bg-surface py-1 shadow-[0_16px_32px_-12px_rgba(3,7,18,0.18)]"
        >
          {LOCALES.map((code: Locale) => {
            const active = code === locale;
            return (
              <li key={code} role="option" aria-selected={active}>
                <Link
                  href={localePath(code, pathname)}
                  hrefLang={LOCALE_META[code].htmlLang}
                  onClick={() => setOpen(false)}
                  className={`flex w-full items-center gap-2.5 px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted ${
                    active ? "text-primary" : "text-foreground"
                  }`}
                >
                  <FlagIcon locale={code} />
                  <span>{LOCALE_META[code].native}</span>
                  <span className="ml-auto text-[11px] uppercase tracking-wide text-muted-foreground">
                    {code}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
