import Image from "next/image";
import { Drumstick, Flame, Wheat } from "lucide-react";
import { Reveal } from "./Section";
import { AvocadoIcon, COLORS } from "./phone/AppScreens";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

export function RealLife({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <section className="px-3 lg:px-4">
      <div className="relative isolate flex min-h-[640px] items-end overflow-hidden rounded-[32px] lg:min-h-[760px] lg:rounded-[40px]">
        <Image src="/images/life/friends-dinner.jpg" alt={t.life.alt} fill sizes="100vw" className="-z-10 object-cover object-[60%_50%]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/45 to-black/0" />
        <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-black/60 via-black/10 to-transparent lg:block" />

        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-10 pt-40 lg:grid-cols-2 lg:items-end lg:px-8 lg:pb-16">
          <Reveal>
            <h2 className="display max-w-xl text-5xl text-white sm:text-7xl">{t.life.title}</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80">{t.life.sub}</p>
          </Reveal>

          <Reveal delay={0.15} className="lg:justify-self-end">
            <div className="flex w-full max-w-[380px] items-center gap-3.5 rounded-[22px] bg-white/95 p-2.5 pr-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur">
              <div className="relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-[14px]">
                <Image src="/images/food/pasta.jpg" alt="" fill sizes="80px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-2.5 flex items-center justify-between gap-2">
                  <span className="truncate text-[15px] font-semibold text-[#030712]">{t.life.cardName}</span>
                  <span className="text-[13px] text-[#6b7280]">20:15</span>
                </div>
                <div className="flex items-center gap-3.5 text-[13px] text-[#030712]">
                  <span className="flex items-center gap-1"><Flame size={15} strokeWidth={2.25} /> <b className="font-medium">780</b></span>
                  <span className="flex items-center gap-1"><Drumstick size={15} color={COLORS.protein} strokeWidth={2.25} /> 32</span>
                  <span className="flex items-center gap-1"><Wheat size={15} color={COLORS.carb} strokeWidth={2.25} /> 96</span>
                  <span className="flex items-center gap-1"><AvocadoIcon size={15} strokeWidth={2.25} /> 28</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
