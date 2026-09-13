import type { Metadata } from "next";
import { PrivacyDoc } from "@/components/legal/PrivacyDoc";
import { generateLocaleParams, parseLocaleParam } from "@/lib/parseSubLocale";
import { pageMetadata } from "@/lib/i18n/metadata";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return generateLocaleParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await parseLocaleParam(params);
  const titles = {
    en: "Privacy - Cal Clark",
    pl: "Prywatność - Cal Clark",
    de: "Datenschutz - Cal Clark",
    es: "Privacidad - Cal Clark",
  };
  return pageMetadata(locale, "/privacy", { title: titles[locale] });
}

export default async function Page({ params }: Props) {
  const locale = await parseLocaleParam(params);
  return <PrivacyDoc locale={locale} />;
}
