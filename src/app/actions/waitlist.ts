"use server";

import { isLocale, type Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { postCalClarkApi } from "@/lib/calClarkApi";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type WaitlistState = {
  status: "idle" | "success" | "error";
  message?: string;
};

// Signups live in the Cal Clark API (Postgres table waitlist_signups). The API
// stores the email, checks for duplicates, and sends the confirmation email
// (double opt-in via Resend). See server/src/routes/waitlist.ts in the app repo.
export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const email = String(formData.get("email") || "").trim();
  const localeRaw = String(formData.get("locale") || "en");
  const locale: Locale = isLocale(localeRaw) ? localeRaw : "en";
  const source = String(formData.get("source") || "").slice(0, 40) || undefined;
  const t = getMessages(locale);

  // Honeypot: people never see or fill this field, form bots do.
  if (String(formData.get("company") || "") !== "") {
    return { status: "success", message: t.waitlist.success };
  }

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: t.waitlist.invalid };
  }

  try {
    const res = await postCalClarkApi("/v1/waitlist", { email, locale, source });
    if (res.status === 400) {
      return { status: "error", message: t.waitlist.invalid };
    }
    if (!res.ok) {
      console.error(`[waitlist] API responded ${res.status}`);
      return { status: "error", message: t.waitlist.error };
    }
    const body = (await res.json()) as { status: string };
    return {
      status: "success",
      message: body.status === "already_confirmed" ? t.waitlist.already : t.waitlist.success,
    };
  } catch (error) {
    console.error("[waitlist] API call failed", error);
    return { status: "error", message: t.waitlist.error };
  }
}
