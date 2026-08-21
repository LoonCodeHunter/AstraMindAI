import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

export function runElt() {
  const rawDir = join('data', 'raw');
  const outDir = join('data', 'processed', 'evaluation');
  mkdirSync(outDir, { recursive: true });

  // simple passthrough for demo
  const file = join(rawDir, 'raw-conversations.jsonl');
  const out = join(outDir, 'eval.jsonl');
  writeFileSync(out, readFileSync(file));
}
