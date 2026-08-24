function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.365 1.43c0 1.14-.44 2.11-1.32 2.93-.9.85-2.02 1.34-3.17 1.24-.12-1.17.44-2.34 1.28-3.14.86-.83 2.28-1.4 3.2-1.43.02.13.01.27.01.4zM20.6 17.14c-.5 1.15-.74 1.66-1.38 2.68-.9 1.42-2.16 3.2-3.73 3.21-1.4.02-1.76-.9-3.66-.89-1.9.01-2.3.9-3.7.89-1.57-.02-2.76-1.62-3.66-3.03-2.5-3.9-2.77-8.48-1.22-10.92.9-1.42 2.4-2.32 3.9-2.34 1.5-.02 2.34.99 3.63.99 1.28 0 2.03-.99 3.7-.95 1.28.05 2.6.5 3.5 1.53-3.08 1.9-2.58 6.35.61 7.83z"
      />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.6 2.5c-.4.3-.6.7-.6 1.3v16.4c0 .6.2 1 .6 1.3l9.3-9.5-9.3-9.5z"
      />
      <path
        fill="currentColor"
        opacity="0.8"
        d="M17 9.6l-3-1.7-2.9 3.1 2.9 3.1 3-1.7c.9-.5.9-1.9 0-2.5v-.3z"
      />
      <path
        fill="currentColor"
        opacity="0.55"
        d="M14 7.9L5.3 2.8c-.3-.15-.5-.15-.7-.08l8.5 8.7 2.9-3.15v-.05z"
      />
      <path
        fill="currentColor"
        opacity="0.55"
        d="M14 16.1L5.3 21.2c-.3.15-.5.15-.7.08l8.5-8.7 2.9 3.15v.05z"
      />
    </svg>
  );
}

function Badge({
  glyph,
  eyebrow,
  label,
  variant,
}: {
  glyph: React.ReactNode;
  eyebrow: string;
  label: string;
  variant: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <span
      className={`group relative inline-flex cursor-default items-center gap-2 rounded-xl border px-3 py-2 transition-colors ${
        isDark
          ? "border-white/15 bg-black text-white"
          : "border-border bg-surface text-foreground"
      }`}
      aria-disabled="true"
    >
      {glyph}
      <span className="flex flex-col leading-none">
        <span
          className={`text-[9px] uppercase tracking-wide ${
            isDark ? "text-white/60" : "text-muted-foreground"
          }`}
        >
          {eyebrow}
        </span>
        <span className="text-[13px] font-semibold">{label}</span>
      </span>
      <span className="ml-1 rounded-full bg-primary/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-primary">
        Soon
      </span>
    </span>
  );
}

export function StoreBadges({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <Badge
        glyph={<AppleGlyph />}
        eyebrow="Coming soon on the"
        label="App Store"
        variant={variant}
      />
      <Badge
        glyph={<PlayGlyph />}
        eyebrow="Coming soon on"
        label="Google Play"
        variant={variant}
      />
    </div>
  );
}
