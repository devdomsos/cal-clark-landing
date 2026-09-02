"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PhoneMock } from "./PhoneMock";
import { WaitlistForm } from "./WaitlistForm";

const textContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const textChild = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-primary-light/40 via-primary-light/10 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-20">
        <motion.div
          initial={reduced ? false : "hidden"}
          animate={reduced ? undefined : "visible"}
          variants={textContainer}
        >
          <motion.p
            variants={reduced ? undefined : textChild}
            className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary"
          >
            Photo calorie tracker
          </motion.p>
          <motion.h1
            variants={reduced ? undefined : textChild}
            className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]"
          >
            Snap once. Correct once.
            <br />
            Cal Clark remembers.
          </motion.h1>
          <motion.p
            variants={reduced ? undefined : textChild}
            className="mt-5 max-w-xl text-lg text-muted-foreground"
          >
            Calories and macros from the plate. An estimate, not a lab. 3 free
            scans per week, then a yearly plan. No ads.
          </motion.p>

          <motion.div
            variants={reduced ? undefined : textChild}
            className="mt-8 max-w-md"
          >
            <WaitlistForm id="waitlist-hero" />
            <p className="mt-3 text-xs text-muted-foreground">
              3 free scans per week. Then a yearly plan. No ads.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.94 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <PhoneMock />
        </motion.div>
      </div>
    </div>
  );
}
