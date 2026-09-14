"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Reveal, useSafeReducedMotion } from "./Section";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

const PHOTOS = [
  { src: "/images/life/woman-run.jpg", position: "50% 30%" },
  { src: "/images/life/man-gym.jpg", position: "45% 40%" },
  { src: "/images/life/woman-lift.jpg", position: "28% 50%" },
  { src: "/images/life/cooking.jpg", position: "55% 40%" },
];

const ROTATE_MS = 5000;

export function Goals({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const reduce = useSafeReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % PHOTOS.length), ROTATE_MS);
    return () => clearTimeout(id);
  }, [active, paused, reduce]);

  return (
    <section id="goals" className="scroll-mt-16 py-24 lg:py-32">
      <Reveal className="mx-auto mb-14 max-w-7xl px-5 lg:px-8">
        <p className="mb-4 text-sm font-medium text-foreground/60">{t.goals.eyebrow}</p>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h2 className="display text-5xl text-foreground sm:text-7xl">{t.goals.title}</h2>
          <p className="max-w-md text-lg leading-relaxed text-foreground/70">{t.goals.sub}</p>
        </div>
      </Reveal>

      {/* Desktop: panels that open up */}
      <div
        className="mx-auto hidden h-[640px] max-w-7xl gap-3 px-8 lg:flex"
        onMouseLeave={() => setPaused(false)}
      >
        {t.goals.items.map((item, i) => {
          const open = i === active;
          return (
            <button
              key={item.title}
              type="button"
              onMouseEnter={() => {
                setActive(i);
                setPaused(true);
              }}
              onFocus={() => {
                setActive(i);
                setPaused(true);
              }}
              onClick={() => setActive(i)}
              aria-pressed={open}
              className="focus-ring group relative h-full min-w-0 overflow-hidden rounded-[32px] text-left transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ flexGrow: open ? 3.2 : 1, flexBasis: 0 }}
            >
              <Image
                src={PHOTOS[i]!.src}
                alt={t.goals.alts[i]!}
                fill
                sizes="(min-width: 1024px) 55vw, 90vw"
                className={`object-cover transition-transform duration-[1200ms] ease-out ${open ? "scale-100" : "scale-110"}`}
                style={{ objectPosition: PHOTOS[i]!.position }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/5 transition-opacity duration-500 ${open ? "opacity-100" : "opacity-80"}`} />
              <div className={`absolute inset-x-0 bottom-0 ${open ? "p-8" : "p-6"}`}>
                <h3 className={`display text-white transition-[font-size] duration-500 ${open ? "text-5xl" : "text-[1.6rem] leading-[1.05]"}`}>{item.title}</h3>
                <motion.p
                  initial={false}
                  animate={{ opacity: open ? 1 : 0, y: open ? 0 : 8, height: open ? "auto" : 0 }}
                  transition={{ duration: 0.4, delay: open ? 0.2 : 0 }}
                  className="mt-3 max-w-sm overflow-hidden text-lg leading-snug text-white/85"
                >
                  {item.body}
                </motion.p>
                {open && !reduce && !paused && (
                  <span className="mt-6 block h-[3px] w-40 overflow-hidden rounded-full bg-white/25">
                    <motion.span
                      key={active}
                      className="block h-full bg-white"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
                    />
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile: swipeable cards */}
      <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 lg:hidden">
        {t.goals.items.map((item, i) => (
          <figure key={item.title} className="relative aspect-[4/5] w-[82%] shrink-0 snap-start overflow-hidden rounded-[28px] sm:w-[46%]">
            <Image src={PHOTOS[i]!.src} alt={t.goals.alts[i]!} fill sizes="82vw" className="object-cover" style={{ objectPosition: PHOTOS[i]!.position }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="display text-3xl text-white">{item.title}</h3>
              <p className="mt-2 text-base leading-snug text-white/85">{item.body}</p>
            </figcaption>
          </figure>
        ))}
        <span className="w-2 shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}
