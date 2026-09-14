import Image from "next/image";
import { Reveal } from "./Section";
import { WaitlistForm } from "./WaitlistForm";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

export function FinalCta({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <section id="join" className="scroll-mt-16 px-3 pb-3 lg:px-4 lg:pb-4">
      <div className="relative isolate overflow-hidden rounded-[32px] bg-ink lg:rounded-[40px]">
        <Image src="/images/life/table-spread.jpg" alt={t.final.alt} fill sizes="100vw" className="-z-10 object-cover opacity-70" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_50%,rgba(11,11,12,0.85),rgba(11,11,12,0.45))]" />
        <div className="mx-auto flex min-h-[620px] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center lg:min-h-[720px]">
          <Reveal>
            <h2 className="display text-5xl text-white sm:text-7xl lg:text-8xl">{t.final.title}</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75">{t.final.sub}</p>
            <div className="mx-auto mt-10 max-w-lg text-left">
              <WaitlistForm id="waitlist-final" locale={locale} tone="dark" />
              <p className="mt-3 text-center text-sm text-white/60">{t.hero.micro}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
