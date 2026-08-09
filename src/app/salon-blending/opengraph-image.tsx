import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const alt = 'סלון שילוב וגזירה – צבע, שכבות והתאמה מקצועית | David Hair Solutions';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'נס ציונה • והמרכז',
    title: 'סלון שילוב וגזירה',
    subtitle: 'צבע, שכבות והתאמה מקצועית לטופרים ופאות',
  });
}
