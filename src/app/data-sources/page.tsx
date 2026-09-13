import type { Metadata } from "next";
import { DataSourcesDoc } from "@/components/legal/DataSourcesDoc";

export const metadata: Metadata = {
  title: "Where the numbers come from - Cal Clark",
  description:
    "How Cal Clark drafts calories from a photo, published nutrition tables, and product labels.",
};

export default function Page() {
  return <DataSourcesDoc locale="en" />;
}
