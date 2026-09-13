import type { Metadata } from "next";
import { SupportDoc } from "@/components/legal/SupportDoc";
import { generateLocaleParams, parseLocaleParam } from "@/lib/parseSubLocale";
import { pageMetadata } from "@/lib/i18n/metadata";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return generateLocaleParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await parseLocaleParam(params);
  const titles = {
    en: "Support - Cal Clark",
    pl: "Pomoc - Cal Clark",
    de: "Hilfe - Cal Clark",
    es: "Ayuda - Cal Clark",
  };
  return pageMetadata(locale, "/support", { title: titles[locale] });
}

export default async function Page({ params }: Props) {
  const locale = await parseLocaleParam(params);
  return <SupportDoc locale={locale} />;
}
