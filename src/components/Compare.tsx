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
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Database trackers vs. Cal Clark
        </h2>
      </Reveal>

      <Reveal className="overflow-hidden rounded-2xl border border-border bg-surface">
        <div className="grid grid-cols-2 divide-x divide-border">
          <div className="px-5 py-4">
            <p className="text-sm font-semibold text-muted-foreground">
              Database trackers
            </p>
          </div>
          <div className="px-5 py-4">
            <p className="text-sm font-semibold text-primary">Cal Clark</p>
          </div>
        </div>
        {ROWS.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-2 divide-x divide-border ${
              i > 0 ? "border-t border-border" : "border-t border-border"
            }`}
          >
            <div className="flex items-start gap-2.5 px-5 py-4">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">{row.old}</p>
            </div>
            <div className="flex items-start gap-2.5 px-5 py-4">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-fat" />
              <p className="text-sm font-medium text-foreground">{row.new}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
