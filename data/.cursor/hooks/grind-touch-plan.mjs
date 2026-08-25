#!/usr/bin/env node
/**
 * beforeReadFile / afterFileEdit — incidental plan-file access must not start
 * a grind loop. Only keep an already-on bind for the same plan (YAML updates
 * during a real grind). Never steal another plan's bind.
 */

import { stdin } from "node:process";
import {
  conversationSessionPath,
  normalizePlanRel,
  planExists,
  readPlanOpenTodos,
  readSessionFile,
  toPlanRelFromAbsolute,
} from "./grind-lib.mjs";

function log(...args) {
  console.error("[grind-touch]", ...args);
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
} catch {
  process.stdout.write("{}");
  process.exit(0);
}

const filePath = String(input.file_path ?? "");
const planRel =
  toPlanRelFromAbsolute(ROOT, filePath) ?? normalizePlanRel(filePath);

if (!planRel || !planExists(ROOT, planRel)) {
  process.stdout.write("{}");
  process.exit(0);
}

const conversationId = input.conversation_id ?? input.session_id ?? null;
const open = readPlanOpenTodos(ROOT, planRel);
const event = String(input.hook_event_name ?? "touch");
const existing = readSessionFile(conversationSessionPath(conversationId));

if (existing?.autoGrind && existing.plan === planRel) {
  log("keep-active", { conversationId, plan: planRel, event, open: open.length });
  process.stdout.write("{}");
  process.exit(0);
}

if (existing?.autoGrind && existing.plan && existing.plan !== planRel) {
  log("skip-steal", {
    conversationId,
    active: existing.plan,
    touched: planRel,
    event,
  });
  process.stdout.write("{}");
  process.exit(0);
}

log("observe-only", {
  conversationId,
  plan: planRel,
  event,
  open: open.length,
  reason: "plan file touch does not start grind",
});
process.stdout.write("{}");
process.exit(0);
