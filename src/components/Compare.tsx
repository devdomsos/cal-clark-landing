import { X, Check } from "lucide-react";
import { Section, Reveal, SectionHeader } from "./Section";

const ROWS = [
  {
    old: 'Search "chicken cutlet", pick among duplicates',
    new: "Photo of the plate",
  },
  { old: "Ads between every save", new: "No ads, on any plan" },
  { old: "Retype the same breakfast daily", new: "Saved meals, one tap" },
  {
    old: "Precise-looking number, opaque guesswork",
    new: "A draft you finish and own",
  },
];

export function Compare() {
  return (
    <Section className="mx-auto max-w-5xl px-5 py-24 lg:py-28">
      <Reveal>
        <SectionHeader
          eyebrow="The difference"
          title="Database trackers vs. Cal Clark"
          description="Less typing. More honest numbers. Logging that compounds instead of draining you."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <Reveal className="card bg-muted/40 p-7 sm:p-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Database trackers
          </p>
          <ul className="space-y-4">
            {ROWS.map((row, i) => (
              <li key={i} className="flex items-start gap-3">
                <X
                  className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60"
                  strokeWidth={2}
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {row.old}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative overflow-hidden rounded-2xl border border-primary/20 bg-surface p-7 shadow-[0_20px_48px_-16px_rgba(26,86,219,0.22)] sm:p-8"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary via-fat to-carb"
            aria-hidden="true"
          />
          <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-primary">
            Cal Clark
          </p>
          <ul className="space-y-4">
            {ROWS.map((row, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-fat/15">
                  <Check className="h-3 w-3 text-fat" strokeWidth={3} />
                </span>
                <p className="text-sm font-medium leading-relaxed text-foreground">
                  {row.new}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
