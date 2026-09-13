import Image from "next/image";
import { Check } from "lucide-react";
import { Section, Reveal } from "./Section";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

const CHIP_SRC = [
  "/images/food-pierogi.jpg",
  "/images/food-schnitzel.jpg",
  "/images/food-salad.jpg",
  "/images/food-oatmeal.jpg",
  "/images/food-sandwich.jpg",
  "/images/food-coffee.jpg",
];

export function ProofStrip({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <Section className="border-y border-border/70 bg-surface py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {t.proof.claims.map((claim) => (
            <span
              key={claim}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-[0_1px_2px_rgba(3,7,18,0.04)]"
            >
              <Check className="h-3.5 w-3.5 text-fat" strokeWidth={3} />
              {claim}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {t.proof.chips.map((chip, i) => (
            <Reveal key={chip.name} delay={i * 0.06}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-[0_4px_16px_-4px_rgba(3,7,18,0.15)] ring-1 ring-black/5">
                <Image
                  src={CHIP_SRC[i]!}
                  alt={chip.alt}
                  fill
                  sizes="(min-width: 640px) 16vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2">
                  <p className="text-[11px] font-semibold leading-tight text-white">
                    {chip.name}
                  </p>
                  <p className="text-[10px] text-white/75">{chip.kcal}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
