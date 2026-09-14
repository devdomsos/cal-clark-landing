import Image from "next/image";
import { Flame } from "lucide-react";
import { Reveal } from "./Section";
import type { Locale } from "@/lib/i18n/config";
import { LOCALE_META } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

/** Same order as `plates.dishes`. Rough whole-plate estimates for the photos. */
const DISHES = [
  { src: "/images/food/avotoast.jpg", kcal: 450 },
  { src: "/images/food/yogurt.jpg", kcal: 380 },
  { src: "/images/food/poke.jpg", kcal: 610 },
  { src: "/images/food/pierogi.jpg", kcal: 520 },
  { src: "/images/food/schnitzel.jpg", kcal: 780 },
  { src: "/images/food/tortilla.jpg", kcal: 540 },
  { src: "/images/food/pasta.jpg", kcal: 720 },
  { src: "/images/food/steak.jpg", kcal: 690 },
  { src: "/images/food/sushi.jpg", kcal: 560 },
  { src: "/images/food/burger.jpg", kcal: 1050 },
  { src: "/images/food/smoothie.jpg", kcal: 520 },
  { src: "/images/food/chicken-rice.jpg", kcal: 590 },
];

function Tile({ src, name, kcal }: { src: string; name: string; kcal: string }) {
  return (
    <figure className="relative h-[280px] w-[220px] shrink-0 overflow-hidden rounded-[28px] sm:h-[360px] sm:w-[290px]">
      <Image src={src} alt={name} fill sizes="290px" className="object-cover" />
      <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.4)] backdrop-blur">
        <span className="block text-[13px] font-semibold leading-snug text-foreground">{name}</span>
        <span className="mt-0.5 flex items-center gap-1 text-[13px] text-foreground/70">
          <Flame className="h-3.5 w-3.5" strokeWidth={2.5} />
          {kcal}
        </span>
      </figcaption>
    </figure>
  );
}

export function Plates({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const nf = new Intl.NumberFormat(LOCALE_META[locale].htmlLang);
  const tiles = DISHES.map((d, i) => ({ ...d, name: t.plates.dishes[i]!, label: `${nf.format(d.kcal)} kcal` }));
  const rowA = tiles.slice(0, 6);
  const rowB = tiles.slice(6);

  return (
    <section className="overflow-hidden py-24 lg:py-32">
      <Reveal className="mx-auto mb-14 max-w-7xl px-5 lg:px-8">
        <p className="mb-4 text-sm font-medium text-foreground/60">{t.plates.eyebrow}</p>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h2 className="display max-w-3xl text-4xl text-foreground sm:text-6xl">{t.plates.title}</h2>
          <p className="max-w-md text-lg leading-relaxed text-foreground/70">{t.plates.sub}</p>
        </div>
      </Reveal>

      <div className="marquee-mask flex flex-col gap-4">
        {[rowA, rowB].map((row, r) => (
          <div key={r} className="flex overflow-hidden">
            <div
              className={`flex w-max gap-4 pr-4 ${r === 0 ? "animate-marquee" : "animate-marquee-reverse"}`}
              style={{ ["--marquee-duration" as string]: r === 0 ? "70s" : "80s" }}
            >
              {[...row, ...row].map((d, i) => (
                <div key={`${d.src}-${i}`} aria-hidden={i >= row.length ? true : undefined}>
                  <Tile src={d.src} name={d.name} kcal={d.label} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
