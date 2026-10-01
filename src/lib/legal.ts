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
    path: "imprint",
    label: { en: "Imprint", pl: "Nota prawna", de: "Impressum", es: "Aviso legal" },
  },
];

/**
 * The trader behind Cal Clark. Apple (EU DSA trader status) and Google Play
 * check these against the developer account, so they must match what is
 * filed there character for character. Empty fields are not printed — never
 * fill one with a guess. The operator is a private individual living in
 * Germany (2026-09-28); German Impressum rules (DDG § 5) apply.
 */
export const OPERATOR = {
  name: "Dominik Sosnowski",
  /**
   * Postal address, one line per entry. Planned: a rented German Impressum
   * address (c/o service), not the home address.
   */
  address: [] as string[],
  /**
   * VAT ID (USt-IdNr.). DDG § 5 requires it on the imprint only if one exists.
   * Empty on purpose: individual on Apple and Google, no VAT ID (2026-09-28).
   */
  vatId: "",
  email: "support@calclark.app",
};
