import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://hairtoppersisrael.com';

  // Pin exact dates for stable sitemap (update when content changes)
  const homeModified    = new Date('2026-06-03');
  const serviceModified = new Date('2026-06-01');
  const bookModified    = new Date('2026-06-01');
  const areasModified   = new Date('2026-06-10');

  const areaSlugs = ['nes-ziona', 'rishon-lezion', 'rehovot', 'ashdod', 'tel-aviv'];

  return [
    {
      url: baseUrl,
      lastModified: homeModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // High-intent service pages
    {
      url: `${baseUrl}/hair-toppers`,
      lastModified: serviceModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hair-toppers-thin-hair`,
      lastModified: serviceModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/padachat`,
      lastModified: serviceModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tzamidei-sear`,
      lastModified: serviceModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/custom-wigs`,
      lastModified: serviceModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/medical-wigs`,
      lastModified: serviceModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/salon-blending`,
      lastModified: serviceModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wig-repairs-upgrades`,
      lastModified: serviceModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Conversion page — high priority
    {
      url: `${baseUrl}/book`,
      lastModified: bookModified,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/areas`,
      lastModified: areasModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    ...areaSlugs.map((slug) => ({
      url: `${baseUrl}/areas/${slug}`,
      lastModified: areasModified,
      changeFrequency: 'weekly' as const,
      priority: 0.82,
    })),
  ];
}

