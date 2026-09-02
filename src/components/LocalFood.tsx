import Image from "next/image";
import { Section, Reveal, TextLine, TextReveal } from "./Section";

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
    <Section className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <TextReveal>
          <TextLine>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
              Local plates
            </p>
          </TextLine>
          <TextLine>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Understands real plates
            </h2>
          </TextLine>
          <TextLine>
            <p className="mt-4 max-w-md text-muted-foreground">
              Not only chicken breast and avocado toast. Home-cooked dinners,
              bakery counters, and whatever&apos;s actually in the fridge.
            </p>
          </TextLine>
        </TextReveal>

        <div className="grid grid-cols-3 gap-3">
          {DISHES.map((dish, i) => (
            <Reveal key={dish.name} delay={i * 0.05}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-[0_4px_16px_-4px_rgba(3,7,18,0.15)] ring-1 ring-black/5">
                <Image
                  src={dish.src}
                  alt={dish.name}
                  fill
                  sizes="(min-width: 1024px) 18vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                  <p className="text-[11px] font-medium text-white">
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
