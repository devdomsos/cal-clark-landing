import { Camera, Sparkles, CheckCheck, RotateCcw } from "lucide-react";
import { Section, Reveal } from "./Section";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { legalHref } from "@/lib/legal";

const ICONS = [Camera, Sparkles, CheckCheck, RotateCcw];

export function HowItWorks({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <Section id="how-it-works" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            {t.how.eyebrow}
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {t.how.title}
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.how.steps.map((step, i) => {
            const Icon = ICONS[i]!;
            return (
              <Reveal key={step.title} delay={i * 0.1} className="relative">
                <div className="relative rounded-2xl border border-border bg-background p-6 shadow-[0_1px_2px_rgba(3,7,18,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_rgba(3,7,18,0.12)]">
                  <span className="absolute -top-3 -left-1 text-6xl font-black text-muted/70 select-none">
                    {i + 1}
                  </span>
                  <div className="relative mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={2.25} />
                  </div>
                  <h3 className="relative text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
                {i < t.how.steps.length - 1 && (
                  <span
                    className="absolute right-[-14px] top-1/2 hidden h-px w-6 -translate-y-1/2 bg-border lg:block"
                    aria-hidden="true"
                  />
                )}
              </Reveal>
            );
          })}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          {t.how.footnote}{" "}
          <a
            href={legalHref(locale, "data-sources")}
            className="text-primary underline underline-offset-2"
          >
            {t.how.sourcesLink}
          </a>
        </p>
      </div>
    </Section>
  );
}
