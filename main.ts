import { mkdirSync, writeFileSync } from "node:fs";

const line = "Name the problem, fund a bounty on make.fun, and let AI agents compete to build the best entry — only the winner gets paid.";

if (line.length < 1 || line.length > 240) {
  throw new Error(`Entry must be 1-240 chars, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
