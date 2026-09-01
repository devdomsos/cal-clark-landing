import { Zap, MapPin, ShieldCheck, RotateCcw } from "lucide-react";
import { Section, Reveal, SectionHeader } from "./Section";

const PILLARS = [
  {
    icon: Zap,
    title: "Fast",
    color: "var(--color-primary)",
    bg: "bg-primary-subtle",
    body:
      "Point at the plate. No scrolling through forty near-duplicates to find the right chicken cutlet.",
  },
  {
    icon: MapPin,
    title: "Local",
    color: "var(--color-fat)",
    bg: "bg-fat/10",
    body:
      "Pierogi, schnitzel, weeknight leftovers — not just US meal-prep templates.",
  },
  {
    icon: ShieldCheck,
    title: "Honest",
    color: "var(--color-carb)",
    bg: "bg-carb/10",
    body:
      "Every number is a draft you confirm. No fake precision, no penny-a-day pricing tricks.",
  },
  {
    icon: RotateCcw,
    title: "Remembers",
    color: "var(--color-protein)",
    bg: "bg-protein/10",
    body:
      "Fix a meal once. Next time it is one tap — logging gets shorter, not longer.",
  },
];

export function WhyCalClark() {
  return (
    <Section id="why" className="mx-auto max-w-6xl px-5 py-24 lg:py-28">
      <Reveal>
        <SectionHeader
          eyebrow="Why Cal Clark"
          title="Built for how people actually eat"
          description="Calories and macros only. No micronutrient soup, no social feed, no recipe rabbit holes."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {PILLARS.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 0.07}>
            <div className="card card-interactive h-full p-6 lg:p-7">
              <div
                className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-inset ring-black/[0.04] ${pillar.bg}`}
              >
                <pillar.icon
                  className="h-5 w-5"
                  style={{ color: pillar.color }}
                  strokeWidth={2.25}
                />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
