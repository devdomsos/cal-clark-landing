import type { Locale } from "@/lib/i18n/config";

const FLAG_CLASS = "h-[18px] w-6 shrink-0 rounded-[3px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12)]";

export function FlagIcon({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const cls = `${FLAG_CLASS} ${className}`;
  switch (locale) {
    case "en":
      return (
        <svg viewBox="0 0 24 18" className={cls} aria-hidden>
          <rect width="24" height="18" fill="#012169" />
          <path d="M0 0 L24 18 M24 0 L0 18" stroke="#FFFFFF" strokeWidth="3.6" />
          <path d="M0 0 L24 18 M24 0 L0 18" stroke="#C8102E" strokeWidth="2.1" />
          <path d="M12 0 V18 M0 9 H24" stroke="#FFFFFF" strokeWidth="6" />
          <path d="M12 0 V18 M0 9 H24" stroke="#C8102E" strokeWidth="3.6" />
        </svg>
      );
    case "pl":
      return (
        <svg viewBox="0 0 24 18" className={cls} aria-hidden>
          <rect width="24" height="9" fill="#FFFFFF" />
          <rect y="9" width="24" height="9" fill="#DC143C" />
        </svg>
      );
    case "de":
      return (
        <svg viewBox="0 0 24 18" className={cls} aria-hidden>
          <rect width="24" height="6" fill="#000000" />
          <rect y="6" width="24" height="6" fill="#DD0000" />
          <rect y="12" width="24" height="6" fill="#FFCE00" />
        </svg>
      );
    case "es":
      return (
        <svg viewBox="0 0 24 18" className={cls} aria-hidden>
          <rect width="24" height="18" fill="#AA151B" />
          <rect y="4.5" width="24" height="9" fill="#F1BF00" />
        </svg>
      );
  }
}
