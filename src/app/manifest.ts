import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cal Clark",
    short_name: "Cal Clark",
    description:
      "Simple calorie tracking designed to help you stay on track. 3-day free trial. No ads.",
    start_url: "/",
    display: "browser",
    background_color: "#f9fafb",
    theme_color: "#030712",
    lang: "en",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
