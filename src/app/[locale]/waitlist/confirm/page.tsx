import type { Metadata } from "next";
import { WaitlistConfirm } from "@/components/WaitlistConfirm";
import { getMessages } from "@/lib/i18n/messages";
import { parseLocaleParam } from "@/lib/parseSubLocale";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ token?: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await parseLocaleParam(params);
  return {
    title: getMessages(locale).waitlist.confirm.metaTitle,
    robots: { index: false, follow: false },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const locale = await parseLocaleParam(params);
  const { token } = await searchParams;
  return <WaitlistConfirm locale={locale} token={token} />;
}
