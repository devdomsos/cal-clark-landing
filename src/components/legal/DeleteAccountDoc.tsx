import {
  LegalH2,
  LegalList,
  LegalShell,
  type LegalLocale,
} from "./LegalShell";

export function DeleteAccountDoc({ locale }: { locale: LegalLocale }) {
  return (
    <LegalShell
      locale={locale}
      path="delete-account"
      title={
        locale === "pl"
          ? "Usuń konto"
          : locale === "de"
            ? "Konto löschen"
            : locale === "es"
              ? "Borrar cuenta"
              : "Delete your account"
      }
      updated={
        locale === "pl"
          ? "Google Play wymaga tej strony. Usuwanie jest w aplikacji."
          : locale === "de"
            ? "Google Play verlangt diese Seite. Löschen geht in der App."
            : locale === "es"
              ? "Google Play pide esta página. El borrado está en la app."
              : "Google Play requires this page. Deletion happens in the app."
      }
    >
      {locale === "en" && (
        <>
          <p>
            Open Cal Clark while signed in. Go to Settings, then Account, then
            Delete account. Confirm. We remove your profile, meal log, and
            photos stored with your account.
          </p>
          <LegalH2>What is not undone by deleting the app</LegalH2>
          <LegalList>
            <li>An App Store or Google Play subscription. Cancel that in Apple or Google subscription settings first if you want billing to stop.</li>
            <li>Purchase records Apple or Google keep for their own accounting.</li>
          </LegalList>
          <p>
            If the in-app control fails, write to{" "}
            <a className="text-primary underline underline-offset-2" href="mailto:support@calclark.app">
              support@calclark.app
            </a>{" "}
            from the email on the account.
          </p>
        </>
      )}
      {locale === "pl" && (
        <>
          <p>
            Otwórz Cal Clark na zalogowanym koncie. Ustawienia, Konto, Usuń
            konto. Potwierdź. Kasujemy profil, dziennik i zdjęcia przy Twoim
            koncie.
          </p>
          <LegalH2>Czego usunięcie aplikacji nie kończy</LegalH2>
          <LegalList>
            <li>Subskrypcji Apple albo Google Play. Najpierw anuluj ją w ustawieniach subskrypcji, jeśli ma przestać się odnawiać.</li>
            <li>Ewidencji zakupów, którą Apple lub Google trzymają u siebie.</li>
          </LegalList>
          <p>
            Jeśli przycisk w aplikacji nie działa, napisz na{" "}
            <a className="text-primary underline underline-offset-2" href="mailto:support@calclark.app">
              support@calclark.app
            </a>{" "}
            z adresu konta.
          </p>
        </>
      )}
      {locale === "de" && (
        <>
          <p>
            Cal Clark geöffnet und angemeldet: Einstellungen, Konto, Konto
            löschen. Bestätigen. Profil, Log und Fotos bei deinem Konto werden
            entfernt.
          </p>
          <LegalH2>Was die App-Deinstallation nicht beendet</LegalH2>
          <LegalList>
            <li>Ein Abo bei Apple oder Google Play. Kuendige zuerst dort, wenn die Zahlung stoppen soll.</li>
          </LegalList>
          <p>
            Wenn der Schalter in der App versagt:{" "}
            <a className="text-primary underline underline-offset-2" href="mailto:support@calclark.app">
              support@calclark.app
            </a>
          </p>
        </>
      )}
      {locale === "es" && (
        <>
          <p>
            Abre Cal Clark con sesión iniciada. Ajustes, Cuenta, Borrar
            cuenta. Confirma. Quitamos perfil, diario y fotos de tu cuenta.
          </p>
          <LegalH2>Lo que borrar la app no cancela</LegalH2>
          <LegalList>
            <li>Una suscripcion de Apple o Google Play. Cancelala primero en esos ajustes si debe dejar de cobrarse.</li>
          </LegalList>
          <p>
            Si el control falla:{" "}
            <a className="text-primary underline underline-offset-2" href="mailto:support@calclark.app">
              support@calclark.app
            </a>
          </p>
        </>
      )}
    </LegalShell>
  );
}
