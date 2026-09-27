import { readdir, writeFile } from 'node:fs/promises';
import { join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const output = resolve(fileURLToPath(new URL('../out', import.meta.url)));
const assets = new Set(['/']);

async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) {
      await visit(file);
      continue;
    }
    if (!entry.isFile() || entry.name.endsWith('.map') || entry.name === 'offline-assets.json') continue;

    const path = relative(output, file).split(sep).join('/');
    if (entry.name === 'index.html') {
      const route = path.slice(0, -'index.html'.length);
      assets.add(`/${route}`);
    } else if (path.startsWith('_next/static/') || path.startsWith('data/') || !path.startsWith('_next/')) {
      assets.add(`/${path}`);
    }
  }
}

await visit(output);
await writeFile(join(output, 'offline-assets.json'), JSON.stringify([...assets]));
console.log(`Generated offline precache manifest with ${assets.size} local assets.`);
