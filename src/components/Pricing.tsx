import { Check } from "lucide-react";
import { Section, Reveal } from "./Section";
import { WaitlistForm } from "./WaitlistForm";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

export function Pricing({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <Section id="pricing" className="bg-surface py-20">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            {t.pricing.eyebrow}
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.pricing.sub}</p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-background p-7 shadow-[0_1px_2px_rgba(3,7,18,0.04)]">
            <h3 className="text-lg font-semibold text-foreground">{t.pricing.freeTitle}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.pricing.freeSub}</p>
            <ul className="mt-6 flex flex-col gap-3">
              {t.pricing.freePoints.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-fat" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative rounded-2xl border-2 border-primary bg-background p-7 shadow-[0_20px_40px_-16px_rgba(59,130,246,0.3)]"
          >
            <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
              {t.pricing.planBadge}
            </span>
            <h3 className="text-lg font-semibold text-foreground">{t.pricing.planTitle}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.pricing.planSub}</p>
            <ul className="mt-6 flex flex-col gap-3">
              {t.pricing.planPoints.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-md text-center">
          <p className="mb-3 text-sm font-medium text-foreground">{t.pricing.waitlistLead}</p>
          <WaitlistForm id="waitlist-pricing" locale={locale} />
        </Reveal>
      </div>
    </Section>
  );
}
