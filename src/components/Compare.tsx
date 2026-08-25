import { X, Check } from "lucide-react";
import { Section, Reveal } from "./Section";

const ROWS = [
  {
    old: 'Search "chicken cutlet", pick among duplicates',
    new: "Photo of the plate",
  },
  { old: "Ads after every save", new: "No ads" },
  { old: "Same typing every morning", new: "Usual breakfast, one tap" },
  {
    old: "Exact-looking number, no idea what was guessed",
    new: "A draft you can actually finish",
  },
];

export function Compare() {
  return (
    <Section className="mx-auto max-w-5xl px-5 py-20">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
          The difference
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Database trackers vs. Cal Clark
        </h2>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        <Reveal className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-7">
          <p className="mb-5 text-sm font-semibold text-muted-foreground">
            Database trackers
          </p>
          <ul className="space-y-4">
            {ROWS.map((row, i) => (
              <li key={i} className="flex items-start gap-3">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/70" />
                <p className="text-sm text-muted-foreground">{row.old}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative rounded-2xl border border-primary/25 bg-background p-6 shadow-[0_20px_40px_-16px_rgba(59,130,246,0.25)] sm:p-7"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-primary via-fat to-carb"
            aria-hidden="true"
          />
          <p className="mb-5 text-sm font-semibold text-primary">Cal Clark</p>
          <ul className="space-y-4">
            {ROWS.map((row, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-fat/15">
                  <Check className="h-3 w-3 text-fat" strokeWidth={3} />
                </span>
                <p className="text-sm font-medium text-foreground">{row.new}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
