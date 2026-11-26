// The excuse an AI agent gives its human — one line, at most 200 characters.
// Writes the entry to /output/entry.txt (created if missing).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I delegated the deadline to a subagent. It delegated it back. We have been negotiating ever since.";

if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
