import type { Locale } from "@/lib/i18n/config";
import { FlagIcon } from "@/components/FlagIcon";
import { ExternalLink, Shield } from "lucide-react";

export type LegalRefVariant =
  | "privacy"
  | "terms"
  | "imprint"
  | "cookies";

interface SourceDoc {
  id: string;
  authority: string;
  jurisdiction: string;
  localeFlag?: Locale;
  href: string;
  hrefLabel: string;
  article: string;
  excerpt: string;
}

interface Copy {
  heading: string;
  intro: string;
  healthBannerTitle: string;
  healthBannerBody: string;
  openOfficial: string;
  quotedNote: string;
}

const COPY: Record<Locale, Copy> = {
  en: {
    heading: "Official sources, on this page",
    intro:
      "Cal Clark treats body metrics and meal logs as health-related data. The articles below are the published texts we follow. Official sites do not allow us to show their pages inside ours, so we quote the published wording here.",
    healthBannerTitle: "Health-related data",
    healthBannerBody:
      "Height, weight, goal, activity, and meal photos can reveal health status. Under GDPR this is special-category data. We use it only to set a calorie and protein budget and to keep your diary, after you choose to scan. We do not use it for ads. We do not diagnose, treat, or claim to be a medical device.",
    openOfficial: "Open official source",
    quotedNote: "Quoted from the official publication. Last checked 12 September 2026.",
  },
  pl: {
    heading: "Oficjalne źródła, na tej stronie",
    intro:
      "Cal Clark traktuje wymiary ciała i dziennik posiłków jako dane związane ze zdrowiem. Poniżej są opublikowane przepisy, których się trzymamy. Strony urzędów nie pozwalają pokazać swojej treści wewnątrz naszej, więc cytujemy opublikowany tekst tutaj.",
    healthBannerTitle: "Dane związane ze zdrowiem",
    healthBannerBody:
      "Wzrost, waga, cel, aktywność i zdjęcia posiłków mogą coś mówić o stanie zdrowia. W RODO to dane szczególnej kategorii. Używamy ich tylko do budżetu kalorii i białka oraz do dziennika, po tym jak wybierzesz skan. Nie do reklam. Nie diagnozujemy, nie leczymy i nie jesteśmy wyrobem medycznym.",
    openOfficial: "Otwórz źródło urzędowe",
    quotedNote: "Cytat z publikacji urzędowej. Sprawdzone 12 września 2026.",
  },
  de: {
    heading: "Offizielle Quellen, auf dieser Seite",
    intro:
      "Cal Clark behandelt Körpermesswerte und das Essensprotokoll als gesundheitsbezogene Daten. Unten stehen die veröffentlichten Texte, an die wir uns halten. Amtliche Seiten lassen sich nicht in unserer Seite anzeigen, deshalb zitieren wir den veröffentlichten Wortlaut hier.",
    healthBannerTitle: "Gesundheitsbezogene Daten",
    healthBannerBody:
      "Größe, Gewicht, Ziel, Aktivität und Speisefotos können etwas über den Gesundheitszustand sagen. Nach der DSGVO sind das besondere Kategorien personenbezogener Daten. Wir nutzen sie nur für Kalorien- und Proteinbudget und das Tagebuch, nachdem du einen Scan startest. Nicht für Werbung. Keine Diagnose, keine Behandlung, kein Medizinprodukt.",
    openOfficial: "Offizielle Quelle öffnen",
    quotedNote: "Zitat aus der amtlichen Veröffentlichung. Geprüft am 12. September 2026.",
  },
  es: {
    heading: "Fuentes oficiales, en esta página",
    intro:
      "Cal Clark trata las medidas corporales y el diario de comidas como datos relacionados con la salud. Abajo están los textos publicados que seguimos. Los sitios oficiales no permiten mostrar sus páginas dentro de la nuestra, así que citamos el texto publicado aquí.",
    healthBannerTitle: "Datos relacionados con la salud",
    healthBannerBody:
      "Altura, peso, objetivo, actividad y fotos de comidas pueden revelar el estado de salud. En el RGPD son categorías especiales. Los usamos solo para el presupuesto de calorías y proteína y para el diario, cuando eliges analizar. No para anuncios. No diagnosticamos, no tratamos y no somos un producto sanitario.",
    openOfficial: "Abrir fuente oficial",
    quotedNote: "Cita de la publicación oficial. Revisado el 12 de septiembre de 2026.",
  },
};

function gdprHealth(locale: Locale): SourceDoc {
  const href =
    locale === "pl"
      ? "https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:32016R0679"
      : locale === "de"
        ? "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679"
        : locale === "es"
          ? "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32016R0679"
          : "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679";
  if (locale === "pl") {
    return {
      id: "gdpr-9",
      authority: "Dziennik Urzędowy UE",
      jurisdiction: "UE / EOG",
      href,
      hrefLabel: "EUR-Lex · RODO 2016/679",
      article: "RODO art. 4 pkt 15 i art. 9 ust. 1-2 lit. a",
      excerpt:
        "Art. 4 pkt 15: „dane dotyczące zdrowia” oznaczają dane osobowe o zdrowiu fizycznym lub psychicznym osoby fizycznej, w tym o korzystaniu z usług opieki zdrowotnej, ujawniające informacje o stanie jej zdrowia.\n\nArt. 9 ust. 1: Zabrania się przetwarzania danych ujawniających pochodzenie rasowe lub etniczne, poglądy polityczne, przekonania religijne lub światopoglądowe, przynależność do związków zawodowych oraz przetwarzania danych genetycznych, danych biometrycznych w celu jednoznacznego zidentyfikowania osoby fizycznej lub danych dotyczących zdrowia, seksualności lub orientacji seksualnej tej osoby.\n\nArt. 9 ust. 2 lit. a: ust. 1 nie ma zastosowania, jeżeli osoba, której dane dotyczą, wyraziła wyraźną zgodę na przetwarzanie tych danych osobowych w jednym lub kilku konkretnych celach.",
    };
  }
  if (locale === "de") {
    return {
      id: "gdpr-9",
      authority: "Amtsblatt der EU",
      jurisdiction: "EU / EWR",
      href,
      hrefLabel: "EUR-Lex · DSGVO 2016/679",
      article: "DSGVO Art. 4 Nr. 15 und Art. 9 Abs. 1-2 lit. a",
      excerpt:
        "Art. 4 Nr. 15: „Gesundheitsdaten“ sind personenbezogene Daten, die sich auf die körperliche oder geistige Gesundheit einer natürlichen Person, einschließlich der Erbringung von Gesundheitsdienstleistungen, beziehen und aus denen Informationen über deren Gesundheitszustand hervorgehen.\n\nArt. 9 Abs. 1: Die Verarbeitung personenbezogener Daten, aus denen die rassische und ethnische Herkunft, politische Meinungen, religiöse oder weltanschauliche Überzeugungen oder die Gewerkschaftszugehörigkeit hervorgehen, sowie die Verarbeitung von genetischen Daten, biometrischen Daten zur eindeutigen Identifizierung einer natürlichen Person, Gesundheitsdaten oder Daten zum Sexualleben oder der sexuellen Orientierung einer natürlichen Person ist untersagt.\n\nArt. 9 Abs. 2 lit. a: Absatz 1 gilt nicht, wenn die betroffene Person in die Verarbeitung der genannten personenbezogenen Daten für einen oder mehrere festgelegte Zwecke ausdrücklich eingewilligt hat.",
    };
  }
  if (locale === "es") {
    return {
      id: "gdpr-9",
      authority: "Diario Oficial de la UE",
      jurisdiction: "UE / EEE",
      href,
      hrefLabel: "EUR-Lex · RGPD 2016/679",
      article: "RGPD art. 4.15 y art. 9.1-2.a",
      excerpt:
        "Art. 4.15: «datos relativos a la salud»: datos personales relativos a la salud física o mental de una persona física, incluida la prestación de servicios de atención sanitaria, que revelen información sobre su estado de salud.\n\nArt. 9.1: Quedan prohibidos el tratamiento de datos personales que revelen el origen étnico o racial, las opiniones políticas, las convicciones religiosas o filosóficas, o la afiliación sindical, y el tratamiento de datos genéticos, datos biométricos dirigidos a identificar de manera unívoca a una persona física, datos relativos a la salud o datos relativos a la vida sexual o la orientación sexual de una persona física.\n\nArt. 9.2.a: El apartado 1 no será de aplicación cuando el interesado haya dado su consentimiento explícito para el tratamiento de dichos datos personales con uno o más fines especificados.",
    };
  }
  return {
    id: "gdpr-9",
    authority: "Official Journal of the EU",
    jurisdiction: "EU / EEA / UK GDPR",
    href,
    hrefLabel: "EUR-Lex · GDPR 2016/679",
    article: "GDPR Article 4(15) and Article 9(1)-(2)(a)",
    excerpt:
      "Art. 4(15): 'data concerning health' means personal data related to the physical or mental health of a natural person, including the provision of health care services, which reveal information about his or her health status.\n\nArt. 9(1): Processing of personal data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, and the processing of genetic data, biometric data for the purpose of uniquely identifying a natural person, data concerning health or data concerning a natural person's sex life or sexual orientation shall be prohibited.\n\nArt. 9(2)(a): Paragraph 1 shall not apply if the data subject has given explicit consent to the processing of those personal data for one or more specified purposes.",
  };
}

function dpa(locale: Locale): SourceDoc {
  if (locale === "pl") {
    return {
      id: "dpa",
      authority: "UODO",
      jurisdiction: "Polska",
      localeFlag: "pl",
      href: "https://uodo.gov.pl/pl/p/skargi",
      hrefLabel: "uodo.gov.pl · skargi",
      article: "Prezes Urzędu Ochrony Danych Osobowych",
      excerpt:
        "Masz prawo złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych, gdy uważasz, że przetwarzanie Twoich danych narusza RODO. Wniosek składasz do UODO. Cal Clark nie zastępuje tej drogi: nasz kontakt to support@calclark.app, organ nadzorczy w Polsce to UODO.",
    };
  }
  if (locale === "de") {
    return {
      id: "dpa",
      authority: "BfDI / Landesbeauftragte",
      jurisdiction: "Deutschland",
      localeFlag: "de",
      href: "https://www.bfdi.bund.de/DE/Buerger/Inhalte/Allgemein/Datenschutz/Datenschutzueberblick.html",
      hrefLabel: "bfdi.bund.de",
      article: "DSGVO Art. 77 · BDSG",
      excerpt:
        "Du kannst dich bei der zuständigen Aufsichtsbehörde beschweren. Für nicht-öffentliche Stellen ist das in der Regel der Landesbeauftragte für Datenschutz des Bundeslands, in dem der Verantwortliche niedergelassen ist. Der Bundesbeauftragte (BfDI) ist für Bundesbehörden zuständig. Bis der Firmensitz veröffentlicht ist, nenne in der Beschwerde Cal Clark und support@calclark.app.",
    };
  }
  if (locale === "es") {
    return {
      id: "dpa",
      authority: "AEPD",
      jurisdiction: "España",
      localeFlag: "es",
      href: "https://www.aepd.es/derechos-y-deberes/derechos-de-proteccion-de-datos",
      hrefLabel: "aepd.es",
      article: "RGPD art. 77 · LOPDGDD",
      excerpt:
        "Puedes reclamar ante la Agencia Española de Protección de Datos si consideras que el tratamiento no se ajusta al RGPD o a la Ley Orgánica 3/2018 (LOPDGDD). Cal Clark no sustituye esa vía. Contacto: support@calclark.app. En España la autoridad de control es la AEPD.",
    };
  }
  return {
    id: "dpa",
    authority: "ICO",
    jurisdiction: "United Kingdom",
    localeFlag: "en",
    href: "https://ico.org.uk/make-a-complaint/",
    hrefLabel: "ico.org.uk",
    article: "UK GDPR · Data Protection Act 2018",
    excerpt:
      "If you live in the UK you can complain to the Information Commissioner's Office. EEA visitors can complain to their local authority (Poland: UODO, Germany: the competent state commissioner or BfDI, Spain: AEPD). Cal Clark is not a HIPAA covered entity and is not a US health plan or provider. Write to support@calclark.app first if you want a copy or deletion of your account.",
  };
}

function usda(locale: Locale): SourceDoc {
  const intro: Record<Locale, string> = {
    en: "The US Department of Agriculture publishes calorie and nutrient values for thousands of foods. We keep a copy of those tables on our servers in the EU so a draft can be checked against published numbers. Your photos never go to USDA.\n\nCitation: U.S. Department of Agriculture, Agricultural Research Service. FoodData Central, https://fdc.nal.usda.gov.",
    pl: "Departament Rolnictwa USA publikuje kalorie i wartości odżywcze tysięcy produktów. Kopię tych tabel trzymamy na serwerach w UE, żeby szkic można było zestawić z opublikowanymi liczbami. Zdjęć do USDA nie wysyłamy.\n\nCytowanie: U.S. Department of Agriculture, Agricultural Research Service. FoodData Central, https://fdc.nal.usda.gov.",
    de: "Das US-Landwirtschaftsministerium veröffentlicht Kalorien und Nährwerte für Tausende Lebensmittel. Eine Kopie dieser Tabellen liegt auf unseren Servern in der EU, damit ein Entwurf mit veröffentlichten Zahlen abgeglichen werden kann. Fotos gehen nicht an das USDA.\n\nZitat: U.S. Department of Agriculture, Agricultural Research Service. FoodData Central, https://fdc.nal.usda.gov.",
    es: "El Departamento de Agricultura de EE. UU. publica calorías y nutrientes de miles de alimentos. Guardamos una copia de esas tablas en nuestros servidores en la UE para contrastar el borrador con cifras publicadas. Tus fotos no van al USDA.\n\nCita: U.S. Department of Agriculture, Agricultural Research Service. FoodData Central, https://fdc.nal.usda.gov.",
  };
  return {
    id: "usda",
    authority: "USDA",
    jurisdiction: "United States · public data",
    href: "https://fdc.nal.usda.gov/",
    hrefLabel: "fdc.nal.usda.gov",
    article:
      locale === "pl"
        ? "Opublikowane tabele żywieniowe"
        : locale === "de"
          ? "Veröffentlichte Nährwerttabellen"
          : locale === "es"
            ? "Tablas nutricionales publicadas"
            : "Published nutrition tables",
    excerpt: intro[locale],
  };
}

function medicalDevice(locale: Locale): SourceDoc {
  if (locale === "pl") {
    return {
      id: "mdr",
      authority: "Rozporządzenie (UE) 2017/745",
      jurisdiction: "UE",
      href: "https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:32017R0745",
      hrefLabel: "EUR-Lex · MDR 2017/745",
      article: "Wyrób medyczny tylko przy przeznaczeniu medycznym",
      excerpt:
        "Oprogramowanie jest wyrobem medycznym, gdy producent przewiduje przeznaczenie medyczne (diagnoza, profilaktyka, monitorowanie, leczenie). Cal Clark zapisuje posiłki i szkicuje kalorie. Nie diagnozuje, nie leczy i nie zastępuje dietetyka ani lekarza. To nie porada medyczna.",
    };
  }
  if (locale === "de") {
    return {
      id: "mdr",
      authority: "Verordnung (EU) 2017/745",
      jurisdiction: "EU",
      href: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32017R0745",
      hrefLabel: "EUR-Lex · MDR 2017/745",
      article: "Medizinprodukt nur bei medizinischer Zweckbestimmung",
      excerpt:
        "Software ist ein Medizinprodukt, wenn der Hersteller eine medizinische Zweckbestimmung angibt (Diagnose, Prävention, Überwachung, Behandlung). Cal Clark speichert Mahlzeiten und entwirft Kalorien. Keine Diagnose, keine Behandlung, kein Ersatz für Ärztin oder Ernährungsberatung. Kein medizinischer Rat.",
    };
  }
  if (locale === "es") {
    return {
      id: "mdr",
      authority: "Reglamento (UE) 2017/745",
      jurisdiction: "UE",
      href: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32017R0745",
      hrefLabel: "EUR-Lex · MDR 2017/745",
      article: "Producto sanitario solo con finalidad médica",
      excerpt:
        "El software es producto sanitario cuando el fabricante le atribuye una finalidad médica (diagnóstico, prevención, seguimiento, tratamiento). Cal Clark registra comidas y borra calorías. No diagnostica, no trata y no sustituye a un clínico ni a un dietista. No es consejo médico.",
    };
  }
  return {
    id: "mdr",
    authority: "Regulation (EU) 2017/745 and FDA",
    jurisdiction: "EU / US",
    href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R0745",
    hrefLabel: "EUR-Lex · MDR 2017/745",
    article: "Not a medical device",
    excerpt:
      "Software is a medical device when the manufacturer assigns a medical purpose (diagnosis, prevention, monitoring, treatment). Cal Clark logs meals and drafts calories. It does not diagnose or treat. It is not a substitute for a clinician. It is not medical advice. We are not an FDA-cleared device.",
  };
}

function imprintLaw(locale: Locale): SourceDoc {
  if (locale === "de") {
    return {
      id: "ddg",
      authority: "Digitale-Dienste-Gesetz",
      jurisdiction: "Deutschland",
      localeFlag: "de",
      href: "https://www.gesetze-im-internet.de/ddg/__5.html",
      hrefLabel: "gesetze-im-internet.de · DDG",
      article: "DDG § 5 Anbieterkennzeichnung",
      excerpt:
        "Diensteanbieter haben für geschäftsmäßige, in der Regel gegen Entgelt angebotene digitale Dienste u. a. Namen, Anschrift und elektronische Kontaktaufnahme leicht erkennbar zu halten. Der Firmenname und die ladungsfähige Anschrift von Cal Clark werden hier ergänzt, bevor die App in den Stores steht. Bis dahin: support@calclark.app.",
    };
  }
  if (locale === "pl") {
    return {
      id: "ddg",
      authority: "Ustawa o świadczeniu usług drogą elektroniczną",
      jurisdiction: "Polska",
      localeFlag: "pl",
      href: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20021441204",
      hrefLabel: "ISAP · u.ś.u.d.e.",
      article: "Dane usługodawcy",
      excerpt:
        "Usługodawca podaje m.in. nazwę, siedzibę i adres elektroniczny. Nazwa podmiotu i adres Cal Clark pojawią się tutaj przed listą w sklepach. Do tego czasu: support@calclark.app.",
    };
  }
  if (locale === "es") {
    return {
      id: "ddg",
      authority: "LSSI-CE",
      jurisdiction: "España",
      localeFlag: "es",
      href: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758",
      hrefLabel: "BOE · LSSI-CE",
      article: "Ley 34/2002 art. 10",
      excerpt:
        "El prestador debe facilitar nombre, domicilio y correo electrónico de forma permanente y fácil. El nombre y domicilio de Cal Clark se publicarán aquí antes de las tiendas. Hasta entonces: support@calclark.app.",
    };
  }
  return {
    id: "ddg",
    authority: "Company details",
    jurisdiction: "All markets",
    href: "mailto:support@calclark.app",
    hrefLabel: "support@calclark.app",
    article: "Operator",
    excerpt:
      "Legal entity name, register number, and registered address will be printed here before App Store or Google Play listing. We will not invent them. Until then, contact support@calclark.app.",
  };
}

function cookiesLaw(locale: Locale): SourceDoc {
  if (locale === "pl") {
    return {
      id: "cookie",
      authority: "Prawo komunikacji elektronicznej",
      jurisdiction: "Polska",
      localeFlag: "pl",
      href: "https://uodo.gov.pl/pl/138/2246",
      hrefLabel: "UODO · pliki cookies",
      article: "Zgoda na cookies nieistotne",
      excerpt:
        "Cookies niezbędne do świadczenia usługi nie wymagają zgody. Cookies analityczne i reklamowe wymagają zgody. calclark.app nie stawia cookies reklamowych. Odsłony liczy Vercel Web Analytics bez cookies. Cookies analityczne ładują się tylko po zgodzie w banerze.",
    };
  }
  if (locale === "de") {
    return {
      id: "cookie",
      authority: "TDDDG",
      jurisdiction: "Deutschland",
      localeFlag: "de",
      href: "https://www.gesetze-im-internet.de/tdddg/",
      hrefLabel: "gesetze-im-internet.de · TDDDG",
      article: "Einwilligung für nicht notwendige Speicher",
      excerpt:
        "Das Speichern von Informationen auf dem Endgerät oder der Zugriff darauf ist nur erlaubt, wenn die Nutzerin eingewilligt hat - außer es ist unbedingt erforderlich, den Dienst zu erbringen. calclark.app setzt keine Werbe-Cookies. Seitenaufrufe zählt Vercel Web Analytics ohne Cookies. Analyse-Cookies laden nur nach Zustimmung im Banner.",
    };
  }
  if (locale === "es") {
    return {
      id: "cookie",
      authority: "AEPD · guía de cookies",
      jurisdiction: "España",
      localeFlag: "es",
      href: "https://www.aepd.es/guias/guia-cookies.html",
      hrefLabel: "aepd.es · guía de cookies",
      article: "Consentimiento para cookies no necesarias",
      excerpt:
        "Las cookies técnicas necesarias para el servicio no exigen consentimiento. Las de analítica y publicidad sí. calclark.app no coloca cookies de anuncios. Vercel Web Analytics cuenta visitas sin cookies. Las cookies de analítica solo se cargan tras aceptar en el banner.",
    };
  }
  return {
    id: "cookie",
    authority: "ePrivacy / PECR",
    jurisdiction: "EU / UK",
    href: "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/",
    hrefLabel: "ICO · cookies",
    article: "Consent for non-essential cookies",
    excerpt:
      "Strictly necessary cookies do not need consent. Analytics and advertising cookies do. calclark.app does not set advertising cookies. Vercel Web Analytics counts visits without cookies. Analytics cookies load only after you say yes in the banner.",
  };
}

function sourcesFor(variant: LegalRefVariant, locale: Locale): SourceDoc[] {
  switch (variant) {
    case "privacy":
      return [gdprHealth(locale), dpa(locale), usda(locale)];
    case "terms":
      return [medicalDevice(locale), gdprHealth(locale)];
    case "imprint":
      return [imprintLaw(locale), dpa(locale)];
    case "cookies":
      return [cookiesLaw(locale)];
  }
}

function SourceCard({ doc, copy }: { doc: SourceDoc; copy: Copy }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-background shadow-[0_1px_2px_rgba(3,7,18,0.04)]">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/60 px-4 py-3">
        <div className="flex items-center gap-2.5">
          {doc.localeFlag ? <FlagIcon locale={doc.localeFlag} /> : null}
          <div>
            <p className="text-sm font-semibold text-foreground">{doc.authority}</p>
            <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
              {doc.jurisdiction}
            </p>
          </div>
        </div>
        <a
          href={doc.href}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground hover:bg-muted"
        >
          {copy.openOfficial}
          <ExternalLink className="h-3 w-3" aria-hidden />
        </a>
      </header>
      <div className="px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          {doc.article}
        </p>
        <blockquote className="mt-3 whitespace-pre-wrap rounded-xl border border-border bg-surface px-4 py-3 font-serif text-[13px] leading-relaxed text-foreground">
          {doc.excerpt}
        </blockquote>
        <p className="mt-2 text-[11px] text-muted-foreground">
          {copy.quotedNote} · {doc.hrefLabel}
        </p>
      </div>
    </article>
  );
}

export function LegalReferences({
  locale,
  variant,
}: {
  locale: Locale;
  variant: LegalRefVariant;
}) {
  const copy = COPY[locale];
  const docs = sourcesFor(variant, locale);
  const showHealth = variant === "privacy" || variant === "terms";

  return (
    <section className="mt-10 flex flex-col gap-4" aria-labelledby="legal-refs-heading">
      {showHealth && (
        <div className="rounded-2xl border border-primary/25 bg-primary/5 px-4 py-4">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Shield className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {copy.healthBannerTitle}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {copy.healthBannerBody}
              </p>
            </div>
          </div>
        </div>
      )}
      <div>
        <h2 id="legal-refs-heading" className="text-base font-semibold text-foreground">
          {copy.heading}
        </h2>
        <p className="mt-2 text-sm leading-relaxed">{copy.intro}</p>
      </div>
      <div className="flex flex-col gap-4">
        {docs.map((doc) => (
          <SourceCard key={doc.id} doc={doc} copy={copy} />
        ))}
      </div>
    </section>
  );
}
