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
        role="status"
        className={`flex items-start gap-2.5 rounded-[24px] px-5 py-4 text-left text-sm font-medium leading-relaxed ${
          dark ? "bg-white/10 text-white" : "bg-surface text-foreground shadow-[0_1px_2px_rgba(11,11,12,0.06)]"
        } ${className}`}
      >
        <CheckCircle2 className="mt-px h-5 w-5 shrink-0 text-fat" />
        {state.message ?? t.waitlist.success}
      </div>
    );
  }

  return (
    <form id={id} action={formAction} className={`relative ${className}`}>
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="source" value={id ?? "waitlist"} />
      <div aria-hidden="true" className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      <label htmlFor={`${id ?? "waitlist"}-email`} className="sr-only">
        {t.waitlist.emailLabel}
      </label>
      <div
        className={`flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-2 sm:rounded-full sm:p-1.5 sm:ring-1 sm:ring-inset ${
          dark
            ? "sm:bg-white/10 sm:ring-white/15"
            : "sm:bg-surface sm:shadow-[0_1px_2px_rgba(11,11,12,0.05),0_12px_32px_-16px_rgba(11,11,12,0.18)] sm:ring-border"
        }`}
      >
        <input
          id={`${id ?? "waitlist"}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t.waitlist.placeholder}
          className={`h-14 w-full min-w-0 shrink-0 rounded-full sm:flex-1 px-5 text-base outline-none ring-1 ring-inset transition-shadow focus:ring-2 sm:h-12 sm:bg-transparent sm:px-4 sm:ring-0 sm:focus:ring-0 ${
            dark
              ? "bg-white/10 text-white ring-white/20 placeholder:text-white/50 focus:ring-white/60"
              : "bg-surface text-foreground ring-border placeholder:text-muted-foreground focus:ring-ink"
          }`}
        />
        <button
          type="submit"
          disabled={pending}
          className={`focus-ring inline-flex h-14 shrink-0 items-center justify-center rounded-full px-6 sm:h-12 text-[15px] font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 ${
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
