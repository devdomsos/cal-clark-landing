import Link from "next/link";
import type { Metadata } from "next";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Privacy — Cal Clark",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16">
      <Link href="/" className="focus-ring">
        <Logo />
      </Link>
      <h1 className="mt-8 text-3xl font-bold tracking-tight text-foreground">
        Privacy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Placeholder — full policy ships with the App Store / Play listing.
      </p>

      <div className="mt-8 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          Cal Clark logs the meals you photograph or type, and the goal you
          set on onboarding. That data stays tied to your account and is not
          sold to advertisers or data brokers.
        </p>
        <p>
          Meal photos are used to draft your log and are not shared publicly.
          We do not run ads inside the app, so there is no ad-network
          tracking on your food data.
        </p>
        <p>
          This page is a stub for the waitlist site. The full, legally
          reviewed privacy policy will be published here before the app
          leaves TestFlight / internal testing.
        </p>
        <p>
          Questions before then:{" "}
          <a
            href="mailto:hello@calclark.app"
            className="focus-ring text-primary underline underline-offset-2"
          >
            hello@calclark.app
          </a>
        </p>
      </div>
    </main>
  );
}
