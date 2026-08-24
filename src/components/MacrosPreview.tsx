"use client";

import { motion } from "framer-motion";
import { Section, Reveal } from "./Section";

const RADIUS = 70;
const CIRC = 2 * Math.PI * RADIUS;
const PROGRESS = 0.64; // 64% of the daily budget used

function MacroRow({
  label,
  color,
  value,
  grams,
}: {
  label: string;
  color: string;
  value: number;
  grams: string;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="font-semibold text-foreground">{label}</span>
        <span className="text-muted-foreground">{grams}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function MacrosPreview() {
  return (
    <Section className="bg-surface py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            On your home screen
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Calories and macros. That&apos;s the whole list.
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            We deliberately skip forty micronutrients, water logs, and recipe
            boxes. One ring for what&apos;s left today, three bars for protein,
            carbs, and fat. If you want lab-grade micros, this is the wrong
            app.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto w-full max-w-sm">
          <div className="rounded-3xl border border-border bg-background p-7 shadow-sm">
            <div className="mb-6 flex items-center justify-center">
              <div className="relative h-44 w-44">
                <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r={RADIUS}
                    fill="none"
                    stroke="var(--color-muted)"
                    strokeWidth="12"
                  />
                  <motion.circle
                    cx="80"
                    cy="80"
                    r={RADIUS}
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={CIRC}
                    initial={{ strokeDashoffset: CIRC }}
                    whileInView={{ strokeDashoffset: CIRC * (1 - PROGRESS) }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">
                    740
                  </span>
                  <span className="text-xs text-muted-foreground">
                    kcal left today
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <MacroRow label="Protein" color="#ef4444" value={58} grams="88 / 150 g" />
              <MacroRow label="Carbs" color="#eab308" value={41} grams="120 / 290 g" />
              <MacroRow label="Fat" color="#10b981" value={72} grams="52 / 72 g" />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
