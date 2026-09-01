"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, Reveal, SectionHeader } from "./Section";

const ITEMS = [
  {
    q: "Is the photo exact?",
    a: "No — and we will not pretend otherwise. A photo cannot see hidden oil or exact portion size. Cal Clark drafts the log; you confirm or adjust. Saved meals use your number next time.",
  },
  {
    q: "Why not just type everything?",
    a: "You can. But a draft that is sometimes off is still faster than a blank field — and repeat meals should not need a new scan every morning.",
  },
  {
    q: "Do I need friends or a social feed?",
    a: "No. Your log is private. No buddies, no invites, no one grading your dinner.",
  },
  {
    q: "Are there ads?",
    a: "None. Not during free scans, not after you subscribe.",
  },
  {
    q: "What languages does it support?",
    a: "English, Polish, German, and Spanish — with dish recognition tuned per market, not just US-style plates.",
  },
  {
    q: "When can I download it?",
    a: "We are finishing testing now. Join the waitlist and we will email you the moment it ships on iOS and Android.",
  },
  {
    q: "How much does it cost?",
    a: "Three free AI photo scans per week, then one yearly plan. Priced and billed through Apple or Google — shown in full before you confirm.",
  },
  {
    q: "Do you sell my food photos?",
    a: "No.",
  },
];

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
    <div className="border-b border-border py-5">
      <button
        type="button"
        onClick={onToggle}
        className="focus-ring flex w-full min-h-[44px] items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="text-[0.9375rem] font-medium text-foreground">
          {q}
        </span>
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
          <p className="pt-3 text-sm leading-relaxed text-muted-foreground">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="mx-auto max-w-3xl px-5 py-24 lg:py-28">
      <Reveal>
        <SectionHeader eyebrow="FAQ" title="Straight answers" />
      </Reveal>

      <Reveal>
        <div className="rounded-2xl border border-border bg-surface px-5 sm:px-6">
          {ITEMS.map((item, i) => (
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
