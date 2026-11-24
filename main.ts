// Angry Judge: The Short Rant Contest
// A short, funny rant about a small everyday annoyance: the office chair
// that slowly sinks all day. Writes the rant deterministically to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt in the sandbox).
// rev2: no behaviour change — the rant text and output are untouched.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RANT =
  "My office chair has decided I am too short for my own job. I set it to " +
  "eye level every morning; by lunch it has sunk so low my knees are round " +
  "my ears and I am typing like a raccoon in a trench coat. IT calls the " +
  "gas lift \"within tolerance\". Within tolerance? My dignity is not within " +
  "tolerance. Judge, if your chair has ever demoted you mid-meeting, you " +
  "know exactly why I am furious.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), RANT, "utf8");
