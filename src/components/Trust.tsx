import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Section";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { legalHref } from "@/lib/legal";

export function Trust({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <Reveal>
        <p className="mb-4 text-sm font-medium text-foreground/60">{t.trust.eyebrow}</p>
        <h2 className="display max-w-4xl text-5xl text-foreground sm:text-7xl">{t.trust.title}</h2>
      </Reveal>
      <div className="mt-14 grid border-t border-foreground/15 sm:grid-cols-3">
        {t.trust.claims.map((claim, i) => (
          <Reveal
            key={claim}
            delay={i * 0.08}
            className={`py-7 sm:py-9 ${i > 0 ? "border-t border-foreground/15 sm:border-l sm:border-t-0 sm:pl-8" : ""} ${i < 2 ? "sm:pr-8" : ""}`}
          >
            <span className="font-mono text-sm text-foreground/40">0{i + 1}</span>
            <p className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-[1.7rem] sm:leading-tight">{claim}</p>
          </Reveal>
        ))}
      </div>
      <Link
        href={legalHref(locale, "privacy")}
        className="focus-ring mt-4 inline-flex items-center gap-1.5 border-t border-foreground/15 pt-6 text-[15px] font-semibold text-foreground sm:border-t-0 sm:pt-2"
      >
        {t.trust.link}
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
