#!/usr/bin/env node
/**
 * beforeSubmitPrompt — auto-bind owning plan to this conversation.
 * No register CLI. No scratchpad. Uses @attachments, paths, or unique fuzzy name.
 */

import { stdin } from "node:process";
import {
  bindConversation,
  conversationSessionPath,
  isGrindFollowupPrompt,
  looksLikeWorkIntent,
  planExists,
  readPlanOpenTodos,
  readSessionFile,
  resolvePlanFromPrompt,
} from "./grind-lib.mjs";

function log(...args) {
  console.error("[grind-bind]", ...args);
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

const ROOT = process.cwd();

let input = {};
try {
  input = await readStdinJson();
} catch (err) {
  log("stdin parse error", err instanceof Error ? err.message : err);
  process.stdout.write("{}");
  process.exit(0);
}

const prompt = String(input.prompt ?? "");
const attachments = Array.isArray(input.attachments) ? input.attachments : [];
const conversationId = input.conversation_id ?? input.session_id ?? null;
const existing = readSessionFile(conversationSessionPath(conversationId));

if (isGrindFollowupPrompt(prompt) && !existing?.autoGrind) {
  log("ignore-followup-while-idle", { conversationId });
  process.stdout.write("{}");
  process.exit(0);
}

const resolved = resolvePlanFromPrompt(ROOT, prompt, attachments);
if (!resolved || !planExists(ROOT, resolved.plan)) {
  process.stdout.write("{}");
  process.exit(0);
}

const open = readPlanOpenTodos(ROOT, resolved.plan);
const hasAttachment = resolved.source === "attachment";
const hasPath = resolved.source === "prompt-path";
const work = looksLikeWorkIntent(prompt);

// Autopilot: @plan or explicit path with open todos always loops.
// Fuzzy name match only when the message looks like work intent.
const shouldGrind =
  open.length > 0 &&
  (hasAttachment || hasPath || (resolved.source === "fuzzy-name" && work));

if (!shouldGrind) {
  log("observe-only", {
    plan: resolved.plan,
    open: open.length,
    source: resolved.source,
  });
  process.stdout.write("{}");
  process.exit(0);
}

const bound = bindConversation(
  conversationId,
  resolved.plan,
  `beforeSubmitPrompt:${resolved.source}`,
  true,
);
log("bound", {
  conversationId,
  plan: resolved.plan,
  open: open.length,
  source: resolved.source,
  bound: Boolean(bound),
});

process.stdout.write("{}");
process.exit(0);
