import { Section, Reveal } from "./Section";
import { WaitlistForm } from "./WaitlistForm";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

export function FinalCta({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <Section className="relative overflow-hidden bg-foreground py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.25),transparent_40%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t.final.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">{t.final.sub}</p>

          <div className="mx-auto mt-8 max-w-md">
            <WaitlistForm id="waitlist-final" locale={locale} />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
