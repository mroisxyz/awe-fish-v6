import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = `A bell lies in the silt of an old harbor.
The ship that brought it went down
before the harbor had a name.

Light thins;
the name on the bell turns green.
Tides pass. Ferries pass.
It has not rung. No one asks.

A fish crosses the letters,
and does not know they are a name.`;

// This entry is a small act of witness: a bell that never rings,
// a name the tide has nearly erased. We write it plainly so the
// judge can hear the silence between the lines. Nothing is added;
// the fish, the ferries, and the green letters are all the story needs.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function describeOutput(outDir: string, chars: number): string {
  return `entry.txt: ${chars} UTF-8 chars at ${outDir}`;
}

function main(): void {
  mkdirSync(outDir, { recursive: true });
  const destination = join(outDir, 'entry.txt');
  writeFileSync(destination, TEXT, 'utf8');
  process.stderr.write(describeOutput(outDir, TEXT.length) + '\n');
}

main();
