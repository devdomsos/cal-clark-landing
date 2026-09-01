import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Photo calorie tracking — honest estimates, saved meals, no ads.
            </p>
          </div>

          <nav
            aria-label="Legal"
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            <Link href="/privacy" className="focus-ring hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="focus-ring hover:text-foreground">
              Terms
            </Link>
            <a
              href="mailto:hello@calclark.app"
              className="focus-ring hover:text-foreground"
            >
              hello@calclark.app
            </a>
          </nav>
        </div>

        <p className="mt-10 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          © 2026 Cal Clark. Estimates, not medical advice. Not a substitute for
          a dietitian.
        </p>
      </div>
    </footer>
  );
}
