import Link from "next/link";
import {
  LegalH2,
  LegalList,
  LegalShell,
  type LegalLocale,
} from "./LegalShell";

export function PrivacyDoc({ locale }: { locale: LegalLocale }) {
  if (locale === "pl") return <PrivacyPl />;
  if (locale === "de") return <PrivacyDe />;
  if (locale === "es") return <PrivacyEs />;
  return <PrivacyEn />;
}

function Contact() {
  return (
    <a className="text-primary underline underline-offset-2" href="mailto:support@calclark.app">
      support@calclark.app
    </a>
  );
}

function PrivacyEn() {
  return (
    <LegalShell
      locale="en"
      path="privacy"
      references="privacy"
      title="Privacy policy"
      updated="Last updated: 15 September 2026. Not a substitute for counsel. The legal entity name and registered address will be printed here before store listing."
    >
      <p>
        This policy describes how Cal Clark handles information in the mobile
        app and on calclark.app. We collect what we need to log meals, keep an
        account, and run a paid plan. We do not sell meal photos or profiles.
      </p>
      <LegalH2>Who is responsible</LegalH2>
      <p>
        Controller: to be published here (legal name and address) before App
        Store or Google Play listing. Contact: <Contact />.
      </p>
      <LegalH2>What we collect</LegalH2>
      <LegalList>
        <li>Account: email, and Apple or Google sign-in.</li>
        <li>
          Profile you give us: name, sex, date of birth, height, weight, target
          weight, activity, goal, units, language, optional meal reminders.
        </li>
        <li>
          Meals: photos you choose to send, typed descriptions, barcodes,
          drafted names and macros, grams you edit, saved meals.
        </li>
        <li>
          Purchases: whether you have Pro, through Apple or Google. We never see
          your card number.
        </li>
        <li>
          Diagnostics: crash reports, with photos and text hidden. In some
          versions of the app, basic usage stats in the EU. Never for ads.
        </li>
      </LegalList>
      <LegalH2>Photos and AI</LegalH2>
      <p>
        A photo or description you send goes to our servers in the EU, is stored
        privately with your account, and is sent to OpenAI to draft the log. We
        then check food names against published US government nutrition tables
        that we keep on those servers. Your photos never go to USDA. Details:{" "}
        <Link href="/data-sources" className="text-primary underline underline-offset-2">
          where the numbers come from
        </Link>
        . The app asks once before the first estimate leaves the device.
      </p>
      <LegalH2>Who processes data for us</LegalH2>
      <LegalList>
        <li>Clerk - so you can sign in with Apple, Google, or email.</li>
        <li>Hetzner - servers in the EU that hold your account and diary.</li>
        <li>Cloudflare - private photo storage.</li>
        <li>OpenAI - drafts the meal from a photo or a typed description.</li>
        <li>Apple, Google, and RevenueCat - payments. We never see your card number.</li>
        <li>
          Open Food Facts and FatSecret - packaged product labels. FatSecret
          nutrition information is provided by the fatsecret Platform API.
        </li>
        <li>Sentry - crash reports, with photos and text hidden.</li>
        <li>Resend - sends the email that confirms your waitlist signup on calclark.app.</li>
        <li>PostHog (EU) - optional usage stats in some versions of the app. Never for ads.</li>
      </LegalList>
      <LegalH2>What we do not do</LegalH2>
      <LegalList>
        <li>No ads in the app, no ad networks, no sale of meal photos.</li>
        <li>No social feed. Your log is not shown to other members.</li>
        <li>We do not use the advertising identifier for tracking.</li>
      </LegalList>
      <LegalH2>How long we keep it</LegalH2>
      <p>
        Account and meals stay while the account is open. Delete account in
        Settings, or use{" "}
        <Link href="/delete-account" className="text-primary underline underline-offset-2">
          the account deletion page
        </Link>
        . That removes your profile, meals, and photos. Short backups and
        legal records may remain for a limited time.
      </p>
      <LegalH2>Your rights (GDPR)</LegalH2>
      <p>
        If you live in the EU/EEA or UK you can ask for access, correction,
        deletion, restriction, portability, or objection. Write to <Contact />.
        You may also complain to your local data protection authority (in
        Poland: UODO).
      </p>
      <LegalH2>Children</LegalH2>
      <p>Cal Clark is not for people under 16.</p>
      <LegalH2>International transfers</LegalH2>
      <p>
        Some of the companies above may handle data outside the EEA. We use
        them only to run Cal Clark.
      </p>
      <LegalH2>Waitlist on this website</LegalH2>
      <p>
        If you join the waitlist we store the email you typed, the language of
        the page, and when you signed up and confirmed. We send you one email
        with a link to confirm the address. Resend sends that email for us. We
        only tell confirmed addresses when the app is on the stores. We keep
        the address until you ask us to remove it or we close the waitlist.
        To remove it, write to <Contact />. We do not sell that list. See{" "}
        <Link href="/cookies" className="text-primary underline underline-offset-2">
          cookies
        </Link>
        .
      </p>
      <LegalH2>Health-related data</LegalH2>
      <p>
        Height, weight, goal, activity, and meal logs can say something about
        health. We use them to set a calorie and protein budget and to keep
        your diary. We do not use them for ads. Apple Health and Google Health
        Connect are not wired in this version.
      </p>
      <LegalH2>When a photo leaves the phone</LegalH2>
      <p>
        A photo or description is sent only after you choose to analyze it.
        The app asks once before the first estimate leaves the device. We do
        not run a background camera upload.
      </p>
      <LegalH2>Lawful bases (GDPR)</LegalH2>
      <LegalList>
        <li>Account, meals, and the paid plan: the contract to run Cal Clark.</li>
        <li>Health-related profile and meal photos used to draft the log: your consent, which you can withdraw by deleting the account or stopping AI scans.</li>
        <li>Waitlist email: your request to be notified.</li>
        <li>Security, invoices Apple or Google keep, and legal holds: legal obligation or legitimate interest in running a lawful service.</li>
      </LegalList>
      <LegalH2>Supervisory authorities</LegalH2>
      <p>
        You may complain to your local authority. In Poland that is UODO. In
        Germany the competent state commissioner (or BfDI for federal
        matters). In Spain AEPD. In the UK the ICO.
      </p>
      <LegalH2>Changes</LegalH2>
      <p>Material changes will be dated on this page.</p>
    </LegalShell>
  );
}

function PrivacyPl() {
  return (
    <LegalShell
      locale="pl"
      path="privacy"
      references="privacy"
      title="Polityka prywatności"
      updated="Ostatnia aktualizacja: 15 września 2026. To nie zastępuje porady prawnej. Nazwa i adres podmiotu pojawią się tu przed listą w sklepach."
    >
      <p>
        Ta strona opisuje, jak Cal Clark przetwarza dane w aplikacji i na
        calclark.app. Zbieramy to, czego trzeba, żeby zapisać posiłek, prowadzić
        konto i obsłużyć plan płatny. Nie sprzedajemy zdjęć talerzy ani
        profili.
      </p>
      <LegalH2>Kto odpowiada</LegalH2>
      <p>
        Administrator: nazwa i adres siedziby zostaną dopisane przed publikacją
        w App Store i Google Play. Kontakt: <Contact />.
      </p>
      <LegalH2>Jakie dane zbieramy</LegalH2>
      <LegalList>
        <li>Konto: e-mail oraz logowanie Apple albo Google.</li>
        <li>
          Profil: imię, płeć, data urodzenia, wzrost, waga, waga docelowa,
          aktywność, cel, jednostki, język, opcjonalne przypomnienia.
        </li>
        <li>
          Posiłki: zdjęcia, opisy, kody kreskowe, szkic nazw i makro, gramy
          które zmieniasz, zapisane posiłki.
        </li>
        <li>
          Zakupy: czy masz Pro, przez Apple albo Google. Numeru karty nie
          widzimy.
        </li>
        <li>
          Diagnostyka: raporty awarii, ze zdjęciami i tekstem ukrytymi. W
          niektórych wersjach aplikacji podstawowe statystyki użycia w UE. Nigdy
          do reklam.
        </li>
      </LegalList>
      <LegalH2>Zdjęcia i AI</LegalH2>
      <p>
        Zdjęcie albo opis idzie na nasze serwery w UE, leży prywatnie przy Twoim
        koncie i trafia do OpenAI, żeby zrobić szkic wpisu. Nazwy dań sprawdzamy
        potem z opublikowanymi tabelami żywieniowymi rządu USA, które trzymamy
        na tych serwerach. Zdjęć do USDA nie wysyłamy. Szczegóły:{" "}
        <Link href="/pl/data-sources" className="text-primary underline underline-offset-2">
          skąd biorą się liczby
        </Link>
        . Aplikacja pyta raz, zanim pierwsze oszacowanie opuści telefon.
      </p>
      <LegalH2>Komu przekazujemy dane</LegalH2>
      <LegalList>
        <li>Clerk - logowanie Apple, Google albo e-mailem.</li>
        <li>Hetzner - serwery w UE z kontem i dziennikiem.</li>
        <li>Cloudflare - prywatne przechowywanie zdjęć.</li>
        <li>OpenAI - szkic posiłku ze zdjęcia albo opisu.</li>
        <li>Apple, Google i RevenueCat - płatności. Numeru karty nie widzimy.</li>
        <li>
          Open Food Facts i FatSecret - etykiety opakowań. Informacje żywieniowe
          FatSecret pochodzą z fatsecret Platform API.
        </li>
        <li>Sentry - raporty awarii, ze zdjęciami i tekstem ukrytymi.</li>
        <li>Resend - wysyła e-mail, który potwierdza zapis na listę oczekujących na calclark.app.</li>
        <li>PostHog (UE) - opcjonalne statystyki użycia w niektórych wersjach. Nigdy do reklam.</li>
      </LegalList>
      <LegalH2>Czego nie robimy</LegalH2>
      <LegalList>
        <li>Brak reklam, brak sieci reklamowych, brak sprzedaży zdjęć.</li>
        <li>Brak feedu. Dziennika nie widzą inni użytkownicy.</li>
        <li>Nie używamy identyfikatora reklamowego do śledzenia.</li>
      </LegalList>
      <LegalH2>Jak długo trzymamy dane</LegalH2>
      <p>
        Konto i posiłki trwają, dopóki konto żyje. Usuń konto w Ustawieniach
        albo na{" "}
        <Link href="/pl/delete-account" className="text-primary underline underline-offset-2">
          stronie usuwania konta
        </Link>
        . Kasujemy profil, posiłki i zdjęcia. Krótkie kopie zapasowe mogą
        zostać przez ograniczony czas.
      </p>
      <LegalH2>Twoje prawa (RODO)</LegalH2>
      <p>
        W UE/EOG i UK masz prawo dostępu, sprostowania, usunięcia, ograniczenia,
        przenoszenia i sprzeciwu. Napisz na <Contact />. Możesz też złożyć
        skargę do UODO.
      </p>
      <LegalH2>Dzieci</LegalH2>
      <p>Cal Clark nie jest przeznaczony dla osób poniżej 16. roku życia.</p>
      <LegalH2>Przekazania zagraniczne</LegalH2>
      <p>
        Część firm powyżej może przetwarzać dane poza EOG. Używamy ich tylko
        do działania Cal Clark.
      </p>
      <LegalH2>Lista oczekujących na tej stronie</LegalH2>
      <p>
        Jeśli zapiszesz się na listę, trzymamy wpisany e-mail, język strony
        oraz datę zapisu i potwierdzenia. Wysyłamy jeden e-mail z linkiem do
        potwierdzenia adresu. Ten e-mail wysyła dla nas Resend. O starcie
        aplikacji w sklepach piszemy tylko na potwierdzone adresy. Adres
        trzymamy, dopóki nie poprosisz o usunięcie albo nie zamkniemy listy.
        Żeby go usunąć, napisz na <Contact />. Listy nie sprzedajemy. Zobacz{" "}
        <Link href="/pl/cookies" className="text-primary underline underline-offset-2">
          cookies
        </Link>
        .
      </p>
      <LegalH2>Dane związane ze zdrowiem</LegalH2>
      <p>
        Wzrost, waga, cel, aktywność i dziennik posiłków mogą coś mówić o
        zdrowiu. Używamy ich do budżetu kalorii i białka oraz do dziennika. Nie
        do reklam. Apple Health i Google Health Connect w tej wersji nie są
        podpięte.
      </p>
      <LegalH2>Kiedy zdjęcie opuszcza telefon</LegalH2>
      <p>
        Zdjęcie albo opis idzie dopiero, gdy wybierzesz analizę. Aplikacja pyta
        raz przed pierwszym oszacowaniem. Nie ma cichego wysyłania z aparatu w
        tle.
      </p>
      <LegalH2>Podstawy (RODO)</LegalH2>
      <LegalList>
        <li>Konto, posiłki i plan płatny: umowa o świadczenie Cal Clark.</li>
        <li>Profil i zdjęcia posiłków do szkicu wpisu: zgoda, którą cofniesz usuwając konto albo przestając skanować.</li>
        <li>E-mail z listy: Twoja prośba o powiadomienie.</li>
        <li>Bezpieczeństwo i obowiązki prawne: obowiązek prawny albo prawnie uzasadniony interes.</li>
      </LegalList>
      <LegalH2>Organ nadzorczy</LegalH2>
      <p>
        Skargę złóż do lokalnego organu. W Polsce: UODO. W Niemczech właściwy
        Landesbeauftragte albo BfDI. W Hiszpanii AEPD. W UK: ICO.
      </p>
      <LegalH2>Zmiany</LegalH2>
      <p>Istotne zmiany opatrzymy datą na tej stronie.</p>
    </LegalShell>
  );
}

function PrivacyDe() {
  return (
    <LegalShell
      locale="de"
      path="privacy"
      references="privacy"
      title="Datenschutz"
      updated="Stand: 15. September 2026. Kein Rechtsrat. Firmenname und Sitz stehen hier, bevor die App in den Stores ist."
    >
      <p>
        Diese Seite beschreibt, wie Cal Clark Daten in der App und auf
        calclark.app verarbeitet. Wir erheben, was zum Loggen, zum Konto und
        zum bezahlten Plan nötig ist. Speisefotos und Profile verkaufen wir nicht.
      </p>
      <LegalH2>Verantwortlicher</LegalH2>
      <p>
        Wird vor dem Eintrag in App Store und Google Play mit Name und Anschrift ergänzt.
        Kontakt: <Contact />.
      </p>
      <LegalH2>Welche Daten</LegalH2>
      <LegalList>
        <li>Konto: E-Mail sowie Anmeldung mit Apple oder Google.</li>
        <li>Profil: Name, Geschlecht, Geburtstag, Größe, Gewicht, Zielgewicht, Aktivität, Ziel, Einheiten, Sprache, optionale Erinnerungen.</li>
        <li>Mahlzeiten: Fotos, Beschreibungen, Strichcodes, entworfene Namen und Makros, Gramme, gespeicherte Gerichte.</li>
        <li>Käufe: ob du Pro hast, über Apple oder Google. Die Kartennummer sehen wir nicht.</li>
        <li>Diagnose: Absturzberichte, Fotos und Text verborgen. In manchen App-Versionen einfache Nutzungszahlen in der EU. Nie für Werbung.</li>
      </LegalList>
      <LegalH2>Fotos und KI</LegalH2>
      <p>
        Ein Foto oder eine Beschreibung geht auf unsere Server in der EU, liegt
        privat bei deinem Konto und an OpenAI, damit wir den Entwurf erstellen.
        Namen gleichen wir mit veröffentlichten US-Nährwerttabellen auf diesen
        Servern ab. Fotos gehen nicht an das USDA. Details:{" "}
        <Link href="/de/data-sources" className="text-primary underline underline-offset-2">
          woher die Zahlen kommen
        </Link>
        . Die App fragt einmal, bevor die erste Schätzung das Gerät verlässt.
      </p>
      <LegalH2>Auftragsverarbeiter</LegalH2>
      <LegalList>
        <li>Clerk - Anmeldung mit Apple, Google oder E-Mail.</li>
        <li>Hetzner - Server in der EU für Konto und Tagebuch.</li>
        <li>Cloudflare - private Fotospeicherung.</li>
        <li>OpenAI - Entwurf der Mahlzeit aus Foto oder Text.</li>
        <li>Apple, Google und RevenueCat - Zahlungen. Die Kartennummer sehen wir nicht.</li>
        <li>Open Food Facts und FatSecret - Packungsetiketten. FatSecret-Nährwerte stammen von der fatsecret Platform API.</li>
        <li>Sentry - Absturzberichte, Fotos und Text verborgen.</li>
        <li>Resend - verschickt die E-Mail, mit der du deine Eintragung in die Warteliste auf calclark.app bestätigst.</li>
        <li>PostHog (EU) - optionale Nutzungszahlen in manchen App-Versionen. Nie für Werbung.</li>
      </LegalList>
      <LegalH2>Was wir nicht tun</LegalH2>
      <LegalList>
        <li>Keine Werbung, kein Verkauf von Fotos.</li>
        <li>Kein Feed. Dein Log ist nicht öffentlich.</li>
        <li>Keine Werbe-ID zum Tracking.</li>
      </LegalList>
      <LegalH2>Speicherdauer</LegalH2>
      <p>
        Daten bleiben, solange das Konto besteht. Löschen in den Einstellungen
        oder auf der{" "}
        <Link href="/de/delete-account" className="text-primary underline underline-offset-2">
          Seite zum Löschen des Kontos
        </Link>
        .
      </p>
      <LegalH2>Rechte (DSGVO)</LegalH2>
      <p>
        Zugang, Berichtigung, Löschung, Einschränkung, Übertragbarkeit,
        Widerspruch: <Contact />. Beschwerde bei der zuständigen Behörde.
      </p>
      <LegalH2>Kinder</LegalH2>
      <p>Cal Clark ist nicht für Personen unter 16 Jahren bestimmt.</p>
      <LegalH2>Warteliste auf dieser Website</LegalH2>
      <p>
        Wenn du dich einträgst, speichern wir die eingegebene E-Mail, die
        Sprache der Seite und wann du dich eingetragen und bestätigt hast. Wir
        schicken dir eine E-Mail mit einem Link, um die Adresse zu bestätigen.
        Diese E-Mail verschickt Resend für uns. Nur bestätigte Adressen
        erfahren, wann die App in den Stores ist. Wir speichern die Adresse,
        bis du die Löschung verlangst oder wir die Warteliste schließen. Zum
        Löschen schreib an <Contact />. Die Liste verkaufen wir nicht.
        Siehe{" "}
        <Link href="/de/cookies" className="text-primary underline underline-offset-2">
          Cookies
        </Link>
        .
      </p>
      <LegalH2>Gesundheitsbezogene Daten</LegalH2>
      <p>
        Größe, Gewicht, Ziel, Aktivität und das Essensprotokoll können etwas
        über Gesundheit sagen. Wir nutzen sie für das Kalorien- und
        Proteinbudget und das Tagebuch. Nicht für Werbung. Apple Health und
        Google Health Connect sind in dieser Version nicht angebunden.
      </p>
      <LegalH2>Wann ein Foto das Handy verlaesst</LegalH2>
      <p>
        Foto oder Text gehen erst, wenn du die Analyse startest. Die App fragt
        einmal vor der ersten Schätzung. Kein stiller Kamera-Upload.
      </p>
      <LegalH2>Rechtsgrundlagen (DSGVO)</LegalH2>
      <LegalList>
        <li>Konto, Mahlzeiten und der bezahlte Plan: Vertrag über Cal Clark.</li>
        <li>Profil und Speisefotos für den Entwurf: Einwilligung, widerrufbar durch Kontolöschung oder indem du keine KI-Scans mehr startest.</li>
        <li>Wartelisten-Mail: deine Bitte um Nachricht.</li>
        <li>Sicherheit und gesetzliche Pflichten: rechtliche Pflicht oder berechtigtes Interesse.</li>
      </LegalList>
      <LegalH2>Aufsichtsbehörden</LegalH2>
      <p>
        Beschwerde bei der zuständigen Behörde. Polen: UODO. Deutschland:
        zuständiger Landesbeauftragter oder BfDI. Spanien: AEPD. UK: ICO.
      </p>
      <LegalH2>Änderungen</LegalH2>
      <p>Wesentliche Änderungen werden hier datiert.</p>
    </LegalShell>
  );
}

function PrivacyEs() {
  return (
    <LegalShell
      locale="es"
      path="privacy"
      references="privacy"
      title="Política de privacidad"
      updated="Última actualización: 15 de septiembre de 2026. No sustituye asesoramiento legal. El nombre y domicilio de la entidad se publicarán aquí antes de las tiendas."
    >
      <p>
        Esta página describe cómo Cal Clark trata datos en la app y en
        calclark.app. Recogemos lo necesario para registrar comidas, mantener
        la cuenta y el plan de pago. No vendemos fotos ni perfiles.
      </p>
      <LegalH2>Responsable</LegalH2>
      <p>
        Se publicará el nombre y domicilio legales antes de App Store y Google
        Play. Contacto: <Contact />.
      </p>
      <LegalH2>Qué datos</LegalH2>
      <LegalList>
        <li>Cuenta: correo e inicio de sesión con Apple o Google.</li>
        <li>Perfil: nombre, sexo, fecha de nacimiento, altura, peso, peso objetivo, actividad, objetivo, unidades, idioma, recordatorios opcionales.</li>
        <li>Comidas: fotos, descripciones, códigos de barras, nombres y macros del borrador, gramos, comidas guardadas.</li>
        <li>Compras: si tienes Pro, a través de Apple o Google. No vemos el número de tarjeta.</li>
        <li>Diagnóstico: informes de fallos, con fotos y texto ocultos. En algunas versiones de la app, estadísticas básicas de uso en la UE. Nunca para anuncios.</li>
      </LegalList>
      <LegalH2>Fotos e IA</LegalH2>
      <p>
        La foto o descripción va a nuestros servidores en la UE, se guarda en
        privado con tu cuenta y a OpenAI para esbozar el registro. Los nombres
        se contrastan con tablas nutricionales publicadas del gobierno de
        EE. UU. en esos servidores. Tus fotos no van al USDA. Detalle:{" "}
        <Link href="/es/data-sources" className="text-primary underline underline-offset-2">
          de dónde salen los números
        </Link>
        . La app pregunta una vez antes de que la primera estimación salga del
        teléfono.
      </p>
      <LegalH2>Encargados</LegalH2>
      <LegalList>
        <li>Clerk - inicio de sesión con Apple, Google o correo.</li>
        <li>Hetzner - servidores en la UE para la cuenta y el diario.</li>
        <li>Cloudflare - almacenamiento privado de fotos.</li>
        <li>OpenAI - borrador de la comida desde una foto o un texto.</li>
        <li>Apple, Google y RevenueCat - pagos. No vemos el número de tarjeta.</li>
        <li>Open Food Facts y FatSecret - etiquetas de envases. Información nutricional de FatSecret: fatsecret Platform API.</li>
        <li>Sentry - informes de fallos, con fotos y texto ocultos.</li>
        <li>Resend - envía el correo que confirma tu registro en la lista de espera de calclark.app.</li>
        <li>PostHog (UE) - estadísticas de uso opcionales en algunas versiones. Nunca para anuncios.</li>
      </LegalList>
      <LegalH2>Lo que no hacemos</LegalH2>
      <LegalList>
        <li>Sin anuncios y sin venta de fotos.</li>
        <li>Sin feed. Tu diario no es público.</li>
        <li>No usamos el identificador de publicidad para rastreo.</li>
      </LegalList>
      <LegalH2>Conservación</LegalH2>
      <p>
        Mientras la cuenta exista. Borra la cuenta en Ajustes o en la{" "}
        <Link href="/es/delete-account" className="text-primary underline underline-offset-2">
          página de baja
        </Link>
        .
      </p>
      <LegalH2>Derechos (RGPD)</LegalH2>
      <p>
        Acceso, rectificación, supresión, limitación, portabilidad, oposición:{" "}
        <Contact />. Reclamación ante la autoridad de protección de datos.
      </p>
      <LegalH2>Menores</LegalH2>
      <p>Cal Clark no está dirigido a menores de 16 años.</p>
      <LegalH2>Lista de espera en este sitio</LegalH2>
      <p>
        Si te apuntas, guardamos el correo que escribiste, el idioma de la
        página y cuándo te apuntaste y confirmaste. Te enviamos un correo con
        un enlace para confirmar la dirección. Ese correo lo envía Resend por
        nosotros. Solo avisamos a las direcciones confirmadas cuando la app
        esté en las tiendas. Guardamos la dirección hasta que pidas borrarla o
        cerremos la lista. Para borrarla, escribe a <Contact />. No vendemos
        esa lista. Ver{" "}
        <Link href="/es/cookies" className="text-primary underline underline-offset-2">
          cookies
        </Link>
        .
      </p>
      <LegalH2>Datos relacionados con la salud</LegalH2>
      <p>
        Altura, peso, objetivo, actividad y el diario pueden decir algo sobre
        la salud. Los usamos para el presupuesto de calorías y proteína y para
        el diario. No para anuncios. Apple Health y Google Health Connect no
        están conectados en esta versión.
      </p>
      <LegalH2>Cuando una foto sale del teléfono</LegalH2>
      <p>
        La foto o el texto se envían solo cuando eliges analizar. La app
        pregunta una vez antes de la primera estimación. No hay subida oculta
        de la cámara.
      </p>
      <LegalH2>Bases jurídicas (RGPD)</LegalH2>
      <LegalList>
        <li>Cuenta, comidas y el plan de pago: el contrato de Cal Clark.</li>
        <li>Perfil y fotos de comidas para el borrador: tu consentimiento, que retiras al borrar la cuenta o al dejar de escanear.</li>
        <li>Correo de la lista: tu petición de aviso.</li>
        <li>Seguridad y obligaciones legales: obligación legal o interés legítimo.</li>
      </LegalList>
      <LegalH2>Autoridades de control</LegalH2>
      <p>
        Puedes reclamar ante la autoridad local. Polonia: UODO. Alemania: el
        comisionado del land o BfDI. España: AEPD. Reino Unido: ICO.
      </p>
      <LegalH2>Cambios</LegalH2>
      <p>Los cambios materiales se fecharan aqui.</p>
    </LegalShell>
  );
}
