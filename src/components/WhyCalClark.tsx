import { Zap, MapPin, ShieldCheck, RotateCcw } from "lucide-react";
import { Section, Reveal, TextLine, TextReveal } from "./Section";

const PILLARS = [
  {
    icon: Zap,
    title: "Fast",
    color: "var(--color-primary)",
    bg: "bg-primary/10",
    body:
      "A photo, not a database search. No hunting through forty near-duplicate results just to find \"chicken cutlet.\"",
  },
  {
    icon: MapPin,
    title: "Local",
    color: "var(--color-fat)",
    bg: "bg-fat/10",
    body:
      "Understands real plates — pierogi, schnitzel, everyday supermarket food. Not only chicken breast and avocado toast.",
  },
  {
    icon: ShieldCheck,
    title: "Honest",
    color: "var(--color-carb)",
    bg: "bg-carb/10",
    body:
      "It's a draft, not a lab result. No ads, no fake urgency, no weekly price dressed up to look small.",
  },
  {
    icon: RotateCcw,
    title: "Remembers",
    color: "var(--color-protein)",
    bg: "bg-protein/10",
    body:
      "Correct a meal once. Next time it's one tap. Tracking gets shorter over time — not longer.",
  },
];

export function WhyCalClark() {
  return (
    <Section id="why" className="mx-auto max-w-6xl px-5 py-20">
      <TextReveal className="mx-auto mb-12 max-w-2xl text-center">
        <TextLine>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            Why Cal Clark
          </p>
        </TextLine>
        <TextLine>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            This is how people actually hit their budget
          </h2>
        </TextLine>
        <TextLine>
          <p className="mt-4 text-muted-foreground">
            Not another 40-nutrient database. A log that stays honest and gets
            faster the more you use it.
          </p>
        </TextLine>
      </TextReveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_2px_rgba(3,7,18,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-border/60 hover:shadow-[0_16px_32px_-12px_rgba(3,7,18,0.12)]">
              <div
                className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-inset ring-black/[0.03] ${pillar.bg}`}
              >
                <pillar.icon
                  className="h-5 w-5"
                  style={{ color: pillar.color }}
                  strokeWidth={2.25}
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
