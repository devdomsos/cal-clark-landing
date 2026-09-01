"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const CYCLE = 7;
const CORNER_TIMES = [0, 0.18, 0.28, 0.85, 0.95, 1];
const CORNER_OPACITY = [1, 1, 0, 0, 0, 1];
const CARD_TIMES = [0, 0.28, 0.38, 0.86, 0.96, 1];
const CARD_Y = ["100%", "100%", "0%", "0%", "100%", "100%"];
const CARD_OPACITY = [0, 0, 1, 1, 0, 0];

function Corner({ className }: { className: string }) {
  return (
    <span
      className={`absolute h-6 w-6 border-white/90 ${className}`}
      aria-hidden="true"
    />
  );
}

function MacroBar({
  label,
  color,
  value,
}: {
  label: string;
  color: string;
  value: number;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-4 text-[10px] font-semibold text-white/70">
        {label}
      </span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/15">
        <div
          className="h-full rounded-full"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export function PhoneMock() {
  return (
    <div className="relative mx-auto w-full max-w-[300px] select-none">
      <div
        className="pointer-events-none absolute inset-x-8 bottom-[-2rem] h-20 rounded-full bg-black/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[2.75rem] border-[5px] border-neutral-800 bg-neutral-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.45)]">
        <div className="relative h-full w-full overflow-hidden rounded-[2.35rem]">
          <Image
            src="/images/hero-plate.jpg"
            alt="A plated meal, ready to be logged in Cal Clark"
            fill
            sizes="300px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

          <motion.div
            className="absolute inset-6"
            animate={{ opacity: CORNER_OPACITY }}
            transition={{
              duration: CYCLE,
              times: CORNER_TIMES,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Corner className="left-0 top-0 rounded-tl-lg border-l-[2.5px] border-t-[2.5px]" />
            <Corner className="right-0 top-0 rounded-tr-lg border-r-[2.5px] border-t-[2.5px]" />
            <Corner className="bottom-0 left-0 rounded-bl-lg border-b-[2.5px] border-l-[2.5px]" />
            <Corner className="bottom-0 right-0 rounded-br-lg border-b-[2.5px] border-r-[2.5px]" />
          </motion.div>

          <div className="absolute left-1/2 top-5 -translate-x-1/2 rounded-full border border-white/10 bg-black/45 px-3.5 py-1 text-[10px] font-semibold tracking-wide text-white backdrop-blur-md">
            Cal Clark
          </div>

          <motion.div
            className="absolute inset-x-3.5 bottom-3.5 rounded-2xl border border-white/12 bg-black/60 p-4 backdrop-blur-lg"
            animate={{ y: CARD_Y, opacity: CARD_OPACITY }}
            transition={{
              duration: CYCLE,
              times: CARD_TIMES,
              repeat: Infinity,
              ease: "easeOut",
            }}
          >
            <div className="mb-2.5 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-white/55">
                  Draft estimate
                </p>
                <p className="text-[1.35rem] font-bold leading-tight text-white">
                  620 kcal
                </p>
              </div>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-fat shadow-[0_0_12px_rgba(5,150,105,0.4)]">
                <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <MacroBar label="P" color="var(--color-protein)" value={62} />
              <MacroBar label="C" color="var(--color-carb)" value={44} />
              <MacroBar label="F" color="var(--color-fat)" value={30} />
            </div>
          </motion.div>
        </div>
      </div>
      <span className="absolute -left-[6px] top-24 h-10 w-[5px] rounded-full bg-neutral-800" />
      <span className="absolute -right-[6px] top-32 h-16 w-[5px] rounded-full bg-neutral-800" />
    </div>
  );
}
