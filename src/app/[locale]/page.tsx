import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { pageMetadata } from "@/lib/i18n/metadata";
import { generateLocaleParams, parseLocaleParam } from "@/lib/parseSubLocale";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return generateLocaleParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await parseLocaleParam(params);
  return pageMetadata(locale);
}

export default async function Page({ params }: Props) {
  const locale = await parseLocaleParam(params);
  return <HomePage locale={locale} />;
}
