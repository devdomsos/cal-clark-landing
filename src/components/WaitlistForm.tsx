"use client";

import { useActionState } from "react";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";
import { CheckCircle2 } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

const initialState: WaitlistState = { status: "idle" };

export function WaitlistForm({
  id,
  locale,
  compact = false,
  className = "",
}: {
  id?: string;
  locale: Locale;
  compact?: boolean;
  className?: string;
}) {
  const t = getMessages(locale);
  const [state, formAction, pending] = useActionState(joinWaitlist, initialState);

  if (state.status === "success") {
    return (
      <div
        className={`flex items-center gap-2 rounded-xl border border-fat/30 bg-fat/10 px-4 py-3 text-sm font-medium text-foreground ${className}`}
      >
        <CheckCircle2 className="h-5 w-5 shrink-0 text-fat" />
        {state.message ?? t.waitlist.success}
      </div>
    );
  }

  return (
    <form
      id={id}
      action={formAction}
      className={`flex flex-col gap-2 ${compact ? "sm:flex-row" : "sm:flex-row"} ${className}`}
    >
      <input type="hidden" name="locale" value={locale} />
      <label htmlFor={`${id ?? "waitlist"}-email`} className="sr-only">
        {t.waitlist.emailLabel}
      </label>
      <input
        id={`${id ?? "waitlist"}-email`}
        name="email"
        type="email"
        required
        placeholder={t.waitlist.placeholder}
        className="focus-ring w-full flex-1 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground"
      />
      <button
        type="submit"
        disabled={pending}
        className="focus-ring inline-flex shrink-0 items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98] disabled:opacity-60"
      >
        {pending ? t.waitlist.pending : t.waitlist.submit}
      </button>
      {state.status === "error" && (
        <p className="text-xs font-medium text-protein sm:basis-full">
          {state.message}
        </p>
      )}
    </form>
  );
}
