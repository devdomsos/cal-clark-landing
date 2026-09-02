export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="11" fill="#3B82F6" />
      <circle cx="20" cy="20" r="10" fill="white" fillOpacity="0.16" />
      <circle cx="20" cy="20" r="6.5" fill="white" />
      <path
        d="M20 20 L20 10.5 A9.5 9.5 0 0 1 28.7 16"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <circle cx="20" cy="20" r="2.4" fill="#3B82F6" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className="h-8 w-8 shrink-0" />
      <span className="text-lg font-semibold tracking-tight text-foreground">
        Cal Clark
      </span>
    </span>
  );
}
