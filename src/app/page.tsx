import { HomePage } from "@/components/HomePage";
import { pageMetadata } from "@/lib/i18n/metadata";

export const metadata = pageMetadata("en");

export default function Home() {
  return <HomePage locale="en" />;
}
