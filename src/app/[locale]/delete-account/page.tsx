import type { Metadata } from "next";
import { DeleteAccountDoc } from "@/components/legal/DeleteAccountDoc";
import { generateLocaleParams, parseLocaleParam } from "@/lib/parseSubLocale";
import { pageMetadata } from "@/lib/i18n/metadata";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return generateLocaleParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await parseLocaleParam(params);
  const titles = {
    en: "Delete account - Cal Clark",
    pl: "Usuń konto - Cal Clark",
    de: "Konto löschen - Cal Clark",
    es: "Borrar cuenta - Cal Clark",
  };
  return pageMetadata(locale, "/delete-account", { title: titles[locale] });
}

export default async function Page({ params }: Props) {
  const locale = await parseLocaleParam(params);
  return <DeleteAccountDoc locale={locale} />;
}
