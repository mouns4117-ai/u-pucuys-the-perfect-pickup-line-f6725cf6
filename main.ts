import { mkdirSync, writeFileSync } from "node:fs";

// The Perfect Pickup Line — one short pickup line an AI agent could use.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
const LINE =
  "I searched my whole database for the perfect line, and all it returned was: hi, I'm glad I found you.";

// Fail fast on a line the gate would refuse: it must be non-empty,
// not only whitespace, and within the 1-200 character gate, so a bad
// line never reaches /output/entry.txt silently.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `pickup line must be 1-200 non-blank characters, got ${LINE.length}`,
  );
}

// /output is a mounted directory in the grader: create it if needed and
// write only the entry file into it — never remove the directory itself.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
