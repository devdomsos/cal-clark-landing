import { LOCALES, localePath, type Locale } from "@/lib/i18n/config";

export type LegalLocale = Locale;
export const SUB_LOCALES = LOCALES;
export type SubLocale = Locale;

export type LegalPath =
  | "privacy"
  | "terms"
  | "cookies"
  | "support"
  | "delete-account"
  | "data-sources"
  | "imprint";

export function legalHref(locale: LegalLocale, path: LegalPath): string {
  return localePath(locale, `/${path}`);
}

export const LEGAL_NAV: {
  path: LegalPath;
  label: Record<LegalLocale, string>;
}[] = [
  {
    path: "privacy",
    label: { en: "Privacy", pl: "Prywatność", de: "Datenschutz", es: "Privacidad" },
  },
  {
    path: "terms",
    label: { en: "Terms", pl: "Regulamin", de: "Nutzungsbedingungen", es: "Términos" },
  },
  {
    path: "cookies",
    label: { en: "Cookies", pl: "Cookies", de: "Cookies", es: "Cookies" },
  },
  {
    path: "support",
    label: { en: "Support", pl: "Pomoc", de: "Hilfe", es: "Ayuda" },
  },
  {
    path: "delete-account",
    label: {
      en: "Delete account",
      pl: "Usuń konto",
      de: "Konto löschen",
      es: "Borrar cuenta",
    },
  },
  {
    path: "data-sources",
    label: {
      en: "Where numbers come from",
      pl: "Skąd biorą się liczby",
      de: "Woher die Zahlen kommen",
      es: "De dónde salen los números",
    },
  },
  {
    path: "imprint",
    label: { en: "Imprint", pl: "Nota prawna", de: "Impressum", es: "Aviso legal" },
  },
];
