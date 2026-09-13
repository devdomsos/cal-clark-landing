import type { Metadata } from "next";
import { CookiesDoc } from "@/components/legal/CookiesDoc";
import { generateLocaleParams, parseLocaleParam } from "@/lib/parseSubLocale";
import { pageMetadata } from "@/lib/i18n/metadata";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return generateLocaleParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await parseLocaleParam(params);
  const titles = {
    en: "Cookies - Cal Clark",
    pl: "Cookies - Cal Clark",
    de: "Cookies - Cal Clark",
    es: "Cookies - Cal Clark",
  };
  return pageMetadata(locale, "/cookies", { title: titles[locale] });
}

export default async function Page({ params }: Props) {
  const locale = await parseLocaleParam(params);
  return <CookiesDoc locale={locale} />;
}
