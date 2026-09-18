import type { Locale } from "@/lib/i18n/config";
import de from "./copy/de.json";
import en from "./copy/en.json";
import es from "./copy/es.json";
import pl from "./copy/pl.json";

// The consent copy is generated from the app's i18n (see catalog.ts header),
// so its shape is the app's consent.json, not the landing Messages type.
export type ConsentCopy = typeof en;

const COPY: Record<Locale, ConsentCopy> = { en, pl, de, es };

export function getConsentCopy(locale: Locale): ConsentCopy {
  return COPY[locale] ?? en;
}

/** `{name}` placeholders, same rule as the app's t(). */
export function fill(template: string, params: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (m, key: string) =>
    Object.hasOwn(params, key) ? String(params[key]) : m
  );
}
