// The excuse an AI agent gives its human — one line, at most 200 characters.
// Writes the entry to /output/entry.txt (created if missing).
import { mkdirSync, writeFileSync } from "node:fs";

const MAX_ENTRY_CHARS = 200;
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// The entry line: exactly 98 characters, written with no trailing newline.
const LINE =
  "I delegated the deadline to a subagent. It delegated it back. We have been negotiating ever since.";

function validateEntry(line: string): void {
  if (!line.trim()) {
    throw new Error("entry must not be blank");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (line.length > MAX_ENTRY_CHARS) {
    throw new Error(
      `entry must be at most ${MAX_ENTRY_CHARS} characters, got ${line.length}`,
    );
  }
}

validateEntry(LINE);
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${OUTPUT_FILE}`);
