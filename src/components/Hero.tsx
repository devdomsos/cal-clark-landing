"use client";

import { motion } from "framer-motion";
import { PhoneMock } from "./PhoneMock";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="hero-grid pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,var(--primary-subtle),transparent)]"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="mb-5 inline-flex items-center rounded-full border border-primary/15 bg-primary-subtle px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary">
            Photo calorie tracker
          </p>
          <h1 className="text-[2.5rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.25rem]">
            Snap once.
            <br />
            Correct once.
            <br />
            <span className="text-primary">It remembers.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Cal Clark drafts calories and macros from a photo. You confirm or
            tweak once — saved meals keep your number. Estimates, not
            lab-exact. Built for people who actually eat.
          </p>

          <div className="mt-9 max-w-md" id="waitlist">
            <WaitlistForm id="waitlist-hero" />
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Launching soon on iOS and Android. Join the waitlist for early
              access.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
          className="lg:justify-self-end"
        >
          <PhoneMock />
        </motion.div>
      </div>
    </div>
  );
}
