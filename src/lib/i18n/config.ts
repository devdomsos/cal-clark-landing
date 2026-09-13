export const LOCALES = ["en", "pl", "de", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_META: Record<
  Locale,
  { label: string; native: string; htmlLang: string; ogLocale: string }
> = {
  en: { label: "English", native: "English", htmlLang: "en", ogLocale: "en_US" },
  pl: { label: "Polish", native: "Polski", htmlLang: "pl", ogLocale: "pl_PL" },
  de: { label: "German", native: "Deutsch", htmlLang: "de", ogLocale: "de_DE" },
  es: { label: "Spanish", native: "Español", htmlLang: "es", ogLocale: "es_ES" },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function localeFromPath(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];
  if (first && isLocale(first)) return first;
  return DEFAULT_LOCALE;
}

/** Path without a locale prefix. `/pl/privacy` -> `/privacy`. `/en` -> `/`. */
export function stripLocalePrefix(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] && isLocale(parts[0])) {
    const rest = parts.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

/**
 * Locale URL. English is unprefixed (`/`, `/privacy`). `/en` still works as an
 * alias because the `[locale]` route accepts `en`.
 */
export function localePath(locale: Locale, pathname = "/"): string {
  const rest = stripLocalePrefix(pathname);
  const suffix = rest === "/" ? "" : rest;
  if (locale === DEFAULT_LOCALE) return suffix || "/";
  return `/${locale}${suffix}`;
}

export function homePath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "/" : `/${locale}`;
}
