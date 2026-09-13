import type { Metadata } from "next";
import { CookiesDoc } from "@/components/legal/CookiesDoc";

export const metadata: Metadata = {
  title: "Cookies - Cal Clark",
  description: "How calclark.app uses cookies. No ads. No tracking pixels today.",
};

export default function Page() {
  return <CookiesDoc locale="en" />;
}
