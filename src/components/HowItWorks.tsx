import { Camera, Sparkles, CheckCheck, RotateCcw } from "lucide-react";
import { Section, Reveal } from "./Section";

const STEPS = [
  {
    icon: Camera,
    title: "Snap",
    body: "Plate, leftovers, lunch out. In frame is enough.",
  },
  {
    icon: Sparkles,
    title: "We draft",
    body:
      "Calories plus protein, carbs, fat. If we guessed oil or size, we say so.",
  },
  {
    icon: CheckCheck,
    title: "You finish",
    body:
      "Looks right — or one tap: bigger, fried, sauce. Grams if you want.",
  },
  {
    icon: RotateCcw,
    title: "It remembers",
    body: "Same breakfast tomorrow: one tap. No second guess.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            How it works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Photo. Draft. Confirm.
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="relative">
              <div className="relative rounded-2xl border border-border bg-background p-6">
                <span className="absolute -top-3 -left-1 text-6xl font-black text-muted/70 select-none">
                  {i + 1}
                </span>
                <div className="relative mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <step.icon className="h-5 w-5 text-primary" strokeWidth={2.25} />
                </div>
                <h3 className="relative text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
              {i < STEPS.length - 1 && (
                <span
                  className="absolute right-[-14px] top-1/2 hidden h-px w-6 -translate-y-1/2 bg-border lg:block"
                  aria-hidden="true"
                />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
