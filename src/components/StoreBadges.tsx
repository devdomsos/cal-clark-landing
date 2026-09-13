import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

function Badge({
  href,
  src,
  alt,
  width,
  height,
  soon,
  coming,
  priority = false,
}: {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  soon: string;
  coming: string;
  priority?: boolean;
}) {
  return (
    <a
      href={href}
      className="group relative inline-flex shrink-0 items-center rounded-xl transition-transform hover:scale-[1.03]"
      aria-label={`${alt} - ${coming}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className="h-10 w-auto select-none"
        draggable={false}
      />
      <span className="absolute -top-2 -right-2 rounded-full bg-primary px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white shadow-sm">
        {soon}
      </span>
    </a>
  );
}

export function StoreBadges({
  className = "",
  locale = "en",
}: {
  className?: string;
  locale?: Locale;
}) {
  const t = getMessages(locale);
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Badge
        href="#waitlist"
        src="/images/badges/app-store-badge.svg"
        alt={t.store.appStore}
        width={120}
        height={40}
        soon={t.store.soon}
        coming={t.store.coming}
      />
      <Badge
        href="#waitlist"
        src="/images/badges/google-play-badge.png"
        alt={t.store.play}
        width={134}
        height={40}
        soon={t.store.soon}
        coming={t.store.coming}
        priority
      />
    </div>
  );
}
