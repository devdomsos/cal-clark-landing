import Image from "next/image";
import { Check } from "lucide-react";
import { Section, Reveal } from "./Section";

const CHIPS = [
  { src: "/images/food-pierogi.jpg", name: "Pierogi", kcal: "≈ 340 kcal" },
  { src: "/images/food-schnitzel.jpg", name: "Cutlet & fries", kcal: "≈ 610 kcal" },
  { src: "/images/food-salad.jpg", name: "Chicken salad", kcal: "≈ 380 kcal" },
  { src: "/images/food-oatmeal.jpg", name: "Berry oatmeal", kcal: "≈ 290 kcal" },
  { src: "/images/food-sandwich.jpg", name: "Open sandwich", kcal: "≈ 260 kcal" },
  { src: "/images/food-coffee.jpg", name: "Coffee, black", kcal: "≈ 5 kcal" },
];

const CLAIMS = ["Testing on real phones", "No ads, ever", "Built for real plates"];

export function ProofStrip() {
  return (
    <Section className="border-y border-border/70 bg-surface py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {CLAIMS.map((claim) => (
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
          {CHIPS.map((chip, i) => (
            <Reveal key={chip.name} delay={i * 0.06}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-[0_4px_16px_-4px_rgba(3,7,18,0.15)] ring-1 ring-black/5">
                <Image
                  src={chip.src}
                  alt={`${chip.name}, an example plate Cal Clark can log`}
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
