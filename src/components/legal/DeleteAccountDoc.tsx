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
          ? "Ostatnia aktualizacja: 22 września 2026. Usuwanie jest w aplikacji."
          : locale === "de"
            ? "Zuletzt aktualisiert: 22. September 2026. Löschen geht in der App."
            : locale === "es"
              ? "Última actualización: 22 de septiembre de 2026. El borrado está en la app."
              : "Last updated: 22 September 2026. Deletion happens in the app."
      }
    >
      {locale === "en" && (
        <>
          <p>
            Open Cal Clark while signed in. Go to Settings, then Account, then
            Delete account. Confirm. We remove your profile, meal log, and
            photos stored with your account.
          </p>
          <LegalH2>Delete some data and keep your account</LegalH2>
          <p>
            You do not have to delete the account to remove meals. In the
            diary, open a meal and tap Delete to remove it and its photo.
            Open a single item in a meal and tap Delete to remove only that
            item. Removed meals are gone from our servers straight away.
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
          <LegalH2>Usuń część danych i zachowaj konto</LegalH2>
          <p>
            Nie musisz kasować konta, żeby usunąć posiłki. W dzienniku
            otwórz posiłek i wybierz Usuń, aby skasować go razem ze zdjęciem.
            Otwórz pojedynczy składnik posiłku i wybierz Usuń, aby skasować
            tylko jego. Usunięte posiłki znikają z naszych serwerów od razu.
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
          <LegalH2>Einzelne Daten löschen und das Konto behalten</LegalH2>
          <p>
            Du musst das Konto nicht löschen, um Mahlzeiten zu entfernen.
            Öffne im Tagebuch eine Mahlzeit und tippe auf Löschen; das Foto
            geht mit. Öffne eine einzelne Zutat und tippe auf Löschen, um nur
            diese zu entfernen. Entfernte Mahlzeiten sind sofort von unseren
            Servern weg.
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
          <LegalH2>Borra algunos datos y conserva tu cuenta</LegalH2>
          <p>
            No hace falta borrar la cuenta para quitar comidas. En el diario,
            abre una comida y pulsa Borrar para quitarla con su foto. Abre un
            alimento de la comida y pulsa Borrar para quitar solo ese. Las
            comidas borradas desaparecen de nuestros servidores al momento.
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
