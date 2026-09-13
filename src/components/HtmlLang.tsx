"use client";

import { useLayoutEffect } from "react";
import { LOCALE_META, type Locale } from "@/lib/i18n/config";

export function HtmlLang({ locale }: { locale: Locale }) {
  useLayoutEffect(() => {
    document.documentElement.lang = LOCALE_META[locale].htmlLang;
  }, [locale]);
  return null;
}
