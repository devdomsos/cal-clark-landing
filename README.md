# Cal Clark — landing page

Pre-launch marketing / waitlist site for Cal Clark, a photo calorie tracker.
Positioning: **fast, local, honest, and it remembers** — that's how people
actually hit their daily budget. Copy is pulled from the locked marketing
docs in the main app repo (`docs/marketing/01-angles-and-copy.md` and
`docs/plans/06-landing-page.md` in `cal-clark-ai`), EN variant only.

Standalone repo, separate git history from the Expo app. Do not merge this
into the app repo or share its CI/release cycle.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

`npm run build` / `npm run start` for a production build. `npm run lint` for
ESLint.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion +
lucide-react. No CMS, no i18n library, no analytics — single-locale English
MVP by design, so it ships fast and stays easy to audit.

## What's real vs. stubbed

- **Real:** all 7 food photos in `public/images/` (downloaded from Pexels,
  see `CREDITS.md`), the animated camera → result phone mockup
  (`src/components/PhoneMock.tsx`), the waitlist form and its server action.
- **Stubbed — needs a real value before launch:**
  - `src/app/actions/waitlist.ts` writes emails to a local
    `data/waitlist.json` file (gitignored) so the demo works with zero
    config. Swap this for a real ESP (Resend / Loops / Buttondown) once an
    API key exists.
  - `src/components/StoreBadges.tsx` badges are disabled placeholders
    labelled "Coming soon" — replace the `href="#"` with real App Store /
    Google Play listing URLs when they exist.
  - Pricing section deliberately has no dollar figure (the only locked price
    is 129 zł/year on the Polish store, which doesn't translate cleanly to
    USD/EN). Add the real price once App Store Connect / Play Console pricing
    is finalized for this market.
  - `/privacy` and `/terms` are honest stubs, not the legally reviewed
    versions — replace before this goes near a real store listing.

## Brand

Colors are pulled straight from the app's design tokens
(`lib/ui/getColor.ts` in `cal-clark-ai`): primary blue `#3B82F6`, protein
`#ef4444`, carb `#eab308`, fat `#10b981`. Logomark, app icon, phone frame,
and store badges are original SVGs drawn for this site — nothing copied from
Apple, Google, or any competitor's marketing page.
