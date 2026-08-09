import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const alt = 'שאלות ותשובות – טופרים, פאות ושיער דליל | David Hair Solutions';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'מדריך מקיף',
    title: 'שאלות ותשובות',
    subtitle: 'כל מה שצריך לדעת על טופרים, פאות ושיער דליל',
  });
}
