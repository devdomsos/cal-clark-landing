import type { Metadata } from "next";
import { DataSourcesDoc } from "@/components/legal/DataSourcesDoc";
import { generateLocaleParams, parseLocaleParam } from "@/lib/parseSubLocale";
import { pageMetadata } from "@/lib/i18n/metadata";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return generateLocaleParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await parseLocaleParam(params);
  const titles = {
    en: "Where the numbers come from - Cal Clark",
    pl: "Skąd biorą się liczby - Cal Clark",
    de: "Woher die Zahlen kommen - Cal Clark",
    es: "De dónde salen los números - Cal Clark",
  };
  return pageMetadata(locale, "/data-sources", { title: titles[locale] });
}

export default async function Page({ params }: Props) {
  const locale = await parseLocaleParam(params);
  return <DataSourcesDoc locale={locale} />;
}
