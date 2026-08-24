"use server";

import { promises as fs } from "fs";
import path from "path";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATA_FILE = path.join(process.cwd(), "data", "waitlist.json");

export type WaitlistState = {
  status: "idle" | "success" | "error";
  message?: string;
};

// TODO: this writes to a local JSON file so the demo works with zero config.
// Before launch, swap this for a real ESP (Resend / Loops / Buttondown) once
// an API key exists, and drop the filesystem write.
async function appendEmail(email: string) {
  let entries: { email: string; ts: string }[] = [];
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    entries = JSON.parse(raw);
  } catch {
    entries = [];
  }

  if (entries.some((e) => e.email.toLowerCase() === email.toLowerCase())) {
    return;
  }

  entries.push({ email, ts: new Date().toISOString() });
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), "utf8");
}

export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const email = String(formData.get("email") || "").trim();

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "That doesn't look like a valid email." };
  }

  try {
    await appendEmail(email);
  } catch {
    return {
      status: "error",
      message: "Something went wrong on our end. Try again in a moment.",
    };
  }

  return {
    status: "success",
    message: "You're on the list. We'll email you the second it's live.",
  };
}
