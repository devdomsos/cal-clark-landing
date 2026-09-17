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
