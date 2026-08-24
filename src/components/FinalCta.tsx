import { Section, Reveal } from "./Section";
import { StoreBadges } from "./StoreBadges";
import { WaitlistForm } from "./WaitlistForm";

export function FinalCta() {
  return (
    <Section className="relative overflow-hidden bg-foreground py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.25),transparent_40%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Snap once. Correct once. It remembers.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Fast, local, honest, and it remembers — that&apos;s how you actually
            hit your budget. Join the list and be first in when we launch.
          </p>

          <div className="mx-auto mt-8 max-w-md">
            <WaitlistForm id="waitlist-final" />
          </div>

          <div className="mt-6 flex justify-center">
            <StoreBadges variant="light" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
