import type { MetadataRoute } from "next";
import { LOCALES, localePath } from "@/lib/i18n/config";
import type { LegalPath } from "@/lib/legal";

const SITE = "https://calclark.app";
const LEGAL: LegalPath[] = [
  "privacy",
  "terms",
  "cookies",
  "support",
  "delete-account",
  "imprint",
];
/** Science page. Indexed, but not in Header/Footer/LEGAL_NAV. */
const EXTRA = ["citations"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "/",
    ...LEGAL.map((path) => `/${path}`),
    ...EXTRA.map((path) => `/${path}`),
  ];
  return pages.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${SITE}${localePath(locale, path)}`,
      lastModified: now,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((code) => [code, `${SITE}${localePath(code, path)}`])
        ),
      },
    }))
  );
}
