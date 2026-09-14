# Photo credits

All photos in `public/images/` (`hero-meal.jpg`, `food/*`, `life/*`) are
original images generated for Cal Clark on 2026-09-14 through OpenRouter
(`google/gemini-3-pro-image` for the hero meal and lifestyle shots,
`google/gemini-3.1-flash-image` for the food tiles). They show no real people
and no third-party brands. Prompts live in the agent scratchpad, not in this repo.

Logo, app icon, phone-mockup frame, and all other icons/illustrations on this site
are original, drawn as inline SVG/JSX — not sourced from Apple, Google, or any
competitor.

## Store badges

`public/images/badges/app-store-badge.svg` and `google-play-badge.png` are the
real, official marketing badges, downloaded directly from Apple's and Google's
own asset hosts:

- Apple: https://developer.apple.com/app-store/marketing/guidelines/ (unmodified,
  black RGB "Download on the App Store" SVG)
- Google: https://play.google.com/intl/en_us/badges/ ("Get it on Google Play"
  PNG, losslessly cropped to its opaque pixels — Google's source file ships
  with ~41px of transparent clear-space baked in on every side, which made it
  look noticeably smaller than Apple's edge-to-edge badge at the same height.
  The pill artwork itself is untouched, only the surrounding transparent
  canvas was trimmed.)

Both are wrapped in a "Soon" tag and linked to `#waitlist` instead of a live
store page, since neither listing exists yet. Swap the `href`s to the real
store URLs the moment the app is live.
