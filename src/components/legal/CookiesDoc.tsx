import Link from "next/link";
import {
  LegalH2,
  LegalList,
  LegalMail,
  LegalShell,
  type LegalLocale,
} from "./LegalShell";
import { legalHref } from "@/lib/legal";
import { CookieSettingsButton } from "@/components/cookie-consent/CookieSettingsButton";

const settingsLink = "focus-ring text-primary underline underline-offset-2";

export function CookiesDoc({ locale }: { locale: LegalLocale }) {
  const titles: Record<LegalLocale, { title: string; updated: string }> = {
    en: { title: "Cookie policy", updated: "Last updated: 16 September 2026" },
    pl: { title: "Polityka cookies", updated: "Ostatnia aktualizacja: 16 września 2026" },
    de: { title: "Cookie-Richtlinie", updated: "Stand: 16. September 2026" },
    es: { title: "Política de cookies", updated: "Última actualización: 16 de septiembre de 2026" },
  };
  const meta = titles[locale];
  return (
    <LegalShell locale={locale} path="cookies" title={meta.title} updated={meta.updated} references="cookies">
      {locale === "en" && <En />}
      {locale === "pl" && <Pl />}
      {locale === "de" && <De />}
      {locale === "es" && <Es />}
    </LegalShell>
  );
}

function En() {
  return (
    <>
      <p>
        calclark.app drops no advertising cookie until you say yes in the
        cookie banner. No Meta pixel, no TikTok pixel. Two optional partners
        exist, both off until you allow them: AppsFlyer (which link or
        campaign brought you to the app) and Google Advertising Products
        (only while we run Google ad campaigns). The banner lists every
        partner and what it does. If we add a tool, this page will name it.
      </p>
      <LegalH2>Cookieless measurement</LegalH2>
      <p>
        We count page views with Vercel Web Analytics. It sets no cookie and
        reads nothing from your device. It does not follow you across sites.
        It tells us which pages people open, the country, the browser and the
        device type. Because it stores nothing on your device, it runs for
        every visitor.
      </p>
      <LegalH2>Your cookie choice</LegalH2>
      <p>
        The banner saves your choice in one cookie,{" "}
        <code>calclark-cookie-consent</code>, for 12 months. It is essential,
        because without it we would ask you on every page. Change your choice
        any time:{" "}
        <CookieSettingsButton label="cookie settings" className={settingsLink} />.
      </p>
      <LegalH2>What happens when you join the waitlist</LegalH2>
      <p>
        You type an email. We store that address and send one email to
        confirm it. When you confirm, we tell you when the app is live. That
        is a form submission, not a tracking cookie. Details
        in{" "}
        <Link className="text-primary underline underline-offset-2" href={legalHref("en", "privacy")}>
          privacy
        </Link>
        .
      </p>
      <LegalH2>What the browser may still store</LegalH2>
      <LegalList>
        <li>Short-lived files the site needs to load (session, security). They are not used to profile you.</li>
        <li>Nothing we use to remarket Cal Clark on other sites.</li>
      </LegalList>
      <LegalH2>The mobile app</LegalH2>
      <p>
        The iOS and Android app is not this website. Crash reports and optional
        usage stats are described in privacy. There is no advertising identifier
        for tracking.
      </p>
      <LegalH2>How to clear cookies</LegalH2>
      <p>
        Use your browser settings. Blocking all cookies can break sign-in on
        other sites. It will not hide the waitlist form here.
      </p>
      <p>
        Questions: <LegalMail />.
      </p>
    </>
  );
}

function Pl() {
  return (
    <>
      <p>
        calclark.app nie stawia cookies reklamowych, dopóki nie zgodzisz się
        w banerze cookies. Nie ma piksela Meta ani TikToka. Są dwaj opcjonalni
        partnerzy, obaj wyłączeni do czasu Twojej zgody: AppsFlyer (który link
        lub kampania przyprowadziły Cię do aplikacji) oraz Google Advertising
        Products (tylko gdy prowadzimy kampanie Google). Baner wymienia
        każdego partnera i to, co robi. Jeśli dodamy narzędzie, ta strona je
        wymieni.
      </p>
      <LegalH2>Pomiar bez cookies</LegalH2>
      <p>
        Odsłony liczymy przez Vercel Web Analytics. Nie stawia cookies i nie
        czyta niczego z Twojego urządzenia. Nie śledzi Cię między stronami.
        Pokazuje nam, które strony ludzie otwierają, kraj, przeglądarkę i typ
        urządzenia. Nic nie zapisuje na urządzeniu, więc działa dla każdego.
      </p>
      <LegalH2>Twój wybór cookies</LegalH2>
      <p>
        Baner zapisuje wybór w jednym cookie,{" "}
        <code>calclark-cookie-consent</code>, na 12 miesięcy. Jest niezbędne,
        bo bez niego pytalibyśmy na każdej stronie. Zmień wybór w każdej
        chwili:{" "}
        <CookieSettingsButton label="ustawienia cookies" className={settingsLink} />.
      </p>
      <LegalH2>Lista oczekujących</LegalH2>
      <p>
        Wpisujesz e-mail. Zapisujemy adres i wysyłamy jeden e-mail do
        potwierdzenia. Po potwierdzeniu damy znać, gdy aplikacja wystartuje.
        To wysyłka formularza, nie cookie śledzące. Szczegóły w{" "}
        <Link className="text-primary underline underline-offset-2" href={legalHref("pl", "privacy")}>
          polityce prywatności
        </Link>
        .
      </p>
      <LegalH2>Co przeglądarka i tak może trzymać</LegalH2>
      <LegalList>
        <li>Krótkie pliki potrzebne do wczytania strony (sesja, bezpieczeństwo). Nie profilujemy Cię nimi.</li>
        <li>Nic, czym remarketingowalibyśmy Cal Clark na innych witrynach.</li>
      </LegalList>
      <LegalH2>Aplikacja mobilna</LegalH2>
      <p>
        iOS i Android to nie ta strona. Raporty awarii i opcjonalne
        statystyki użycia są w polityce prywatności. Nie używamy
        identyfikatora reklamowego do śledzenia.
      </p>
      <LegalH2>Jak wyczyścić cookies</LegalH2>
      <p>
        Ustawienia przeglądarki. Zablokowanie wszystkich cookies może zepsuć
        logowanie na innych stronach. Formularza listy tu nie ukryje.
      </p>
      <p>
        Pytania: <LegalMail />.
      </p>
    </>
  );
}

function De() {
  return (
    <>
      <p>
        calclark.app setzt keine Werbe-Cookies, bis du im Cookie-Banner
        zustimmst. Kein Meta-Pixel, kein TikTok-Pixel. Es gibt zwei optionale
        Partner, beide aus, bis du sie erlaubst: AppsFlyer (welcher Link oder
        welche Kampagne dich zur App gebracht hat) und Google Advertising
        Products (nur, solange wir Google-Kampagnen schalten). Der Banner
        nennt jeden Partner und was er tut. Kommt ein Werkzeug dazu, steht es
        hier.
      </p>
      <LegalH2>Messung ohne Cookies</LegalH2>
      <p>
        Seitenaufrufe zählen wir mit Vercel Web Analytics. Es setzt kein Cookie
        und liest nichts von deinem Gerät. Es verfolgt dich nicht über andere
        Seiten. Wir sehen, welche Seiten geöffnet werden, Land, Browser und
        Gerätetyp. Weil nichts auf dem Gerät gespeichert wird, läuft es für
        alle Besucher.
      </p>
      <LegalH2>Deine Cookie-Wahl</LegalH2>
      <p>
        Der Banner speichert deine Wahl in einem Cookie,{" "}
        <code>calclark-cookie-consent</code>, für 12 Monate. Es ist notwendig,
        sonst fragen wir auf jeder Seite neu. Ändere deine Wahl jederzeit:{" "}
        <CookieSettingsButton label="Cookie-Einstellungen" className={settingsLink} />.
      </p>
      <LegalH2>Warteliste</LegalH2>
      <p>
        Du tippst eine E-Mail. Wir speichern die Adresse und schicken eine
        E-Mail zur Bestätigung. Nach der Bestätigung sagen wir Bescheid, wenn
        die App live ist. Das ist ein Formular, kein Tracking-Cookie.
        Details in der{" "}
        <Link className="text-primary underline underline-offset-2" href={legalHref("de", "privacy")}>
          Datenschutzerklärung
        </Link>
        .
      </p>
      <LegalH2>Was der Browser trotzdem speichern kann</LegalH2>
      <LegalList>
        <li>Kurze Dateien, damit die Seite lädt (Sitzung, Sicherheit). Damit profilieren wir dich nicht.</li>
        <li>Nichts, womit wir Cal Clark auf anderen Seiten remarketen.</li>
      </LegalList>
      <LegalH2>Die App</LegalH2>
      <p>
        iOS und Android sind nicht diese Website. Absturzberichte und
        optionale Nutzungszahlen stehen im Datenschutz. Keine Werbe-ID zum
        Tracking.
      </p>
      <LegalH2>Cookies löschen</LegalH2>
      <p>
        In den Browser-Einstellungen. Alle Cookies zu blocken kann Anmeldungen
        anderswo stören. Das Wartelisten-Formular bleibt.
      </p>
      <p>
        Fragen: <LegalMail />.
      </p>
    </>
  );
}

function Es() {
  return (
    <>
      <p>
        calclark.app no deja cookies de publicidad hasta que aceptas en el
        banner de cookies. No hay píxel de Meta ni de TikTok. Hay dos socios
        opcionales, ambos apagados hasta que los permitas: AppsFlyer (qué
        enlace o campaña te trajo a la app) y Google Advertising Products
        (solo mientras hacemos campañas de Google). El banner nombra a cada
        socio y lo que hace. Si añadimos una herramienta, esta página la
        nombrará.
      </p>
      <LegalH2>Medición sin cookies</LegalH2>
      <p>
        Contamos visitas con Vercel Web Analytics. No pone cookies y no lee
        nada de tu dispositivo. No te sigue entre sitios. Nos dice qué páginas
        se abren, el país, el navegador y el tipo de dispositivo. Como no
        guarda nada en tu dispositivo, funciona para todos.
      </p>
      <LegalH2>Tu elección de cookies</LegalH2>
      <p>
        El banner guarda tu elección en una cookie,{" "}
        <code>calclark-cookie-consent</code>, durante 12 meses. Es necesaria,
        si no te preguntaríamos en cada página. Cambia tu elección cuando
        quieras:{" "}
        <CookieSettingsButton label="ajustes de cookies" className={settingsLink} />.
      </p>
      <LegalH2>Lista de espera</LegalH2>
      <p>
        Escribes un correo. Guardamos la dirección y te enviamos un correo
        para confirmarla. Cuando confirmes, te avisaremos cuando la app esté
        lista. Es un formulario, no una cookie de rastreo. Detalle en{" "}
        <Link className="text-primary underline underline-offset-2" href={legalHref("es", "privacy")}>
          privacidad
        </Link>
        .
      </p>
      <LegalH2>Lo que el navegador igual puede guardar</LegalH2>
      <LegalList>
        <li>Archivos cortos para cargar el sitio (sesión, seguridad). No te perfilamos con ellos.</li>
        <li>Nada para remarketing de Cal Clark en otros sitios.</li>
      </LegalList>
      <LegalH2>La app</LegalH2>
      <p>
        iOS y Android no son este sitio. Los informes de fallos y las
        estadísticas de uso opcionales están en privacidad. No usamos el
        identificador de publicidad para rastreo.
      </p>
      <LegalH2>Cómo borrar cookies</LegalH2>
      <p>
        Ajustes del navegador. Bloquear todas puede romper inicios de sesión
        en otros sitios. El formulario de la lista sigue aquí.
      </p>
      <p>
        Preguntas: <LegalMail />.
      </p>
    </>
  );
}
