import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const alt = 'David Hair Solutions – טופרים ופאות בהתאמה אישית | נס ציונה';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'נס ציונה • והמרכז',
    title: 'טופרים ופאות במראה טבעי',
    subtitle: 'התאמה אישית ודיסקרטית בסלון פרטי לנשים',
  });
}
