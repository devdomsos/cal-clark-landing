import type { Metadata } from "next";
import { TermsDoc } from "@/components/legal/TermsDoc";
import { generateLocaleParams, parseLocaleParam } from "@/lib/parseSubLocale";
import { pageMetadata } from "@/lib/i18n/metadata";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return generateLocaleParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await parseLocaleParam(params);
  const titles = {
    en: "Terms - Cal Clark",
    pl: "Regulamin - Cal Clark",
    de: "Nutzungsbedingungen - Cal Clark",
    es: "Términos - Cal Clark",
  };
  return pageMetadata(locale, "/terms", { title: titles[locale] });
}

export default async function Page({ params }: Props) {
  const locale = await parseLocaleParam(params);
  return <TermsDoc locale={locale} />;
}
