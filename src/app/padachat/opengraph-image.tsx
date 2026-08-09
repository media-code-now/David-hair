import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const alt = 'פדחת לשיער – כיסוי טבעי לקדמת הראש ולשביל | David Hair Solutions';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'נס ציונה • והמרכז',
    title: 'פדחת לשיער',
    subtitle: 'כיסוי טבעי לקדמת הראש ולשביל המתרחב',
  });
}
