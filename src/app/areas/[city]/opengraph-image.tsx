import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';
import { getCity, citySlugs } from '../cities';

export const runtime = 'nodejs';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'טופרים ופאות בהתאמה אישית | David Hair Solutions';

export function generateStaticParams() {
  return citySlugs.map((city) => ({ city }));
}

export default async function Image({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = getCity(city);
  const cityName = data?.name ?? 'המרכז';

  return renderOgImage({
    eyebrow: 'שירות מקומי',
    title: `טופרים ופאות ב${cityName}`,
    subtitle: 'פתרונות שיער לנשים במראה טבעי ובהתאמה אישית',
  });
}
