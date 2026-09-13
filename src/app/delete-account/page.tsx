import type { Metadata } from "next";
import { DeleteAccountDoc } from "@/components/legal/DeleteAccountDoc";

export const metadata: Metadata = {
  title: "Delete your account - Cal Clark",
};

export default function Page() {
  return <DeleteAccountDoc locale="en" />;
}
