import type { Metadata } from "next";
import { LOCALE_META, localePath, type Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

const SITE = "https://calclark.app";
const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Cal Clark",
};

export function pageMetadata(
  locale: Locale,
  path = "/",
  override?: { title?: string; description?: string }
): Metadata {
  const t = getMessages(locale);
  const title = override?.title ?? t.meta.title;
  const description = override?.description ?? t.meta.description;
  const canonical = `${SITE}${localePath(locale, path)}`;
  return {
    title,
    description,
    applicationName: "Cal Clark",
    robots: { index: true, follow: true },
    alternates: {
      canonical,
      languages: {
        en: `${SITE}${localePath("en", path)}`,
        pl: `${SITE}${localePath("pl", path)}`,
        de: `${SITE}${localePath("de", path)}`,
        es: `${SITE}${localePath("es", path)}`,
        "x-default": `${SITE}${localePath("en", path)}`,
      },
    },
    openGraph: {
      locale: LOCALE_META[locale].ogLocale,
      title,
      description,
      url: canonical,
      siteName: "Cal Clark",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
