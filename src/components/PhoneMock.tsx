"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const CYCLE = 7; // seconds
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
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[2.75rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-2xl shadow-black/30">
        {/* screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[2.2rem]">
          <Image
            src="/images/hero-plate.jpg"
            alt="A plated meal, ready to be logged in Cal Clark"
            fill
            sizes="300px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40" />

          {/* viewfinder corners */}
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
            <Corner className="left-0 top-0 border-l-[3px] border-t-[3px] rounded-tl-lg" />
            <Corner className="right-0 top-0 border-r-[3px] border-t-[3px] rounded-tr-lg" />
            <Corner className="bottom-0 left-0 border-b-[3px] border-l-[3px] rounded-bl-lg" />
            <Corner className="bottom-0 right-0 border-b-[3px] border-r-[3px] rounded-br-lg" />
          </motion.div>

          {/* status pill */}
          <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-[10px] font-medium tracking-wide text-white backdrop-blur">
            Cal Clark
          </div>

          {/* result card */}
          <motion.div
            className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-black/55 p-3.5 backdrop-blur-md"
            animate={{ y: CARD_Y, opacity: CARD_OPACITY }}
            transition={{
              duration: CYCLE,
              times: CARD_TIMES,
              repeat: Infinity,
              ease: "easeOut",
            }}
          >
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wide text-white/60">
                  Estimated
                </p>
                <p className="text-xl font-bold leading-tight text-white">
                  620 kcal
                </p>
              </div>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-fat">
                <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <MacroBar label="P" color="#ef4444" value={62} />
              <MacroBar label="C" color="#eab308" value={44} />
              <MacroBar label="F" color="#10b981" value={30} />
            </div>
          </motion.div>
        </div>
      </div>
      {/* side buttons for a bit of device realism */}
      <span className="absolute -left-[7px] top-24 h-10 w-[6px] rounded-full bg-neutral-900" />
      <span className="absolute -right-[7px] top-32 h-16 w-[6px] rounded-full bg-neutral-900" />
    </div>
  );
}
