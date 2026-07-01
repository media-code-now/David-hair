// One-off / re-runnable script that regenerates the site's favicon and
// Open Graph share-preview image using the REAL brand logo and brand colors
// (navy #0f172a / gold #d4a853), instead of the default Next.js favicon or a
// generic stock photo.
//
// Uses Next.js's built-in `next/og` ImageResponse (Satori + resvg, already
// bundled with Next.js — no extra dependencies needed) to compose the images,
// and macOS `sips` to convert/resize the raster output.
//
// Run with: node scripts/generate-brand-assets.mjs
import { readFile, writeFile, unlink } from 'node:fs/promises';
import { join } from 'node:path';
import { execSync } from 'node:child_process';
import { ImageResponse } from 'next/og.js';

const ROOT = process.cwd();
const PUBLIC = join(ROOT, 'public');

const NAVY_900 = '#0f172a';
const NAVY_700 = '#283c63';
const GOLD = '#d4a853';

async function toDataUri(relPath, mime) {
  const buf = await readFile(join(PUBLIC, relPath));
  return `data:${mime};base64,${buf.toString('base64')}`;
}

async function renderPng(tree, width, height) {
  const res = new ImageResponse(tree, { width, height });
  return Buffer.from(await res.arrayBuffer());
}

function dot() {
  return {
    type: 'div',
    props: {
      style: { width: 14, height: 14, borderRadius: 9999, background: GOLD, display: 'flex' },
    },
  };
}

async function generateOgImage() {
  const logoWhite = await toDataUri('logo-white.png', 'image/png');

  const tree = {
    type: 'div',
    props: {
      style: {
        width: 1200,
        height: 630,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: `linear-gradient(135deg, ${NAVY_900} 0%, #1e2d4a 55%, ${NAVY_700} 100%)`,
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: -160,
              right: -160,
              width: 480,
              height: 480,
              borderRadius: 9999,
              background: 'rgba(212,168,83,0.14)',
              display: 'flex',
            },
          },
        },
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              bottom: -180,
              left: -180,
              width: 520,
              height: 520,
              borderRadius: 9999,
              background: 'rgba(212,168,83,0.10)',
              display: 'flex',
            },
          },
        },
        { type: 'img', props: { src: logoWhite, width: 520, height: 261 } },
        {
          type: 'div',
          props: {
            style: { width: 110, height: 4, background: GOLD, borderRadius: 2, marginTop: 44, marginBottom: 32, display: 'flex' },
          },
        },
        {
          type: 'div',
          props: {
            style: { display: 'flex', flexDirection: 'row', gap: 12, marginBottom: 22 },
            children: [dot(), dot(), dot(), dot(), dot()],
          },
        },
        {
          type: 'div',
          props: {
            style: { fontSize: 42, fontWeight: 700, color: '#f8f4ec', marginBottom: 14, display: 'flex' },
            children: '4.9',
          },
        },
        {
          type: 'div',
          props: {
            style: { fontSize: 26, color: '#8da4cc', letterSpacing: 3, fontWeight: 500, display: 'flex' },
            children: 'HAIRTOPPERSISRAEL.COM',
          },
        },
      ],
    },
  };

  const png = await renderPng(tree, 1200, 630);
  const tmpPath = join(PUBLIC, '_og-image-tmp.png');
  await writeFile(tmpPath, png);
  execSync(`sips -s format jpeg -s formatOptions best "${tmpPath}" --out "${join(PUBLIC, 'og-image.jpg')}"`, { stdio: 'ignore' });
  await unlink(tmpPath);
  console.log('✅ public/og-image.jpg regenerated with the real logo (1200x630 JPEG)');
}

async function generateFavicons() {
  const tree = {
    type: 'div',
    props: {
      style: {
        width: 512,
        height: 512,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: NAVY_900,
        borderRadius: 102,
      },
      children: {
        type: 'div',
        props: {
          style: { fontSize: 280, fontWeight: 800, color: GOLD, display: 'flex' },
          children: 'D',
        },
      },
    },
  };

  const masterPng = await renderPng(tree, 512, 512);
  const masterPath = join(PUBLIC, '_favicon-master.png');
  await writeFile(masterPath, masterPng);

  // public/favicon.png — square brand monogram (was previously a stretched
  // wordmark logo at 375x188, not ideal for a favicon <link>).
  await writeFile(join(PUBLIC, 'favicon.png'), masterPng);

  // apple-touch-icon.png — square 180x180, used on iOS home screen bookmarks
  // (previously pointed at the stretched wordmark logo too).
  execSync(`sips -z 180 180 "${masterPath}" --out "${join(PUBLIC, 'apple-touch-icon.png')}"`, { stdio: 'ignore' });

  // Build a real multi-resolution favicon.ico (16/32/48) wrapping PNG data
  // directly — supported by all modern browsers/OSes since Windows Vista —
  // to replace the leftover default Next.js/Vercel favicon.ico.
  const sizes = [16, 32, 48];
  const entries = [];
  for (const size of sizes) {
    const outPath = join(PUBLIC, `_favicon-${size}.png`);
    execSync(`sips -z ${size} ${size} "${masterPath}" --out "${outPath}"`, { stdio: 'ignore' });
    entries.push({ size, buf: await readFile(outPath) });
    await unlink(outPath);
  }

  const headerSize = 6;
  const dirEntrySize = 16;
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: 1 = icon
  header.writeUInt16LE(entries.length, 4); // image count

  const dirEntries = [];
  const imageBuffers = [];
  let offset = headerSize + dirEntrySize * entries.length;

  for (const { size, buf } of entries) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 = 256px)
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height (0 = 256px)
    entry.writeUInt8(0, 2); // color palette count (0 = no palette)
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buf.length, 8); // size of image data
    entry.writeUInt32LE(offset, 12); // offset of image data from start of file
    dirEntries.push(entry);
    imageBuffers.push(buf);
    offset += buf.length;
  }

  const ico = Buffer.concat([header, ...dirEntries, ...imageBuffers]);
  await writeFile(join(ROOT, 'src/app/favicon.ico'), ico);
  await unlink(masterPath);

  console.log('✅ src/app/favicon.ico, public/favicon.png, public/apple-touch-icon.png regenerated with the brand monogram');
}

await generateOgImage();
await generateFavicons();
