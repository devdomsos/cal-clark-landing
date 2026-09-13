import type { Locale } from "./config";
import { DEFAULT_LOCALE } from "./config";

export interface Messages {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    why: string;
    how: string;
    sources: string;
    pricing: string;
    faq: string;
    waitlist: string;
    menuOpen: string;
    menuClose: string;
    primary: string;
    mobile: string;
  };
  lang: {
    ariaSelect: string;
    label: string;
  };
  hero: {
    eyebrow: string;
    h1Line1: string;
    h1Line2: string;
    sub: string;
    micro: string;
  };
  phone: {
    estimated: string;
    plateAlt: string;
  };
  waitlist: {
    emailLabel: string;
    placeholder: string;
    submit: string;
    pending: string;
    success: string;
    invalid: string;
    error: string;
  };
  proof: {
    claims: [string, string, string];
    chips: { name: string; kcal: string; alt: string }[];
  };
  why: {
    eyebrow: string;
    title: string;
    sub: string;
    pillars: { title: string; body: string }[];
  };
  how: {
    eyebrow: string;
    title: string;
    steps: { title: string; body: string }[];
    footnote: string;
    sourcesLink: string;
  };
  compare: {
    eyebrow: string;
    title: string;
    oldLabel: string;
    newLabel: string;
    rows: { old: string; next: string }[];
  };
  macros: {
    eyebrow: string;
    title: string;
    body: string;
    leftToday: string;
    protein: string;
    carbs: string;
    fat: string;
  };
  local: {
    eyebrow: string;
    title: string;
    body: string;
    dishes: string[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    sub: string;
    freeTitle: string;
    freeSub: string;
    freePoints: [string, string, string];
    planTitle: string;
    planSub: string;
    planBadge: string;
    planPoints: [string, string, string];
    waitlistLead: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  final: {
    title: string;
    sub: string;
  };
  footer: {
    tagline: string;
    legal: string;
    copyright: string;
  };
  store: {
    appStore: string;
    play: string;
    soon: string;
    coming: string;
  };
}

const EN: Messages = {
  meta: {
    title: "Cal Clark - Photo calorie tracker for real plates",
    description:
      "Lose weight, gain mass or stay healthy. Simple calorie tracking from Cal Clark. 3-day free trial. No ads.",
  },
  nav: {
    why: "Why Cal Clark",
    how: "How it works",
    sources: "Sources",
    pricing: "Pricing",
    faq: "FAQ",
    waitlist: "Join waitlist",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    primary: "Primary",
    mobile: "Mobile",
  },
  lang: {
    ariaSelect: "Choose language",
    label: "Language",
  },
  hero: {
    eyebrow: "Photo calorie tracker",
    h1Line1: "Simple calorie tracking",
    h1Line2: "designed to help you stay on track.",
    sub: "Lose weight, gain mass or stay healthy - whatever your goal is - Cal Clark will help.",
    micro: "3-day free trial. No ads.",
  },
  phone: {
    estimated: "Estimated",
    plateAlt: "A plated meal, ready to be logged in Cal Clark",
  },
  waitlist: {
    emailLabel: "Email address",
    placeholder: "you@email.com",
    submit: "Join the waitlist",
    pending: "Joining…",
    success: "You're on the list. We'll email you the second it's live.",
    invalid: "That doesn't look like a valid email.",
    error: "Something went wrong on our end. Try again in a moment.",
  },
  proof: {
    claims: ["Testing on real phones", "No ads, ever", "Built for real plates"],
    chips: [
      { name: "Pierogi", kcal: "≈ 340 kcal", alt: "Pierogi, an example plate Cal Clark can log" },
      { name: "Cutlet and fries", kcal: "≈ 610 kcal", alt: "Breaded cutlet with fries" },
      { name: "Chicken salad", kcal: "≈ 380 kcal", alt: "Chicken salad" },
      { name: "Berry oatmeal", kcal: "≈ 290 kcal", alt: "Oatmeal with berries" },
      { name: "Open sandwich", kcal: "≈ 260 kcal", alt: "Open sandwich" },
      { name: "Coffee, black", kcal: "≈ 5 kcal", alt: "Black coffee" },
    ],
  },
  why: {
    eyebrow: "Why Cal Clark",
    title: "This is how people actually hit their budget",
    sub: "Not another 40-nutrient database. A log that stays honest and gets faster the more you use it.",
    pillars: [
      {
        title: "Fast",
        body: 'A photo, not a database search. No hunting through forty near-duplicate results just to find "chicken cutlet."',
      },
      {
        title: "Local",
        body: "Understands real plates - pierogi, schnitzel, everyday supermarket food. Not only chicken breast and avocado toast.",
      },
      {
        title: "Honest",
        body: "You confirm the draft. No ads, no fake urgency, no weekly price dressed up to look small.",
      },
      {
        title: "Remembers",
        body: "Correct a meal once. Next time it's one tap. Tracking gets shorter over time - not longer.",
      },
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "Photo. Draft. Confirm.",
    steps: [
      { title: "Snap", body: "Plate, leftovers, lunch out. In frame is enough." },
      {
        title: "We draft",
        body: "Calories plus protein, carbs, fat. If we guessed oil or size, we say so.",
      },
      {
        title: "You finish",
        body: "Looks right - or one tap: bigger, fried, sauce. Grams if you want.",
      },
      {
        title: "It remembers",
        body: "Same breakfast tomorrow: one tap. No second guess.",
      },
    ],
    footnote:
      "A photo is drafted with AI, then checked against published nutrition tables. Packaged barcodes use public product catalogs.",
    sourcesLink: "Where the numbers come from",
  },
  compare: {
    eyebrow: "The difference",
    title: "Database trackers vs. Cal Clark",
    oldLabel: "Database trackers",
    newLabel: "Cal Clark",
    rows: [
      { old: 'Search "chicken cutlet", pick among duplicates', next: "Photo of the plate" },
      { old: "Ads after every save", next: "No ads" },
      { old: "Same typing every morning", next: "Usual breakfast, one tap" },
      {
        old: "Exact-looking number, no idea what was guessed",
        next: "A draft you can actually finish",
      },
    ],
  },
  macros: {
    eyebrow: "On your home screen",
    title: "Calories and macros. That's the whole list.",
    body: "We deliberately skip forty micronutrients, water logs, and recipe boxes. One ring for what's left today, three bars for protein, carbs, and fat. If you want a micronutrient panel, this is the wrong app.",
    leftToday: "kcal left today",
    protein: "Protein",
    carbs: "Carbs",
    fat: "Fat",
  },
  local: {
    eyebrow: "Local plates",
    title: "Understands real plates",
    body: "Not only chicken breast and avocado toast. Home-cooked dinners, bakery counters, and whatever's actually in the fridge.",
    dishes: [
      "Pierogi",
      "Breaded cutlet",
      "Porridge and berries",
      "Weeknight salad",
      "Open sandwich",
      "Coffee, black",
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "3-day free trial. No ads.",
    sub: "Price is shown in the app at checkout via Apple or Google. Cancel anytime in your store settings.",
    freeTitle: "Free",
    freeSub: "Try it before you commit",
    freePoints: [
      "3 days to try photo logging",
      "Recents and usual meals, unlimited",
      "Edit grams on any log, anytime",
    ],
    planTitle: "Yearly",
    planSub: "For everyday logging",
    planBadge: "Best value",
    planPoints: [
      "Unlimited AI photo scans",
      "One clear yearly plan - billed once a year",
      "Never disguised as pennies a day",
    ],
    waitlistLead: "Not live yet - get the price and the download link the day it ships.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Honest answers",
    items: [
      {
        q: "Where do the calorie numbers come from?",
        a: "A photo or description is drafted with AI, then we check food names against published US government nutrition tables on our servers. Packaged barcodes use public product catalogs. You can edit grams. The full walk-through is on Where the numbers come from.",
      },
      {
        q: "Is the photo exact?",
        a: "No. A photo can't see how much oil is in a sauce. We draft the log - you confirm it or tap the one thing you know. Saved meals use your number next time, no hedging.",
      },
      {
        q: "Why not just type everything?",
        a: "A draft that's sometimes off is still faster than a blank diary. Repeat meals shouldn't need a new scan every single day.",
      },
      {
        q: "Do I need a buddy or friends to use it?",
        a: "No. Your log is private. There's no feed, no invite, no one grading your dinner.",
      },
      {
        q: "Are there ads?",
        a: "None. Not during the trial, not after you save a meal.",
      },
      {
        q: "What languages does it support?",
        a: "Polish, German, Spanish, and English, with dish recognition tuned per market - not just US chicken-and-rice photos.",
      },
      {
        q: "When can I download it?",
        a: "We're finishing testing now. Join the list and we'll email you the moment it's live on iOS and Android.",
      },
      {
        q: "How much does it cost?",
        a: "3-day free trial, then a plan billed through Apple or Google. The price on the payment screen is the billed amount, not a weekly equivalent. Cancel in your phone's store settings; deleting the app does not cancel. Walk-through is on Support.",
      },
      {
        q: "Do you sell my food photos?",
        a: "No. Meal photos stay under your account. Details are on the privacy page.",
      },
    ],
  },
  final: {
    title: "Photograph the plate. We'll fill in the log.",
    sub: "You confirm. Tomorrow that breakfast is one tap. Join the list and be first in when we launch.",
  },
  footer: {
    tagline: "Photo calorie tracker for real plates. It remembers your meals.",
    legal: "Legal",
    copyright: "© 2026 Cal Clark. Not medical advice. Not a substitute for a dietitian.",
  },
  store: {
    appStore: "Download on the App Store",
    play: "Get it on Google Play",
    soon: "Soon",
    coming: "coming soon, join the waitlist instead",
  },
};

const PL: Messages = {
  meta: {
    title: "Cal Clark - Licznik kalorii ze zdjęcia",
    description:
      "Schudnij, nabierz masy albo utrzymaj wagę. Prosty licznik kalorii od Cal Clark. 3 dni za darmo. Bez reklam.",
  },
  nav: {
    why: "Dlaczego Cal Clark",
    how: "Jak to działa",
    sources: "Źródła",
    pricing: "Ceny",
    faq: "FAQ",
    waitlist: "Lista oczekujących",
    menuOpen: "Otwórz menu",
    menuClose: "Zamknij menu",
    primary: "Główne",
    mobile: "Mobilne",
  },
  lang: {
    ariaSelect: "Wybierz język",
    label: "Język",
  },
  hero: {
    eyebrow: "Licznik kalorii ze zdjęcia",
    h1Line1: "Prosty licznik kalorii,",
    h1Line2: "który pomaga trzymać się planu.",
    sub: "Schudnij, nabierz masy albo utrzymaj wagę - cokolwiek jest Twoim celem - Cal Clark w tym pomoże.",
    micro: "3 dni za darmo. Bez reklam.",
  },
  phone: {
    estimated: "Szkic",
    plateAlt: "Talerz gotowy do zapisania w Cal Clark",
  },
  waitlist: {
    emailLabel: "Adres e-mail",
    placeholder: "ty@email.com",
    submit: "Zapisz się na listę",
    pending: "Zapisuję…",
    success: "Jesteś na liście. Napiszemy, gdy aplikacja wejdzie do sklepów.",
    invalid: "To nie wygląda na poprawny e-mail.",
    error: "Coś poszło nie tak u nas. Spróbuj za chwilę.",
  },
  proof: {
    claims: ["Testy na prawdziwych telefonach", "Bez reklam", "Pod prawdziwe talerze"],
    chips: [
      { name: "Pierogi", kcal: "≈ 340 kcal", alt: "Pierogi - przykład talerza, który Cal Clark może zapisać" },
      { name: "Schabowy z frytkami", kcal: "≈ 610 kcal", alt: "Kotlet schabowy z frytkami" },
      { name: "Sałatka z kurczakiem", kcal: "≈ 380 kcal", alt: "Sałatka z kurczakiem" },
      { name: "Owsianka z owocami", kcal: "≈ 290 kcal", alt: "Owsianka z owocami" },
      { name: "Kanapka", kcal: "≈ 260 kcal", alt: "Kanapka" },
      { name: "Czarna kawa", kcal: "≈ 5 kcal", alt: "Czarna kawa" },
    ],
  },
  why: {
    eyebrow: "Dlaczego Cal Clark",
    title: "Tak naprawdę trafia się w budżet",
    sub: "Nie kolejna baza 40 składników. Dziennik, który zostaje uczciwy i z każdym dniem robi się szybszy.",
    pillars: [
      {
        title: "Szybko",
        body: "Zdjęcie, nie szukanie w bazie. Żadnego przekopywania czterdziestu podobnych wyników, żeby znaleźć schabowego.",
      },
      {
        title: "Lokalnie",
        body: "Rozumie prawdziwy talerz - pierogi, schabowy, jedzenie z Biedronki i Lidla. Nie tylko chicken breast i avocado toast.",
      },
      {
        title: "Uczciwie",
        body: "Ty zatwierdzasz szkic. Bez reklam, bez sztucznego pośpiechu, bez ceny tygodniowej udającej drobniaki.",
      },
      {
        title: "Pamięta",
        body: "Popraw posiłek raz. Następnym razem - jedno stuknięcie. Śledzenie robi się krótsze, nie dłuższe.",
      },
    ],
  },
  how: {
    eyebrow: "Jak to działa",
    title: "Zdjęcie. Szkic. Potwierdzenie.",
    steps: [
      { title: "Zrób zdjęcie", body: "Talerz, resztki, lunch na mieście. Byle w kadrze." },
      {
        title: "My wypełniamy",
        body: "Kalorie plus białko, węgle, tłuszcz. Jeśli zgadujemy olej albo wielkość, mówimy o tym.",
      },
      {
        title: "Ty domykasz",
        body: "Pasuje - albo jedno stuknięcie: większe, smażone, sos. Gramy, jeśli chcesz.",
      },
      {
        title: "Pamięta",
        body: "To samo śniadanie jutro: jedno stuknięcie. Bez drugiego zgadywania.",
      },
    ],
    footnote:
      "Szkic ze zdjęcia robi AI, potem sprawdzamy go z opublikowanymi tabelami żywieniowymi. Kody kreskowe: publiczne katalogi produktów.",
    sourcesLink: "Skąd biorą się liczby",
  },
  compare: {
    eyebrow: "Różnica",
    title: "Licznik z bazą vs. Cal Clark",
    oldLabel: "Liczniki z bazą produktów",
    newLabel: "Cal Clark",
    rows: [
      { old: "Szukaj „schabowy”, wybieraj spośród duplikatów", next: "Zdjęcie schabowego" },
      { old: "Reklamy po każdym zapisie", next: "Bez reklam" },
      { old: "To samo wpisywanie co rano", next: "Zwyczajowe śniadanie, jedno stuknięcie" },
      {
        old: "Liczba wygląda na dokładną, nie wiadomo co było zgadnięte",
        next: "Szkic, który naprawdę domykasz",
      },
    ],
  },
  macros: {
    eyebrow: "Na ekranie głównym",
    title: "Kalorie i makro. Koniec listy.",
    body: "Świadomie pomijamy czterdzieści mikroskładników, licznik wody i skrzynkę przepisów. Jeden pierścień na to, co zostało dziś, trzy belki na białko, węgle i tłuszcz. Jeśli chcesz panel witamin, to nie ta aplikacja.",
    leftToday: "kcal zostało dziś",
    protein: "Białko",
    carbs: "Węgle",
    fat: "Tłuszcz",
  },
  local: {
    eyebrow: "Lokalny talerz",
    title: "Rozumie polski talerz",
    body: "Nie tylko chicken breast i avocado toast. Obiady z domu, lady piekarni i to, co naprawdę jest w lodówce.",
    dishes: [
      "Pierogi",
      "Kotlet schabowy",
      "Owsianka z owocami",
      "Sałatka na szybko",
      "Kanapka",
      "Czarna kawa",
    ],
  },
  pricing: {
    eyebrow: "Ceny",
    title: "3 dni za darmo. Bez reklam.",
    sub: "Cenę widzisz w aplikacji przy płatności przez Apple albo Google. Anulujesz w ustawieniach sklepu.",
    freeTitle: "Za darmo",
    freeSub: "Wypróbuj, zanim się zobowiążesz",
    freePoints: [
      "3 dni na wypróbowanie zapisu ze zdjęcia",
      "Ostatnie i zwyczajowe posiłki bez limitu",
      "Edycja gramów w każdym wpisie",
    ],
    planTitle: "Rocznie",
    planSub: "Na codzienne zapisywanie",
    planBadge: "Najlepsza cena",
    planPoints: [
      "Nielimitowane skany AI ze zdjęcia",
      "Jeden jasny plan roczny - płatność raz w roku",
      "Nigdy jako grosze za tydzień",
    ],
    waitlistLead: "Jeszcze nie w sklepach - cenę i link do pobrania dostaniesz w dniu startu.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Uczciwe odpowiedzi",
    items: [
      {
        q: "Skąd biorą się kalorie?",
        a: "Zdjęcie albo opis szkicuje AI, potem nazwy dań sprawdzamy w opublikowanych tabelach żywieniowych rządu USA na naszych serwerach. Kody kreskowe: publiczne katalogi produktów. Gramy możesz zmienić. Cały opis jest na stronie Skąd biorą się liczby.",
      },
      {
        q: "Czy zdjęcie jest dokładne?",
        a: "Nie. Zdjęcie nie widzi, ile oleju jest w sosie. Robimy szkic wpisu - Ty potwierdzasz albo stukasz w to, co wiesz. Zapisane posiłki używają Twojej liczby następnym razem.",
      },
      {
        q: "Czemu nie wpisywać wszystkiego ręcznie?",
        a: "Szkic, który czasem mija się z prawdą, i tak jest szybszy niż pusty dziennik. Powtarzany posiłek nie powinien wymagać nowego skanu codziennie.",
      },
      {
        q: "Czy potrzebuję znajomych w aplikacji?",
        a: "Nie. Dziennik jest prywatny. Nie ma feedu, zaproszeń ani oceniania kolacji.",
      },
      {
        q: "Czy są reklamy?",
        a: "Nie. Ani w okresie próbnym, ani po zapisie posiłku.",
      },
      {
        q: "Jakie języki są obsługiwane?",
        a: "Polski, niemiecki, hiszpański i angielski, z rozpoznawaniem dań pod dany rynek - nie tylko amerykański kurczak z ryżem.",
      },
      {
        q: "Kiedy będzie do pobrania?",
        a: "Kończymy testy. Zapisz się na listę, a wyślemy maila, gdy wejdzie na iOS i Androida.",
      },
      {
        q: "Ile to kosztuje?",
        a: "3 dni za darmo, potem plan przez Apple albo Google. Kwota na ekranie płatności to kwota z faktury, nie ekwiwalent tygodniowy. Anulujesz w ustawieniach sklepu w telefonie; usunięcie aplikacji nie anuluje. Opis jest na stronie Pomoc.",
      },
      {
        q: "Czy sprzedajecie moje zdjęcia jedzenia?",
        a: "Nie. Zdjęcia posiłków zostają na Twoim koncie. Szczegóły są w polityce prywatności.",
      },
    ],
  },
  final: {
    title: "Zrób zdjęcie talerza. My wypełniamy dziennik.",
    sub: "Ty potwierdzasz. Jutro to śniadanie to jedno stuknięcie. Zapisz się na listę i wejdź pierwszy, gdy startujemy.",
  },
  footer: {
    tagline: "Licznik kalorii ze zdjęcia. Pamięta twoje posiłki.",
    legal: "Informacje prawne",
    copyright: "© 2026 Cal Clark. To nie porada medyczna. To nie zastępuje dietetyka.",
  },
  store: {
    appStore: "Pobierz w App Store",
    play: "Pobierz w Google Play",
    soon: "Wkrótce",
    coming: "wkrótce, na razie lista oczekujących",
  },
};

const DE: Messages = {
  meta: {
    title: "Cal Clark - Kalorienzähler per Foto",
    description:
      "Abnehmen, zunehmen oder gesund bleiben. Einfaches Kalorienzählen von Cal Clark. 3 Tage kostenlos. Keine Werbung.",
  },
  nav: {
    why: "Warum Cal Clark",
    how: "So funktioniert's",
    sources: "Quellen",
    pricing: "Preise",
    faq: "FAQ",
    waitlist: "Warteliste",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    primary: "Hauptnavigation",
    mobile: "Mobil",
  },
  lang: {
    ariaSelect: "Sprache wählen",
    label: "Sprache",
  },
  hero: {
    eyebrow: "Kalorienzähler per Foto",
    h1Line1: "Einfaches Kalorienzählen,",
    h1Line2: "das dich auf Kurs hält.",
    sub: "Abnehmen, zunehmen oder gesund bleiben - egal was dein Ziel ist - Cal Clark hilft.",
    micro: "3 Tage kostenlos. Keine Werbung.",
  },
  phone: {
    estimated: "Entwurf",
    plateAlt: "Ein Teller, bereit zum Eintragen in Cal Clark",
  },
  waitlist: {
    emailLabel: "E-Mail-Adresse",
    placeholder: "du@email.com",
    submit: "Auf die Warteliste",
    pending: "Wird eingetragen…",
    success: "Du stehst drauf. Wir mailen, sobald die App live ist.",
    invalid: "Das sieht nicht nach einer gültigen E-Mail aus.",
    error: "Bei uns ist etwas schiefgelaufen. Versuch es gleich noch einmal.",
  },
  proof: {
    claims: ["Tests auf echten Handys", "Keine Werbung", "Für echte Teller"],
    chips: [
      { name: "Pierogi", kcal: "≈ 340 kcal", alt: "Pierogi - Beispielteller für Cal Clark" },
      { name: "Schnitzel mit Pommes", kcal: "≈ 610 kcal", alt: "Schnitzel mit Pommes" },
      { name: "Hähnchensalat", kcal: "≈ 380 kcal", alt: "Hähnchensalat" },
      { name: "Haferbrei mit Beeren", kcal: "≈ 290 kcal", alt: "Haferbrei mit Beeren" },
      { name: "Belegtes Brot", kcal: "≈ 260 kcal", alt: "Belegtes Brot" },
      { name: "Schwarzer Kaffee", kcal: "≈ 5 kcal", alt: "Schwarzer Kaffee" },
    ],
  },
  why: {
    eyebrow: "Warum Cal Clark",
    title: "So trifft man das Budget wirklich",
    sub: "Keine weitere Datenbank mit 40 Nährstoffen. Ein Log, das ehrlich bleibt und mit der Zeit schneller wird.",
    pillars: [
      {
        title: "Schnell",
        body: "Ein Foto, keine Datenbanksuche. Kein Durchklicken durch vierzig Fast-Duplikate, nur um Schnitzel zu finden.",
      },
      {
        title: "Lokal",
        body: "Kennt echte Teller - Schnitzel, Döner, Supermarktessen. Nicht nur Hähnchenbrust und Avocado-Toast.",
      },
      {
        title: "Ehrlich",
        body: "Du bestätigst den Entwurf. Keine Werbung, keine Fake-Eile, kein Wochenpreis, der klein wirken soll.",
      },
      {
        title: "Merkt sich das",
        body: "Korrigiere ein Gericht einmal. Nächstes Mal ein Tipp. Tracking wird kürzer - nicht länger.",
      },
    ],
  },
  how: {
    eyebrow: "So funktioniert's",
    title: "Foto. Entwurf. Bestätigung.",
    steps: [
      { title: "Foto machen", body: "Teller, Reste, Mittagessen außer Haus. Im Bild reicht." },
      {
        title: "Wir setzen auf",
        body: "Kalorien plus Protein, Kohlenhydrate, Fett. Wenn wir Öl oder Größe raten, sagen wir es.",
      },
      {
        title: "Du machst fertig",
        body: "Passt - oder ein Tipp: größer, gebraten, Sauce. Gramm, wenn du willst.",
      },
      {
        title: "Es merkt sich das",
        body: "Dasselbe Frühstück morgen: ein Tipp. Kein zweites Raten.",
      },
    ],
    footnote:
      "Ein Foto wird per KI entworfen und dann mit veröffentlichten Nährwerttabellen abgeglichen. Strichcodes: öffentliche Produktkataloge.",
    sourcesLink: "Woher die Zahlen kommen",
  },
  compare: {
    eyebrow: "Der Unterschied",
    title: "Datenbank-Tracker vs. Cal Clark",
    oldLabel: "Tracker mit Produktdatenbank",
    newLabel: "Cal Clark",
    rows: [
      { old: "„Schnitzel“ suchen, Duplikate durchklicken", next: "Foto vom Schnitzel" },
      { old: "Werbung nach jedem Speichern", next: "Keine Werbung" },
      { old: "Jeden Morgen dasselbe Tippen", next: "Übliches Frühstück, ein Tipp" },
      {
        old: "Sieht exakt aus, niemand weiß, was geraten war",
        next: "Ein Entwurf, den du wirklich abschließt",
      },
    ],
  },
  macros: {
    eyebrow: "Auf dem Startbildschirm",
    title: "Kalorien und Makros. Mehr brauchst du nicht.",
    body: "Wir lassen vierzig Mikronährstoffe, Wasserzähler und Rezeptboxen bewusst weg. Ein Ring für den Rest heute, drei Balken für Protein, Kohlenhydrate und Fett. Wer ein Vitaminpanel will, ist hier falsch.",
    leftToday: "kcal übrig heute",
    protein: "Protein",
    carbs: "Kohlenhydrate",
    fat: "Fett",
  },
  local: {
    eyebrow: "Lokale Teller",
    title: "Kennt deutsches Essen",
    body: "Nicht nur Fitness-Meal-Prep. Hausmannskost, Bäckereitheke und das, was wirklich im Kühlschrank steht.",
    dishes: [
      "Pierogi",
      "Schnitzel",
      "Haferbrei mit Beeren",
      "Alltagssalat",
      "Belegtes Brot",
      "Schwarzer Kaffee",
    ],
  },
  pricing: {
    eyebrow: "Preise",
    title: "3 Tage kostenlos. Keine Werbung.",
    sub: "Den Preis siehst du in der App vor dem Kauf über Apple oder Google. Kündigung in den Store-Einstellungen.",
    freeTitle: "Kostenlos",
    freeSub: "Erst testen, dann entscheiden",
    freePoints: [
      "3 Tage, um Foto-Logging zu testen",
      "Zuletzt und übliche Gerichte ohne Limit",
      "Gramm in jedem Eintrag ändern",
    ],
    planTitle: "Jährlich",
    planSub: "Fürs tägliche Loggen",
    planBadge: "Bester Preis",
    planPoints: [
      "Unbegrenzte KI-Fotosans",
      "Ein klares Jahresabo - einmal im Jahr abgerechnet",
      "Nie als Kleingeld pro Woche verkauft",
    ],
    waitlistLead: "Noch nicht im Store - Preis und Download-Link am Starttag.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Ehrliche Antworten",
    items: [
      {
        q: "Woher kommen die Kalorienzahlen?",
        a: "Foto oder Beschreibung entwirft die KI. Danach gleichen wir Namen mit veröffentlichten US-Nährwerttabellen auf unseren Servern ab. Strichcodes: öffentliche Produktkataloge. Gramm kannst du ändern. Der ganze Ablauf steht unter Woher die Zahlen kommen.",
      },
      {
        q: "Ist das Foto exakt?",
        a: "Nein. Ein Foto sieht nicht, wie viel Öl in der Sauce ist. Wir setzen den Eintrag auf - du bestätigst oder tippst, was du weißt. Gespeicherte Gerichte nutzen beim nächsten Mal deine Zahl.",
      },
      {
        q: "Warum nicht alles tippen?",
        a: "Ein Entwurf, der manchmal danebenliegt, ist trotzdem schneller als ein leeres Tagebuch. Wiederholte Gerichte sollten keinen neuen Scan brauchen.",
      },
      {
        q: "Brauche ich Freunde in der App?",
        a: "Nein. Dein Log ist privat. Kein Feed, keine Einladung, niemand bewertet dein Abendessen.",
      },
      {
        q: "Gibt es Werbung?",
        a: "Keine. Weder in der Testphase noch nach dem Speichern.",
      },
      {
        q: "Welche Sprachen?",
        a: "Polnisch, Deutsch, Spanisch und Englisch, mit Gerichten je Markt - nicht nur US-Hähnchen mit Reis.",
      },
      {
        q: "Wann kann ich sie laden?",
        a: "Wir sind in den letzten Tests. Trag dich ein, wir mailen, sobald iOS und Android live sind.",
      },
      {
        q: "Was kostet das?",
        a: "3 Tage kostenlos, dann ein Abo über Apple oder Google. Der Betrag auf dem Bezahlschirm ist der Rechnungsbetrag, kein Wochenäquivalent. Kündigung in den Store-Einstellungen; Deinstallieren kündigt nicht. Ablauf auf der Hilfeseite.",
      },
      {
        q: "Verkauft ihr meine Essensfotos?",
        a: "Nein. Fotos bleiben unter deinem Konto. Details in der Datenschutzerklärung.",
      },
    ],
  },
  final: {
    title: "Foto vom Teller. Wir setzen den Eintrag auf.",
    sub: "Du bestätigst. Morgen ist dasselbe Frühstück ein Tipp. Auf die Liste, und du bist als Erstes dabei.",
  },
  footer: {
    tagline: "Kalorienzähler per Foto. Er merkt sich deine Gerichte.",
    legal: "Rechtliches",
    copyright: "© 2026 Cal Clark. Kein medizinischer Rat. Kein Ersatz für eine Ernährungsberatung.",
  },
  store: {
    appStore: "Laden im App Store",
    play: "Jetzt bei Google Play",
    soon: "Bald",
    coming: "bald, bis dahin auf die Warteliste",
  },
};

const ES: Messages = {
  meta: {
    title: "Cal Clark - Contador de calorías por foto",
    description:
      "Pierde peso, gana masa o mantente sano. Un contador de calorías simple de Cal Clark. 3 días de prueba gratis. Sin anuncios.",
  },
  nav: {
    why: "Por qué Cal Clark",
    how: "Cómo funciona",
    sources: "Fuentes",
    pricing: "Precios",
    faq: "FAQ",
    waitlist: "Lista de espera",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    primary: "Principal",
    mobile: "Móvil",
  },
  lang: {
    ariaSelect: "Elegir idioma",
    label: "Idioma",
  },
  hero: {
    eyebrow: "Contador de calorías por foto",
    h1Line1: "Un contador de calorías simple,",
    h1Line2: "pensado para que sigas el plan.",
    sub: "Pierde peso, gana masa o mantente sano - da igual el objetivo - Cal Clark te ayuda.",
    micro: "3 días de prueba gratis. Sin anuncios.",
  },
  phone: {
    estimated: "Borrador",
    plateAlt: "Un plato listo para registrar en Cal Clark",
  },
  waitlist: {
    emailLabel: "Correo electrónico",
    placeholder: "tu@email.com",
    submit: "Apuntarme a la lista",
    pending: "Apuntando…",
    success: "Estás en la lista. Te escribiremos en cuanto esté en las tiendas.",
    invalid: "Eso no parece un correo válido.",
    error: "Algo ha fallado en nuestro lado. Prueba en un momento.",
  },
  proof: {
    claims: ["Pruebas en móviles de verdad", "Sin anuncios", "Hecho para platos reales"],
    chips: [
      { name: "Pierogi", kcal: "≈ 340 kcal", alt: "Pierogi, un plato de ejemplo que Cal Clark puede registrar" },
      { name: "Empanado con patatas", kcal: "≈ 610 kcal", alt: "Empanado con patatas" },
      { name: "Ensalada de pollo", kcal: "≈ 380 kcal", alt: "Ensalada de pollo" },
      { name: "Avena con frutos", kcal: "≈ 290 kcal", alt: "Avena con frutos" },
      { name: "Tostada", kcal: "≈ 260 kcal", alt: "Tostada" },
      { name: "Café solo", kcal: "≈ 5 kcal", alt: "Café solo" },
    ],
  },
  why: {
    eyebrow: "Por qué Cal Clark",
    title: "Así se llega de verdad al presupuesto",
    sub: "No otra base de 40 nutrientes. Un diario que se mantiene honesto y se hace más rápido con el uso.",
    pillars: [
      {
        title: "Rápido",
        body: "Una foto, no una búsqueda en la base. Sin peinar cuarenta resultados casi iguales para encontrar un empanado.",
      },
      {
        title: "Local",
        body: "Entiende platos reales - pierogi, schnitzel, comida de supermercado. No solo pechuga de pollo y tostada de aguacate.",
      },
      {
        title: "Honesto",
        body: "Tú confirmas el borrador. Sin anuncios, sin urgencia falsa, sin un precio semanal disfrazado de céntimos.",
      },
      {
        title: "Lo recuerda",
        body: "Corrige una comida una vez. La siguiente, un toque. El registro se acorta con el tiempo, no se alarga.",
      },
    ],
  },
  how: {
    eyebrow: "Cómo funciona",
    title: "Foto. Borrador. Confirmación.",
    steps: [
      { title: "Haz la foto", body: "El plato, las sobras, la comida fuera. Con que entre en el encuadre basta." },
      {
        title: "Nosotros rellenamos",
        body: "Calorías más proteína, hidratos, grasa. Si estimamos el aceite o el tamaño, lo decimos.",
      },
      {
        title: "Tú cierras",
        body: "Cuadra - o un toque: más grande, frito, salsa. Gramos si quieres.",
      },
      {
        title: "Lo recuerda",
        body: "El mismo desayuno mañana: un toque. Sin volver a adivinar.",
      },
    ],
    footnote:
      "La foto la esboza la IA y luego se contrasta con tablas nutricionales publicadas. Códigos de barras: catálogos públicos de productos.",
    sourcesLink: "De dónde salen los números",
  },
  compare: {
    eyebrow: "La diferencia",
    title: "Contadores con base vs. Cal Clark",
    oldLabel: "Contadores con base de productos",
    newLabel: "Cal Clark",
    rows: [
      { old: "Buscar «empanado» y elegir entre duplicados", next: "Foto del plato" },
      { old: "Anuncios después de cada guardado", next: "Sin anuncios" },
      { old: "El mismo tecleo cada mañana", next: "El desayuno de siempre, un toque" },
      {
        old: "Un número que parece exacto, sin saber qué se adivinó",
        next: "Un borrador que sí puedes cerrar",
      },
    ],
  },
  macros: {
    eyebrow: "En la pantalla de inicio",
    title: "Calorías y macros. Se acaba la lista.",
    body: "Dejamos fuera a propósito cuarenta micronutrientes, el contador de agua y las recetas. Un anillo para lo que queda hoy, tres barras para proteína, hidratos y grasa. Si quieres un panel de vitaminas, esta no es tu app.",
    leftToday: "kcal quedan hoy",
    protein: "Proteína",
    carbs: "Hidratos",
    fat: "Grasa",
  },
  local: {
    eyebrow: "Platos de aquí",
    title: "Entiende platos reales",
    body: "No solo pechuga de pollo y tostada de aguacate. Cenas de casa, mostrador de panadería y lo que hay de verdad en la nevera.",
    dishes: [
      "Pierogi",
      "Empanado",
      "Avena con frutos",
      "Ensalada entre semana",
      "Tostada",
      "Café solo",
    ],
  },
  pricing: {
    eyebrow: "Precios",
    title: "3 días de prueba gratis. Sin anuncios.",
    sub: "El precio se ve en la app al pagar con Apple o Google. Cancela cuando quieras en los ajustes de la tienda.",
    freeTitle: "Gratis",
    freeSub: "Prueba antes de comprometerte",
    freePoints: [
      "3 días para probar el registro por foto",
      "Recientes y comidas de siempre, sin límite",
      "Edita gramos en cualquier registro",
    ],
    planTitle: "Anual",
    planSub: "Para registrar cada día",
    planBadge: "Mejor precio",
    planPoints: [
      "Análisis de IA por foto sin límite",
      "Un plan anual claro - se cobra una vez al año",
      "Nunca disfrazado de céntimos al día",
    ],
    waitlistLead: "Aún no está en las tiendas - el precio y el enlace, el día que salga.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Respuestas honestas",
    items: [
      {
        q: "¿De dónde salen las calorías?",
        a: "La foto o la descripción las esboza la IA; luego contrastamos los nombres con tablas nutricionales publicadas del gobierno de EE. UU. en nuestros servidores. Códigos de barras: catálogos públicos de productos. Puedes editar los gramos. El recorrido completo está en De dónde salen los números.",
      },
      {
        q: "¿La foto es exacta?",
        a: "No. Una foto no ve cuánto aceite hay en la salsa. Hacemos el borrador - tú confirmas o tocas lo que sí sabes. Las comidas guardadas usan tu número la próxima vez.",
      },
      {
        q: "¿Por qué no escribirlo todo a mano?",
        a: "Un borrador que a veces se equivoca sigue siendo más rápido que un diario vacío. Una comida repetida no debería pedir un análisis nuevo cada día.",
      },
      {
        q: "¿Hace falta tener amigos en la app?",
        a: "No. Tu diario es privado. No hay feed, invitaciones ni nadie puntúa tu cena.",
      },
      {
        q: "¿Hay anuncios?",
        a: "Ninguno. Ni en la prueba ni después de guardar una comida.",
      },
      {
        q: "¿Qué idiomas admite?",
        a: "Polaco, alemán, español e inglés, con platos ajustados a cada mercado - no solo pollo con arroz de menú estadounidense.",
      },
      {
        q: "¿Cuándo se podrá descargar?",
        a: "Estamos cerrando las pruebas. Apúntate y te escribiremos en cuanto esté en iOS y Android.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "3 días de prueba gratis, luego un plan cobrado por Apple o Google. El importe de la pantalla de pago es el facturado, no un equivalente semanal. Cancela en los ajustes de la tienda del teléfono; borrar la app no cancela. El recorrido está en Ayuda.",
      },
      {
        q: "¿Vendéis mis fotos de comida?",
        a: "No. Las fotos de las comidas quedan en tu cuenta. El detalle está en la política de privacidad.",
      },
    ],
  },
  final: {
    title: "Haz la foto del plato. Nosotros rellenamos el diario.",
    sub: "Tú confirmas. Mañana ese desayuno es un toque. Apúntate y entra el primero cuando lancemos.",
  },
  footer: {
    tagline: "Contador de calorías por foto. Recuerda tus comidas.",
    legal: "Legal",
    copyright: "© 2026 Cal Clark. No es consejo médico. No sustituye a un dietista.",
  },
  store: {
    appStore: "Descargar en App Store",
    play: "Disponible en Google Play",
    soon: "Pronto",
    coming: "próximamente; mientras tanto, la lista de espera",
  },
};

const CATALOG: Record<Locale, Messages> = {
  en: EN,
  pl: PL,
  de: DE,
  es: ES,
};

export function getMessages(locale: Locale): Messages {
  return CATALOG[locale] ?? CATALOG[DEFAULT_LOCALE];
}
