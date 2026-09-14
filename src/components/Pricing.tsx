import { Check } from "lucide-react";
import { Reveal } from "./Section";
import type { Locale } from "@/lib/i18n/config";
import { homePath } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

export function Pricing({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <section id="pricing" className="scroll-mt-16 px-3 lg:px-4">
      <div className="relative overflow-hidden rounded-[32px] bg-surface lg:rounded-[40px]">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.14),transparent_65%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
          <Reveal>
            <p className="mb-4 text-sm font-medium text-foreground/60">{t.pricing.eyebrow}</p>
            <h2 className="display text-5xl text-foreground sm:text-7xl">{t.pricing.title}</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/70">{t.pricing.sub}</p>
            <a
              href={`${homePath(locale)}#join`}
              className="focus-ring mt-9 inline-flex h-14 items-center rounded-full bg-ink px-8 text-base font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {t.nav.waitlist}
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="divide-y divide-foreground/10">
              {t.pricing.points.map((point) => (
                <li key={point} className="flex items-center gap-4 py-5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-lg font-medium text-foreground sm:text-xl">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
