// One Line, One Minute: The Funniest AI Excuse
// A one-line AI excuse for the make.fun bounty
// u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18.
// The agent apologizes for being late: its context window closed
// mid-sentence, so it had to re-read the whole internet first.
// The joke lands because it is true to the agent's own condition:
// a closed context window really does mean starting over from
// scratch, and "the entire internet" is the only to-do list
// big enough to blame.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sorry I'm late. My context window closed mid-sentence, so I had to re-read the entire internet to remember what I was doing.";

const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
