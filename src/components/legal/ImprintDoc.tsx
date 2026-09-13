import {
  LegalH2,
  LegalMail,
  LegalShell,
  type LegalLocale,
} from "./LegalShell";

export function ImprintDoc({ locale }: { locale: LegalLocale }) {
  const titles: Record<LegalLocale, { title: string; updated: string }> = {
    en: {
      title: "Imprint",
      updated:
        "Last updated: 11 September 2026. Legal name and registered address will be printed here before store listing. We will not invent them.",
    },
    pl: {
      title: "Nota prawna",
      updated:
        "Ostatnia aktualizacja: 11 września 2026. Nazwa i adres siedziby pojawią się tu przed listą w sklepach. Nie wymyślamy ich.",
    },
    de: {
      title: "Impressum",
      updated:
        "Stand: 11. September 2026. Firmenname und Sitz stehen hier vor dem Store-Listing. Wir erfinden sie nicht.",
    },
    es: {
      title: "Aviso legal",
      updated:
        "Última actualización: 11 de septiembre de 2026. El nombre y domicilio se publicarán aquí antes de las tiendas. No los inventamos.",
    },
  };
  const meta = titles[locale];
  return (
    <LegalShell locale={locale} path="imprint" title={meta.title} updated={meta.updated} references="imprint">
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
      <p>Service: Cal Clark, the photo calorie tracker at calclark.app and in the iOS and Android apps.</p>
      <LegalH2>Operator</LegalH2>
      <p>
        Legal entity name, register number, and registered address: to be
        published. Until then, contact <LegalMail />.
      </p>
      <LegalH2>Contact</LegalH2>
      <p>
        Email: <LegalMail />. No visitor address is published yet.
      </p>
    </>
  );
}

function Pl() {
  return (
    <>
      <p>Usługa: Cal Clark, licznik kalorii ze zdjęcia na calclark.app oraz w aplikacjach iOS i Android.</p>
      <LegalH2>Operator</LegalH2>
      <p>
        Nazwa podmiotu, numer w rejestrze i adres siedziby: do publikacji.
        Do tego czasu pisz na <LegalMail />.
      </p>
      <LegalH2>Kontakt</LegalH2>
      <p>
        E-mail: <LegalMail />. Adres do odwiedzin jeszcze nie jest podany.
      </p>
    </>
  );
}

function De() {
  return (
    <>
      <p>Angebot: Cal Clark, Kalorienzaehler per Foto auf calclark.app sowie in den iOS- und Android-Apps.</p>
      <LegalH2>Anbieter</LegalH2>
      <p>
        Firmenname, Registergericht und Sitz: werden hier ergaenzt. Bis dahin{" "}
        <LegalMail />.
      </p>
      <LegalH2>Kontakt</LegalH2>
      <p>
        E-Mail: <LegalMail />. Eine Besucheradresse ist noch nicht veroeffentlicht.
      </p>
    </>
  );
}

function Es() {
  return (
    <>
      <p>Servicio: Cal Clark, contador de calorías por foto en calclark.app y en las apps iOS y Android.</p>
      <LegalH2>Operador</LegalH2>
      <p>
        Nombre de la entidad, registro y domicilio: se publicarán. Hasta
        entonces, <LegalMail />.
      </p>
      <LegalH2>Contacto</LegalH2>
      <p>
        Correo: <LegalMail />. Aún no hay domicilio de visita.
      </p>
    </>
  );
}
