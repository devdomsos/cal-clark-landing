import type { NextConfig } from "next";

const locales = ["", "/en", "/pl", "/de", "/es"];

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
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
