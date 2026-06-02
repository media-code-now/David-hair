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
  openGraph: {
    title: 'פאות וטופרים בהתאמה אישית – ייעוץ חינם | David Hair',
    description: 'נשים רבות מתמודדות עם דלילות שיער. David Hair מציעה טופרים ופאות במראה טבעי ובהתאמה אישית. ייעוץ חינם ללא התחייבות.',
    type: 'website',
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
