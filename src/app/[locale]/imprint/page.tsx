import type { Metadata } from "next";
import { ImprintDoc } from "@/components/legal/ImprintDoc";
import { generateLocaleParams, parseLocaleParam } from "@/lib/parseSubLocale";
import { pageMetadata } from "@/lib/i18n/metadata";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return generateLocaleParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await parseLocaleParam(params);
  const titles = {
    en: "Imprint - Cal Clark",
    pl: "Nota prawna - Cal Clark",
    de: "Impressum - Cal Clark",
    es: "Aviso legal - Cal Clark",
  };
  return pageMetadata(locale, "/imprint", { title: titles[locale] });
}

export default async function Page({ params }: Props) {
  const locale = await parseLocaleParam(params);
  return <ImprintDoc locale={locale} />;
}
