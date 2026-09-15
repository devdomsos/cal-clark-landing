"use client";

import { AnimatePresence, m, useInView } from "framer-motion";
import { useSafeReducedMotion } from "../Section";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { CameraScreen, DiaryScreen, MealScreen, PhoneFrame, TouchRipple, fmt, MEAL } from "./AppScreens";

type Phase = "camera" | "shutter" | "pending" | "done" | "tapRow" | "meal" | "tapConfirm" | "saved";

/** How long each phase stays on screen, in ms. One loop is about 14 s. */
const TIMELINE: [Phase, number][] = [
  ["camera", 1800],
  ["shutter", 500],
  ["pending", 2300],
  ["done", 1700],
  ["tapRow", 550],
  ["meal", 3300],
  ["tapConfirm", 550],
  ["saved", 2600],
];

const ROW_TAP = { x: 210, y: 676 };
const CONFIRM_TAP = { x: 292, y: 803 };

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroDemo({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const reduce = useSafeReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || !inView) return;
    const timer = setTimeout(() => setIndex((i) => (i + 1) % TIMELINE.length), TIMELINE[index]![1]);
    return () => clearTimeout(timer);
  }, [index, inView, reduce]);

  const phase: Phase = reduce ? "meal" : TIMELINE[index]![0];
  const screen = phase === "camera" || phase === "shutter" ? "camera" : phase === "meal" || phase === "tapConfirm" ? "meal" : phase === "saved" ? "diary-saved" : "diary";

  const caption =
    phase === "camera" || phase === "shutter"
      ? t.how.steps[0].title
      : phase === "pending"
        ? t.app.analyzing
        : phase === "meal" || phase === "tapConfirm"
          ? t.how.steps[1].title
          : `+${fmt(locale, MEAL.kcal)} kcal`;

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[330px] lg:max-w-[360px]">
      <PhoneFrame>
        <AnimatePresence initial={false} mode="popLayout">
          {screen === "camera" && (
            <m.div key="camera" className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.04 }} transition={{ duration: 0.45, ease }}>
              <CameraScreen t={t} shutter={phase === "shutter"} flash={phase === "shutter"} preload />
            </m.div>
          )}
          {screen === "diary" && (
            <m.div key="diary" className="absolute inset-0" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0, x: 0 }} exit={{ x: "-25%", opacity: 0.6 }} transition={{ duration: 0.5, ease }}>
              <DiaryScreen locale={locale} t={t} row={phase === "pending" ? "pending" : "done"} />
              {phase === "tapRow" && <TouchRipple {...ROW_TAP} />}
            </m.div>
          )}
          {screen === "meal" && (
            <m.div key="meal" className="absolute inset-0 z-10 shadow-[-20px_0_40px_rgba(0,0,0,0.15)]" initial={{ x: reduce ? 0 : "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.5, ease }}>
              <MealScreen locale={locale} t={t} animate={!reduce} pressed={phase === "tapConfirm"} />
              {phase === "tapConfirm" && <TouchRipple {...CONFIRM_TAP} />}
            </m.div>
          )}
          {screen === "diary-saved" && (
            <m.div key="diary-saved" className="absolute inset-0" initial={{ x: "-25%", opacity: 0.6 }} animate={{ x: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease }}>
              <DiaryScreen locale={locale} t={t} row="done" animate={false} />
            </m.div>
          )}
        </AnimatePresence>
      </PhoneFrame>

      <div className="pointer-events-none mt-7 flex h-9 items-center justify-center" aria-hidden="true">
        <AnimatePresence mode="wait" initial={false}>
          <m.span
            key={caption}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-white shadow-lg"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-fat" />
            {caption}
          </m.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
