export type { Locale } from "./config";
export {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_META,
  homePath,
  isLocale,
  localeFromPath,
  localePath,
  stripLocalePrefix,
} from "./config";
export { getMessages, type Messages } from "./messages";
export { generateLocaleParams, parseLocaleParam } from "@/lib/parseSubLocale";
