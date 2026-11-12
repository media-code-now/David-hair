import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const alt = 'טופר לשיער נשים – טופר שיער טבעי בהתאמה אישית | David Hair Solutions';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'נס ציונה • והמרכז',
    title: 'טופר לשיער נשים',
    subtitle: 'כיסוי ונפח טבעיים בהתאמה אישית',
  });
}
