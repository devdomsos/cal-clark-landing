import Link from "next/link";
import { AlertTriangle, ExternalLink } from "lucide-react";
import { Logo } from "@/components/Logo";
import { LanguageSelect } from "@/components/LanguageSelect";
import { HtmlLang } from "@/components/HtmlLang";
import { LEGAL_NAV, legalHref, type LegalLocale } from "@/lib/legal";
import { homePath } from "@/lib/i18n/config";
import {
  CITATION_SECTIONS,
  type CitationSectionId,
} from "@/lib/citations";

const HOME_LABEL: Record<LegalLocale, string> = {
  en: "Home",
  pl: "Strona główna",
  de: "Startseite",
  es: "Inicio",
};

type Copy = {
  title: string;
  intro: string;
  updated: string;
  disclaimerTitle: string;
  disclaimer: string;
  sections: Record<
    CitationSectionId,
    { nav: string; heading: string; lead: string }
  >;
  questionsTitle: string;
  questions: string;
};

const COPY: Record<LegalLocale, Copy> = {
  en: {
    title: "The science behind the app",
    intro:
      "Tracking what you eat is only useful if the numbers behind it rest on published research. Cal Clark's calorie budget, nutrition targets, weekly pace, and macro splits follow the sources below. We will keep this page current as the app changes.",
    updated: "Last updated September 2026",
    disclaimerTitle: "Disclaimer",
    disclaimer:
      "Talk with a physician or other clinician before you start a diet, an exercise plan, or any other wellness program. This page is not medical advice. Do not use it instead of a visit, a diagnosis, or treatment, and do not rely on it to make medical decisions.",
    sections: {
      registration: {
        nav: "Registration and App Setup",
        heading: "Registration and App Setup",
        lead: "These are the sources we reference when we set a first calorie budget and nutrition targets during setup.",
      },
      pace: {
        nav: "Weight loss and gain pace",
        heading: "Weight loss and gain pace",
        lead: "These are the sources we use when we judge whether a weekly lose or gain pace matches typical published guidance. Typical loss is about 0.25 to 0.9 kg per week, about 1 to 2 lb, with a common first checkpoint of about 10% of current weight in 6 months. Typical gain is a modest surplus, about 0.25 to 0.5 kg per week. A target BMI under 18.5 is not treated as a usual healthy range. Daily calories stay within a floor and a cap. Faster rates stay available; we do not call them typical.",
      },
      budget: {
        nav: "Daily calorie budget",
        heading: "Daily calorie budget",
        lead: "These are the sources we reference when we estimate basal metabolic rate and activity for the daily calorie budget.",
      },
      micronutrients: {
        nav: "Micronutrient Targets",
        heading: "Micronutrient Targets",
        lead: "These are the sources we reference when we set micronutrient targets in the app.",
      },
      macros: {
        nav: "Daily Goals Macronutrient Splits",
        heading: "Daily Goals Macronutrient Splits",
        lead: "These are the sources we reference when we set daily carbohydrate, protein, and fat splits.",
      },
    },
    questionsTitle: "Questions or Feedback",
    questions:
      "If you have a question about a recommendation, or you want to suggest another source, write to us:",
  },
  pl: {
    title: "Nauka stojąca za aplikacją",
    intro:
      "Śledzenie jedzenia ma sens tylko wtedy, gdy liczby za nim opierają się na opublikowanych badaniach. Budżet kalorii, cele żywieniowe, tygodniowe tempo i podział makro w Cal Clark biorą się ze źródeł poniżej. Stronę będziemy aktualizować, gdy aplikacja się zmieni.",
    updated: "Ostatnia aktualizacja: wrzesień 2026",
    disclaimerTitle: "Zastrzeżenie",
    disclaimer:
      "Zanim zaczniesz dietę, plan treningowy albo inny program wellness, porozmawiaj z lekarzem. Ta strona nie jest poradą medyczną. Nie zastępuje wizyty, diagnozy ani leczenia i nie należy na niej opierać decyzji medycznych.",
    sections: {
      registration: {
        nav: "Rejestracja i ustawienie aplikacji",
        heading: "Rejestracja i ustawienie aplikacji",
        lead: "Z tych źródeł korzystamy, gdy przy pierwszym uruchomieniu ustawiamy budżet kalorii i cele żywieniowe.",
      },
      pace: {
        nav: "Tempo spadku i przyrostu wagi",
        heading: "Tempo spadku i przyrostu wagi",
        lead: "Z tych źródeł korzystamy, gdy oceniamy, czy tygodniowe tempo spadku albo przyrostu wagi zgadza się z typowymi, opublikowanymi wskazówkami. Typowy spadek to około 0,25 do 0,9 kg na tydzień, około 1 do 2 lb, a częsty pierwszy punkt kontrolny to około 10% obecnej wagi w 6 miesięcy. Typowy przyrost to umiarkowana nadwyżka, około 0,25 do 0,5 kg na tydzień. Cel z BMI poniżej 18,5 nie jest traktowany jako zwykły, zdrowy zakres. Dzienne kalorie zostają w ramach dolnego i górnego limitu. Szybsze tempo pozostaje dostępne; nie nazywamy go typowym.",
      },
      budget: {
        nav: "Dzienny budżet kalorii",
        heading: "Dzienny budżet kalorii",
        lead: "Z tych źródeł korzystamy, gdy szacujemy podstawową przemianę materii i aktywność do dziennego budżetu kalorii.",
      },
      micronutrients: {
        nav: "Cele mikroskładników",
        heading: "Cele mikroskładników",
        lead: "Z tych źródeł korzystamy, gdy ustawiamy cele mikroskładników w aplikacji.",
      },
      macros: {
        nav: "Podział makro na dzień",
        heading: "Podział makro na dzień",
        lead: "Z tych źródeł korzystamy, gdy ustawiamy dzienny podział węglowodanów, białka i tłuszczu.",
      },
    },
    questionsTitle: "Pytania i uwagi",
    questions:
      "Jeśli masz pytanie o konkretną rekomendację albo chcesz zaproponować źródło, napisz:",
  },
  de: {
    title: "Die Wissenschaft hinter der App",
    intro:
      "Essen zu tracken lohnt sich nur, wenn die Zahlen dahinter auf veröffentlichter Forschung stehen. Kalorienbudget, Nährstoffziele, wöchentliches Tempo und Makro-Aufteilung in Cal Clark folgen den Quellen unten. Diese Seite bleibt aktuell, wenn sich die App ändert.",
    updated: "Stand: September 2026",
    disclaimerTitle: "Haftungsausschluss",
    disclaimer:
      "Sprich mit einer Ärztin oder einem Arzt, bevor du eine Diät, einen Trainingsplan oder ein anderes Wellness-Programm startest. Diese Seite ist keine medizinische Beratung. Sie ersetzt keinen Termin, keine Diagnose und keine Behandlung und ist keine Grundlage für medizinische Entscheidungen.",
    sections: {
      registration: {
        nav: "Registrierung und App-Einrichtung",
        heading: "Registrierung und App-Einrichtung",
        lead: "Diese Quellen nutzen wir, wenn wir beim Einrichten das erste Kalorienbudget und die Nährstoffziele setzen.",
      },
      pace: {
        nav: "Tempo von Abnahme und Zunahme",
        heading: "Tempo von Abnahme und Zunahme",
        lead: "Diese Quellen nutzen wir, wenn wir prüfen, ob ein wöchentliches Tempo von Abnahme oder Zunahme zu typischen veröffentlichten Leitlinien passt. Typische Abnahme liegt bei etwa 0,25 bis 0,9 kg pro Woche, etwa 1 bis 2 lb, mit einem üblichen ersten Zwischenziel von etwa 10% des aktuellen Gewichts in 6 Monaten. Typische Zunahme ist ein moderater Überschuss, etwa 0,25 bis 0,5 kg pro Woche. Ein Ziel-BMI unter 18,5 gilt nicht als üblicher gesunder Bereich. Die Tageskalorien bleiben innerhalb einer Unter- und Obergrenze. Schnellere Raten bleiben verfügbar; wir nennen sie nicht typisch.",
      },
      budget: {
        nav: "Tägliches Kalorienbudget",
        heading: "Tägliches Kalorienbudget",
        lead: "Diese Quellen nutzen wir, wenn wir Grundumsatz und Aktivität für das tägliche Kalorienbudget schätzen.",
      },
      micronutrients: {
        nav: "Mikronährstoff-Ziele",
        heading: "Mikronährstoff-Ziele",
        lead: "Diese Quellen nutzen wir, wenn wir Mikronährstoff-Ziele in der App setzen.",
      },
      macros: {
        nav: "Tägliche Makro-Aufteilung",
        heading: "Tägliche Makro-Aufteilung",
        lead: "Diese Quellen nutzen wir, wenn wir die tägliche Aufteilung von Kohlenhydraten, Protein und Fett setzen.",
      },
    },
    questionsTitle: "Fragen oder Feedback",
    questions:
      "Wenn du eine Empfehlung hinterfragen oder eine weitere Quelle vorschlagen möchtest, schreib uns:",
  },
  es: {
    title: "La ciencia detrás de la app",
    intro:
      "Registrar lo que comes solo sirve si las cifras se apoyan en investigación publicada. El presupuesto de calorías, los objetivos, el ritmo semanal y el reparto de macros en Cal Clark siguen las fuentes de abajo. Actualizaremos esta página cuando cambie la app.",
    updated: "Última actualización: septiembre de 2026",
    disclaimerTitle: "Descargo de responsabilidad",
    disclaimer:
      "Habla con un médico u otro profesional clínico antes de empezar una dieta, un plan de ejercicio u otro programa de bienestar. Esta página no es consejo médico. No sustituye una consulta, un diagnóstico ni un tratamiento, y no debes usarla para decidir sobre tu salud.",
    sections: {
      registration: {
        nav: "Registro y configuración",
        heading: "Registro y configuración",
        lead: "Estas son las fuentes que usamos al fijar el primer presupuesto de calorías y los objetivos al configurar la app.",
      },
      pace: {
        nav: "Ritmo de pérdida y aumento",
        heading: "Ritmo de pérdida y aumento",
        lead: "Estas son las fuentes que usamos al valorar si un ritmo semanal de pérdida o aumento encaja con la guía publicada habitual. La pérdida típica es de unos 0,25 a 0,9 kg por semana, unas 1 a 2 lb, con un primer hito habitual de alrededor del 10% del peso actual en 6 meses. El aumento típico es un superávit moderado, unos 0,25 a 0,5 kg por semana. Un IMC objetivo por debajo de 18,5 no se trata como un rango saludable habitual. Las calorías diarias se quedan dentro de un suelo y un techo. Los ritmos más rápidos siguen disponibles; no los llamamos típicos.",
      },
      budget: {
        nav: "Presupuesto diario de calorías",
        heading: "Presupuesto diario de calorías",
        lead: "Estas son las fuentes que usamos al estimar el metabolismo basal y la actividad para el presupuesto diario de calorías.",
      },
      micronutrients: {
        nav: "Objetivos de micronutrientes",
        heading: "Objetivos de micronutrientes",
        lead: "Estas son las fuentes que usamos al fijar objetivos de micronutrientes en la app.",
      },
      macros: {
        nav: "Reparto diario de macros",
        heading: "Reparto diario de macros",
        lead: "Estas son las fuentes que usamos al fijar el reparto diario de hidratos, proteína y grasa.",
      },
    },
    questionsTitle: "Preguntas o comentarios",
    questions:
      "Si tienes una pregunta sobre una recomendación o quieres proponer otra fuente, escríbenos:",
  },
};

export function CitationsDoc({ locale }: { locale: LegalLocale }) {
  const c = COPY[locale];
  const homeHref = homePath(locale);

  return (
    <main className="mx-auto max-w-2xl px-5 py-16">
      <HtmlLang locale={locale} />
      <div className="flex items-center justify-between gap-4">
        <Link href={homeHref} className="focus-ring">
          <Logo />
        </Link>
        <LanguageSelect />
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        <Link href={homeHref} className="focus-ring hover:text-foreground">
          {HOME_LABEL[locale]}
        </Link>
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
        {c.title}
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {c.intro}
      </p>
      <p className="mt-3 text-sm text-muted-foreground">{c.updated}</p>

      <nav
        aria-label={c.title}
        className="mt-8 flex flex-wrap gap-2"
      >
        {CITATION_SECTIONS.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="focus-ring rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            {c.sections[section.id].nav}
          </a>
        ))}
      </nav>

      <aside className="mt-8 rounded-2xl border border-amber-200/90 bg-amber-50 px-5 py-4">
        <div className="flex items-start gap-3">
          <AlertTriangle
            size={18}
            className="mt-0.5 shrink-0 text-amber-700"
            aria-hidden
          />
          <div>
            <h2 className="text-sm font-semibold text-foreground">
              {c.disclaimerTitle}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {c.disclaimer}
            </p>
          </div>
        </div>
      </aside>

      {CITATION_SECTIONS.map((section) => {
        const copy = c.sections[section.id];
        return (
          <section
            key={section.id}
            id={section.id}
            className="mt-12 scroll-mt-24"
          >
            <h2 className="text-lg font-semibold tracking-tight text-foreground">
              {copy.heading}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {copy.lead}
            </p>
            <ol className="mt-5 flex flex-col gap-3">
              {section.sources.map((source, index) => (
                <li
                  key={`${section.id}-${index}`}
                  className="rounded-2xl border border-border bg-surface p-5 shadow-[0_1px_0_rgba(11,11,12,0.04)]"
                >
                  <div className="flex gap-4">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-sm font-semibold text-foreground"
                      aria-hidden
                    >
                      {index + 1}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-foreground">
                        {source.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {source.citation}
                      </p>
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring mt-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
                      >
                        {source.hrefLabel}
                        <ExternalLink size={12} aria-hidden />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        );
      })}

      <section className="mt-12">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          {c.questionsTitle}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {c.questions}{" "}
          <a
            className="text-primary underline underline-offset-2"
            href="mailto:support@calclark.app"
          >
            support@calclark.app
          </a>
        </p>
      </section>

      <nav
        aria-label="Legal"
        className="mt-16 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-6 text-sm text-muted-foreground"
      >
        {LEGAL_NAV.map((item) => (
          <Link
            key={item.path}
            href={legalHref(locale, item.path)}
            className="focus-ring hover:text-foreground"
          >
            {item.label[locale]}
          </Link>
        ))}
        <a
          href="mailto:support@calclark.app"
          className="focus-ring hover:text-foreground"
        >
          support@calclark.app
        </a>
      </nav>
    </main>
  );
}
