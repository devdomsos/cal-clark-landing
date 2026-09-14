import type { Locale } from "./config";
import { DEFAULT_LOCALE } from "./config";

type Item = { title: string; body: string };

export interface Messages {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    how: string;
    goals: string;
    pricing: string;
    faq: string;
    waitlist: string;
    menuOpen: string;
    menuClose: string;
    primary: string;
    mobile: string;
    soon: string;
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
  /** Strings drawn inside the phone. Copied from the app's own i18n bundles. */
  app: {
    diary: string;
    progress: string;
    profile: string;
    calories: string;
    left: string;
    weeklyBudget: string;
    weeklyLeft: string;
    carbs: string;
    protein: string;
    fats: string;
    recentlyLogged: string;
    analyzing: string;
    ingredients: string;
    addMore: string;
    fix: string;
    looksRight: string;
    photo: string;
    mealName: string;
    ingredientNames: [string, string, string, string];
    earlierMeal: string;
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
  plates: {
    eyebrow: string;
    title: string;
    sub: string;
    dishes: [string, string, string, string, string, string, string, string, string, string, string, string];
  };
  how: {
    eyebrow: string;
    title: string;
    steps: [Item, Item, Item];
    alt: string;
    sourcesNote: string;
    sourcesLink: string;
  };
  goals: {
    eyebrow: string;
    title: string;
    sub: string;
    items: [Item, Item, Item, Item];
    alts: [string, string, string, string];
  };
  life: {
    title: string;
    sub: string;
    alt: string;
    cardName: string;
  };
  trust: {
    eyebrow: string;
    title: string;
    claims: [string, string, string];
    link: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    sub: string;
    points: [string, string, string, string, string];
  };
  faq: {
    eyebrow: string;
    title: string;
    subPrefix: string;
    items: { q: string; a: string }[];
  };
  final: {
    title: string;
    sub: string;
    alt: string;
  };
  footer: {
    tagline: string;
    legal: string;
    copyright: string;
  };
}

const EN: Messages = {
  meta: {
    title: "Cal Clark - Simple calorie tracking for every goal",
    description:
      "Take a photo of your meal and see calories and macros in seconds. Lose weight, gain mass or stay healthy with Cal Clark. 3-day free trial. No ads.",
  },
  nav: {
    how: "How it works",
    goals: "Goals",
    pricing: "Pricing",
    faq: "FAQ",
    waitlist: "Join the waitlist",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    primary: "Primary",
    mobile: "Mobile",
    soon: "Coming soon to iOS and Android",
  },
  lang: {
    ariaSelect: "Choose language",
    label: "Language",
  },
  hero: {
    eyebrow: "Coming soon to iOS and Android",
    h1Line1: "Simple calorie tracking",
    h1Line2: "designed to help you stay on track.",
    sub: "Lose weight, gain mass or stay healthy - whatever your goal is - Cal Clark will help.",
    micro: "3-day free trial. No ads.",
  },
  app: {
    diary: "Diary",
    progress: "Progress",
    profile: "Profile",
    calories: "Calories",
    left: "left",
    weeklyBudget: "Weekly budget",
    weeklyLeft: "{calories} kcal left",
    carbs: "Carbs",
    protein: "Protein",
    fats: "Fats",
    recentlyLogged: "Recently logged",
    analyzing: "Analyzing...",
    ingredients: "Ingredients",
    addMore: "Add more",
    fix: "Fix",
    looksRight: "Looks right",
    photo: "Photo",
    mealName: "Salmon, rice and avocado",
    ingredientNames: ["Salmon fillet", "Jasmine rice", "Avocado", "Broccolini and tomatoes"],
    earlierMeal: "Yogurt with granola",
    plateAlt: "Salmon with rice, avocado and broccolini, photographed in Cal Clark",
  },
  waitlist: {
    emailLabel: "Email address",
    placeholder: "you@email.com",
    submit: "Join the waitlist",
    pending: "Joining…",
    success: "You're on the list. We'll email you as soon as Cal Clark is live.",
    invalid: "That doesn't look like a valid email.",
    error: "Something went wrong on our end. Try again in a moment.",
  },
  plates: {
    eyebrow: "Every meal",
    title: "Breakfast to dinner. Home or out.",
    sub: "Take a photo of whatever is on your plate and see the calories and macros in seconds.",
    dishes: [
      "Avocado toast with eggs",
      "Yogurt, granola and berries",
      "Poke bowl",
      "Pierogi",
      "Schnitzel and potato salad",
      "Tortilla and pan con tomate",
      "Pesto pasta with chicken",
      "Steak and potatoes",
      "Sushi set",
      "Burger and fries",
      "Smoothie and oats",
      "Chicken, rice and sweet potato",
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "From plate to progress.",
    steps: [
      {
        title: "Take a photo",
        body: "Point your camera at your plate. Cal Clark does the rest.",
      },
      {
        title: "See what's on your plate",
        body: "Every ingredient with its calories, protein, carbs and fat. Change a portion with one tap.",
      },
      {
        title: "Stay on track all day",
        body: "See what you've eaten and what's left for today, with calories and macros side by side.",
      },
    ],
    alt: "No photo? Describe your meal, scan a barcode or pick a saved meal.",
    sourcesNote: "Nutrition values are checked against published food composition tables.",
    sourcesLink: "Where the numbers come from",
  },
  goals: {
    eyebrow: "Your goal",
    title: "Your goal. Your way.",
    sub: "Cal Clark sets calorie and macro targets for the goal you choose, then helps you reach them day after day.",
    items: [
      {
        title: "Lose weight",
        body: "A clear daily calorie budget that still leaves room for the food you love.",
      },
      {
        title: "Gain mass",
        body: "Eat enough, every day. Keep calories and protein in view while you build.",
      },
      {
        title: "Fuel your training",
        body: "Hit your protein on training days and recover with the right numbers.",
      },
      {
        title: "Stay healthy",
        body: "Understand what you eat and keep a balance that feels easy to maintain.",
      },
    ],
    alts: [
      "Woman photographing her lunch bowl after a morning run",
      "Man eating a meal-prep lunch at the gym",
      "Woman resting between sets at the gym",
      "Couple cooking a healthy dinner together",
    ],
  },
  life: {
    title: "Made for the way you really eat.",
    sub: "Breakfast at home, lunch at your desk, dinner with friends. Log it in seconds and get back to the moment.",
    alt: "Friends sharing dinner at a neighborhood restaurant",
    cardName: "Pasta night",
  },
  trust: {
    eyebrow: "Privacy",
    title: "Your diary stays yours.",
    claims: ["No ads", "We never sell your meal photos", "Delete your account any time"],
    link: "Read our privacy policy",
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Try everything free for 3 days.",
    sub: "Then one yearly plan, billed through the App Store or Google Play. Cancel any time in your store settings.",
    points: [
      "Unlimited photo logging",
      "Barcode scan and meal descriptions",
      "Personal calorie and macro targets",
      "Saved meals and daily progress",
      "English, Polish, German and Spanish",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions, answered.",
    subPrefix: "Anything else? Write to",
    items: [
      {
        q: "How does Cal Clark work out the calories?",
        a: "Cal Clark recognizes the food in your photo or description with AI, then matches each ingredient to published nutrition tables. Packaged food comes from barcode product catalogs. The details are on the Where the numbers come from page.",
      },
      {
        q: "How accurate is a photo?",
        a: "A photo gives you a strong starting point. Portions and hidden ingredients like oil are hard to see, so you can adjust grams or ingredients with a tap. Meals you save keep your numbers for next time.",
      },
      {
        q: "Can I log without a photo?",
        a: "Yes. Describe a meal in your own words, scan a barcode, search for a food or pick a saved meal.",
      },
      {
        q: "Is Cal Clark right for my goal?",
        a: "Whether you want to lose weight, gain mass or keep your weight steady, Cal Clark sets calorie and macro targets for your goal when you sign up. You can change your goal later in Settings.",
      },
      {
        q: "Which languages does it support?",
        a: "The app is available in English, Polish, German and Spanish.",
      },
      {
        q: "How much does it cost?",
        a: "Every account starts with a 3-day free trial. After that, Cal Clark is a yearly plan billed through Apple or Google. The price on the payment screen is the amount you pay. Cancel in your phone's store settings; deleting the app does not cancel. More on the Support page.",
      },
      {
        q: "Are there ads?",
        a: "No. Cal Clark has no ads and no ad networks.",
      },
      {
        q: "Is my data private?",
        a: "Your food diary is private to your account. We never sell your meal photos or your profile, and you can delete your account at any time. Details are in our privacy policy.",
      },
      {
        q: "When can I download it?",
        a: "Join the waitlist and we'll email you as soon as Cal Clark is live on iOS and Android.",
      },
    ],
  },
  final: {
    title: "Start with your next meal.",
    sub: "Join the waitlist and be one of the first to try Cal Clark on iOS and Android.",
    alt: "A dinner table full of shared dishes",
  },
  footer: {
    tagline: "Simple calorie tracking designed to help you stay on track.",
    legal: "Legal",
    copyright: "© 2026 Cal Clark. Not medical advice. Not a substitute for a dietitian.",
  },
};

const PL: Messages = {
  meta: {
    title: "Cal Clark - Prosty licznik kalorii na każdy cel",
    description:
      "Zrób zdjęcie posiłku i zobacz kalorie oraz makro w kilka sekund. Schudnij, nabierz masy albo utrzymaj wagę z Cal Clark. 3 dni za darmo. Bez reklam.",
  },
  nav: {
    how: "Jak to działa",
    goals: "Cele",
    pricing: "Cena",
    faq: "FAQ",
    waitlist: "Zapisz się na listę",
    menuOpen: "Otwórz menu",
    menuClose: "Zamknij menu",
    primary: "Główne",
    mobile: "Mobilne",
    soon: "Wkrótce na iOS i Androida",
  },
  lang: {
    ariaSelect: "Wybierz język",
    label: "Język",
  },
  hero: {
    eyebrow: "Wkrótce na iOS i Androida",
    h1Line1: "Prosty licznik kalorii,",
    h1Line2: "który pomaga trzymać się planu.",
    sub: "Schudnij, nabierz masy albo utrzymaj wagę - cokolwiek jest Twoim celem - Cal Clark w tym pomoże.",
    micro: "3 dni za darmo. Bez reklam.",
  },
  app: {
    diary: "Dziennik",
    progress: "Postępy",
    profile: "Profil",
    calories: "Kalorie",
    left: "zostało",
    weeklyBudget: "Budżet tygodniowy",
    weeklyLeft: "pozostało {calories} kcal",
    carbs: "Węgle",
    protein: "Białko",
    fats: "Tłuszcze",
    recentlyLogged: "Ostatnio dodane",
    analyzing: "Analizuję...",
    ingredients: "Składniki",
    addMore: "Dodaj więcej",
    fix: "Popraw",
    looksRight: "Pasuje",
    photo: "Zdjęcie",
    mealName: "Łosoś, ryż i awokado",
    ingredientNames: ["Filet z łososia", "Ryż jaśminowy", "Awokado", "Brokuły i pomidorki"],
    earlierMeal: "Jogurt z granolą",
    plateAlt: "Łosoś z ryżem, awokado i brokułami sfotografowany w Cal Clark",
  },
  waitlist: {
    emailLabel: "Adres e-mail",
    placeholder: "ty@email.com",
    submit: "Zapisz się na listę",
    pending: "Zapisuję…",
    success: "Jesteś na liście. Napiszemy, gdy Cal Clark będzie dostępny.",
    invalid: "To nie wygląda na poprawny e-mail.",
    error: "Coś poszło nie tak u nas. Spróbuj za chwilę.",
  },
  plates: {
    eyebrow: "Każdy posiłek",
    title: "Od śniadania do kolacji. W domu i na mieście.",
    sub: "Zrób zdjęcie tego, co masz na talerzu, i zobacz kalorie oraz makro w kilka sekund.",
    dishes: [
      "Tost z awokado i jajkami",
      "Jogurt z granolą i owocami",
      "Poke bowl",
      "Pierogi ruskie",
      "Sznycel z sałatką ziemniaczaną",
      "Tortilla i pan con tomate",
      "Makaron z pesto i kurczakiem",
      "Stek z ziemniakami",
      "Zestaw sushi",
      "Burger z frytkami",
      "Smoothie i owsianka",
      "Kurczak, ryż i batat",
    ],
  },
  how: {
    eyebrow: "Jak to działa",
    title: "Od talerza do postępów.",
    steps: [
      {
        title: "Zrób zdjęcie",
        body: "Skieruj aparat na talerz. Resztą zajmie się Cal Clark.",
      },
      {
        title: "Zobacz, co jest na talerzu",
        body: "Każdy składnik z kaloriami, białkiem, węglami i tłuszczem. Porcję zmienisz jednym dotknięciem.",
      },
      {
        title: "Trzymaj się planu cały dzień",
        body: "Widzisz, co już zjedzone i ile zostało na dziś - kalorie i makro obok siebie.",
      },
    ],
    alt: "Bez zdjęcia? Opisz posiłek, zeskanuj kod kreskowy albo wybierz zapisany posiłek.",
    sourcesNote: "Wartości sprawdzamy w opublikowanych tabelach składu żywności.",
    sourcesLink: "Skąd biorą się liczby",
  },
  goals: {
    eyebrow: "Twój cel",
    title: "Twój cel. Twój sposób.",
    sub: "Cal Clark ustala cele kalorii i makro pod wybrany cel, a potem pomaga je realizować dzień po dniu.",
    items: [
      {
        title: "Schudnij",
        body: "Jasny dzienny budżet kalorii, w którym wciąż jest miejsce na ulubione jedzenie.",
      },
      {
        title: "Nabierz masy",
        body: "Jedz tyle, ile trzeba, każdego dnia. Kalorie i białko zawsze masz na oku.",
      },
      {
        title: "Wspieraj trening",
        body: "Dobijaj do białka w dni treningowe i regeneruj się z właściwymi liczbami.",
      },
      {
        title: "Dbaj o zdrowie",
        body: "Rozumiej, co jesz, i utrzymuj równowagę, która przychodzi łatwo.",
      },
    ],
    alts: [
      "Kobieta fotografuje miskę z lunchem po porannym biegu",
      "Mężczyzna je posiłek z pudełka na siłowni",
      "Kobieta odpoczywa między seriami na siłowni",
      "Para gotuje razem zdrową kolację",
    ],
  },
  life: {
    title: "Dla tego, jak naprawdę jesz.",
    sub: "Śniadanie w domu, lunch przy biurku, kolacja ze znajomymi. Zapisz posiłek w kilka sekund i wróć do chwili.",
    alt: "Znajomi jedzą razem kolację w restauracji",
    cardName: "Wieczór z makaronem",
  },
  trust: {
    eyebrow: "Prywatność",
    title: "Twój dziennik należy do Ciebie.",
    claims: ["Bez reklam", "Nigdy nie sprzedajemy zdjęć posiłków", "Konto usuniesz w każdej chwili"],
    link: "Przeczytaj politykę prywatności",
  },
  pricing: {
    eyebrow: "Cena",
    title: "Wypróbuj wszystko za darmo przez 3 dni.",
    sub: "Potem jeden plan roczny, płatny przez App Store albo Google Play. Anulujesz w każdej chwili w ustawieniach sklepu.",
    points: [
      "Nielimitowane zapisy ze zdjęcia",
      "Skaner kodów i opis posiłku",
      "Osobiste cele kalorii i makro",
      "Zapisane posiłki i dzienne postępy",
      "Polski, angielski, niemiecki i hiszpański",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Pytania i odpowiedzi.",
    subPrefix: "Masz inne pytanie? Napisz na",
    items: [
      {
        q: "Jak Cal Clark liczy kalorie?",
        a: "Cal Clark rozpoznaje jedzenie ze zdjęcia albo opisu za pomocą AI, a potem dopasowuje każdy składnik do opublikowanych tabel wartości odżywczych. Produkty paczkowane pochodzą z katalogów kodów kreskowych. Szczegóły są na stronie Skąd biorą się liczby.",
      },
      {
        q: "Jak dokładne jest zdjęcie?",
        a: "Zdjęcie to mocny punkt wyjścia. Porcje i ukryte składniki, jak olej, trudno zobaczyć, więc gramy albo składniki poprawisz jednym dotknięciem. Zapisane posiłki zachowują Twoje liczby na następny raz.",
      },
      {
        q: "Czy mogę zapisać posiłek bez zdjęcia?",
        a: "Tak. Opisz posiłek własnymi słowami, zeskanuj kod kreskowy, wyszukaj produkt albo wybierz zapisany posiłek.",
      },
      {
        q: "Czy Cal Clark pasuje do mojego celu?",
        a: "Chcesz schudnąć, nabrać masy albo utrzymać wagę? Cal Clark ustala cele kalorii i makro pod Twój cel przy rejestracji. Cel zmienisz później w Ustawieniach.",
      },
      {
        q: "Jakie języki są obsługiwane?",
        a: "Aplikacja jest dostępna po polsku, angielsku, niemiecku i hiszpańsku.",
      },
      {
        q: "Ile to kosztuje?",
        a: "Każde konto zaczyna od 3 dni za darmo. Potem Cal Clark to plan roczny płatny przez Apple albo Google. Kwota na ekranie płatności to kwota, którą płacisz. Anulujesz w ustawieniach sklepu w telefonie; usunięcie aplikacji nie anuluje. Więcej na stronie Pomoc.",
      },
      {
        q: "Czy są reklamy?",
        a: "Nie. Cal Clark nie ma reklam ani sieci reklamowych.",
      },
      {
        q: "Czy moje dane są prywatne?",
        a: "Twój dziennik jest prywatny i przypisany do Twojego konta. Nigdy nie sprzedajemy zdjęć posiłków ani profilu, a konto możesz usunąć w każdej chwili. Szczegóły są w polityce prywatności.",
      },
      {
        q: "Kiedy będzie do pobrania?",
        a: "Zapisz się na listę, a napiszemy, gdy Cal Clark będzie dostępny na iOS i Androida.",
      },
    ],
  },
  final: {
    title: "Zacznij od następnego posiłku.",
    sub: "Zapisz się na listę i bądź wśród pierwszych, którzy wypróbują Cal Clark na iOS i Androidzie.",
    alt: "Stół pełen wspólnych dań",
  },
  footer: {
    tagline: "Prosty licznik kalorii, który pomaga trzymać się planu.",
    legal: "Informacje prawne",
    copyright: "© 2026 Cal Clark. To nie porada medyczna. To nie zastępuje dietetyka.",
  },
};

const DE: Messages = {
  meta: {
    title: "Cal Clark - Einfaches Kalorienzählen für jedes Ziel",
    description:
      "Fotografiere dein Essen und sieh Kalorien und Makros in Sekunden. Abnehmen, zunehmen oder gesund bleiben mit Cal Clark. 3 Tage kostenlos. Keine Werbung.",
  },
  nav: {
    how: "So funktioniert's",
    goals: "Ziele",
    pricing: "Preis",
    faq: "FAQ",
    waitlist: "Auf die Warteliste",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    primary: "Hauptmenü",
    mobile: "Mobil",
    soon: "Bald für iOS und Android",
  },
  lang: {
    ariaSelect: "Sprache wählen",
    label: "Sprache",
  },
  hero: {
    eyebrow: "Bald für iOS und Android",
    h1Line1: "Einfaches Kalorienzählen,",
    h1Line2: "das dich auf Kurs hält.",
    sub: "Abnehmen, zunehmen oder gesund bleiben - egal was dein Ziel ist - Cal Clark hilft.",
    micro: "3 Tage kostenlos. Keine Werbung.",
  },
  app: {
    diary: "Tagebuch",
    progress: "Fortschritt",
    profile: "Profil",
    calories: "Kalorien",
    left: "übrig",
    weeklyBudget: "Wochenbudget",
    weeklyLeft: "noch {calories} kcal",
    carbs: "Kohlenhydrate",
    protein: "Eiweiß",
    fats: "Fette",
    recentlyLogged: "Zuletzt eingetragen",
    analyzing: "Wird analysiert...",
    ingredients: "Zutaten",
    addMore: "Mehr hinzufügen",
    fix: "Korrigieren",
    looksRight: "Stimmt so",
    photo: "Foto",
    mealName: "Lachs, Reis und Avocado",
    ingredientNames: ["Lachsfilet", "Jasminreis", "Avocado", "Brokkolini und Tomaten"],
    earlierMeal: "Joghurt mit Granola",
    plateAlt: "Lachs mit Reis, Avocado und Brokkolini, fotografiert in Cal Clark",
  },
  waitlist: {
    emailLabel: "E-Mail-Adresse",
    placeholder: "du@email.com",
    submit: "Auf die Warteliste",
    pending: "Wird eingetragen…",
    success: "Du stehst auf der Liste. Wir melden uns, sobald Cal Clark verfügbar ist.",
    invalid: "Das sieht nicht nach einer gültigen E-Mail aus.",
    error: "Bei uns ist etwas schiefgelaufen. Versuch es gleich noch einmal.",
  },
  plates: {
    eyebrow: "Jede Mahlzeit",
    title: "Vom Frühstück bis zum Abendessen. Zu Hause und unterwegs.",
    sub: "Fotografiere, was auf deinem Teller liegt, und sieh Kalorien und Makros in Sekunden.",
    dishes: [
      "Avocado-Toast mit Eiern",
      "Joghurt, Granola und Beeren",
      "Poke Bowl",
      "Piroggen",
      "Schnitzel mit Kartoffelsalat",
      "Tortilla und Pan con Tomate",
      "Pesto-Pasta mit Hähnchen",
      "Steak mit Kartoffeln",
      "Sushi-Set",
      "Burger mit Pommes",
      "Smoothie und Overnight Oats",
      "Hähnchen, Reis und Süßkartoffel",
    ],
  },
  how: {
    eyebrow: "So funktioniert's",
    title: "Vom Teller zum Fortschritt.",
    steps: [
      {
        title: "Foto machen",
        body: "Richte die Kamera auf deinen Teller. Den Rest erledigt Cal Clark.",
      },
      {
        title: "Sehen, was auf dem Teller ist",
        body: "Jede Zutat mit Kalorien, Eiweiß, Kohlenhydraten und Fett. Portionen änderst du mit einem Tipp.",
      },
      {
        title: "Den ganzen Tag auf Kurs",
        body: "Sieh, was du gegessen hast und was heute noch übrig ist - Kalorien und Makros auf einen Blick.",
      },
    ],
    alt: "Kein Foto? Beschreibe dein Essen, scanne einen Barcode oder wähle eine gespeicherte Mahlzeit.",
    sourcesNote: "Nährwerte werden mit veröffentlichten Nährwerttabellen abgeglichen.",
    sourcesLink: "Woher die Zahlen kommen",
  },
  goals: {
    eyebrow: "Dein Ziel",
    title: "Dein Ziel. Dein Weg.",
    sub: "Cal Clark legt Kalorien- und Makroziele für dein Ziel fest und hilft dir, sie Tag für Tag zu erreichen.",
    items: [
      {
        title: "Abnehmen",
        body: "Ein klares Kalorienbudget pro Tag, mit Platz für das Essen, das du liebst.",
      },
      {
        title: "Zunehmen",
        body: "Jeden Tag genug essen. Kalorien und Eiweiß immer im Blick, während du aufbaust.",
      },
      {
        title: "Training unterstützen",
        body: "Erreiche dein Eiweißziel an Trainingstagen und regeneriere mit den richtigen Zahlen.",
      },
      {
        title: "Gesund bleiben",
        body: "Verstehe, was du isst, und halte eine Balance, die sich leicht anfühlt.",
      },
    ],
    alts: [
      "Frau fotografiert ihre Lunch-Bowl nach dem Morgenlauf",
      "Mann isst ein Meal-Prep-Essen im Fitnessstudio",
      "Frau macht eine Pause zwischen zwei Sätzen im Fitnessstudio",
      "Paar kocht zusammen ein gesundes Abendessen",
    ],
  },
  life: {
    title: "Gemacht für dein echtes Essen.",
    sub: "Frühstück zu Hause, Mittagessen am Schreibtisch, Abendessen mit Freunden. In Sekunden eingetragen, und du bist wieder im Moment.",
    alt: "Freunde essen gemeinsam in einem Restaurant",
    cardName: "Pasta-Abend",
  },
  trust: {
    eyebrow: "Datenschutz",
    title: "Dein Tagebuch gehört dir.",
    claims: ["Keine Werbung", "Wir verkaufen nie deine Essensfotos", "Konto jederzeit löschen"],
    link: "Datenschutzerklärung lesen",
  },
  pricing: {
    eyebrow: "Preis",
    title: "3 Tage alles kostenlos testen.",
    sub: "Danach ein Jahresabo über den App Store oder Google Play. Jederzeit in den Store-Einstellungen kündbar.",
    points: [
      "Unbegrenzt per Foto eintragen",
      "Barcode-Scan und Beschreibung",
      "Persönliche Kalorien- und Makroziele",
      "Gespeicherte Mahlzeiten und Tagesfortschritt",
      "Deutsch, Englisch, Polnisch und Spanisch",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Fragen und Antworten.",
    subPrefix: "Noch Fragen? Schreib uns an",
    items: [
      {
        q: "Wie berechnet Cal Clark die Kalorien?",
        a: "Cal Clark erkennt das Essen auf deinem Foto oder in deiner Beschreibung mit KI und gleicht jede Zutat mit veröffentlichten Nährwerttabellen ab. Verpackte Lebensmittel kommen aus Barcode-Produktkatalogen. Details stehen auf der Seite Woher die Zahlen kommen.",
      },
      {
        q: "Wie genau ist ein Foto?",
        a: "Ein Foto ist ein starker Ausgangspunkt. Portionen und versteckte Zutaten wie Öl sind schwer zu sehen, deshalb änderst du Gramm oder Zutaten mit einem Tipp. Gespeicherte Mahlzeiten behalten deine Werte für das nächste Mal.",
      },
      {
        q: "Kann ich auch ohne Foto eintragen?",
        a: "Ja. Beschreibe eine Mahlzeit mit eigenen Worten, scanne einen Barcode, suche ein Lebensmittel oder wähle eine gespeicherte Mahlzeit.",
      },
      {
        q: "Passt Cal Clark zu meinem Ziel?",
        a: "Ob abnehmen, zunehmen oder Gewicht halten: Cal Clark legt bei der Anmeldung Kalorien- und Makroziele für dein Ziel fest. Dein Ziel änderst du später in den Einstellungen.",
      },
      {
        q: "Welche Sprachen gibt es?",
        a: "Die App gibt es auf Deutsch, Englisch, Polnisch und Spanisch.",
      },
      {
        q: "Was kostet das?",
        a: "Jedes Konto startet mit 3 Tagen kostenlos. Danach ist Cal Clark ein Jahresabo über Apple oder Google. Der Preis auf dem Bezahlbildschirm ist der Betrag, den du zahlst. Kündigung in den Store-Einstellungen deines Handys; Deinstallieren kündigt nicht. Mehr auf der Hilfeseite.",
      },
      {
        q: "Gibt es Werbung?",
        a: "Nein. Cal Clark hat keine Werbung und keine Werbenetzwerke.",
      },
      {
        q: "Sind meine Daten privat?",
        a: "Dein Ernährungstagebuch ist privat und gehört zu deinem Konto. Wir verkaufen nie deine Essensfotos oder dein Profil, und du kannst dein Konto jederzeit löschen. Details stehen in der Datenschutzerklärung.",
      },
      {
        q: "Wann kann ich die App laden?",
        a: "Trag dich in die Warteliste ein. Wir schreiben dir, sobald Cal Clark für iOS und Android verfügbar ist.",
      },
    ],
  },
  final: {
    title: "Fang mit deiner nächsten Mahlzeit an.",
    sub: "Trag dich ein und gehöre zu den Ersten, die Cal Clark auf iOS und Android testen.",
    alt: "Ein Tisch voller geteilter Gerichte",
  },
  footer: {
    tagline: "Einfaches Kalorienzählen, das dich auf Kurs hält.",
    legal: "Rechtliches",
    copyright: "© 2026 Cal Clark. Kein medizinischer Rat. Kein Ersatz für eine Ernährungsberatung.",
  },
};

const ES: Messages = {
  meta: {
    title: "Cal Clark - Contar calorías de forma simple, para cada objetivo",
    description:
      "Haz una foto de tu comida y ve calorías y macros en segundos. Pierde peso, gana masa o mantente sano con Cal Clark. 3 días de prueba gratis. Sin anuncios.",
  },
  nav: {
    how: "Cómo funciona",
    goals: "Objetivos",
    pricing: "Precio",
    faq: "FAQ",
    waitlist: "Únete a la lista",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    primary: "Principal",
    mobile: "Móvil",
    soon: "Muy pronto en iOS y Android",
  },
  lang: {
    ariaSelect: "Elegir idioma",
    label: "Idioma",
  },
  hero: {
    eyebrow: "Muy pronto en iOS y Android",
    h1Line1: "Un contador de calorías simple,",
    h1Line2: "pensado para que sigas el plan.",
    sub: "Pierde peso, gana masa o mantente sano - da igual el objetivo - Cal Clark te ayuda.",
    micro: "3 días de prueba gratis. Sin anuncios.",
  },
  app: {
    diary: "Diario",
    progress: "Progreso",
    profile: "Perfil",
    calories: "Calorías",
    left: "restantes",
    weeklyBudget: "Presupuesto semanal",
    weeklyLeft: "quedan {calories} kcal",
    carbs: "Carbos",
    protein: "Proteína",
    fats: "Grasas",
    recentlyLogged: "Registrado hace poco",
    analyzing: "Analizando...",
    ingredients: "Ingredientes",
    addMore: "Añadir más",
    fix: "Corregir",
    looksRight: "Está bien",
    photo: "Foto",
    mealName: "Salmón, arroz y aguacate",
    ingredientNames: ["Filete de salmón", "Arroz jazmín", "Aguacate", "Brócoli y tomates"],
    earlierMeal: "Yogur con granola",
    plateAlt: "Salmón con arroz, aguacate y brócoli, fotografiado en Cal Clark",
  },
  waitlist: {
    emailLabel: "Correo electrónico",
    placeholder: "tu@email.com",
    submit: "Únete a la lista",
    pending: "Apuntando…",
    success: "Ya estás en la lista. Te escribiremos en cuanto Cal Clark esté disponible.",
    invalid: "Eso no parece un correo válido.",
    error: "Algo ha fallado en nuestro lado. Prueba en un momento.",
  },
  plates: {
    eyebrow: "Cada comida",
    title: "Del desayuno a la cena. En casa o fuera.",
    sub: "Haz una foto de lo que hay en tu plato y ve las calorías y los macros en segundos.",
    dishes: [
      "Tostada de aguacate con huevos",
      "Yogur, granola y frutos rojos",
      "Poke bowl",
      "Pierogi",
      "Schnitzel con ensalada de patata",
      "Tortilla y pan con tomate",
      "Pasta al pesto con pollo",
      "Filete con patatas",
      "Surtido de sushi",
      "Hamburguesa con patatas",
      "Batido y avena",
      "Pollo, arroz y boniato",
    ],
  },
  how: {
    eyebrow: "Cómo funciona",
    title: "Del plato al progreso.",
    steps: [
      {
        title: "Haz una foto",
        body: "Apunta la cámara a tu plato. Cal Clark hace el resto.",
      },
      {
        title: "Mira lo que hay en tu plato",
        body: "Cada ingrediente con sus calorías, proteína, carbohidratos y grasa. Cambia una ración con un toque.",
      },
      {
        title: "Sigue tu plan todo el día",
        body: "Mira lo que has comido y lo que te queda hoy, con calorías y macros de un vistazo.",
      },
    ],
    alt: "¿Sin foto? Describe tu comida, escanea un código de barras o elige una comida guardada.",
    sourcesNote: "Los valores se comprueban con tablas de composición de alimentos publicadas.",
    sourcesLink: "De dónde salen los números",
  },
  goals: {
    eyebrow: "Tu objetivo",
    title: "Tu objetivo. A tu manera.",
    sub: "Cal Clark fija objetivos de calorías y macros para tu meta y te ayuda a cumplirlos día a día.",
    items: [
      {
        title: "Pierde peso",
        body: "Un presupuesto diario de calorías claro, con sitio para la comida que te gusta.",
      },
      {
        title: "Gana masa",
        body: "Come lo suficiente cada día. Calorías y proteína siempre a la vista mientras construyes.",
      },
      {
        title: "Apoya tu entreno",
        body: "Llega a tu proteína los días de entreno y recupera con los números correctos.",
      },
      {
        title: "Mantente sano",
        body: "Entiende lo que comes y mantén un equilibrio que resulte fácil.",
      },
    ],
    alts: [
      "Mujer fotografía su bol de comida después de correr",
      "Hombre come un táper de comida en el gimnasio",
      "Mujer descansa entre series en el gimnasio",
      "Pareja cocina junta una cena sana",
    ],
  },
  life: {
    title: "Hecho para cómo comes de verdad.",
    sub: "Desayuno en casa, comida en la oficina, cena con amigos. Regístralo en segundos y vuelve al momento.",
    alt: "Amigos cenando juntos en un restaurante",
    cardName: "Noche de pasta",
  },
  trust: {
    eyebrow: "Privacidad",
    title: "Tu diario es tuyo.",
    claims: ["Sin anuncios", "Nunca vendemos tus fotos de comida", "Borra tu cuenta cuando quieras"],
    link: "Lee nuestra política de privacidad",
  },
  pricing: {
    eyebrow: "Precio",
    title: "Pruébalo todo gratis durante 3 días.",
    sub: "Después, un plan anual cobrado a través de App Store o Google Play. Cancela cuando quieras en los ajustes de la tienda.",
    points: [
      "Registro con foto ilimitado",
      "Escáner de códigos y descripción",
      "Objetivos personales de calorías y macros",
      "Comidas guardadas y progreso diario",
      "Español, inglés, polaco y alemán",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Preguntas y respuestas.",
    subPrefix: "¿Otra pregunta? Escríbenos a",
    items: [
      {
        q: "¿Cómo calcula Cal Clark las calorías?",
        a: "Cal Clark reconoce la comida de tu foto o descripción con IA y relaciona cada ingrediente con tablas de nutrición publicadas. Los productos envasados salen de catálogos de códigos de barras. Los detalles están en De dónde salen los números.",
      },
      {
        q: "¿Qué precisión tiene una foto?",
        a: "Una foto es un buen punto de partida. Las raciones y los ingredientes ocultos, como el aceite, son difíciles de ver, así que puedes ajustar gramos o ingredientes con un toque. Las comidas guardadas conservan tus números para la próxima vez.",
      },
      {
        q: "¿Puedo registrar sin foto?",
        a: "Sí. Describe una comida con tus palabras, escanea un código de barras, busca un alimento o elige una comida guardada.",
      },
      {
        q: "¿Cal Clark sirve para mi objetivo?",
        a: "Tanto si quieres perder peso, ganar masa o mantener tu peso, Cal Clark fija objetivos de calorías y macros para tu meta al registrarte. Puedes cambiar tu objetivo más tarde en Ajustes.",
      },
      {
        q: "¿Qué idiomas tiene?",
        a: "La app está disponible en español, inglés, polaco y alemán.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "Todas las cuentas empiezan con 3 días de prueba gratis. Después, Cal Clark es un plan anual cobrado por Apple o Google. El precio de la pantalla de pago es lo que pagas. Cancela en los ajustes de la tienda del teléfono; borrar la app no cancela. Más en Ayuda.",
      },
      {
        q: "¿Hay anuncios?",
        a: "No. Cal Clark no tiene anuncios ni redes publicitarias.",
      },
      {
        q: "¿Mis datos son privados?",
        a: "Tu diario de comidas es privado y va ligado a tu cuenta. Nunca vendemos tus fotos de comida ni tu perfil, y puedes borrar tu cuenta cuando quieras. Los detalles están en la política de privacidad.",
      },
      {
        q: "¿Cuándo puedo descargarla?",
        a: "Únete a la lista y te escribiremos en cuanto Cal Clark esté disponible en iOS y Android.",
      },
    ],
  },
  final: {
    title: "Empieza con tu próxima comida.",
    sub: "Únete a la lista y sé de los primeros en probar Cal Clark en iOS y Android.",
    alt: "Una mesa llena de platos para compartir",
  },
  footer: {
    tagline: "Un contador de calorías simple, pensado para que sigas el plan.",
    legal: "Legal",
    copyright: "© 2026 Cal Clark. No es consejo médico. No sustituye a un dietista.",
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
