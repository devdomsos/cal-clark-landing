import { Zap, MapPin, ShieldCheck, RotateCcw } from "lucide-react";
import { Section, Reveal } from "./Section";

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
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
          Why Cal Clark
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          This is how people actually hit their budget
        </h2>
        <p className="mt-4 text-muted-foreground">
          Not another 40-nutrient database. A log that stays honest and gets
          faster the more you use it.
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg hover:shadow-black/5">
              <div
                className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${pillar.bg}`}
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
