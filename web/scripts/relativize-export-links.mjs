import { readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const output = resolve(fileURLToPath(new URL('../out', import.meta.url)));

async function visit(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) {
      await visit(file);
      continue;
    }
    if (!entry.isFile() || !entry.name.endsWith('.html')) continue;

    const pageRelative = relative(output, dirname(file));
    const rootPrefix = relative(pageRelative || '.', '.').split(sep).join('/');
    const relativeRoot = rootPrefix ? `${rootPrefix}/` : './';
    const html = await readFile(file, 'utf8');
    const portableHtml = html.replace(/\b(href|src)=(")\/(?!\/)([^\"]*)\2/g, (_, attribute, quote, target) => `${attribute}=${quote}${relativeRoot}${target}${quote}`).replace(/(["'])\/_next\//g, `$1${relativeRoot}_next/`);
    if (portableHtml !== html) await writeFile(file, portableHtml);
  }
}

await visit(output);
console.log('Rewrote exported asset and navigation links to route-relative paths.');
