/**
 * stop hook — Cursor-native continue-until-done loop.
 *
 * Official primitive: return { followup_message } while work remains
 * (cursor.com/docs/hooks, Cursor agent best practices).
 *
 * Completion signal: owning plan YAML has zero pending/in_progress todos.
 * Binding: automatic via beforeSubmitPrompt (@plan / path / unique name + work intent).
 * Plan file read/edit and transcript scans do not start a grind.
 * User does not register, edit scratchpad, or name session files.
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { stdin } from "node:process";
import {
  bindConversation,
  conversationSessionPath,
  countOpenTodos,
  ensureGrindDirs,
  planExists,
  readSessionFile,
} from "./grind-lib.mjs";

const MAX_ITERATIONS = 6;
const ROOT = process.cwd();

function log(...args) {
  console.error("[grind]", ...args);
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

function reply(payload, reason) {
  const keys = Object.keys(payload);
  log(
    "reply",
    reason,
    keys.length === 0 ? "{}" : `{${keys.join(", ")}}`,
  );
  process.stdout.write(JSON.stringify(payload));
}

/**
 * @returns {{ autoGrind: boolean, plan: string | null, source: string } | null}
 */
function resolveBinding(conversationId) {
  ensureGrindDirs();
  const sessionPath = conversationSessionPath(conversationId);
  if (sessionPath) {
    const existing = readSessionFile(sessionPath);
    if (existing?.autoGrind && existing.plan) {
      return { ...existing, source: existing.source ?? "conversation" };
    }
    if (existing && existing.autoGrind === false) {
      return {
        autoGrind: false,
        plan: existing.plan,
        source: existing.source ?? "conversation-off",
      };
    }
  }

  return null;
}

log("=== stop hook invoked ===");

let input;
try {
  input = await readStdinJson();
} catch (err) {
  log("failed to parse stdin JSON:", err instanceof Error ? err.message : err);
  reply({}, "stdin-parse-error");
  process.exit(0);
}

const status = input.status ?? "completed";
const loopCount = Number(input.loop_count ?? 0);
const conversationId = input.conversation_id ?? input.session_id ?? "(none)";
const transcriptPath = input.transcript_path ?? null;

log("input", {
  conversation_id: conversationId,
  status,
  loop_count: loopCount,
  max_iterations: MAX_ITERATIONS,
});

if (status !== "completed") {
  reply({}, `skip: status=${status}`);
  process.exit(0);
}

if (loopCount >= MAX_ITERATIONS) {
  reply({}, `skip: hit MAX_ITERATIONS (${MAX_ITERATIONS})`);
  process.exit(0);
}

const binding = resolveBinding(conversationId);
log("binding", binding);

if (!binding || !binding.autoGrind || !binding.plan) {
  reply({}, "idle: no active plan grind for this conversation");
  process.exit(0);
}

const planRel = binding.plan;
if (!planExists(ROOT, planRel)) {
  reply({}, `stop: plan missing ${planRel}`);
  process.exit(0);
}

const planText = readFileSync(resolve(ROOT, planRel), "utf8");
const openTodos = countOpenTodos(planText);

log("plan", {
  path: planRel,
  source: binding.source,
  open_todo_count: openTodos.length,
  open_todos: openTodos.slice(0, 12),
});

if (openTodos.length === 0) {
  bindConversation(conversationId, planRel, "stop:feature-complete", false);
  reply({}, "stop: plan has no open todos (feature complete)");
  process.exit(0);
}

const preview = openTodos.slice(0, 5).join(", ");
const followup = `[Iteration ${loopCount + 1}/${MAX_ITERATIONS}] Continue. Owning plan: ${planRel}. Open todos (${openTodos.length}): ${preview}${openTodos.length > 5 ? ", …" : ""}. Implement the next open plan todo. Update that plan's YAML status when a todo finishes. Feature complete = zero pending/in_progress todos on this plan - do not ask for another definition of done, and do not invent a parallel checklist. Gates still apply (typecheck, visual QA if UI).`;

log("continue → followup_message", {
  iteration: loopCount + 1,
  of: MAX_ITERATIONS,
  preview: followup.slice(0, 140) + "…",
});

reply({ followup_message: followup }, "continue");
process.exit(0);
