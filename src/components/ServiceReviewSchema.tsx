import Script from 'next/script';
import { GOOGLE_MAPS_URL } from '@/lib/business';

interface ServiceSchemaProps {
  serviceName: string;
  serviceUrl: string;
}

// Emits a valid schema.org/Service for the service page.
// Note: review / aggregateRating are intentionally NOT placed here — Google does
// not support review rich results on the `Service` type, and doing so triggers
// "Invalid object type for field" errors in Search Console. Review markup lives
// on the LocalBusiness/HairSalon entity instead.
export default function ServiceReviewSchema({ serviceName, serviceUrl }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    serviceType: serviceName,
    url: serviceUrl,
    provider: {
      '@type': 'HairSalon',
      '@id': GOOGLE_MAPS_URL,
      name: 'David Hair Solutions',
      url: 'https://hairtoppersisrael.com',
      telephone: '+972504001187',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'שביט 8',
        addressLocality: 'נס ציונה',
        addressRegion: 'מרכז',
        postalCode: '7408028',
        addressCountry: 'IL',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'נס ציונה' },
      { '@type': 'City', name: 'ראשון לציון' },
      { '@type': 'City', name: 'רחובות' },
      { '@type': 'City', name: 'תל אביב' },
      { '@type': 'City', name: 'אשדוד' },
    ],
  };

  return (
    <Script
      id={`service-schema-${serviceUrl.split('/').pop() ?? 'service'}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
