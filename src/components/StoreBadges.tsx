import Image from "next/image";

function Badge({
  href,
  src,
  alt,
  width,
  height,
}: {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <a
      href={href}
      className="group relative inline-flex shrink-0 items-center rounded-xl transition-transform hover:scale-[1.03]"
      aria-label={`${alt} — coming soon, join the waitlist instead`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized
        className="h-10 w-auto select-none"
        draggable={false}
      />
      <span className="absolute -top-2 -right-2 rounded-full bg-primary px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white shadow-sm">
        Soon
      </span>
    </a>
  );
}

export function StoreBadges({
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Badge
        href="#waitlist"
        src="/images/badges/app-store-badge.svg"
        alt="Download on the App Store"
        width={120}
        height={40}
      />
      <Badge
        href="#waitlist"
        src="/images/badges/google-play-badge.png"
        alt="Get it on Google Play"
        width={134}
        height={40}
      />
    </div>
  );
}
