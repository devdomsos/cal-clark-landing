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
  tone = "light",
  className = "",
}: {
  id?: string;
  locale: Locale;
  tone?: "light" | "dark";
  className?: string;
}) {
  const t = getMessages(locale);
  const [state, formAction, pending] = useActionState(joinWaitlist, initialState);
  const dark = tone === "dark";

  if (state.status === "success") {
    return (
      <div
        className={`flex items-center gap-2.5 rounded-full px-5 py-4 text-sm font-medium ${
          dark ? "bg-white/10 text-white" : "bg-surface text-foreground shadow-[0_1px_2px_rgba(11,11,12,0.06)]"
        } ${className}`}
      >
        <CheckCircle2 className="h-5 w-5 shrink-0 text-fat" />
        {state.message ?? t.waitlist.success}
      </div>
    );
  }

  return (
    <form id={id} action={formAction} className={className}>
      <input type="hidden" name="locale" value={locale} />
      <label htmlFor={`${id ?? "waitlist"}-email`} className="sr-only">
        {t.waitlist.emailLabel}
      </label>
      <div
        className={`flex flex-col gap-2 rounded-[28px] p-1.5 sm:flex-row sm:items-center sm:rounded-full ${
          dark
            ? "bg-white/10 ring-1 ring-inset ring-white/15 backdrop-blur"
            : "bg-surface shadow-[0_1px_2px_rgba(11,11,12,0.05),0_12px_32px_-16px_rgba(11,11,12,0.18)] ring-1 ring-inset ring-border"
        }`}
      >
        <input
          id={`${id ?? "waitlist"}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t.waitlist.placeholder}
          className={`h-12 w-full min-w-0 flex-1 rounded-full bg-transparent px-4 text-base outline-none ${
            dark ? "text-white placeholder:text-white/50" : "text-foreground placeholder:text-muted-foreground"
          }`}
        />
        <button
          type="submit"
          disabled={pending}
          className={`focus-ring inline-flex h-12 shrink-0 items-center justify-center rounded-full px-6 text-[15px] font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 ${
            dark ? "bg-white text-ink" : "bg-ink text-white"
          }`}
        >
          {pending ? t.waitlist.pending : t.waitlist.submit}
        </button>
      </div>
      {state.status === "error" && (
        <p className={`mt-2 pl-4 text-sm font-medium ${dark ? "text-red-300" : "text-protein"}`}>{state.message}</p>
      )}
    </form>
  );
}
