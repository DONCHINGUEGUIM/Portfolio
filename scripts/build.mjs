import * as esbuild from 'esbuild';
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const dist = resolve(root, 'dist');

// Bundle JS
await esbuild.build({
  entryPoints: [resolve(root, 'src/main.jsx')],
  bundle: true,
  outfile: resolve(dist, 'assets/index.js'),
  loader: { '.jsx': 'jsx' },
  jsx: 'automatic',
  jsxImportSource: 'react',
  define: { 'process.env.NODE_ENV': `"production"` },
  minify: true,
  sourcemap: false,
  target: ['es2020'],
  legalComments: 'none',
});

// Copy assets
mkdirSync(resolve(dist, 'assets'), { recursive: true });

// Copy image
try {
  copyFileSync(resolve(root, 'public/hero-portrait.png'), resolve(dist, 'hero-portrait.png'));
} catch {}

// Generate index.html
const html = `<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Donchi Ngueguim — Software Engineer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/index.css">
  </head>
  <body class="bg-[#0a0a0a] text-white selection:bg-[#e05236] selection:text-white antialiased">
    <div id="root"></div>
    <script src="/assets/index.js"></script>
  </body>
</html>`;

writeFileSync(resolve(dist, 'index.html'), html, 'utf-8');

console.log('✓ Build complete — output in dist/');
