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

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProofStrip />
        <WhyCalClark />
        <HowItWorks />
        <Compare />
        <MacrosPreview />
        <LocalFood />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
