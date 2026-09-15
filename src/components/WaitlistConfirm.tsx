import Link from "next/link";
import { CheckCircle2, CircleAlert } from "lucide-react";
import { Logo } from "@/components/Logo";
import { HtmlLang } from "@/components/HtmlLang";
import { homePath, type Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { postCalClarkApi } from "@/lib/calClarkApi";

type ConfirmStatus = "confirmed" | "already_confirmed" | "expired" | "invalid" | "error";

async function confirmToken(token: string | undefined): Promise<ConfirmStatus> {
  if (!token) return "invalid";
  try {
    const res = await postCalClarkApi("/v1/waitlist/confirm", { token });
    if (!res.ok) return "error";
    const body = (await res.json()) as { status: ConfirmStatus };
    return body.status;
  } catch (error) {
    console.error("[waitlist] confirm call failed", error);
    return "error";
  }
}

export async function WaitlistConfirm({
  locale,
  token,
}: {
  locale: Locale;
  token: string | undefined;
}) {
  const status = await confirmToken(token);
  const t = getMessages(locale).waitlist;
  const ok = status === "confirmed" || status === "already_confirmed";

  const copy: Record<ConfirmStatus, { title: string; body?: string }> = {
    confirmed: { title: t.confirm.confirmedTitle, body: t.confirm.confirmedBody },
    already_confirmed: { title: t.confirm.alreadyTitle, body: t.confirm.alreadyBody },
    expired: { title: t.confirm.expiredTitle, body: t.confirm.expiredBody },
    invalid: { title: t.confirm.invalidTitle, body: t.confirm.invalidBody },
    error: { title: t.confirm.errorTitle },
  };
  const { title, body } = copy[status];
  const home = homePath(locale);

  return (
    <main className="flex min-h-svh flex-col px-5 py-8">
      <HtmlLang locale={locale} />
      <Link href={home} className="focus-ring self-start">
        <Logo />
      </Link>
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center py-16 text-center">
        {ok ? (
          <CheckCircle2 className="h-12 w-12 text-fat" aria-hidden="true" />
        ) : (
          <CircleAlert className="h-12 w-12 text-protein" aria-hidden="true" />
        )}
        <h1 className="display mt-6 text-4xl text-foreground sm:text-5xl">{title}</h1>
        {body ? <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{body}</p> : null}
        <Link
          href={ok ? home : `${home === "/" ? "" : home}/#join`}
          className="focus-ring mt-10 inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-[15px] font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {ok ? t.confirm.back : getMessages(locale).nav.waitlist}
        </Link>
      </div>
    </main>
  );
}
