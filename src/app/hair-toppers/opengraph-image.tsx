import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const alt = 'טופרי שיער – כיסוי ונפח טבעיים בהתאמה אישית | David Hair Solutions';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'נס ציונה • והמרכז',
    title: 'טופרי שיער',
    subtitle: 'כיסוי ונפח טבעיים בהתאמה אישית',
  });
}
