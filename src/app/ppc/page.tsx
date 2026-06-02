import type { Metadata } from 'next';
import PPCLandingHero from '@/components/PPCLandingHero';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ייעוץ חינם לטופרים ופאות – David Hair',
  description: 'קבעי ייעוץ חינם וקבלי חזרה בתוך 24 שעות. פתרון לשיער דליל עם טופרים ופאות בהתאמה אישית, בחדר פרטי ולנשים בלבד.',
  openGraph: {
    title: 'ייעוץ חינם לטופרים ופאות – David Hair',
    description: 'קבעי ייעוץ חינם וקבלי חזרה בתוך 24 שעות. פתרון לשיער דליל עם טופרים ופאות בהתאמה אישית.',
    type: 'website',
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
