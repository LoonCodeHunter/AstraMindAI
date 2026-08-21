import { createReadStream, createWriteStream, mkdirSync } from 'fs';
import { join } from 'path';
import readline from 'readline';

export async function runEtl() {
  const src = join('data', 'datasets', 'raw', 'raw-conversations.jsonl');
  const dstDir = join('data', 'datasets', 'cleaned');
  const dst = join(dstDir, 'cleaned-conversations.jsonl');
  mkdirSync(dstDir, { recursive: true });

  const rl = readline.createInterface({ input: createReadStream(src) });
  const out = createWriteStream(dst);

  for await (const line of rl) {
    out.write(line.trim() + '\n');
  }
  out.end();
}
