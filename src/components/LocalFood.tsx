import Image from "next/image";
import { Section, Reveal } from "./Section";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

const DISH_SRC = [
  "/images/food-pierogi.jpg",
  "/images/food-schnitzel.jpg",
  "/images/food-oatmeal.jpg",
  "/images/food-salad.jpg",
  "/images/food-sandwich.jpg",
  "/images/food-coffee.jpg",
];

export function LocalFood({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <Section className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            {t.local.eyebrow}
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {t.local.title}
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">{t.local.body}</p>
        </Reveal>

        <div className="grid grid-cols-3 gap-3">
          {t.local.dishes.map((name, i) => (
            <Reveal key={name} delay={i * 0.05}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-[0_4px_16px_-4px_rgba(3,7,18,0.15)] ring-1 ring-black/5">
                <Image
                  src={DISH_SRC[i]!}
                  alt={name}
                  fill
                  sizes="(min-width: 1024px) 18vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                  <p className="text-[11px] font-medium text-white">{name}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
