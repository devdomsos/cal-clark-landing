import { Section, Reveal } from "./Section";
import { WaitlistForm } from "./WaitlistForm";

export function FinalCta() {
  return (
    <Section className="relative overflow-hidden bg-foreground py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_0%,rgba(26,86,219,0.35),transparent_55%),radial-gradient(ellipse_50%_50%_at_90%_20%,rgba(5,150,105,0.2),transparent_50%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-2xl px-5 text-center">
        <Reveal>
          <p className="eyebrow mb-4 text-primary-light">Early access</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Be first when Cal Clark ships
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/65">
            Photo logging that gets faster every week. Join the waitlist for
            launch-day download links and pricing.
          </p>

          <div className="mx-auto mt-9 max-w-md">
            <WaitlistForm id="waitlist-final" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
