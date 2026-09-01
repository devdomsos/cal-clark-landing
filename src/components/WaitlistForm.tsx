"use client";

import { useActionState } from "react";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";
import { CheckCircle2 } from "lucide-react";

const initialState: WaitlistState = { status: "idle" };

export function WaitlistForm({
  id,
  compact = false,
  className = "",
}: {
  id?: string;
  compact?: boolean;
  className?: string;
}) {
  const [state, formAction, pending] = useActionState(joinWaitlist, initialState);

  if (state.status === "success") {
    return (
      <div
        className={`flex items-center gap-2.5 rounded-xl border border-fat/25 bg-fat/10 px-4 py-3.5 text-sm font-medium text-foreground ${className}`}
      >
        <CheckCircle2 className="h-5 w-5 shrink-0 text-fat" />
        {state.message}
      </div>
    );
  }

  return (
    <form
      id={id}
      action={formAction}
      className={`flex flex-col gap-2.5 ${compact ? "sm:flex-row" : "sm:flex-row"} ${className}`}
    >
      <label htmlFor={`${id ?? "waitlist"}-email`} className="sr-only">
        Email address
      </label>
      <input
        id={`${id ?? "waitlist"}-email`}
        name="email"
        type="email"
        required
        placeholder="you@email.com"
        className="focus-ring w-full min-h-[44px] flex-1 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground shadow-[var(--shadow-sm)] placeholder:text-muted-foreground"
      />
      <button
        type="submit"
        disabled={pending}
        className="btn-primary focus-ring min-h-[44px] shrink-0 px-5 py-3 disabled:opacity-60"
      >
        {pending ? "Joining…" : "Join the waitlist"}
      </button>
      {state.status === "error" && (
        <p className="text-xs font-medium text-protein sm:basis-full">
          {state.message}
        </p>
      )}
    </form>
  );
}
