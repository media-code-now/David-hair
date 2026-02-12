import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://davidhair.co.il';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/hair-toppers`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/custom-wigs`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/medical-wigs`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/salon-blending`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/wig-repairs-upgrades`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/hair-toppers-thin-hair`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/book`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
  ];
}
