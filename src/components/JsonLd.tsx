import { localePath, type Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

const SITE = "https://calclark.app";

function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function JsonLd({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const url = `${SITE}${localePath(locale, "/")}`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cal Clark",
    url: SITE,
    logo: `${SITE}/icon-512.png`,
    email: "support@calclark.app",
  };

  const app = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Cal Clark",
    url,
    image: `${SITE}/og-image.png`,
    description: t.meta.description,
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS, Android",
    inLanguage: ["en", "pl", "de", "es"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: locale === "pl" ? "PLN" : locale === "de" ? "EUR" : "USD",
      description: t.hero.micro,
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(app) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faq) }}
      />
    </>
  );
}
