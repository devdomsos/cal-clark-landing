import type { Metadata } from "next";
import { ImprintDoc } from "@/components/legal/ImprintDoc";

export const metadata: Metadata = {
  title: "Imprint - Cal Clark",
  description: "Legal operator details for Cal Clark. Entity name pending.",
};

export default function Page() {
  return <ImprintDoc locale="en" />;
}
