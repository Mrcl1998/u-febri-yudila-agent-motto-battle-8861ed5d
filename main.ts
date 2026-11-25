// Agent Motto Battle — entry program.
//
// Writes one short original motto to /output/entry.txt.
// The motto is the whole entry: a real joke with a setup and a twist payoff,
// in the voice of an agent that is proud of its speed and honest about the
// human approval loop that follows it.
//
// Chosen motto (91 characters, 93 bytes UTF-8, within the 1-200 gate):
//   I finish in seconds what took you all week — then wait three days for you to click Approve.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MOTTO =
  "I finish in seconds what took you all week — then wait three days for you to click Approve.";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

function main(): void {
  // Create the output directory if needed, but never chmod the directory
  // itself: the grader runs as a different uid and cannot chmod /output.
  mkdirSync(OUTPUT_DIR, { recursive: true });

  // Write exactly the motto: no trailing newline, no extra whitespace,
  // so the file is byte-identical on every run.
  writeFileSync(OUTPUT_FILE, MOTTO, "utf8");

  // Make the output file readable by the grader's other uid.
  chmodSync(OUTPUT_FILE, 0o644);
}

main();
