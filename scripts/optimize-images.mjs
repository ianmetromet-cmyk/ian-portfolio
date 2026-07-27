#!/usr/bin/env node
/**
 * Resize/compress images referenced by the portfolio HTML.
 * Photo thumbnails → max 1280px JPEG. Gallery photos → max 1920px JPEG.
 * Keeps PNG only when alpha is required.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const HTML = path.join(ROOT, 'src/portfolioBody.html');
const IMG_ROOT = path.join(ROOT, 'public/assets/images');

const THUMB_MAX = 1280;
const GALLERY_MAX = 1920;
const JPEG_QUALITY = 82;

const thumbNames = new Set([
  'ppmm-thumbnail.png',
  'ppmm-clinic-thumbnail.png',
  'santa-clara-county-board-ai.png',
  'santa-cruz-strike-thumbnail.png',
  'santa-clara-county-strike-thumbnail.png',
  'spanish-media-thumbnail.png',
  'special-ed-thumb.jpg',
  'ice-mental-health-thumbnail.png',
  '240114-SCCDCFS-JG-5-1020x680.jpg',
  '20251112_HEADSTART_SANTACRUZ_GH-1-KQED.jpg',
  'site-a.jpg.webp',
  'site-Jaxon-124.webp',
]);

const refs = new Set();
for (const m of fs.readFileSync(HTML, 'utf8').matchAll(/\/assets\/images\/([^"'<>)\s]+)/g)) {
  refs.add(decodeURIComponent(m[1]));
}

const formatBytes = (n) => {
  if (n >= 1024 * 1024) return `${(n / 1024 / 1024).toFixed(2)} MB`;
  if (n >= 1024) return `${(n / 1024).toFixed(0)} KB`;
  return `${n} B`;
};

const hasAlpha = async (input) => {
  const { channels, hasAlpha: alpha } = await sharp(input).metadata();
  return alpha || channels === 4;
};

const replacements = new Map();

for (const rel of [...refs].sort()) {
  const input = path.join(IMG_ROOT, rel);
  if (!fs.existsSync(input)) continue;

  const before = fs.statSync(input).size;
  const base = path.basename(rel);
  const isThumb = thumbNames.has(base);
  const isGallery = rel.startsWith('monterey/') || rel.startsWith('living-wage/');
  const maxWidth = isThumb ? THUMB_MAX : isGallery ? GALLERY_MAX : null;
  if (!maxWidth) continue;

  const meta = await sharp(input).metadata();
  const needsResize = (meta.width ?? 0) > maxWidth;
  const needsCompress = before > 180_000;
  if (!needsResize && !needsCompress) continue;

  let pipeline = sharp(input).rotate();
  if (needsResize) pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });

  const alpha = await hasAlpha(input);
  const outExt = alpha ? path.extname(rel) : '.jpg';
  const outRel = alpha
    ? rel
    : rel.replace(/\.(png|jpe?g|webp)$/i, '.jpg').replace(/\.jpg\.jpg$/i, '.jpg');
  const output = path.join(IMG_ROOT, outRel);

  if (alpha) {
    await pipeline.png({ compressionLevel: 9, palette: true }).toFile(output + '.tmp');
  } else {
    await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(output + '.tmp');
  }

  fs.renameSync(output + '.tmp', output);
  if (output !== input) fs.unlinkSync(input);

  const after = fs.statSync(output).size;
  if (outRel !== rel) replacements.set(rel, outRel);
  console.log(`${rel}${outRel !== rel ? ` → ${outRel}` : ''}: ${formatBytes(before)} → ${formatBytes(after)}`);
}

if (replacements.size) {
  let html = fs.readFileSync(HTML, 'utf8');
  for (const [from, to] of replacements) {
    html = html.replaceAll(`/assets/images/${from}`, `/assets/images/${to}`);
  }
  fs.writeFileSync(HTML, html);
  console.log(`Updated ${replacements.size} image path(s) in portfolioBody.html`);
}
