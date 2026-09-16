import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LOCALES, LOCALE_META, isLocale } from "@/lib/i18n/config";
import { Analytics } from "@vercel/analytics/next";
import { MotionProvider } from "@/components/MotionProvider";
import { CookieConsentProvider } from "@/components/cookie-consent/CookieConsentProvider";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Cal Clark - Simple calorie tracking for every goal",
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
    title: "Cal Clark - Simple calorie tracking for every goal",
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
    title: "Cal Clark - Simple calorie tracking for every goal",
    description:
      "Lose weight, gain mass or stay healthy. Simple calorie tracking from Cal Clark. 3-day free trial. No ads.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  themeColor: "#f5f3ee",
};

// Every locale is prerendered at build time. English URLs without a prefix
// ("/", "/privacy") are rewritten to /en in next.config.ts.
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  const lang = isLocale(locale) ? LOCALE_META[locale].htmlLang : "en";
  return (
    <html lang={lang} className={`${inter.variable} h-full antialiased`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <MotionProvider>
          <CookieConsentProvider>{children}</CookieConsentProvider>
        </MotionProvider>
        {/*
          Cookieless visit counting. It sets no cookie and reads nothing from the
          device, so it sits outside the consent gate and runs for every visitor.
          Optional cookie-based analytics stay behind the banner in
          `src/lib/cookieConsent.ts`.
        */}
        <Analytics />
      </body>
    </html>
  );
}
