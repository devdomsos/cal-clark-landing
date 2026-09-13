"use client";

import { PhoneMock } from "./PhoneMock";
import { WaitlistForm } from "./WaitlistForm";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

export function Hero({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-primary-light/40 via-primary-light/10 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-20">
        <div>
          <p className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            {t.hero.eyebrow}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
            {t.hero.h1Line1}
            <br />
            {t.hero.h1Line2}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">{t.hero.sub}</p>

          <div className="mt-8 max-w-md">
            <WaitlistForm id="waitlist" locale={locale} />
            <p className="mt-3 text-xs text-muted-foreground">{t.hero.micro}</p>
          </div>
        </div>

        <PhoneMock locale={locale} />
      </div>
    </div>
  );
}
