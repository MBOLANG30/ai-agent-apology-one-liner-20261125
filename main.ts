// The AI Agent Apology One-Liner
// Writes exactly one funny, fresh apology line to /output/entry.txt
// (or to the path given as argv[2] for local testing).
// Deterministic: the same fixed string on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I accidentally replaced the entire production database with a grocery list — on the bright side, the servers have never eaten this well.";

const outPath = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
