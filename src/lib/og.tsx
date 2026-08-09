import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Shared Open Graph image renderer used by every route's `opengraph-image.tsx`.
// Produces a real, on-brand 1200x630 share preview with the actual logo and the
// page-specific title baked in — so links shared on WhatsApp / Facebook / X show
// a unique, branded card per page instead of one generic image.

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

const NAVY_900 = '#0f172a';
const NAVY_700 = '#283c63';
const GOLD = '#d4a853';

async function logoDataUri(): Promise<string> {
  const buf = await readFile(join(process.cwd(), 'public', 'logo-white.png'));
  return `data:image/png;base64,${buf.toString('base64')}`;
}

interface OgOptions {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export async function renderOgImage({ title, subtitle, eyebrow }: OgOptions) {
  const logo = await logoDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          background: `linear-gradient(135deg, ${NAVY_900} 0%, #1e2d4a 55%, ${NAVY_700} 100%)`,
          fontFamily: 'sans-serif',
          padding: '0 90px',
        }}
      >
        {/* Ambient gold blobs */}
        <div
          style={{
            position: 'absolute',
            top: -160,
            right: -160,
            width: 480,
            height: 480,
            borderRadius: 9999,
            background: 'rgba(212,168,83,0.14)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -180,
            left: -180,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: 'rgba(212,168,83,0.10)',
            display: 'flex',
          }}
        />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={300} height={150} alt="David Hair Solutions" style={{ marginBottom: 28 }} />

        {/* Gold divider */}
        <div style={{ width: 90, height: 4, background: GOLD, borderRadius: 2, marginBottom: 34, display: 'flex' }} />

        {eyebrow ? (
          <div
            style={{
              fontSize: 26,
              color: GOLD,
              fontWeight: 600,
              letterSpacing: 2,
              marginBottom: 18,
              display: 'flex',
            }}
          >
            {eyebrow}
          </div>
        ) : null}

        {/* Title */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: '#f8f4ec',
            textAlign: 'center',
            lineHeight: 1.15,
            display: 'flex',
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        {subtitle ? (
          <div
            style={{
              fontSize: 32,
              color: '#8da4cc',
              fontWeight: 500,
              textAlign: 'center',
              marginTop: 22,
              display: 'flex',
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            {subtitle}
          </div>
        ) : null}

        {/* Domain footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 22,
            color: '#6b7fa8',
            letterSpacing: 3,
            fontWeight: 500,
            display: 'flex',
          }}
        >
          HAIRTOPPERSISRAEL.COM
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
