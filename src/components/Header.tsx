import Link from "next/link";
import { Logo } from "./Logo";
import { StoreBadges } from "./StoreBadges";

const NAV = [
  { href: "#why", label: "Why Cal Clark" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="focus-ring">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <StoreBadges variant="dark" />
        </div>

        <a
          href="#waitlist"
          className="focus-ring inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98] md:hidden"
        >
          Join waitlist
        </a>
      </div>
    </header>
  );
}
