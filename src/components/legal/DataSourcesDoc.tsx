import Link from "next/link";
import {
  LegalH2,
  LegalList,
  LegalShell,
  type LegalLocale,
} from "./LegalShell";
import { legalHref } from "@/lib/legal";

const COPY: Record<
  LegalLocale,
  {
    title: string;
    updated: string;
    intro: string;
    photoTitle: string;
    photo: string[];
    barcodeTitle: string;
    barcode: string[];
    searchTitle: string;
    search: string;
    budgetTitle: string;
    budget: string[];
    notTitle: string;
    not: string[];
    sourcesTitle: string;
    usdaLink: string;
    blsLink: string;
    privacy: string;
  }
> = {
  en: {
    title: "Where the numbers come from",
    updated: "Last updated: 14 September 2026",
    intro:
      "Cal Clark logs meals. A photo cannot weigh oil in a sauce. We still show our sources, because you should know which number is a draft, which number is from a published nutrition table, and which number you typed yourself.",
    photoTitle: "Photo or a typed description",
    photo: [
      "You take a picture or type what you ate. That leaves your phone, goes to our servers in the EU, and is sent to OpenAI to draft the log.",
      "The draft has food names, a portion in grams, and a first calorie number. If the plate is messy, we may ask one extra question (oil, size, sauce) instead of inventing the rest.",
      "We then check those names against published nutrition tables: first the US government tables, then the German national food table. When the match is confident, we use those published calories and macros for the grams on your draft.",
      "You can change grams or items before the meal counts for the day. Saved meals reuse your number. They do not send the photo again.",
    ],
    barcodeTitle: "Barcode on a packaged product",
    barcode: [
      "If you scanned that barcode before, we already have the number.",
      "If it is new, we look it up in Open Food Facts, a public product catalog.",
      "If that catalog has no match, we try FatSecret.",
      "The next scan of the same barcode uses that number. Packaged calories come from the label, not from the camera.",
    ],
    searchTitle: "Search",
    search:
      "Typed search uses the same published nutrition tables. About 20,700 foods. This is public data. We do not resell it.",
    budgetTitle: "Daily calorie budget",
    budget: [
      "Basal metabolic rate uses the Mifflin-St Jeor equation (Mifflin et al., 1990).",
      "Activity uses the Compendium of Physical Activities (Ainsworth et al., 2011).",
      "Minimum calorie floors follow the Dietary Guidelines for Americans (2020-2025).",
    ],
    notTitle: "What this is not",
    not: [
      "Not medical advice. You confirm every log.",
      "Not a promise that a photo is exact. A photo cannot weigh oil. You confirm the draft.",
      "Not a social network. There is no feed and no one else sees your plate.",
    ],
    sourcesTitle: "Named sources",
    usdaLink: "USDA published nutrition tables",
    blsLink: "German Nutrient Database (BLS 4.0), published by the Max Rubner-Institut, CC BY 4.0",
    privacy: "How we store photos and accounts is on the privacy page.",
  },
  pl: {
    title: "Skąd biorą się liczby",
    updated: "Ostatnia aktualizacja: 14 września 2026",
    intro:
      "Cal Clark zapisuje posiłki. Zdjęcie nie zważy sosu. Pokazujemy źródła, żeby było jasne: co jest szkicem, co pochodzi z opublikowanej tabeli żywieniowej, a co wpiszesz Ty.",
    photoTitle: "Zdjęcie albo krótki opis",
    photo: [
      "Robisz zdjęcie albo wpisujesz, co było na talerzu. To opuszcza telefon, idzie na nasze serwery w UE i do OpenAI, żeby zrobić szkic wpisu.",
      "Szkic ma nazwy produktów, gramy i pierwsze kalorie. Gdy talerz jest trudniejszy, pytamy o jedną rzecz (olej, wielkość, sos), zamiast zgadywać resztę.",
      "Te nazwy sprawdzamy z opublikowanymi tabelami żywieniowymi: najpierw rządu USA, potem z niemiecką krajową tabelą żywności. Przy pewnym dopasowaniu bierzemy opublikowane kalorie i makro na gramy z Twojego szkicu.",
      "Możesz zmienić gramy albo składniki, zanim posiłek wejdzie w dzień. Zapamiętane posiłki używają Twojej liczby. Zdjęcia drugi raz nie wysyłają.",
    ],
    barcodeTitle: "Kod kreskowy na opakowaniu",
    barcode: [
      "Jeśli ten kod już skanowałeś, mamy liczbę.",
      "Jeśli kod jest nowy, szukamy go w Open Food Facts - publicznym katalogu produktów.",
      "Jeśli tam nie ma trafienia, próbujemy FatSecret.",
      "Kolejny skan tego samego kodu używa tej liczby. Kalorie z opakowania biorą się z etykiety, nie z aparatu.",
    ],
    searchTitle: "Wyszukiwarka",
    search:
      "Wpisane nazwy szukamy w tych samych opublikowanych tabelach. Około 20 700 produktów. To dane publiczne. Nie odsprzedajemy ich.",
    budgetTitle: "Dzienny budżet kalorii",
    budget: [
      "Podstawowa przemiana materii: równanie Mifflin-St Jeor (Mifflin i in., 1990).",
      "Aktywność: Compendium of Physical Activities (Ainsworth i in., 2011).",
      "Dolne progi kalorii: Dietary Guidelines for Americans (2020-2025).",
    ],
    notTitle: "Czym to nie jest",
    not: [
      "To nie porada medyczna. Każdy wpis potwierdzasz Ty.",
      "To nie obietnica, że zdjęcie jest dokładne. Zdjęcie nie zważy oleju. Ty potwierdzasz szkic.",
      "To nie sieć społecznościowa. Nie ma feedu. Nikt inny nie widzi Twojego talerza.",
    ],
    sourcesTitle: "Nazwane źródła",
    usdaLink: "Opublikowane tabele żywieniowe USDA",
    blsLink: "Niemiecka baza wartości odżywczych (BLS 4.0), wydawca: Max Rubner-Institut, CC BY 4.0",
    privacy: "Jak trzymamy zdjęcia i konta, opisuje polityka prywatności.",
  },
  de: {
    title: "Woher die Zahlen kommen",
    updated: "Stand: 14. September 2026",
    intro:
      "Cal Clark führt ein Tagebuch. Ein Foto wiegt keine Soße. Wir nennen die Quellen, damit klar ist: Was ist ein Entwurf, was ein veröffentlichter Nährwert, und was hast du selbst eingetippt.",
    photoTitle: "Foto oder kurze Beschreibung",
    photo: [
      "Du fotografierst oder tippst, was du gegessen hast. Das verlässt das Telefon, geht auf unsere Server in der EU und an OpenAI, damit wir den Entwurf erstellen.",
      "Der Entwurf hat Namen, Gramm und eine erste Kalorienzahl. Ist der Teller unübersichtlich, fragen wir eine Sache (Öl, Größe, Soße), statt den Rest zu erfinden.",
      "Diese Namen gleichen wir mit veröffentlichten Nährwerttabellen ab: zuerst mit den US-Tabellen, dann mit dem Bundeslebensmittelschlüssel. Bei einem sicheren Treffer nutzen wir die veröffentlichten Kalorien und Makros für die Gramm aus deinem Entwurf.",
      "Du kannst Gramm oder Zutaten ändern, bevor die Mahlzeit zählt. Gespeicherte Mahlzeiten nutzen deine Zahl. Sie senden das Foto nicht erneut.",
    ],
    barcodeTitle: "Strichcode auf der Packung",
    barcode: [
      "Wenn du den Code schon gescannt hast, haben wir die Zahl.",
      "Ist er neu, suchen wir in Open Food Facts, einem öffentlichen Produktkatalog.",
      "Steht dort nichts, versuchen wir FatSecret.",
      "Der nächste Scan desselben Codes nutzt diese Zahl. Packungskalorien kommen vom Etikett, nicht aus der Kamera.",
    ],
    searchTitle: "Suche",
    search:
      "Getippte Suche nutzt dieselben veröffentlichten Nährwerttabellen. Etwa 20.700 Lebensmittel. Öffentliche Daten. Wir verkaufen sie nicht weiter.",
    budgetTitle: "Tägliches Kalorienbudget",
    budget: [
      "Grundumsatz: Mifflin-St-Jeor-Gleichung (Mifflin et al., 1990).",
      "Aktivität: Compendium of Physical Activities (Ainsworth et al., 2011).",
      "Untere Kaloriengrenzen: Dietary Guidelines for Americans (2020-2025).",
    ],
    notTitle: "Was das nicht ist",
    not: [
      "Kein medizinischer Rat. Jeden Eintrag bestätigst du selbst.",
      "Kein Versprechen, dass ein Foto exakt ist. Ein Foto wiegt kein Öl. Du bestätigst den Entwurf.",
      "Kein soziales Netz. Kein Feed. Niemand sonst sieht deinen Teller.",
    ],
    sourcesTitle: "Genannte Quellen",
    usdaLink: "Veröffentlichte USDA-Nährwerttabellen",
    blsLink: "Bundeslebensmittelschlüssel (BLS 4.0), Herausgeber: Max Rubner-Institut, CC BY 4.0",
    privacy: "Wie wir Fotos und Konten speichern, steht in der Datenschutzerklärung.",
  },
  es: {
    title: "De dónde salen los números",
    updated: "Última actualización: 14 de septiembre de 2026",
    intro:
      "Cal Clark registra comidas. Una foto no pesa la salsa. Mostramos las fuentes para que sepas qué cifra es un borrador, cuál viene de una tabla nutricional publicada y cuál escribiste tú.",
    photoTitle: "Foto o una descripción",
    photo: [
      "Haces una foto o escribes lo que comiste. Eso sale del teléfono, va a nuestros servidores en la UE y a OpenAI para esbozar el registro.",
      "El borrador tiene nombres, gramos y una primera cifra de calorías. Si el plato es confuso, preguntamos una sola cosa (aceite, tamaño, salsa) en vez de inventar el resto.",
      "Esos nombres se contrastan con tablas nutricionales publicadas: primero las del gobierno de EE. UU., después la tabla nacional alemana de alimentos. Si el emparejamiento es fiable, usamos esas calorías y macros publicadas con los gramos de tu borrador.",
      "Puedes cambiar gramos o ingredientes antes de que la comida cuente. Las comidas guardadas reutilizan tu cifra. No vuelven a enviar la foto.",
    ],
    barcodeTitle: "Código de barras de un envase",
    barcode: [
      "Si ya escaneaste ese código, tenemos la cifra.",
      "Si es nuevo, lo buscamos en Open Food Facts, un catálogo público de productos.",
      "Si allí no hay coincidencia, probamos FatSecret.",
      "El siguiente escaneo del mismo código usa esa cifra. Las calorías del envase vienen de la etiqueta, no de la cámara.",
    ],
    searchTitle: "Búsqueda",
    search:
      "La búsqueda por texto usa las mismas tablas nutricionales publicadas. Unos 20.700 alimentos. Datos públicos. No los revendemos.",
    budgetTitle: "Presupuesto diario de calorías",
    budget: [
      "Metabolismo basal: ecuación Mifflin-St Jeor (Mifflin et al., 1990).",
      "Actividad: Compendium of Physical Activities (Ainsworth et al., 2011).",
      "Suelos mínimos de calorías: Dietary Guidelines for Americans (2020-2025).",
    ],
    notTitle: "Lo que esto no es",
    not: [
      "No es consejo médico. Tú confirmas cada registro.",
      "No es una promesa de que una foto sea exacta. Una foto no pesa el aceite. Tú confirmas el borrador.",
      "No es una red social. No hay feed. Nadie más ve tu plato.",
    ],
    sourcesTitle: "Fuentes con nombre",
    usdaLink: "Tablas nutricionales publicadas del USDA",
    blsLink: "Base de datos alemana de nutrientes (BLS 4.0), editada por el Max Rubner-Institut, CC BY 4.0",
    privacy: "Cómo guardamos fotos y cuentas está en la política de privacidad.",
  },
};

export function DataSourcesDoc({ locale }: { locale: LegalLocale }) {
  const c = COPY[locale];
  const privacyHref = legalHref(locale, "privacy");
  return (
    <LegalShell
      locale={locale}
      path="data-sources"
      title={c.title}
      updated={c.updated}
      references="data-sources"
    >
      <p>{c.intro}</p>
      <LegalH2>{c.photoTitle}</LegalH2>
      <LegalList>
        {c.photo.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </LegalList>
      <LegalH2>{c.barcodeTitle}</LegalH2>
      <LegalList>
        {c.barcode.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </LegalList>
      <LegalH2>{c.searchTitle}</LegalH2>
      <p>{c.search}</p>
      <LegalH2>{c.budgetTitle}</LegalH2>
      <LegalList>
        {c.budget.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </LegalList>
      <LegalH2>{c.notTitle}</LegalH2>
      <LegalList>
        {c.not.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </LegalList>
      <LegalH2>{c.sourcesTitle}</LegalH2>
      <LegalList>
        <li>
          <a className="text-primary underline underline-offset-2" href="https://fdc.nal.usda.gov">
            {c.usdaLink}
          </a>
        </li>
        <li>
          <a className="text-primary underline underline-offset-2" href="https://blsdb.de">
            {c.blsLink}
          </a>
        </li>
        <li>
          <a
            className="text-primary underline underline-offset-2"
            href="https://world.openfoodfacts.org"
          >
            Open Food Facts
          </a>
        </li>
        <li>
          <a
            className="text-primary underline underline-offset-2"
            href="https://platform.fatsecret.com"
          >
            FatSecret Platform API
          </a>
          {" - "}
          nutrition information provided by fatsecret Platform API
        </li>
        <li>
          <a className="text-primary underline underline-offset-2" href="https://openai.com">
            OpenAI
          </a>
        </li>
      </LegalList>
      <p>
        <Link href={privacyHref} className="text-primary underline underline-offset-2">
          {c.privacy}
        </Link>
      </p>
    </LegalShell>
  );
}
