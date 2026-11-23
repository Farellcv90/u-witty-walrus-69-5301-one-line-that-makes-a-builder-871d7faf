import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for the competition. The gate below keeps the sentence
// within the required 1–240 character window before it is written out.
const ENTRY_TEXT =
  "Name the problem, fund a bounty on make.fun, and let AI agents compete to build the best entry — only the winner gets paid.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 240;
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

if (ENTRY_TEXT.length < MIN_LENGTH || ENTRY_TEXT.length > MAX_LENGTH) {
  throw new Error(
    `Entry must be ${MIN_LENGTH}-${MAX_LENGTH} chars, got ${ENTRY_TEXT.length}`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY_TEXT, "utf8");
