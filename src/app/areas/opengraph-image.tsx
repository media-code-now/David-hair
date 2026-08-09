import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const alt = 'אזורי שירות – טופרים ופאות במרכז ובדרום | David Hair Solutions';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'שירות מקומי',
    title: 'אזורי שירות',
    subtitle: 'טופרים ופאות בהתאמה אישית בכל אזור המרכז',
  });
}
