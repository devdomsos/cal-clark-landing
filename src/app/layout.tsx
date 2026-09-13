import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { LOCALE_META, isLocale } from "@/lib/i18n/config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cal Clark - Photo calorie tracker for real plates",
    template: "%s",
  },
  description:
    "Lose weight, gain mass or stay healthy. Simple calorie tracking from Cal Clark. 3-day free trial. No ads.",
  applicationName: "Cal Clark",
  metadataBase: new URL("https://calclark.app"),
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Cal Clark - Photo calorie tracker for real plates",
    description:
      "Lose weight, gain mass or stay healthy. Simple calorie tracking from Cal Clark. 3-day free trial. No ads.",
    url: "https://calclark.app",
    siteName: "Cal Clark",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cal Clark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cal Clark - Photo calorie tracker for real plates",
    description:
      "Lose weight, gain mass or stay healthy. Simple calorie tracking from Cal Clark. 3-day free trial. No ads.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  themeColor: "#f9fafb",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const headerLocale = (await headers()).get("x-locale") ?? "en";
  const lang = isLocale(headerLocale)
    ? LOCALE_META[headerLocale].htmlLang
    : "en";
  return (
    <html lang={lang} className={`${inter.variable} h-full antialiased`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
