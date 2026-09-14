import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Plates } from "@/components/Plates";
import { HowItWorks } from "@/components/HowItWorks";
import { Goals } from "@/components/Goals";
import { RealLife } from "@/components/RealLife";
import { Trust } from "@/components/Trust";
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
        <HowItWorks locale={locale} />
        <Plates locale={locale} />
        <Goals locale={locale} />
        <RealLife locale={locale} />
        <Trust locale={locale} />
        <Pricing locale={locale} />
        <Faq locale={locale} />
        <FinalCta locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
