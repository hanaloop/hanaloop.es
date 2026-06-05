import fs from 'node:fs';
import path from 'node:path';

const outDir = path.join(process.cwd(), 'out');
const defaultLocaleDir = path.join(outDir, 'ko');

if (!fs.existsSync(defaultLocaleDir)) {
  throw new Error(`[export-default-locale] Missing default locale directory: ${defaultLocaleDir}`);
}

for (const entry of fs.readdirSync(defaultLocaleDir)) {
  const source = path.join(defaultLocaleDir, entry);
  const target = path.join(outDir, entry);

  fs.cpSync(source, target, { recursive: true, force: true });
}

fs.rmSync(defaultLocaleDir, { recursive: true, force: true });

console.log('[export-default-locale] copied out/ko/* to out/* and removed out/ko');
