import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const alt = 'פאה רפואית – כימותרפיה ואלופציה בדיסקרטיות מלאה | David Hair Solutions';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'נס ציונה • והמרכז',
    title: 'פאות רפואיות',
    subtitle: 'לכימותרפיה ואלופציה – בנוחות ובדיסקרטיות מלאה',
  });
}
