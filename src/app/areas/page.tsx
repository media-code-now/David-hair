import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbHero from '@/components/BreadcrumbHero';

const areas = [
  { slug: 'nes-ziona', name: 'נס ציונה' },
  { slug: 'rishon-lezion', name: 'ראשון לציון' },
  { slug: 'rehovot', name: 'רחובות' },
  { slug: 'ashdod', name: 'אשדוד' },
  { slug: 'tel-aviv', name: 'תל אביב' },
];

export const metadata: Metadata = {
  title: 'אזורי שירות – טופרים ופאות במרכז | David Hair',
  description:
    'אזורי השירות של David Hair Solutions: נס ציונה, ראשון לציון, רחובות, אשדוד ותל אביב. טופרים, פאות רפואיות ופאות בהתאמה אישית.',
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
    url: 'https://hairtoppersisrael.com/areas',
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
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="glass-card rounded-[18px] p-5 text-gray-900 font-semibold hover:shadow-md hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}