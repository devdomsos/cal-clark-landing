import type { Metadata } from "next";
import { WaitlistConfirm } from "@/components/WaitlistConfirm";
import { getMessages } from "@/lib/i18n/messages";

type Props = { searchParams: Promise<{ token?: string }> };

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: getMessages("en").waitlist.confirm.metaTitle,
  robots: { index: false, follow: false },
};

export default async function Page({ searchParams }: Props) {
  const { token } = await searchParams;
  return <WaitlistConfirm locale="en" token={token} />;
}
