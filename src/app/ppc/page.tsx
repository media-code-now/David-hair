import type { Metadata } from 'next';
import PPCLandingHero from '@/components/PPCLandingHero';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ייעוץ חינם לטופרים ופאות – David Hair',
  description: 'קבעו ייעוץ חינם וקבלו חזרה בתוך 24 שעות. פתרון לשיער דליל עם טופרים ופאות בהתאמה אישית, בחדר פרטי ולנשים בלבד.',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'ייעוץ חינם לטופרים ופאות – David Hair',
    description: 'קבעו ייעוץ חינם וקבלו חזרה בתוך 24 שעות. פתרון לשיער דליל עם טופרים ופאות בהתאמה אישית.',
    type: 'website',
    locale: 'he_IL',
    siteName: 'David Hair Solutions',
    images: [
      {
        url: 'https://hairtoppersisrael.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ייעוץ חינם לטופרים ופאות',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ייעוץ חינם לטופרים ופאות – David Hair',
    description: 'קבעו ייעוץ חינם וקבלו חזרה בתוך 24 שעות. פתרון לשיער דליל עם טופרים ופאות בהתאמה אישית.',
    images: ['https://hairtoppersisrael.com/og-image.jpg'],
  },
};

export default function PPCLanding() {
  return (
    <>
      <main>
        <PPCLandingHero />
      </main>
      <Footer />
    </>
  );
}
