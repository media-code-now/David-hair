import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const alt = 'צמידי שיער – הארכת שיער מהירה במראה טבעי | David Hair Solutions';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'נס ציונה • והמרכז',
    title: 'צמידי שיער',
    subtitle: 'הארכת שיער מהירה במראה טבעי',
  });
}
