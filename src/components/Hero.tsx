"use client";

import { motion } from "framer-motion";
import { PhoneMock } from "./PhoneMock";
import { StoreBadges } from "./StoreBadges";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-primary-light/40 via-primary-light/10 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Photo calorie tracker
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
            Snap once. Correct once.
            <br />
            Cal Clark remembers.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Calories and macros from the plate. An estimate, not a lab. 3 free
            scans, then a yearly plan. No ads.
          </p>

          <div className="mt-8 max-w-md">
            <WaitlistForm id="waitlist-hero" />
            <p className="mt-3 text-xs text-muted-foreground">
              3 free scans. Then a yearly plan. No ads.
            </p>
          </div>

          <div className="mt-6">
            <StoreBadges variant="dark" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <PhoneMock />
        </motion.div>
      </div>
    </div>
  );
}
