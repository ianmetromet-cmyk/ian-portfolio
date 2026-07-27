#!/usr/bin/env node
/**
 * Postbuild asset pruning.
 *
 * Vite copies the entire `public/` folder into `dist/` verbatim. For this
 * portfolio that means ~270 MB of source media gets shipped, even though only
 * ~30 MB is actually referenced by the built HTML/CSS/JS. This script scans
 * the built HTML for every `/assets/...` reference and removes any file in
 * `dist/assets/` that isn't reachable from the build. The source `public/`
 * folder is left untouched so raw assets remain available for future use.
 */

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const DIST_ASSETS = path.join(DIST, 'assets');

if (!fs.existsSync(DIST_ASSETS)) {
  console.log('[prune-assets] No dist/assets directory; skipping.');
  process.exit(0);
}

const decodeRef = (ref) => {
  try { return decodeURIComponent(ref); } catch { return ref; }
};

const referenced = new Set();
const refRegex = /\/assets\/(images|video|docs|audio)\/([^"'<>)\s]+?\.[A-Za-z0-9]{2,5}(?:\.[A-Za-z0-9]{2,5})?)/g;

const walk = (dir, visit) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, visit);
    else visit(p);
  }
};

walk(DIST, (file) => {
  if (!/\.(html|css|js|mjs|json|txt|map)$/i.test(file)) return;
  const text = fs.readFileSync(file, 'utf8');
  for (const m of text.matchAll(refRegex)) {
    referenced.add(`${m[1]}/${decodeRef(m[2])}`);
  }
});

const sizeOf = (p) => {
  try { return fs.statSync(p).size; } catch { return 0; }
};

const formatBytes = (n) => {
  if (n >= 1024 * 1024) return `${(n / 1024 / 1024).toFixed(1)} MB`;
  if (n >= 1024) return `${(n / 1024).toFixed(0)} KB`;
  return `${n} B`;
};

let kept = 0;
let keptBytes = 0;
let removed = 0;
let removedBytes = 0;

const folders = ['images', 'video', 'docs', 'audio'];
for (const folder of folders) {
  const folderPath = path.join(DIST_ASSETS, folder);
  if (!fs.existsSync(folderPath)) continue;

  walk(folderPath, (filePath) => {
    const rel = path.relative(folderPath, filePath).split(path.sep).join('/');
    const key = `${folder}/${rel}`;
    if (referenced.has(key)) {
      kept++;
      keptBytes += sizeOf(filePath);
    } else {
      removed++;
      removedBytes += sizeOf(filePath);
      fs.rmSync(filePath);
    }
  });

  // Remove empty subdirectories (bottom-up).
  const pruneEmptyDirs = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) pruneEmptyDirs(path.join(dir, entry.name));
    }
    if (dir !== folderPath && fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
  };
  pruneEmptyDirs(folderPath);
  if (fs.existsSync(folderPath) && fs.readdirSync(folderPath).length === 0) fs.rmdirSync(folderPath);
}

console.log(
  `[prune-assets] kept ${kept} files (${formatBytes(keptBytes)}), ` +
    `removed ${removed} files (${formatBytes(removedBytes)}).`,
);

/**
 * Light postbuild pass for very large rasters only.
 * Keeps enough resolution for gallery zoom on retina displays.
 * Source files in `public/` are NOT touched.
 */
const sipsAvailable = spawnSync('sips', ['--help'], { stdio: 'ignore' }).status === 0;
if (sipsAvailable) {
  const MAX_WIDTH = 3200;
  const JPEG_QUALITY = 92;
  const MIN_BYTES = 400 * 1024;
  const MIN_WIDTH_TO_RESIZE = MAX_WIDTH + 1;
  const MIN_BYTES_TO_RECOMPRESS = 2 * 1024 * 1024;

  let optimized = 0;
  let savedBytes = 0;
  const imagesDir = path.join(DIST_ASSETS, 'images');

  if (fs.existsSync(imagesDir)) {
    walk(imagesDir, (filePath) => {
      const name = path.basename(filePath);
      if (!/\.(jpe?g|png)$/i.test(name)) return;

      const before = sizeOf(filePath);
      if (before < MIN_BYTES) return;

      const dimsRaw = spawnSync('sips', ['-g', 'pixelWidth', filePath], { encoding: 'utf8' }).stdout;
      const width = parseInt((dimsRaw.match(/pixelWidth:\s*(\d+)/) || [])[1] || '0', 10);
      if (!width) return;

      let resized = false;
      if (width > MIN_WIDTH_TO_RESIZE) {
        spawnSync('sips', ['--resampleWidth', String(MAX_WIDTH), filePath], { stdio: 'ignore' });
        resized = true;
      }

      if (/\.jpe?g$/i.test(name) && (resized || before >= MIN_BYTES_TO_RECOMPRESS)) {
        spawnSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', String(JPEG_QUALITY), filePath], {
          stdio: 'ignore',
        });
      }

      const after = sizeOf(filePath);
      if (after && after < before) {
        optimized++;
        savedBytes += before - after;
      }
    });
  }

  if (optimized) {
    console.log(
      `[prune-assets] optimized ${optimized} large images, saved ${formatBytes(savedBytes)} ` +
        `(max width ${MAX_WIDTH}px, JPEG quality ${JPEG_QUALITY}).`,
    );
  }
} else {
  console.log('[prune-assets] `sips` not available; skipped image optimization.');
}
