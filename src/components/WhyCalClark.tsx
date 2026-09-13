import { Zap, MapPin, ShieldCheck, RotateCcw } from "lucide-react";
import { Section, Reveal } from "./Section";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

const ICONS = [Zap, MapPin, ShieldCheck, RotateCcw];
const COLORS = [
  { color: "var(--color-primary)", bg: "bg-primary/10" },
  { color: "var(--color-fat)", bg: "bg-fat/10" },
  { color: "var(--color-carb)", bg: "bg-carb/10" },
  { color: "var(--color-protein)", bg: "bg-protein/10" },
];

export function WhyCalClark({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <Section id="why" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
          {t.why.eyebrow}
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {t.why.title}
        </h2>
        <p className="mt-4 text-muted-foreground">{t.why.sub}</p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.why.pillars.map((pillar, i) => {
          const Icon = ICONS[i]!;
          const tone = COLORS[i]!;
          return (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_2px_rgba(3,7,18,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-border/60 hover:shadow-[0_16px_32px_-12px_rgba(3,7,18,0.12)]">
                <div
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-inset ring-black/[0.03] ${tone.bg}`}
                >
                  <Icon
                    className="h-5 w-5"
                    style={{ color: tone.color }}
                    strokeWidth={2.25}
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
