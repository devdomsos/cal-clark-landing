import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { WhyCalClark } from "@/components/WhyCalClark";
import { HowItWorks } from "@/components/HowItWorks";
import { Compare } from "@/components/Compare";
import { MacrosPreview } from "@/components/MacrosPreview";
import { LocalFood } from "@/components/LocalFood";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { HtmlLang } from "@/components/HtmlLang";
import { JsonLd } from "@/components/JsonLd";
import type { Locale } from "@/lib/i18n/config";

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <HtmlLang locale={locale} />
      <JsonLd locale={locale} />
      <Header locale={locale} />
      <main className="flex-1">
        <Hero locale={locale} />
        <ProofStrip locale={locale} />
        <WhyCalClark locale={locale} />
        <HowItWorks locale={locale} />
        <Compare locale={locale} />
        <MacrosPreview locale={locale} />
        <LocalFood locale={locale} />
        <Pricing locale={locale} />
        <Faq locale={locale} />
        <FinalCta locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
