import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Cal Clark — Snap once. Correct once. It remembers.",
  description:
    "Photo calorie and macro tracking that drafts your log, learns your meals, and stays honest about estimates. Calories, protein, carbs, and fat — nothing else.",
  metadataBase: new URL("https://calclark.app"),
  openGraph: {
    title: "Cal Clark — Snap once. Correct once. It remembers.",
    description:
      "A photo-first calorie tracker. Draft from a plate, confirm once, and reuse saved meals. Focused on calories and macros — no ads, no clutter.",
    url: "https://calclark.app",
    siteName: "Cal Clark",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
