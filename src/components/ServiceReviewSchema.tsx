import Script from 'next/script';

interface ReviewItem {
  author: string;
  reviewBody: string;
  rating: number;
}

interface ServiceReviewSchemaProps {
  serviceName: string;
  serviceUrl: string;
  aggregateRatingValue: number;
  reviewCount: number;
  reviews: ReviewItem[];
}

export default function ServiceReviewSchema({
  serviceName,
  serviceUrl,
  aggregateRatingValue,
  reviewCount,
  reviews,
}: ServiceReviewSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    url: serviceUrl,
    provider: {
      '@type': 'HairSalon',
      name: 'David Hair Solutions',
      url: 'https://hairtoppersisrael.com',
      telephone: '+972504001187',
      sameAs: [
        'https://share.google/R340fKvDvgtSkAReJ',
        'https://wa.me/972504001187',
        'https://www.facebook.com/davidhairsolution/',
        'https://www.instagram.com/david_hair_solutions/',
      ],
    },
    areaServed: ['נס ציונה', 'ראשון לציון', 'רחובות', 'תל אביב', 'אשדוד'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: aggregateRatingValue,
      reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.reviewBody,
    })),
  };

  return (
    <Script
      id={`service-review-schema-${serviceUrl.split('/').pop() ?? 'service'}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}