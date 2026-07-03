import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbHero from '@/components/BreadcrumbHero';
import { cities } from './cities';

export const metadata: Metadata = {
  title: 'אזורי שירות – טופרים ופאות במרכז ובדרום | David Hair',
  description:
    'אזורי השירות של David Hair Solutions: נס ציונה, ראשון לציון, רחובות, יבנה, גדרה, רמלה, לוד, חולון, אשדוד ותל אביב. טופרים, פאות רפואיות ופאות בהתאמה אישית.',
  keywords:
    'טופרים ופאות נס ציונה, טופר שיער ראשון לציון, פאה רפואית רחובות, טופר שיער יבנה, פאה גדרה, טופר שיער רמלה, פאה לוד, טופר שיער חולון, פתרון שיער אשדוד, טופר שיער תל אביב, סלון שיער מרכז',
  alternates: {
    canonical: 'https://hairtoppersisrael.com/areas',
    languages: { 'he-IL': 'https://hairtoppersisrael.com/areas' },
  },
  openGraph: {
    title: 'אזורי שירות – טופרים ופאות במרכז',
    description:
      'נס ציונה, ראשון לציון, רחובות, אשדוד ותל אביב – שירותי טופרים ופאות בהתאמה אישית.',
    type: 'website',
    locale: 'he_IL',
    siteName: 'David Hair Solutions',
    url: 'https://hairtoppersisrael.com/areas',
    images: [
      {
        url: 'https://hairtoppersisrael.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'אזורי שירות – טופרים ופאות במרכז',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'אזורי שירות – טופרים ופאות במרכז',
    description:
      'נס ציונה, ראשון לציון, רחובות, אשדוד ותל אביב – שירותי טופרים ופאות בהתאמה אישית.',
    images: ['https://hairtoppersisrael.com/og-image.jpg'],
  },
};

export default function AreasIndexPage() {
  return (
    <>
      <Header />
      <BreadcrumbHero title="אזורי שירות" subtitle="פתרונות שיער במרכז הארץ" />
      <main className="py-16 sm:py-20 lg:py-24" dir="rtl">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            אנחנו מלוות נשים מכל אזור המרכז
          </h1>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            בחרו את העיר שלכם כדי לקרוא על השירות המקומי ולקבל מידע רלוונטי על טופרים, פאות בהתאמה אישית ופאות רפואיות.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/areas/${city.slug}`}
                className="glass-card rounded-[18px] p-5 hover:shadow-md hover:scale-[1.02] transition-all duration-200 active:scale-[0.98] group"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <MapPin size={17} className="text-navy-700" strokeWidth={2.2} aria-hidden="true" />
                  <span className="text-gray-900 font-bold text-[17px] tracking-tight">
                    {city.name}
                  </span>
                </div>
                <p className="text-gray-500 text-[13px]">
                  {city.driveMinutes === 0 ? 'הסלון נמצא כאן' : `כ-${city.driveMinutes} דקות נסיעה מהסלון`}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}