"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, Reveal } from "./Section";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border py-4">
      <button
        type="button"
        onClick={onToggle}
        className="focus-ring flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-foreground">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <p className="pt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="mx-auto max-w-3xl px-5 py-20">
      <Reveal className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
          {t.faq.eyebrow}
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {t.faq.title}
        </h2>
      </Reveal>

      <Reveal>
        <div>
          {t.faq.items.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
