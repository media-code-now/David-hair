import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const alt = 'טופר לשיער דליל – כיסוי שביל וקודקוד | David Hair Solutions';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'נס ציונה • והמרכז',
    title: 'טופר לשיער דליל',
    subtitle: 'כיסוי שביל וקודקוד במראה טבעי מלא',
  });
}
