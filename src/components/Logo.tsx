const PEAR_PATHS = [
  "M50 18 C57 18 60.5 24.5 61 31.5 C61.5 38 59.5 43 61.5 48.5 C65.5 58 73 65 73 75 C73 86.5 62.5 95 50 95 C37.5 95 27 86.5 27 75 C27 65 34.5 58 38.5 48.5 C40.5 43 38.5 38 39 31.5 C39.5 24.5 43 18 50 18 Z",
  "M46.2 20 C46.2 14.5 45.2 11 42.4 7.8 C45 3.8 49.8 5.6 51.8 9.8 C53.6 13.6 53.6 16.5 53.6 20 Z",
  "M53 12 C58 6 67 5 71 8 C68 15 60 18 53 14 Z",
] as const;

const RING_DOTS = [
  { cx: 50, cy: 10, r: 4.4 },
  { cx: 63.68, cy: 12.41, r: 3.26 },
  { cx: 75.71, cy: 19.36, r: 3.13 },
  { cx: 84.64, cy: 30, r: 2.94 },
  { cx: 89.39, cy: 43.05, r: 2.7 },
  { cx: 89.39, cy: 56.95, r: 2.45 },
  { cx: 84.64, cy: 70, r: 2.21 },
  { cx: 75.71, cy: 80.64, r: 2.02 },
  { cx: 63.68, cy: 87.59, r: 1.89 },
  { cx: 50, cy: 90, r: 1.85 },
  { cx: 36.32, cy: 87.59, r: 1.89 },
  { cx: 24.29, cy: 80.64, r: 2.02 },
  { cx: 15.36, cy: 70, r: 2.21 },
  { cx: 10.61, cy: 56.95, r: 2.45 },
  { cx: 10.61, cy: 43.05, r: 2.7 },
  { cx: 15.36, cy: 30, r: 2.94 },
  { cx: 24.29, cy: 19.36, r: 3.13 },
  { cx: 36.32, cy: 12.41, r: 3.26 },
] as const;

/** Same pear-in-ring lockup as the Cal Clark app icon. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g transform="translate(9.46 9.46) scale(0.81)">
        {RING_DOTS.map((dot) => (
          <circle key={`${dot.cx}-${dot.cy}`} cx={dot.cx} cy={dot.cy} r={dot.r} />
        ))}
        <g transform="translate(20.5 20.5) scale(0.59)">
          {PEAR_PATHS.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
      </g>
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 text-foreground ${className}`}>
      <LogoMark className="h-8 w-8 shrink-0" />
      <span className="text-lg font-semibold tracking-tight">Cal Clark</span>
    </span>
  );
}
