import Image from "next/image";
import { Section, Reveal, SectionHeader } from "./Section";

const DISHES = [
  { src: "/images/food-pierogi.jpg", name: "Pierogi" },
  { src: "/images/food-schnitzel.jpg", name: "Breaded cutlet" },
  { src: "/images/food-oatmeal.jpg", name: "Porridge & berries" },
  { src: "/images/food-salad.jpg", name: "Weeknight salad" },
  { src: "/images/food-sandwich.jpg", name: "Open sandwich" },
  { src: "/images/food-coffee.jpg", name: "Coffee, black" },
];

export function LocalFood() {
  return (
    <Section className="mx-auto max-w-6xl px-5 py-24 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <SectionHeader
            align="left"
            eyebrow="Local plates"
            title="Your fridge, not a fitness influencer's feed"
            description="Home cooking, bakery runs, lunch out — recognition tuned for real regional food, not just chicken-and-rice meal prep."
            className="mb-0 max-w-md"
          />
        </Reveal>

        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          {DISHES.map((dish, i) => (
            <Reveal key={dish.name} delay={i * 0.04}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-[var(--shadow-md)] ring-1 ring-black/[0.04]">
                <Image
                  src={dish.src}
                  alt={dish.name}
                  fill
                  sizes="(min-width: 1024px) 18vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-2.5">
                  <p className="text-[11px] font-semibold text-white">
                    {dish.name}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
