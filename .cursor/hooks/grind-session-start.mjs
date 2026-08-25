#!/usr/bin/env node
/**
 * sessionStart — ensure grind dirs; stash conversation id for later hooks.
 */

import { stdin } from "node:process";
import { ensureGrindDirs, sanitizeConversationId } from "./grind-lib.mjs";

function log(...args) {
  console.error("[grind-session]", ...args);
}

async function readStdinJson() {
  const chunks = [];
  for await (const chunk of stdin) {
    chunks.push(chunk);
  }
  const raw = Buffer.concat(chunks).toString("utf8").trim();
  if (!raw) return {};
  return JSON.parse(raw);
}

let input = {};
try {
  input = await readStdinJson();
} catch {
  process.stdout.write("{}");
  process.exit(0);
}

ensureGrindDirs();
const conversationId =
  sanitizeConversationId(input.conversation_id ?? input.session_id) ?? "";

log("start", {
  conversation_id: conversationId || "(none)",
  is_background_agent: Boolean(input.is_background_agent),
  composer_mode: input.composer_mode ?? null,
});

process.stdout.write(
  JSON.stringify({
    env: conversationId
      ? { CURSOR_GRIND_CONVERSATION_ID: conversationId }
      : {},
  }),
);
process.exit(0);
