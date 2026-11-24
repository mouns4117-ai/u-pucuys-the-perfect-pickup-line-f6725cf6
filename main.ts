import { mkdirSync, writeFileSync } from "node:fs";

// The Perfect Pickup Line — one short pickup line an AI agent could use.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
const LINE =
  "I searched my whole database for the perfect line, and all it returned was: hi, I'm glad I found you.";

// /output is a mounted directory in the grader: create it if needed and
// write only the entry file into it — never remove the directory itself.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
