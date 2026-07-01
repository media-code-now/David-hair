import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbHero from '@/components/BreadcrumbHero';
import BookingForm from '@/components/BookingForm';

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
      <Header />
      <BreadcrumbHero 
        title="קביעת ייעוץ"
        subtitle="התאמה אישית חינם ודיסקרטית לחלוטין"
      />
      <main>
      <BookingForm />
      </main>
      <Footer />
    </>
  );
}
