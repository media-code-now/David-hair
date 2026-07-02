import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SolutionCards from '@/components/SolutionCards';
import PersonalCustomization from '@/components/PersonalCustomization';
import HowItWorks from '@/components/HowItWorks';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import CTABlock from '@/components/CTABlock';
import TikTokReels from '@/components/TikTokReels';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'טופרים ופאות במראה טבעי – התאמה אישית בסלון | David Hair',
  description: 'טופרים ופאות בהתאמה אישית עם שילוב וגזירה מקצועיים בסלון נשים פרטי. התאמה דיסקרטית, אחריות ושירות לאחר הרכישה. קביעת ייעוץ ללא התחייבות.',
  keywords:
    'טופר שיער נס ציונה, יחידות שיער, פאות בהתאמה אישית נס ציונה, פאה רפואית מרכז, שיער דליל נשים, פדחת לשיער, צמידי שיער, סלון שיער נס ציונה, טופר שיער ראשון לציון, טופר שיער רחובות, פאת שיער טבעי',
  alternates: {
    canonical: 'https://hairtoppersisrael.com',
    languages: { 'he-IL': 'https://hairtoppersisrael.com' },
  },
  openGraph: {
    title: 'טופרים ופאות במראה טבעי – התאמה אישית בסלון | David Hair',
    description: 'טופרים ופאות בהתאמה אישית עם שילוב וגזירה מקצועיים בסלון נשים פרטי. קביעת ייעוץ ללא התחייבות.',
    type: 'website',
    locale: 'he_IL',
    siteName: 'David Hair Solutions',
    url: 'https://hairtoppersisrael.com',
    images: [
      {
        url: 'https://hairtoppersisrael.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'David Hair Solutions – טופרים ופאות בהתאמה אישית בנס ציונה',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'טופרים ופאות במראה טבעי – התאמה אישית בסלון | David Hair',
    description: 'טופרים ופאות בהתאמה אישית עם שילוב וגזירה מקצועיים בסלון נשים פרטי. קביעת ייעוץ ללא התחייבות.',
    images: ['https://hairtoppersisrael.com/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SolutionCards />
        <PersonalCustomization />
        <BeforeAfterGallery />
        <Reviews />
        <HowItWorks />
        <WhyChooseUs />
        <FAQ />
        <CTABlock />
        <TikTokReels />
      </main>
      <Footer />
    </>
  );
}
