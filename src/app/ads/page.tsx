import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdLandingHero from '@/components/AdLandingHero';
import AdValueProps from '@/components/AdValueProps';
import AdSocialProof from '@/components/AdSocialProof';
import AdProblemAgitate from '@/components/AdProblemAgitate';
import AdSolutionShowcase from '@/components/AdSolutionShowcase';
import AdTestimonials from '@/components/AdTestimonials';
import AdCTA from '@/components/AdCTA';
import AdFAQ from '@/components/AdFAQ';

export const metadata: Metadata = {
  title: 'פאות וטופרים בהתאמה אישית – ייעוץ חינם | David Hair',
  description: 'נשים רבות מתמודדות עם דלילות שיער. David Hair מציעה טופרים ופאות במראה טבעי ובהתאמה אישית. ייעוץ חינם ללא התחייבות.',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'פאות וטופרים בהתאמה אישית – ייעוץ חינם | David Hair',
    description: 'נשים רבות מתמודדות עם דלילות שיער. David Hair מציעה טופרים ופאות במראה טבעי ובהתאמה אישית. ייעוץ חינם ללא התחייבות.',
    type: 'website',
    locale: 'he_IL',
    siteName: 'David Hair Solutions',
    images: [
      {
        url: 'https://hairtoppersisrael.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'פאות וטופרים בהתאמה אישית – ייעוץ חינם',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'פאות וטופרים בהתאמה אישית – ייעוץ חינם | David Hair',
    description: 'נשים רבות מתמודדות עם דלילות שיער. David Hair מציעה טופרים ופאות במראה טבעי ובהתאמה אישית. ייעוץ חינם ללא התחייבות.',
    images: ['https://hairtoppersisrael.com/og-image.jpg'],
  },
};

export default function AdLanding() {
  return (
    <>
      <Header />
      <main>
        <AdLandingHero />
        <AdProblemAgitate />
        <AdValueProps />
        <AdSocialProof />
        <AdSolutionShowcase />
        <AdTestimonials />
        <AdCTA />
        <AdFAQ />
      </main>
      <Footer />
    </>
  );
}
