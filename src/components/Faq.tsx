"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, Reveal, TextLine, TextReveal } from "./Section";

const ITEMS = [
  {
    q: "Is the photo exact?",
    a: "No. A photo can't see how much oil is in a sauce. We draft the log — you confirm it or tap the one thing you know. Saved meals use your number next time, no hedging.",
  },
  {
    q: "Why not just type everything?",
    a: "A draft that's sometimes off is still faster than a blank diary. Repeat meals shouldn't need a new scan every single day.",
  },
  {
    q: "Do I need a buddy or friends to use it?",
    a: "No. Your log is private. There's no feed, no invite, no one grading your dinner.",
  },
  {
    q: "Are there ads?",
    a: "None. Not on the free scans, not after you save a meal.",
  },
  {
    q: "What languages does it support?",
    a: "Polish, German, Spanish, and English, with dish recognition tuned per market — not just US chicken-and-rice photos.",
  },
  {
    q: "When can I download it?",
    a: "We're finishing testing now. Join the list and we'll email you the moment it's live on iOS and Android.",
  },
  {
    q: "How much does it cost?",
    a: "3 free AI scans a week, then one honest yearly plan. Priced and billed through Apple or Google, shown before you pay — no surprise charge.",
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
    <Section id="faq" className="mx-auto max-w-3xl px-5 py-20">
      <TextReveal className="mb-10 text-center">
        <TextLine>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            FAQ
          </p>
        </TextLine>
        <TextLine>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Honest answers
          </h2>
        </TextLine>
      </TextReveal>

      <Reveal>
        <div>
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
