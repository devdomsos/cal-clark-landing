import {
  LegalH2,
  LegalList,
  LegalShell,
  type LegalLocale,
} from "./LegalShell";

const TITLES: Record<LegalLocale, { title: string; updated: string }> = {
  en: { title: "Terms of use", updated: "Last updated: 11 September 2026" },
  pl: { title: "Regulamin", updated: "Ostatnia aktualizacja: 11 września 2026" },
  de: { title: "Nutzungsbedingungen", updated: "Stand: 11. September 2026" },
  es: { title: "Términos de uso", updated: "Última actualización: 11 de septiembre de 2026" },
};

export function TermsDoc({ locale }: { locale: LegalLocale }) {
  const meta = TITLES[locale];
  return (
    <LegalShell locale={locale} path="terms" title={meta.title} updated={meta.updated} references="terms">
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
        Cal Clark is a photo calorie tracker. Numbers are drafts you can edit.
        They are not medical advice.
      </p>
      <LegalH2>Age</LegalH2>
      <p>You must be at least 16. Cal Clark is not for children.</p>
      <LegalH2>Account</LegalH2>
      <p>
        You need an account (email, Apple, or Google) to save meals.
        You are responsible for access to that account.
      </p>
      <LegalH2>Subscription</LegalH2>
      <LegalList>
        <li>The first 3 AI scans (photo or description) are free.</li>
        <li>After that, further AI scans need Cal Clark Pro.</li>
        <li>Price and period are shown on the payment screen before you pay. The billed amount is the yearly or monthly price on screen, not a weekly equivalent.</li>
        <li>Payment is through the App Store or Google Play. Cancel in your Apple or Google subscription settings. Deleting the app does not cancel the subscription.</li>
        <li>Refunds follow Apple or Google rules.</li>
      </LegalList>
      <LegalH2>AI output</LegalH2>
      <p>
        Photo and text drafts are made with AI, then checked against published
        nutrition tables when we have a match. You can correct the result. We
        are not responsible for diet or health decisions made only from these
        drafts. See{" "}
        <a className="text-primary underline underline-offset-2" href="/data-sources">
          where the numbers come from
        </a>
        .
      </p>
      <LegalH2>Acceptable use</LegalH2>
      <p>
        Do not resell access, bypass the free-scan limit, or upload content
        unrelated to food in order to abuse the model.
      </p>
      <LegalH2>Health</LegalH2>
      <p>
        Cal Clark is not medical advice and is not a dietitian. Talk to a
        clinician before a large change to how you eat or train.
      </p>
      <LegalH2>Your content</LegalH2>
      <p>
        You keep the photos and text you upload. You give us a licence to store
        them and send them so we can draft the log. The Cal Clark name and app
        remain ours.
      </p>
      <LegalH2>Complaints</LegalH2>
      <p>
        Write to support@calclark.app. Cancel and refunds: see{" "}
        <a className="text-primary underline underline-offset-2" href="/support">
          support
        </a>
        .
      </p>
      <LegalH2>Contact</LegalH2>
      <p>
        <a className="text-primary underline underline-offset-2" href="mailto:support@calclark.app">
          support@calclark.app
        </a>
      </p>
    </>
  );
}

function Pl() {
  return (
    <>
      <p>
        Cal Clark to licznik kalorii ze zdjęcia. Liczby to szkic, który możesz
        poprawić. To nie porada medyczna.
      </p>
      <LegalH2>Wiek</LegalH2>
      <p>Musisz mieć co najmniej 16 lat. Cal Clark nie jest dla dzieci.</p>
      <LegalH2>Konto</LegalH2>
      <p>
        Do zapisu posiłków potrzebujesz konta (e-mail, Apple lub Google).
        Odpowiadasz za dostęp do niego.
      </p>
      <LegalH2>Subskrypcja</LegalH2>
      <LegalList>
        <li>Pierwsze 3 skany AI (zdjęcie lub opis) są darmowe.</li>
        <li>Kolejne skany AI wymagają Cal Clark Pro.</li>
        <li>Cenę i okres widzisz na ekranie płatności przed zakupem. Kwota na fakturze to cena roczna albo miesięczna z ekranu, nie ekwiwalent tygodniowy.</li>
        <li>Płaci Apple albo Google Play. Anulujesz w ustawieniach subskrypcji Apple lub Google. Usunięcie aplikacji nie anuluje subskrypcji.</li>
        <li>Zwroty według zasad Apple lub Google.</li>
      </LegalList>
      <LegalH2>Wynik AI</LegalH2>
      <p>
        Szacunek ze zdjęcia lub opisu robi AI, potem sprawdzamy nazwy z
        opublikowanymi tabelami żywieniowymi, gdy jest trafienie. Możesz
        poprawić wynik. Nie odpowiadamy za decyzje zdrowotne podjęte wyłącznie
        na podstawie tych szkiców. Zobacz{" "}
        <a className="text-primary underline underline-offset-2" href="/pl/data-sources">
          skąd biorą się liczby
        </a>
        .
      </p>
      <LegalH2>Dozwolone użycie</LegalH2>
      <p>
        Nie odsprzedawaj dostępu, nie obchodź limitu darmowych skanów i nie
        wysyłaj treści niezwiązanych z jedzeniem, żeby nadużywać modelu.
      </p>
      <LegalH2>Zdrowie</LegalH2>
      <p>
        Cal Clark to nie porada medyczna i nie dietetyk. Przed dużą zmianą
        jedzenia albo treningu porozmawiaj z lekarzem.
      </p>
      <LegalH2>Twoje treści</LegalH2>
      <p>
        Zdjęcia i tekst zostają Twoje. Dajesz nam licencję, żeby je trzymać i
        wysłać, żeby powstał szkic wpisu. Nazwa Cal Clark i aplikacja zostają
        nasze.
      </p>
      <LegalH2>Reklamacje</LegalH2>
      <p>
        Pisz na support@calclark.app. Anulowanie i zwroty:{" "}
        <a className="text-primary underline underline-offset-2" href="/pl/support">
          pomoc
        </a>
        .
      </p>
      <LegalH2>Kontakt</LegalH2>
      <p>
        <a className="text-primary underline underline-offset-2" href="mailto:support@calclark.app">
          support@calclark.app
        </a>
      </p>
    </>
  );
}

function De() {
  return (
    <>
      <p>
        Cal Clark ist ein Kalorienzaehler per Foto. Zahlen sind Entwuerfe, die
        du aendern kannst. Kein medizinischer Rat.
      </p>
      <LegalH2>Alter</LegalH2>
      <p>Du musst mindestens 16 sein. Cal Clark ist nicht fuer Kinder.</p>
      <LegalH2>Konto</LegalH2>
      <p>
        Zum Speichern brauchst du ein Konto (E-Mail, Apple oder Google).
      </p>
      <LegalH2>Abo</LegalH2>
      <LegalList>
        <li>Die ersten 3 KI-Scans (Foto oder Text) sind kostenlos.</li>
        <li>Weitere KI-Scans brauchen Cal Clark Pro.</li>
        <li>Preis und Zeitraum siehst du vor dem Kauf. Abgerechnet wird der Jahres- oder Monatspreis auf dem Schirm, kein Wochen-Aequivalent.</li>
        <li>Zahlung ueber App Store oder Google Play. Kuendigung in den Abo-Einstellungen von Apple oder Google. Deinstallieren kuendigt nicht.</li>
      </LegalList>
      <LegalH2>KI-Ergebnis</LegalH2>
      <p>
        Foto- und Textentwürfe kommen aus der KI und werden mit veröffentlichten
        Nährwerttabellen abgeglichen, wenn es einen Treffer gibt. Details:{" "}
        <a className="text-primary underline underline-offset-2" href="/de/data-sources">
          woher die Zahlen kommen
        </a>
        .
      </p>
      <LegalH2>Gesundheit</LegalH2>
      <p>
        Cal Clark ist kein medizinischer Rat und kein Ernaehrungsberater. Vor
        einer grossen Aenderung an Essen oder Training sprich mit einer
        Fachperson.
      </p>
      <LegalH2>Deine Inhalte</LegalH2>
      <p>
        Fotos und Text bleiben deins. Du gibst uns die Lizenz, sie zu speichern
        und zu senden, damit wir den Entwurf erstellen können. Name und App
        bleiben unser.
      </p>
      <LegalH2>Beschwerden</LegalH2>
      <p>
        Schreib an support@calclark.app. Kuendigung und Erstattung:{" "}
        <a className="text-primary underline underline-offset-2" href="/de/support">
          Hilfe
        </a>
        .
      </p>
      <LegalH2>Kontakt</LegalH2>
      <p>
        <a className="text-primary underline underline-offset-2" href="mailto:support@calclark.app">
          support@calclark.app
        </a>
      </p>
    </>
  );
}

function Es() {
  return (
    <>
      <p>
        Cal Clark es un contador de calorias por foto. Las cifras son un
        borrador que puedes editar. No son consejo medico.
      </p>
      <LegalH2>Edad</LegalH2>
      <p>Debes tener al menos 16 años. Cal Clark no es para menores.</p>
      <LegalH2>Cuenta</LegalH2>
      <p>
        Para guardar comidas necesitas cuenta (correo, Apple o Google).
      </p>
      <LegalH2>Suscripcion</LegalH2>
      <LegalList>
        <li>Los 3 primeros analisis de IA (foto o texto) son gratis.</li>
        <li>Los siguientes necesitan Cal Clark Pro.</li>
        <li>Precio y periodo se ven en la pantalla de pago. Se factura el importe anual o mensual, no un equivalente semanal.</li>
        <li>Pago por App Store o Google Play. Cancela en los ajustes de suscripcion de Apple o Google. Borrar la app no cancela.</li>
      </LegalList>
      <LegalH2>Salida de IA</LegalH2>
      <p>
        Los borradores salen de la IA y se contrastan con tablas nutricionales
        publicadas si hay coincidencia. Detalle:{" "}
        <a className="text-primary underline underline-offset-2" href="/es/data-sources">
          de donde salen los numeros
        </a>
        .
      </p>
      <LegalH2>Salud</LegalH2>
      <p>
        Cal Clark no es consejo medico ni un dietista. Antes de un cambio
        grande en comida o entrenamiento, habla con un clinico.
      </p>
      <LegalH2>Tu contenido</LegalH2>
      <p>
        Las fotos y el texto siguen siendo tuyos. Nos das licencia para
        guardarlos y enviarlos para el borrador. El nombre Cal Clark y la app
        siguen siendo nuestros.
      </p>
      <LegalH2>Reclamaciones</LegalH2>
      <p>
        Escribe a support@calclark.app. Cancelacion y reembolsos:{" "}
        <a className="text-primary underline underline-offset-2" href="/es/support">
          ayuda
        </a>
        .
      </p>
      <LegalH2>Contacto</LegalH2>
      <p>
        <a className="text-primary underline underline-offset-2" href="mailto:support@calclark.app">
          support@calclark.app
        </a>
      </p>
    </>
  );
}
