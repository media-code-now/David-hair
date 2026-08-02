import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbHero from '@/components/BreadcrumbHero';
import BookingForm from '@/components/BookingForm';

const bookingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ייעוץ שיער אישי – טופרים ופאות',
  description:
    'ייעוץ ראשוני חינם ללא התחייבות להתאמת טופר שיער, פאה בהתאמה אישית או פאה רפואית. פגישה פרטית ודיסקרטית בנס ציונה.',
  url: 'https://hairtoppersisrael.com/book',
  serviceType: 'Hair Consultation',
  inLanguage: 'he-IL',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'ILS',
    description: 'ייעוץ ראשוני חינם ללא התחייבות',
    availability: 'https://schema.org/InStock',
  },
  potentialAction: {
    '@type': 'ReserveAction',
    name: 'קביעת ייעוץ חינם',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://hairtoppersisrael.com/book',
      inLanguage: 'he-IL',
      actionPlatform: [
        'https://schema.org/DesktopWebPlatform',
        'https://schema.org/MobileWebPlatform',
      ],
    },
    result: {
      '@type': 'Reservation',
      name: 'ייעוץ שיער בנס ציונה',
    },
  },
  provider: {
    '@type': 'HairSalon',
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+972504001187',
      contactType: 'customer service',
      areaServed: 'IL',
      availableLanguage: 'Hebrew',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'נס ציונה' },
    { '@type': 'City', name: 'ראשון לציון' },
    { '@type': 'City', name: 'רחובות' },
    { '@type': 'City', name: 'יבנה' },
    { '@type': 'City', name: 'אשדוד' },
    { '@type': 'City', name: 'תל אביב' },
  ],
};

export const metadata: Metadata = {
  title: 'קביעת ייעוץ שיער נס ציונה – חינם וללא התחייבות | David Hair',
  description: 'קבעו ייעוץ שיער חינם בנס ציונה. פגישה פרטית ודיסקרטית להתאמת טופר או פאה. משרתים גם ראשון לציון, רחובות ואזור המרכז. ללא התחייבות.',
  keywords: 'קביעת ייעוץ שיער נס ציונה, תור לטופר ראשון לציון, תור לפאה מרכז, ייעוץ חינם שיער, התאמת פאה נס ציונה',
  alternates: {
    canonical: 'https://hairtoppersisrael.com/book',
    languages: { 'he-IL': 'https://hairtoppersisrael.com/book' },
  },
  openGraph: {
    title: 'קביעת ייעוץ שיער נס ציונה – חינם וללא התחייבות | David Hair',
    description: 'קביעת ייעוץ חינם להתאמת טופר או פאה בנס ציונה. ללא התחייבות ובדיסקרטיות מלאה.',
    type: 'website',
    locale: 'he_IL',
    siteName: 'David Hair Solutions',
    url: 'https://hairtoppersisrael.com/book',
    images: [
      {
        url: 'https://hairtoppersisrael.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'קביעת ייעוץ שיער נס ציונה – חינם וללא התחייבות',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'קביעת ייעוץ שיער נס ציונה – חינם וללא התחייבות | David Hair',
    description: 'קביעת ייעוץ חינם להתאמת טופר או פאה בנס ציונה. ללא התחייבות ובדיסקרטיות מלאה.',
    images: ['https://hairtoppersisrael.com/og-image.jpg'],
  },
};

export default function BookingPage() {
  return (
    <>
      <Script
        id="booking-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingSchema) }}
      />
      <Header />
      <BreadcrumbHero 
        title="קביעת ייעוץ"
        subtitle="התאמה אישית חינם ודיסקרטית לחלוטין"
        pathname="/book"
      />
      <main>
      <BookingForm />
      </main>
      <Footer />
    </>
  );
}
