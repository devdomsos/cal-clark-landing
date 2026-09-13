import { notFound } from "next/navigation";
import { LOCALES, isLocale, type Locale } from "@/lib/i18n/config";

export type { Locale };
export type SubLocale = Locale;

export function generateLocaleParams(): { locale: Locale }[] {
  return LOCALES.map((locale) => ({ locale }));
}

export async function parseLocaleParam(
  params: Promise<{ locale: string }>
): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}

/** @deprecated use parseLocaleParam */
export const parseSubLocale = parseLocaleParam;
