import type { NextConfig } from "next";

const locales = ["", "/en", "/pl", "/de", "/es"];

const ENGLISH_ROOT_PATHS = [
  "/privacy",
  "/terms",
  "/cookies",
  "/support",
  "/delete-account",
  "/imprint",
  "/citations",
  "/waitlist/confirm",
];

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // English lives at the site root. Serve it from the prerendered /en pages so
  // every page stays static (no middleware, no per-request render).
  // /data-sources is deleted. Do not add a rewrite or redirect for it.
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/en" },
        ...ENGLISH_ROOT_PATHS.map((path) => ({ source: path, destination: `/en${path}` })),
      ],
    };
  },
  /**
   * Security headers. There were none: this site loads Google Analytics and
   * AppsFlyer and takes an email address, with no CSP, HSTS, framing or
   * referrer policy (2026-09-19 audit, M6).
   *
   * CSP is Report-Only to start. It is written against what the site actually
   * loads today — gtag from googletagmanager, the OneLink smart script from
   * appsflyer, and the waitlist POST, which is a server action to our own
   * origin, not a cross-origin fetch. Watch the reports for a release, then
   * flip the key to `Content-Security-Policy`.
   *
   * 'unsafe-inline' for styles is Tailwind + Next's inlined critical CSS;
   * 'unsafe-inline' for scripts is Next's bootstrap payload. Removing either
   * needs nonces, which needs middleware, which this site deliberately does
   * not have (every page is prerendered).
   */
  async headers() {
    const csp = [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "img-src 'self' data: blob: https://www.google-analytics.com",
      "font-src 'self' data:",
      "style-src 'self' 'unsafe-inline'",
      [
        "script-src 'self' 'unsafe-inline'",
        "https://www.googletagmanager.com",
        "https://onelinksmartscript.appsflyer.com",
      ].join(" "),
      [
        "connect-src 'self'",
        "https://www.google-analytics.com",
        "https://*.google-analytics.com",
        "https://*.analytics.google.com",
        "https://onelink.me",
        "https://*.onelink.me",
      ].join(" "),
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          { key: "Content-Security-Policy-Report-Only", value: csp },
        ],
      },
    ];
  },
  async redirects() {
    return locales.flatMap((prefix) => [
      {
        source: `${prefix}/contact`,
        destination: `${prefix}/support`,
        permanent: true,
      },
      {
        source: `${prefix}/help`,
        destination: `${prefix}/support`,
        permanent: true,
      },
    ]);
  },
};

export default nextConfig;
