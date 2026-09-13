import Link from "next/link";
import {
  LegalH2,
  LegalList,
  LegalMail,
  LegalShell,
  type LegalLocale,
} from "./LegalShell";
import { legalHref } from "@/lib/legal";

export function CookiesDoc({ locale }: { locale: LegalLocale }) {
  const titles: Record<LegalLocale, { title: string; updated: string }> = {
    en: { title: "Cookie policy", updated: "Last updated: 11 September 2026" },
    pl: { title: "Polityka cookies", updated: "Ostatnia aktualizacja: 11 września 2026" },
    de: { title: "Cookie-Richtlinie", updated: "Stand: 11. September 2026" },
    es: { title: "Política de cookies", updated: "Última actualización: 11 de septiembre de 2026" },
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
        calclark.app does not run ads and does not drop advertising or
        analytics cookies today. No Google Analytics, no Meta pixel, no
        TikTok pixel. If that changes, this page will name the tool.
      </p>
      <LegalH2>What happens when you join the waitlist</LegalH2>
      <p>
        You type an email. We store that address so we can tell you when the
        app is live. That is a form submission, not a tracking cookie. Details
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
        calclark.app nie serwuje reklam i dziś nie stawia cookies
        reklamowych ani analitycznych. Nie ma Google Analytics, piksela Meta
        ani TikToka. Jeśli to się zmieni, ta strona wymieni narzędzie.
      </p>
      <LegalH2>Lista oczekujących</LegalH2>
      <p>
        Wpisujesz e-mail. Zapisujemy adres, żeby dać znać, gdy aplikacja
        wystartuje. To wysyłka formularza, nie cookie śledzące. Szczegóły w{" "}
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
        calclark.app zeigt keine Werbung und setzt heute keine Werbe- oder
        Analyse-Cookies. Kein Google Analytics, kein Meta-Pixel, kein
        TikTok-Pixel. Ändert sich das, steht das Werkzeug hier.
      </p>
      <LegalH2>Warteliste</LegalH2>
      <p>
        Du tippst eine E-Mail. Wir speichern die Adresse, um Bescheid zu
        sagen, wenn die App live ist. Das ist ein Formular, kein Tracking-Cookie.
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
        calclark.app no pone anuncios y hoy no deja cookies de publicidad ni
        de analítica. No hay Google Analytics, píxel de Meta ni de TikTok. Si
        eso cambia, esta página nombrará la herramienta.
      </p>
      <LegalH2>Lista de espera</LegalH2>
      <p>
        Escribes un correo. Guardamos la dirección para avisarte cuando la
        app esté lista. Es un formulario, no una cookie de rastreo. Detalle en{" "}
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
