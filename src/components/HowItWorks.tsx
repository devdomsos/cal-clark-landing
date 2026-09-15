"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m, useInView } from "framer-motion";
import { DESKTOP_QUERY, useMediaQuery } from "@/lib/useMediaQuery";
import { Bookmark, PenLine, ScanBarcode } from "lucide-react";
import { Reveal } from "./Section";
import { CameraScreen, DiaryScreen, MealScreen, PhoneFrame } from "./phone/AppScreens";
import type { Locale } from "@/lib/i18n/config";
import { getMessages, type Messages } from "@/lib/i18n/messages";
import { legalHref } from "@/lib/legal";

function StepScreen({ step, locale, t, animate }: { step: number; locale: Locale; t: Messages; animate: boolean }) {
  if (step === 0) return <CameraScreen t={t} />;
  if (step === 1) return <MealScreen locale={locale} t={t} animate={animate} />;
  return <DiaryScreen locale={locale} t={t} row="done" animate={animate} />;
}

function Step({ index, title, body, onActive, locale, t, isDesktop }: { index: number; title: string; body: string; onActive: (i: number) => void; locale: Locale; t: Messages; isDesktop: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.6 });
  const mobileRef = useRef<HTMLDivElement>(null);
  const mobileInView = useInView(mobileRef, { amount: 0.5, once: true });
  useEffect(() => {
    if (inView && isDesktop) onActive(index);
  }, [inView, index, onActive, isDesktop]);

  return (
    <div ref={ref} className="flex flex-col justify-center py-10 lg:min-h-[78vh] lg:py-0">
      <span className="mb-6 font-mono text-sm tracking-widest text-white/40">0{index + 1}</span>
      <h3 className="display max-w-lg text-4xl text-white sm:text-5xl lg:text-6xl">{title}</h3>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-white/60">{body}</p>
      <div ref={mobileRef} className="mt-10 flex w-full justify-center lg:hidden">
        <PhoneFrame width={{ base: 280 }} shadow={false}>
          {!isDesktop && <StepScreen step={index} locale={locale} t={t} animate={mobileInView} />}
        </PhoneFrame>
      </div>
    </div>
  );
}

export function HowItWorks({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const [active, setActive] = useState(0);
  // Only one variant runs: the sticky phone on desktop, one phone per step on mobile.
  const isDesktop = useMediaQuery(DESKTOP_QUERY);

  return (
    <section id="how-it-works" className="relative scroll-mt-16 bg-ink text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_25%_30%,rgba(59,130,246,0.18),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-24 lg:px-8 lg:pb-32 lg:pt-32">
        <Reveal className="max-w-3xl">
          <p className="mb-4 text-sm font-medium text-white/50">{t.how.eyebrow}</p>
          <h2 className="display text-5xl text-white sm:text-7xl">{t.how.title}</h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:mt-0 lg:grid-cols-2 lg:gap-20">
          <div className="hidden lg:block">
            <div className="sticky top-[calc(50vh-330px)] mx-auto w-full max-w-[320px] py-10">
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_65%)]"
                aria-hidden="true"
              />
              <PhoneFrame width={{ base: 320 }} shadow={false}>
                {isDesktop && (
                <AnimatePresence initial={false} mode="popLayout">
                  <m.div
                    key={active}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <StepScreen step={active} locale={locale} t={t} animate />
                  </m.div>
                </AnimatePresence>
                )}
              </PhoneFrame>
              <div className="mt-8 flex justify-center gap-2" aria-hidden="true">
                {[0, 1, 2].map((i) => (
                  <span key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-white" : "w-1.5 bg-white/30"}`} />
                ))}
              </div>
            </div>
          </div>

          <div>
            {t.how.steps.map((step, i) => (
              <Step key={step.title} index={i} title={step.title} body={step.body} onActive={setActive} locale={locale} t={t} isDesktop={isDesktop} />
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-base text-white/80">
            <span className="flex items-center gap-2 text-white/50">
              <PenLine className="h-4 w-4" />
              <ScanBarcode className="h-4 w-4" />
              <Bookmark className="h-4 w-4" />
            </span>
            {t.how.alt}
          </p>
          <p className="text-sm text-white/50">
            {t.how.sourcesNote}{" "}
            <Link href={legalHref(locale, "data-sources")} className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
              {t.how.sourcesLink}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
