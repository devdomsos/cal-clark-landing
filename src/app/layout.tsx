import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cal Clark — Snap once. Correct once. It remembers.",
  description:
    "A photo calorie tracker that drafts your log from a picture, learns your usual meals, and never claims lab-exact numbers. Fast, local, honest, and it remembers.",
  metadataBase: new URL("https://calclark.app"),
  openGraph: {
    title: "Cal Clark — Snap once. Correct once. It remembers.",
    description:
      "Calories and macros from the plate. An estimate, not a lab. 3 free scans, then a yearly plan. No ads.",
    url: "https://calclark.app",
    siteName: "Cal Clark",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
