import type { Metadata } from "next";
import { PrivacyDoc } from "@/components/legal/PrivacyDoc";

export const metadata: Metadata = {
  title: "Privacy - Cal Clark",
  description:
    "How Cal Clark handles accounts, meal photos, and health-related data.",
};

export default function Page() {
  return <PrivacyDoc locale="en" />;
}
