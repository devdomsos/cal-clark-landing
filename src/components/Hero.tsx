import { HeroDemo } from "./phone/HeroDemo";
import { WaitlistForm } from "./WaitlistForm";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

export function Hero({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 right-[-20%] -z-10 h-[780px] w-[780px] rounded-full bg-[radial-gradient(circle,rgba(191,219,254,0.7),rgba(245,243,238,0)_65%)] lg:right-[-5%]"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-8 lg:pb-28 lg:pt-14">
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-foreground/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fat opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fat" />
            </span>
            {t.hero.eyebrow}
          </p>
          <h1 className="display text-[2.6rem] text-foreground sm:text-6xl lg:text-[4.6rem]">
            <span className="block text-balance">{t.hero.h1Line1}</span>{" "}
            <span className="block text-balance text-foreground/40">{t.hero.h1Line2}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70 sm:text-xl">{t.hero.sub}</p>

          <div className="mt-9 max-w-lg">
            <WaitlistForm id="waitlist" locale={locale} />
            <p className="mt-3 pl-1 text-sm text-muted-foreground">{t.hero.micro}</p>
          </div>
        </div>

        <HeroDemo locale={locale} />
      </div>
    </section>
  );
}
