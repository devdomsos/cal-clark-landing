import { Camera, Sparkles, CheckCheck, RotateCcw } from "lucide-react";
import { Section, Reveal, SectionHeader } from "./Section";

const STEPS = [
  {
    icon: Camera,
    title: "Snap",
    body: "Plate, takeaway, leftovers. If it is in frame, that is enough.",
  },
  {
    icon: Sparkles,
    title: "We draft",
    body:
      "Calories plus protein, carbs, and fat. If portion or oil is uncertain, we say so.",
  },
  {
    icon: CheckCheck,
    title: "You confirm",
    body:
      "Looks right — log it. Off by a bit? One tap: bigger portion, extra sauce, or grams.",
  },
  {
    icon: RotateCcw,
    title: "It remembers",
    body: "Same breakfast tomorrow? One tap. Your number, not a new guess.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="border-y border-border/60 bg-surface py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeader
            eyebrow="How it works"
            title="Photo. Draft. Confirm."
            description="Four steps. Most meals take less time on the second log than the first."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="relative">
              <div className="card card-interactive relative h-full bg-background p-6 lg:p-7">
                <span className="absolute -top-2 right-4 text-5xl font-extrabold leading-none text-muted/80 select-none">
                  {i + 1}
                </span>
                <div className="relative mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-subtle">
                  <step.icon
                    className="h-5 w-5 text-primary"
                    strokeWidth={2.25}
                  />
                </div>
                <h3 className="relative text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
              {i < STEPS.length - 1 && (
                <span
                  className="absolute right-[-10px] top-1/2 hidden h-px w-5 -translate-y-1/2 bg-border lg:block"
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
