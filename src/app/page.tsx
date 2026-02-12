import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SolutionCards from '@/components/SolutionCards';
import HowItWorks from '@/components/HowItWorks';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedProducts from '@/components/FeaturedProducts';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import CTABlock from '@/components/CTABlock';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'טופרים ופאות במראה טבעי – התאמה אישית בסלון | David Hair',
  description: 'טופרים ופאות בהתאמה אישית עם שילוב וגזירה מקצועית בסלון נשים פרטי. התאמה דיסקרטית, אחריות ושירות לאחר קנייה. קביעת ייעוץ ללא התחייבות.',
  openGraph: {
    title: 'טופרים ופאות במראה טבעי – התאמה אישית בסלון | David Hair',
    description: 'טופרים ופאות בהתאמה אישית עם שילוב וגזירה מקצועית בסלון נשים פרטי. קביעת ייעוץ ללא התחייבות.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SolutionCards />
        <HowItWorks />
        <BeforeAfterGallery />
        <WhyChooseUs />
        <FeaturedProducts />
        <Reviews />
        <FAQ />
        <CTABlock />
      </main>
      <Footer />
    </>
  );
}
