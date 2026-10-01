import {
  LegalH2,
  LegalShell,
  OperatorDetails,
  type LegalLocale,
} from "./LegalShell";

export function ImprintDoc({ locale }: { locale: LegalLocale }) {
  const titles: Record<LegalLocale, { title: string; updated: string }> = {
    en: { title: "Imprint", updated: "Last updated: 28 September 2026" },
    pl: { title: "Nota prawna", updated: "Ostatnia aktualizacja: 28 września 2026" },
    de: { title: "Impressum", updated: "Stand: 28. September 2026" },
    es: { title: "Aviso legal", updated: "Última actualización: 28 de septiembre de 2026" },
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
      <OperatorDetails locale="en" />
    </>
  );
}

function Pl() {
  return (
    <>
      <p>Usługa: Cal Clark, licznik kalorii ze zdjęcia na calclark.app oraz w aplikacjach iOS i Android.</p>
      <LegalH2>Usługodawca</LegalH2>
      <OperatorDetails locale="pl" />
    </>
  );
}

function De() {
  return (
    <>
      <p>Angebot: Cal Clark, Kalorienzähler per Foto auf calclark.app sowie in den iOS- und Android-Apps.</p>
      <LegalH2>Anbieter</LegalH2>
      <OperatorDetails locale="de" />
    </>
  );
}

function Es() {
  return (
    <>
      <p>Servicio: Cal Clark, contador de calorías por foto en calclark.app y en las apps iOS y Android.</p>
      <LegalH2>Titular</LegalH2>
      <OperatorDetails locale="es" />
    </>
  );
}
