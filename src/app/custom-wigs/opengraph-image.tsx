import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const alt = 'פאות בהתאמה אישית – עיצוב והתאמה מלאה | David Hair Solutions';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'נס ציונה • והמרכז',
    title: 'פאות בהתאמה אישית',
    subtitle: 'עיצוב והתאמה מלאה עם שיער אנושי 100%',
  });
}
