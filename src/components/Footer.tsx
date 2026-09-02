import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <Logo />
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Snap once. Correct once. Cal Clark remembers.
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

        <p className="mt-8 text-xs text-muted-foreground">
          © 2026 Cal Clark. Estimates, not medical advice. Not a substitute
          for a dietitian.
        </p>
      </div>
    </footer>
  );
}
