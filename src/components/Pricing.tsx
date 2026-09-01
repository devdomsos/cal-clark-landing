import { Check } from "lucide-react";
import { Section, Reveal, SectionHeader } from "./Section";
import { WaitlistForm } from "./WaitlistForm";

const FREE_POINTS = [
  "3 AI photo scans per week, no card required",
  "Unlimited recents and saved meals",
  "Edit grams on any entry, anytime",
];

const PLAN_POINTS = [
  "Unlimited AI photo scans",
  "One yearly plan — billed once through your app store",
  "Price shown at checkout before you pay",
];

export function Pricing() {
  return (
    <Section id="pricing" className="border-t border-border/60 bg-muted/30 py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <SectionHeader
            eyebrow="Pricing"
            title="Try it free. Upgrade when you are ready."
            description="Three AI photo scans per week on the house. After that, one straightforward yearly plan — no ads, no surprise charges. Exact price shown in the App Store or Play Store at checkout."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          <Reveal className="card bg-background p-7 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground">Free</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Enough to learn the workflow
            </p>
            <ul className="mt-7 flex flex-col gap-3.5">
              {FREE_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-fat" />
                  <span className="leading-relaxed text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative overflow-hidden rounded-2xl border-2 border-primary/30 bg-surface p-7 shadow-[0_20px_48px_-16px_rgba(26,86,219,0.2)] sm:p-8"
          >
            <span className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
              Full access
            </span>
            <h3 className="text-lg font-semibold text-foreground">Yearly</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              For everyday logging
            </p>
            <ul className="mt-7 flex flex-col gap-3.5">
              {PLAN_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="leading-relaxed text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mx-auto mt-12 max-w-md text-center">
          <p className="mb-4 text-sm font-medium text-foreground">
            Not live yet — join the waitlist for launch day pricing and download
            links.
          </p>
          <WaitlistForm id="waitlist-pricing" />
        </Reveal>
      </div>
    </Section>
  );
}
