import Link from "next/link";
import type { Metadata } from "next";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Terms — Cal Clark",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16">
      <Link href="/" className="focus-ring">
        <Logo />
      </Link>
      <h1 className="mt-8 text-3xl font-bold tracking-tight text-foreground">
        Terms
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Placeholder — full terms ship with the App Store / Play listing.
      </p>

      <div className="mt-8 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          Cal Clark offers 3 free AI photo scans, then a paid yearly plan
          billed and managed through Apple or Google. Pricing is shown in the
          app before you pay.
        </p>
        <p>
          Subscriptions renew automatically unless cancelled in your Apple ID
          or Google Play account settings. Deleting the app does not cancel
          an active subscription.
        </p>
        <p>
          Calorie and macro estimates are drafts based on a photo or
          description. They are not medical advice and are not a substitute
          for guidance from a dietitian or doctor.
        </p>
        <p>
          This page is a stub for the waitlist site. The full terms of
          service will be published here before the app leaves TestFlight /
          internal testing.
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
