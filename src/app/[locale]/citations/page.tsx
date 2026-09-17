import type { Metadata } from "next";
import { CitationsDoc } from "@/components/legal/CitationsDoc";
import { generateLocaleParams, parseLocaleParam } from "@/lib/parseSubLocale";
import { pageMetadata } from "@/lib/i18n/metadata";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return generateLocaleParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await parseLocaleParam(params);
  const titles = {
    en: "The science behind the app - Cal Clark",
    pl: "Nauka stojąca za aplikacją - Cal Clark",
    de: "Die Wissenschaft hinter der App - Cal Clark",
    es: "La ciencia detrás de la app - Cal Clark",
  };
  const descriptions = {
    en: "Published research behind Cal Clark calorie budgets, weekly pace, nutrition targets, and macro splits.",
    pl: "Opublikowane badania stojące za budżetem kalorii, tygodniowym tempem, celami żywieniowymi i podziałem makro w Cal Clark.",
    de: "Veröffentlichte Forschung hinter Kalorienbudget, wöchentlichem Tempo, Nährstoffzielen und Makro-Aufteilung in Cal Clark.",
    es: "Investigación publicada detrás del presupuesto de calorías, ritmo semanal, objetivos y macros en Cal Clark.",
  };
  return pageMetadata(locale, "/citations", {
    title: titles[locale],
    description: descriptions[locale],
  });
}

export default async function Page({ params }: Props) {
  const locale = await parseLocaleParam(params);
  return <CitationsDoc locale={locale} />;
}
