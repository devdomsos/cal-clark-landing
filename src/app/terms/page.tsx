import type { Metadata } from "next";
import { TermsDoc } from "@/components/legal/TermsDoc";

export const metadata: Metadata = {
  title: "Terms - Cal Clark",
};

export default function Page() {
  return <TermsDoc locale="en" />;
}
