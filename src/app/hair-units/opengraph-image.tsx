import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const alt = 'יחידות שיער לנשים – יחידת שיער בהתאמה אישית | דוד פתרונות לשיער';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'נס ציונה • והמרכז',
    title: 'יחידות שיער לנשים',
    subtitle: 'פתרון טבעי ומדויק לכל סוג ורמת דלילות',
  });
}
