import type { Metadata } from "next";
import { SupportDoc } from "@/components/legal/SupportDoc";

export const metadata: Metadata = {
  title: "Support - Cal Clark",
  description: "Cancel, refunds, restore purchase, and how to reach Cal Clark.",
};

export default function Page() {
  return <SupportDoc locale="en" />;
}
