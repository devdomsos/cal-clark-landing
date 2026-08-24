import { Check } from "lucide-react";
import { Section, Reveal } from "./Section";
import { WaitlistForm } from "./WaitlistForm";

const FREE_POINTS = [
  "3 AI photo scans, no card required",
  "Recents and usual meals, unlimited",
  "Edit grams on any log, anytime",
];

const PLAN_POINTS = [
  "Unlimited AI photo scans",
  "One clear yearly plan — billed once a year",
  "Never disguised as pennies a day",
];

export function Pricing() {
  return (
    <Section id="pricing" className="bg-surface py-20">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            Pricing
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            3 free scans. Then one honest price.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Price is shown in the app at checkout via Apple or Google. Cancel
            anytime in your store settings.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-background p-7">
            <h3 className="text-lg font-semibold text-foreground">Free</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Try it before you commit
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {FREE_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-fat" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative rounded-2xl border-2 border-primary bg-background p-7"
          >
            <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
              Best value
            </span>
            <h3 className="text-lg font-semibold text-foreground">Yearly</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              For everyday logging
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {PLAN_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-md text-center">
          <p className="mb-3 text-sm font-medium text-foreground">
            Not live yet — get the price and the download link the day it ships.
          </p>
          <WaitlistForm id="waitlist-pricing" />
        </Reveal>
      </div>
    </Section>
  );
}
