"use client";

/*
 * Cal Clark app screens redrawn for the web, 1:1 with the Expo app:
 * components/home/HomeRecentlyLogged.tsx, HomeSummaryCardBig.tsx and
 * app/app/(meal)/meal.tsx. Every size here is in iPhone points (402 x 874).
 * PhoneFrame scales the whole screen to fit.
 */

import Image from "next/image";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  Bookmark,
  ChartNoAxesCombined,
  CircleUserRound,
  Drumstick,
  EllipsisVertical,
  Flame,
  NotebookText,
  Plus,
  Sparkles,
  Trash2,
  Wheat,
  Zap,
  RefreshCcw,
} from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { LOCALE_META } from "@/lib/i18n/config";
import type { Messages } from "@/lib/i18n/messages";
import { LogoMark } from "../Logo";

export const SCREEN_W = 402;
export const SCREEN_H = 874;

export const COLORS = {
  bg: "#f9fafb",
  card: "#ffffff",
  ink: "#030712",
  muted: "#6b7280",
  line: "#e5e7eb",
  carb: "#eab308",
  protein: "#ef4444",
  fat: "#10b981",
  green: "#22c55e",
};

/** The numbers in the demo add up: 312 + 195 + 96 + 39 = 642 kcal. */
export const MEAL = {
  kcal: 642,
  protein: 40,
  carbs: 55,
  fat: 30,
  ingredients: [
    { kcal: 312, grams: 150 },
    { kcal: 195, grams: 150 },
    { kcal: 96, grams: 60 },
    { kcal: 39, grams: 140 },
  ],
};

/** Dev default plan: 2400 kcal, 220 c / 170 p / 80 f. Breakfast already logged. */
export const DAY = {
  target: 2400,
  before: { kcal: 566, carbs: 40, protein: 20, fat: 18 },
};

export function fmt(locale: Locale, n: number) {
  return new Intl.NumberFormat(LOCALE_META[locale].htmlLang).format(Math.round(n));
}

/* ---------------------------------------------------------------- icons -- */

export function AvocadoIcon({ size = 16, color = COLORS.fat, strokeWidth = 2 }: { size?: number; color?: string; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17.8 14.04a3.905 3.905 0 0 1 1.337 -2.075c1.195 -.985 1.816 -2.285 1.863 -3.902c-.047 -1.43 -.54 -2.626 -1.477 -3.586c-.96 -.938 -2.156 -1.43 -3.585 -1.477c-1.618 .047 -2.918 .668 -3.903 1.863c-.562 .68 -1.254 1.125 -2.074 1.336c-.938 .188 -1.828 .48 -2.672 .88c-.844 .398 -1.559 .878 -2.144 1.44c-1.43 1.501 -2.145 3.224 -2.145 5.169c0 1.946 .715 3.668 2.145 5.168c1.5 1.429 3.222 2.144 5.168 2.144c1.945 0 3.667 -.715 5.167 -2.145c.563 -.585 1.055 -1.3 1.477 -2.144c.398 -.844 .68 -1.723 .844 -2.637v-.035z" />
      <path d="M10.87 10.036c-.942 .112 -1.794 .538 -2.556 1.278c-.74 .762 -1.166 1.614 -1.278 2.556c-.135 .92 .112 1.704 .74 2.354c.65 .628 1.435 .875 2.354 .74c.942 -.112 1.794 -.538 2.556 -1.278c.74 -.762 1.166 -1.614 1.278 -2.556c.135 -.92 -.112 -1.704 -.74 -2.354c-.65 -.628 -1.435 -.875 -2.354 -.74z" />
    </svg>
  );
}

function MacroIcon({ kind, size = 16 }: { kind: "kcal" | "protein" | "carbs" | "fat"; size?: number }) {
  if (kind === "kcal") return <Flame size={size} color={COLORS.ink} strokeWidth={2.25} />;
  if (kind === "protein") return <Drumstick size={size} color={COLORS.protein} strokeWidth={2.25} />;
  if (kind === "carbs") return <Wheat size={size} color={COLORS.carb} strokeWidth={2.25} />;
  return <AvocadoIcon size={size} strokeWidth={2.25} />;
}

/* ------------------------------------------------------------- helpers -- */

export function CountUp({ locale, from, to, duration = 0.9, run = true }: { locale: Locale; from: number; to: number; duration?: number; run?: boolean }) {
  const mv = useMotionValue(run ? from : to);
  const text = useTransform(mv, (v) => fmt(locale, v));
  useEffect(() => {
    if (!run) {
      mv.set(to);
      return;
    }
    mv.set(from);
    const controls = animate(mv, to, { duration, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [from, to, duration, run, mv]);
  return <motion.span>{text}</motion.span>;
}

function Ring({ size, stroke, progress, color, track = "#e5e7eb", children }: { size: number; stroke: number; progress: number; color: string; track?: string; children?: ReactNode }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          initial={false}
          animate={{ strokeDashoffset: c * (1 - Math.max(0, Math.min(1, progress))) }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  );
}

function Skeleton({ w, h }: { w: number; h: number }) {
  return (
    <motion.span
      className="block rounded-md"
      style={{ width: w, height: h, background: "#e5e7eb" }}
      animate={{ opacity: [0.55, 1, 0.55] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function Spinner({ color = "#fff", size = 22 }: { color?: string; size?: number }) {
  return (
    <span
      className="block animate-spin-slow rounded-full"
      style={{ width: size, height: size, border: `2.5px solid ${color}`, borderRightColor: "transparent", opacity: 0.95 }}
    />
  );
}

export function TouchRipple({ x, y }: { x: number; y: number }) {
  return (
    <motion.span
      className="pointer-events-none absolute z-50 rounded-full"
      style={{ left: x - 28, top: y - 28, width: 56, height: 56, background: "rgba(3,7,18,0.18)", border: "2px solid rgba(255,255,255,0.9)", boxShadow: "0 4px 18px rgba(0,0,0,0.25)" }}
      initial={{ scale: 0.4, opacity: 0 }}
      animate={{ scale: [0.4, 1, 1.15], opacity: [0, 1, 0] }}
      transition={{ duration: 0.7, times: [0, 0.35, 1], ease: "easeOut" }}
    />
  );
}

export function StatusBar({ dark = false }: { dark?: boolean }) {
  const c = dark ? "#fff" : COLORS.ink;
  return (
    <div className="absolute inset-x-0 top-0 z-40 flex h-[54px] items-center justify-between px-[34px] pt-[6px]" style={{ color: c }}>
      <span className="w-[60px] text-[17px] font-semibold tracking-[-0.01em]">12:34</span>
      <span className="flex items-center gap-[6px]">
        <svg width="18" height="12" viewBox="0 0 18 12" fill={c} aria-hidden="true"><rect x="0" y="8" width="3" height="4" rx="1" /><rect x="5" y="5.5" width="3" height="6.5" rx="1" /><rect x="10" y="3" width="3" height="9" rx="1" /><rect x="15" y="0" width="3" height="12" rx="1" /></svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill={c} aria-hidden="true"><path d="M8 11.5 5.6 9a3.4 3.4 0 0 1 4.8 0L8 11.5ZM3.4 6.8a6.5 6.5 0 0 1 9.2 0l-1.1 1.1a5 5 0 0 0-7 0L3.4 6.8ZM1.1 4.5a9.8 9.8 0 0 1 13.8 0l-1.1 1.1a8.2 8.2 0 0 0-11.6 0L1.1 4.5Z" /></svg>
        <svg width="27" height="13" viewBox="0 0 27 13" fill="none" aria-hidden="true"><rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={c} strokeOpacity="0.4" /><rect x="2" y="2" width="20" height="9" rx="2" fill={c} /><path d="M25 4.5v4c.8-.3 1.3-1.1 1.3-2s-.5-1.7-1.3-2Z" fill={c} fillOpacity="0.4" /></svg>
      </span>
    </div>
  );
}

/* --------------------------------------------------------------- frame -- */

/**
 * iPhone-shaped frame. The 402 x 874 screen is scaled with a transform so the
 * UI stays in real point sizes and never reflows.
 */
export function PhoneFrame({ children, className = "", shadow = true }: { children: ReactNode; className?: string; shadow?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.78);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / SCREEN_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div className={`relative select-none ${className}`}>
      <div
        className={`relative rounded-[18.5%/8.6%] bg-[#0b0b0c] p-[3.2%] ${shadow ? "shadow-[0_50px_100px_-30px_rgba(11,11,12,0.55),0_30px_60px_-40px_rgba(11,11,12,0.5)]" : ""}`}
        style={{ boxShadow: shadow ? undefined : "none" }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[18.5%/8.6%] ring-1 ring-inset ring-white/10" aria-hidden="true" />
        <div ref={ref} className="relative aspect-[402/874] w-full overflow-hidden rounded-[15.5%/7.2%] bg-white" style={{ isolation: "isolate", clipPath: "inset(0 round 15.5% / 7.2%)" }}>
          <div className="absolute left-0 top-0 origin-top-left" style={{ width: SCREEN_W, height: SCREEN_H, transform: `scale(${scale})` }}>
            {children}
            {/* Dynamic Island */}
            <div className="absolute left-1/2 top-[11px] z-50 h-[37px] w-[125px] -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
            {/* Home indicator */}
            <div className="absolute bottom-[8px] left-1/2 z-50 h-[5px] w-[140px] -translate-x-1/2 rounded-full bg-black/80" aria-hidden="true" />
          </div>
        </div>
      </div>
      <span className="absolute -left-[1.3%] top-[18%] h-[5%] w-[1.3%] rounded-l-sm bg-[#1a1a1c]" aria-hidden="true" />
      <span className="absolute -left-[1.3%] top-[26%] h-[8%] w-[1.3%] rounded-l-sm bg-[#1a1a1c]" aria-hidden="true" />
      <span className="absolute -right-[1.3%] top-[24%] h-[11%] w-[1.3%] rounded-r-sm bg-[#1a1a1c]" aria-hidden="true" />
    </div>
  );
}

/* -------------------------------------------------------------- camera -- */

export function CameraScreen({ t, shutter = false, flash = false }: { t: Messages; shutter?: boolean; flash?: boolean }) {
  return (
    <div className="absolute inset-0 bg-black">
      <div className="absolute inset-x-0 top-0 h-[700px] overflow-hidden">
        <Image src="/images/hero-meal.jpg" alt={t.app.plateAlt} fill sizes="(min-width: 1024px) 380px, 300px" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent" />
        {/* viewfinder */}
        <motion.div className="absolute left-[46px] right-[46px] top-[170px] h-[400px]" animate={{ scale: shutter ? 0.96 : 1 }} transition={{ duration: 0.25 }}>
          {[
            "left-0 top-0 border-l-[4px] border-t-[4px] rounded-tl-[22px]",
            "right-0 top-0 border-r-[4px] border-t-[4px] rounded-tr-[22px]",
            "left-0 bottom-0 border-b-[4px] border-l-[4px] rounded-bl-[22px]",
            "right-0 bottom-0 border-b-[4px] border-r-[4px] rounded-br-[22px]",
          ].map((c) => (
            <span key={c} className={`absolute h-[46px] w-[46px] border-white ${c}`} />
          ))}
        </motion.div>
        <div className="absolute inset-x-0 top-[70px] flex items-center justify-between px-[22px] text-white">
          <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black/35 backdrop-blur"><Zap size={18} /></span>
          <span className="rounded-full bg-black/35 px-[14px] py-[7px] text-[13px] font-semibold backdrop-blur">{t.app.photo}</span>
          <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black/35 backdrop-blur"><RefreshCcw size={17} /></span>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex h-[174px] items-center justify-center bg-black">
        <motion.span
          className="flex h-[78px] w-[78px] items-center justify-center rounded-full border-[4px] border-white"
          animate={{ scale: shutter ? 0.88 : 1 }}
          transition={{ duration: 0.18 }}
        >
          <span className="h-[62px] w-[62px] rounded-full bg-white" />
        </motion.span>
      </div>
      <motion.div className="pointer-events-none absolute inset-0 z-30 bg-white" initial={false} animate={{ opacity: flash ? 1 : 0 }} transition={{ duration: flash ? 0.08 : 0.45 }} />
      <StatusBar dark />
    </div>
  );
}

/* --------------------------------------------------------------- diary -- */

export type RowState = "hidden" | "pending" | "done";

function WeekStrip({ locale }: { locale: Locale }) {
  const f = new Intl.DateTimeFormat(LOCALE_META[locale].htmlLang, { weekday: "short" });
  // 14 Sep 2026 is a Monday.
  const days = Array.from({ length: 7 }, (_, i) => ({ d: 14 + i, label: f.format(new Date(2026, 8, 14 + i)).replace(".", "") }));
  return (
    <div className="flex items-center justify-between px-[16px]">
      {days.map((day, i) => (
        <div key={day.d} className={`flex w-[50px] flex-col items-center gap-[6px] rounded-[18px] py-[8px] ${i === 0 ? "bg-white shadow-[0_2px_10px_rgba(3,7,18,0.08)]" : ""}`}>
          <span className={`text-[14px] font-semibold capitalize ${i === 0 ? "text-[#030712]" : i === 1 ? "text-[#030712]" : "text-[#c4c7ce]"}`}>{day.label}</span>
          <span
            className={`flex h-[34px] w-[34px] items-center justify-center rounded-full text-[13px] font-medium ${i === 0 ? "text-[#030712]" : i === 1 ? "text-[#030712]" : "text-[#c4c7ce]"}`}
            style={{ border: `2.5px ${i === 0 ? `solid ${COLORS.green}` : i === 1 ? "solid #9ca3af" : "dashed #d1d5db"}` }}
          >
            {day.d}
          </span>
        </div>
      ))}
    </div>
  );
}

function MealRow({ locale, name, photo, time, kcal, protein, carbs, fat, state, t, animateIn }: { locale: Locale; name: string; photo: string; time: string; kcal: number; protein: number; carbs: number; fat: number; state: RowState; t: Messages; animateIn?: boolean }) {
  const pending = state === "pending";
  return (
    <motion.div
      layout
      initial={animateIn ? { opacity: 0, y: -16, scale: 0.97 } : false}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-[14px] rounded-[20px] bg-white p-[10px] pr-[16px] shadow-[0_1px_3px_rgba(3,7,18,0.06)]"
    >
      <div className="relative h-[94px] w-[94px] shrink-0 overflow-hidden rounded-[14px]">
        <Image src={photo} alt="" fill sizes="96px" className={`object-cover transition-[filter] duration-500 ${pending ? "brightness-[0.6]" : ""}`} />
        {pending && (
          <span className="absolute inset-0 flex items-center justify-center">
            <Spinner />
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-[12px] flex items-center justify-between gap-[8px]">
          {pending ? (
            <span className="truncate text-[16px] font-semibold text-[#030712]">{t.app.analyzing}</span>
          ) : (
            <motion.span initial={animateIn ? { opacity: 0 } : false} animate={{ opacity: 1 }} className="truncate text-[16px] font-semibold text-[#030712]">
              {name}
            </motion.span>
          )}
          <span className="shrink-0 text-[14px] text-[#6b7280]">{time}</span>
        </div>
        <div className="flex items-center gap-[16px]">
          {(
            [
              ["kcal", kcal],
              ["protein", protein],
              ["carbs", carbs],
              ["fat", fat],
            ] as const
          ).map(([kind, v], i) => (
            <span key={kind} className="flex items-center gap-[5px]">
              <MacroIcon kind={kind} />
              {pending ? (
                <Skeleton w={26} h={13} />
              ) : (
                <span className={`text-[14px] text-[#030712] ${i === 0 ? "font-medium" : ""}`}>
                  <CountUp locale={locale} from={0} to={v} run={!!animateIn} duration={0.7} />
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function DiaryScreen({ locale, t, row, animate: animateNew = true }: { locale: Locale; t: Messages; row: RowState; animate?: boolean }) {
  const eaten = row === "done";
  const b = DAY.before;
  const kcalLeft = DAY.target - b.kcal - (eaten ? MEAL.kcal : 0);
  const kcalLeftBefore = DAY.target - b.kcal;
  const macros = [
    { key: "carbs", label: t.app.carbs, target: 220, used: b.carbs + (eaten ? MEAL.carbs : 0), before: 220 - b.carbs, color: COLORS.carb, icon: <Wheat size={20} color={COLORS.carb} strokeWidth={2.25} /> },
    { key: "protein", label: t.app.protein, target: 170, used: b.protein + (eaten ? MEAL.protein : 0), before: 170 - b.protein, color: COLORS.protein, icon: <Drumstick size={20} color={COLORS.protein} strokeWidth={2.25} /> },
    { key: "fat", label: t.app.fats, target: 80, used: b.fat + (eaten ? MEAL.fat : 0), before: 80 - b.fat, color: COLORS.fat, icon: <AvocadoIcon size={20} strokeWidth={2.25} /> },
  ];
  const weekly = t.app.weeklyLeft.replace("{calories}", fmt(locale, 16829 - (eaten ? MEAL.kcal : 0)));
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: `linear-gradient(180deg, #dbeafe 0px, ${COLORS.bg} 380px)` }}>
      <StatusBar />
      <div className="absolute inset-x-0 top-[54px]">
        <div className="flex items-center justify-between px-[16px] pb-[14px] pt-[14px]">
          <span className="flex items-center gap-[8px] text-[#030712]">
            <LogoMark className="h-[40px] w-[40px]" />
            <span className="text-[28px] font-semibold tracking-[-0.02em]">Cal Clark</span>
          </span>
          <span className="flex items-center gap-[4px] rounded-full bg-white px-[12px] py-[8px] text-[17px] font-semibold text-[#030712] shadow-[0_1px_3px_rgba(3,7,18,0.08)]">
            <Flame size={18} color="#f97316" fill="#f97316" /> 2
          </span>
        </div>
        <WeekStrip locale={locale} />
        <div className="mx-[16px] mt-[16px] rounded-[22px] bg-white p-[20px] shadow-[0_1px_3px_rgba(3,7,18,0.06)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[15px] text-[#030712]/80">{t.app.calories}</p>
              <p className="mt-[4px] flex items-baseline gap-[8px] text-[#030712]">
                <span className="text-[44px] font-bold leading-none tracking-[-0.03em]">
                  <CountUp locale={locale} from={kcalLeftBefore} to={kcalLeft} run={animateNew && eaten} />
                </span>
                <span className="text-[20px] text-[#6b7280]">{t.app.left}</span>
              </p>
            </div>
            <Ring size={88} stroke={8} progress={(DAY.target - kcalLeft) / DAY.target} color={COLORS.ink}>
              <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#f3f4f6]">
                <Flame size={20} color={COLORS.ink} strokeWidth={2.25} />
              </span>
            </Ring>
          </div>
          <div className="mt-[16px] flex items-center justify-between border-t border-[#f3f4f6] pt-[14px]">
            <span className="text-[15px] text-[#6b7280]">{t.app.weeklyBudget}</span>
            <span className="text-[15px] font-semibold text-[#16a34a]">{weekly}</span>
          </div>
        </div>
        <div className="mx-[16px] mt-[10px] grid grid-cols-3 gap-[10px]">
          {macros.map((m) => (
            <div key={m.key} className="rounded-[20px] bg-white px-[14px] pb-[14px] pt-[14px] shadow-[0_1px_3px_rgba(3,7,18,0.06)]">
              <p className="truncate text-[14px] text-[#030712]/80">{m.label}</p>
              <p className="mb-[10px] flex items-baseline gap-[4px] text-[#030712]">
                <span className="text-[19px] font-bold">
                  <CountUp locale={locale} from={m.before} to={m.target - m.used} run={animateNew && eaten} />
                </span>
                <span className="text-[11px] text-[#6b7280]">{t.app.left}</span>
              </p>
              <div className="flex justify-center">
                <Ring size={80} stroke={7} progress={m.used / m.target} color={m.color}>
                  <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#f3f4f6]">{m.icon}</span>
                </Ring>
              </div>
            </div>
          ))}
        </div>
        <p className="px-[16px] pb-[12px] pt-[22px] text-[21px] font-semibold text-[#030712]">{t.app.recentlyLogged}</p>
        <div className="flex flex-col gap-[10px] px-[16px]">
          {row !== "hidden" && (
            <MealRow key="new" locale={locale} t={t} state={row} animateIn={animateNew} name={t.app.mealName} photo="/images/hero-meal.jpg" time="12:34" kcal={MEAL.kcal} protein={MEAL.protein} carbs={MEAL.carbs} fat={MEAL.fat} />
          )}
          <MealRow key="old" locale={locale} t={t} state="done" name={t.app.earlierMeal} photo="/images/food/yogurt.jpg" time="08:10" kcal={566} protein={20} carbs={40} fat={18} />
        </div>
      </div>
      <TabBar t={t} />
    </div>
  );
}

function TabBar({ t }: { t: Messages }) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-30 h-[92px] border-t border-[#e5e7eb] bg-white/95 backdrop-blur">
      <div className="grid grid-cols-4 px-[10px] pt-[10px]">
        <span className="flex flex-col items-center gap-[3px] text-[#030712]"><NotebookText size={24} strokeWidth={2} /><span className="text-[12px] font-semibold">{t.app.diary}</span></span>
        <span className="flex flex-col items-center gap-[3px] text-[#b6bac2]"><ChartNoAxesCombined size={24} strokeWidth={2} /><span className="text-[12px] font-medium">{t.app.progress}</span></span>
        <span className="flex items-start justify-center"><span className="-mt-[26px] flex h-[58px] w-[58px] items-center justify-center rounded-[20px] bg-[#0b0b0c] text-white shadow-lg"><Plus size={28} /></span></span>
        <span className="flex flex-col items-center gap-[3px] text-[#b6bac2]"><CircleUserRound size={24} strokeWidth={2} /><span className="text-[12px] font-medium">{t.app.profile}</span></span>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- meal -- */

export function MealScreen({ locale, t, animate: animateIn = true, pressed = false }: { locale: Locale; t: Messages; animate?: boolean; pressed?: boolean }) {
  const macroCards = [
    { label: t.app.carbs, v: MEAL.carbs, icon: <Wheat size={16} color={COLORS.carb} strokeWidth={2.25} />, tint: "#fef9c3" },
    { label: t.app.protein, v: MEAL.protein, icon: <Drumstick size={16} color={COLORS.protein} strokeWidth={2.25} />, tint: "#fee2e2" },
    { label: t.app.fats, v: MEAL.fat, icon: <AvocadoIcon size={16} strokeWidth={2.25} />, tint: "#d1fae5" },
  ];
  const stagger = (i: number) => (animateIn ? { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.25 + i * 0.12, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } } : {});
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: COLORS.bg }}>
      <div className="absolute inset-x-0 top-0 h-[300px] overflow-hidden">
        <Image src="/images/hero-meal.jpg" alt="" fill sizes="(min-width: 1024px) 380px, 300px" className="object-cover object-[50%_58%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
      </div>
      <StatusBar dark />
      <div className="absolute inset-x-0 top-[74px] z-10 flex justify-between px-[18px]">
        <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white/95 text-[#030712]"><ArrowLeft size={22} /></span>
        <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white/95 text-[#030712]"><EllipsisVertical size={20} /></span>
      </div>
      <div className="absolute inset-x-0 bottom-0 top-[272px] rounded-t-[30px] px-[16px] pt-[16px]" style={{ background: COLORS.bg }}>
        <div className="flex items-center justify-between px-[4px]">
          <Trash2 size={22} color={COLORS.protein} />
          <span className="text-[15px] font-medium text-[#6b7280]">12:34</span>
          <Bookmark size={22} color={COLORS.ink} />
        </div>
        <p className="mt-[10px] truncate text-[23px] font-semibold tracking-[-0.01em] text-[#030712]">{t.app.mealName}</p>
        <motion.div {...stagger(0)} className="mt-[10px] flex items-center gap-[14px] rounded-[20px] bg-white p-[10px] shadow-[0_1px_3px_rgba(3,7,18,0.06)]">
          <span className="flex h-[56px] w-[56px] items-center justify-center rounded-[14px] bg-[#f3f4f6]"><Flame size={24} color={COLORS.ink} strokeWidth={2.25} /></span>
          <span>
            <span className="block text-[14px] text-[#6b7280]">{t.app.calories}</span>
            <span className="block text-[27px] font-bold leading-tight text-[#030712]">
              <CountUp locale={locale} from={0} to={MEAL.kcal} run={animateIn} /> kcal
            </span>
          </span>
        </motion.div>
        <motion.div {...stagger(1)} className="mt-[8px] grid grid-cols-3 gap-[8px]">
          {macroCards.map((m) => (
            <div key={m.label} className="rounded-[18px] bg-white px-[12px] py-[12px] shadow-[0_1px_3px_rgba(3,7,18,0.06)]">
              <span className="block truncate text-[13px] text-[#6b7280]">{m.label}</span>
              <span className="mt-[6px] flex items-center gap-[7px]">
                <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full" style={{ background: m.tint }}>{m.icon}</span>
                <span className="text-[18px] font-semibold text-[#030712]">{m.v} g</span>
              </span>
            </div>
          ))}
        </motion.div>
        <div className="mt-[16px] flex items-center justify-between">
          <span className="text-[19px] font-semibold text-[#030712]">{t.app.ingredients}</span>
          <span className="text-[14px] text-[#6b7280]">+ {t.app.addMore}</span>
        </div>
        <div className="mt-[10px] flex flex-col gap-[7px]">
          {MEAL.ingredients.map((ing, i) => (
            <motion.div key={i} {...stagger(2 + i)} className="flex items-center gap-[10px]">
              <div className="flex min-w-0 flex-1 items-center rounded-[16px] bg-white px-[14px] py-[10px] shadow-[0_1px_3px_rgba(3,7,18,0.06)]">
                <span className="min-w-0 flex-1 truncate text-[14px] font-semibold text-[#030712]">{t.app.ingredientNames[i]}</span>
                <span className="ml-[8px] shrink-0 text-[13px] text-[#6b7280]">· {fmt(locale, ing.kcal)} kcal</span>
                <span className="ml-[10px] shrink-0 text-[14px] font-medium text-[#030712]">{ing.grams} g</span>
              </div>
              <Trash2 size={18} color="#9ca3af" />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-20 flex gap-[10px] border-t border-[#e5e7eb] bg-white px-[16px] pb-[34px] pt-[12px]">
        <span className="flex h-[50px] flex-1 items-center justify-center gap-[8px] rounded-full border-[1.5px] border-[#030712] text-[16px] font-semibold text-[#030712]"><Sparkles size={18} />{t.app.fix}</span>
        <motion.span animate={{ scale: pressed ? 0.95 : 1 }} transition={{ duration: 0.15 }} className="flex h-[50px] flex-1 items-center justify-center rounded-full bg-[#030712] text-[16px] font-semibold text-white">
          {t.app.looksRight}
        </motion.span>
      </div>
    </div>
  );
}
