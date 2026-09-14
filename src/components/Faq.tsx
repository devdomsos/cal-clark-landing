"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./Section";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

function FaqItem({ q, a, open, onToggle, id }: { q: string; a: string; open: boolean; onToggle: () => void; id: string }) {
  return (
    <div className="border-b border-foreground/15">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          className="focus-ring flex w-full items-center justify-between gap-6 py-6 text-left"
          aria-expanded={open}
          aria-controls={id}
        >
          <span className="text-lg font-semibold tracking-[-0.01em] text-foreground sm:text-xl">{q}</span>
          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${open ? "rotate-45 border-ink bg-ink text-white" : "border-foreground/20 text-foreground"}`}>
            <Plus className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <div id={id} className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}>
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-7 pr-12 text-base leading-relaxed text-foreground/70">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-7xl scroll-mt-16 px-5 py-24 lg:px-8 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-4 text-sm font-medium text-foreground/60">{t.faq.eyebrow}</p>
          <h2 className="display text-5xl text-foreground sm:text-6xl">{t.faq.title}</h2>
          <p className="mt-6 text-base text-foreground/70">
            {t.faq.subPrefix}{" "}
            <a href="mailto:support@calclark.app" className="font-semibold text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground">
              support@calclark.app
            </a>
          </p>
        </Reveal>

        <div className="border-t border-foreground/15">
          {t.faq.items.map((item, i) => (
            <FaqItem key={item.q} id={`faq-${i}`} q={item.q} a={item.a} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
