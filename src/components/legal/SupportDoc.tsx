import Link from "next/link";
import {
  LegalH2,
  LegalList,
  LegalMail,
  LegalShell,
  type LegalLocale,
} from "./LegalShell";
import { legalHref } from "@/lib/legal";

export function SupportDoc({ locale }: { locale: LegalLocale }) {
  const titles: Record<LegalLocale, { title: string; updated: string }> = {
    en: {
      title: "Support",
      updated: "Last updated: 11 September 2026",
    },
    pl: {
      title: "Pomoc",
      updated: "Ostatnia aktualizacja: 11 września 2026",
    },
    de: {
      title: "Hilfe",
      updated: "Stand: 11. September 2026",
    },
    es: {
      title: "Ayuda",
      updated: "Última actualización: 11 de septiembre de 2026",
    },
  };
  const meta = titles[locale];
  return (
    <LegalShell locale={locale} path="support" title={meta.title} updated={meta.updated}>
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
        Write to <LegalMail />. That is the fastest way to reach us. There is
        no phone line and no in-app chat.
      </p>
      <LegalH2>How to cancel</LegalH2>
      <p>
        You cannot cancel inside Cal Clark. Billing goes through Apple or
        Google. Deleting the app does not cancel the subscription. You will
        keep being charged until you cancel in store settings.
      </p>
      <LegalList>
        <li>iPhone: Settings → your name → Subscriptions → Cal Clark → Cancel Subscription.</li>
        <li>Android: Google Play → profile → Payments and subscriptions → Subscriptions → Cal Clark → Cancel.</li>
      </LegalList>
      <LegalH2>Refunds</LegalH2>
      <p>
        Refunds follow Apple or Google rules. Request them from the store that
        charged you. Check the receipt email if you are unsure which one it
        was.
      </p>
      <LegalH2>I paid, but it still asks me to subscribe</LegalH2>
      <p>
        Open the payment screen and tap Restore purchase. Use the same Apple ID or
        Google account you bought with. A new phone with a different store
        account will not see the old purchase until you restore on that
        account.
      </p>
      <LegalH2>A scan looked wrong</LegalH2>
      <p>
        Edit grams or items, then save. A photo cannot weigh oil in a sauce.
        You confirm the draft.
      </p>
      <LegalH2>Delete your account</LegalH2>
      <p>
        Settings → Account → Delete account, or use{" "}
        <Link className="text-primary underline underline-offset-2" href={legalHref("en", "delete-account")}>
          the deletion page
        </Link>
        . That does not cancel a store subscription. Cancel billing first if
        you want charges to stop.
      </p>
      <LegalH2>Privacy and terms</LegalH2>
      <p>
        <Link className="text-primary underline underline-offset-2" href={legalHref("en", "privacy")}>
          Privacy
        </Link>
        {" · "}
        <Link className="text-primary underline underline-offset-2" href={legalHref("en", "terms")}>
          Terms
        </Link>
      </p>
    </>
  );
}

function Pl() {
  return (
    <>
      <p>
        Napisz na <LegalMail />. To najszybsza droga. Nie ma infolinii ani
        czatu w aplikacji.
      </p>
      <LegalH2>Jak anulować</LegalH2>
      <p>
        W Cal Clark nie anulujesz subskrypcji. Płatność idzie przez Apple albo
        Google. Usunięcie aplikacji nie kończy subskrypcji. Opłata leci, dopóki
        nie anulujesz w ustawieniach sklepu.
      </p>
      <LegalList>
        <li>iPhone: Ustawienia → Twoje imię → Subskrypcje → Cal Clark → Anuluj subskrypcję.</li>
        <li>Android: Google Play → profil → Płatności i subskrypcje → Subskrypcje → Cal Clark → Anuluj.</li>
      </LegalList>
      <LegalH2>Zwroty</LegalH2>
      <p>
        Zwroty według zasad Apple albo Google. Wniosek składasz w sklepie,
        który obciążył konto. Jeśli nie wiesz który, sprawdź mail z paragonem.
      </p>
      <LegalH2>Zapłaciłem, a nadal prosi o subskrypcję</LegalH2>
      <p>
        Otwórz ekran płatności i stuknij Przywróć zakup. To samo konto Apple albo
        Google, z którego kupowałeś. Nowy telefon z innym kontem sklepu nie
        zobaczy starego zakupu, dopóki nie przywrócisz na tym koncie.
      </p>
      <LegalH2>Skan wyszedł krzywo</LegalH2>
      <p>
        Zmień gramy albo składniki i zapisz. Zdjęcie nie zważy oleju w sosie.
        Ty potwierdzasz szkic.
      </p>
      <LegalH2>Usuń konto</LegalH2>
      <p>
        Ustawienia → Konto → Usuń konto, albo{" "}
        <Link className="text-primary underline underline-offset-2" href={legalHref("pl", "delete-account")}>
          strona usuwania
        </Link>
        . To nie anuluje subskrypcji w sklepie. Najpierw anuluj płatność, jeśli
        ma przestać się odnawiać.
      </p>
      <LegalH2>Prywatność i regulamin</LegalH2>
      <p>
        <Link className="text-primary underline underline-offset-2" href={legalHref("pl", "privacy")}>
          Prywatność
        </Link>
        {" · "}
        <Link className="text-primary underline underline-offset-2" href={legalHref("pl", "terms")}>
          Regulamin
        </Link>
      </p>
    </>
  );
}

function De() {
  return (
    <>
      <p>
        Schreib an <LegalMail />. Das ist der schnellste Weg. Keine Hotline,
        kein In-App-Chat.
      </p>
      <LegalH2>Abo kündigen</LegalH2>
      <p>
        In Cal Clark kannst du nicht kündigen. Die Zahlung läuft über Apple
        oder Google. Die App löschen kündigt das Abo nicht. Du wirst weiter
        belastet, bis du in den Store-Einstellungen kündigst.
      </p>
      <LegalList>
        <li>iPhone: Einstellungen → dein Name → Abos → Cal Clark → Abo kündigen.</li>
        <li>Android: Google Play → Profil → Zahlungen und Abos → Abos → Cal Clark → Kündigen.</li>
      </LegalList>
      <LegalH2>Erstattungen</LegalH2>
      <p>
        Erstattungen nach den Regeln von Apple oder Google. Antrag im Store,
        der abgebucht hat. Die Quittungsmail zeigt, welcher es war.
      </p>
      <LegalH2>Bezahlt, die App verlangt weiter ein Abo</LegalH2>
      <p>
        Bezahlschirm öffnen und Kauf wiederherstellen. Dieselbe Apple-ID oder
        dasselbe Google-Konto wie beim Kauf. Ein neues Handy mit anderem
        Store-Konto sieht den alten Kauf erst nach Wiederherstellen auf diesem
        Konto.
      </p>
      <LegalH2>Scan lag daneben</LegalH2>
      <p>
        Gramm oder Zutaten ändern, dann speichern. Ein Foto wiegt kein Öl in
        der Soße. Du bestätigst den Entwurf.
      </p>
      <LegalH2>Konto löschen</LegalH2>
      <p>
        Einstellungen → Konto → Konto löschen, oder die{" "}
        <Link className="text-primary underline underline-offset-2" href={legalHref("de", "delete-account")}>
          Löschseite
        </Link>
        . Das kündigt kein Store-Abo. Zuerst dort kündigen, wenn die Zahlung
        stoppen soll.
      </p>
      <LegalH2>Datenschutz und Bedingungen</LegalH2>
      <p>
        <Link className="text-primary underline underline-offset-2" href={legalHref("de", "privacy")}>
          Datenschutz
        </Link>
        {" · "}
        <Link className="text-primary underline underline-offset-2" href={legalHref("de", "terms")}>
          Nutzungsbedingungen
        </Link>
      </p>
    </>
  );
}

function Es() {
  return (
    <>
      <p>
        Escribe a <LegalMail />. Es el camino más rápido. No hay teléfono ni
        chat en la app.
      </p>
      <LegalH2>Cómo cancelar</LegalH2>
      <p>
        En Cal Clark no se cancela. Cobra Apple o Google. Borrar la app no
        cancela la suscripción. Seguirás pagando hasta cancelar en los ajustes
        de la tienda.
      </p>
      <LegalList>
        <li>iPhone: Ajustes → tu nombre → Suscripciones → Cal Clark → Cancelar suscripción.</li>
        <li>Android: Google Play → perfil → Pagos y suscripciones → Suscripciones → Cal Clark → Cancelar.</li>
      </LegalList>
      <LegalH2>Reembolsos</LegalH2>
      <p>
        Los reembolsos siguen las reglas de Apple o Google. Pídelos en la
        tienda que cobró. El correo del recibo dice cuál fue.
      </p>
      <LegalH2>Pagué y sigue pidiendo suscripción</LegalH2>
      <p>
        Abre la pantalla de pago y toca Restaurar compra. La misma cuenta de Apple o
        Google con la que compraste. Un teléfono nuevo con otra cuenta de
        tienda no verá la compra hasta restaurar en esa cuenta.
      </p>
      <LegalH2>El análisis salió mal</LegalH2>
      <p>
        Edita gramos o ingredientes y guarda. Una foto no pesa el aceite.
        Tú confirmas el borrador.
      </p>
      <LegalH2>Borrar la cuenta</LegalH2>
      <p>
        Ajustes → Cuenta → Borrar cuenta, o la{" "}
        <Link className="text-primary underline underline-offset-2" href={legalHref("es", "delete-account")}>
          página de baja
        </Link>
        . Eso no cancela la suscripción de la tienda. Cancela el cobro primero
        si debe parar.
      </p>
      <LegalH2>Privacidad y términos</LegalH2>
      <p>
        <Link className="text-primary underline underline-offset-2" href={legalHref("es", "privacy")}>
          Privacidad
        </Link>
        {" · "}
        <Link className="text-primary underline underline-offset-2" href={legalHref("es", "terms")}>
          Términos
        </Link>
      </p>
    </>
  );
}
