import type { Metadata } from 'next';
import PPCLandingHero from '@/components/PPCLandingHero';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ייעוץ חינם לטופרים ופאות - David Hair',
  description: 'קביעה חינמה בתוך 24 שעות. פתרון לשיער דליל - טופרים ופאות בהתאמה אישית. בחדר פרטי, לנשים בלבד.',
  openGraph: {
    title: 'ייעוץ חינם לטופרים ופאות - David Hair',
    description: 'קביעה חינמה בתוך 24 שעות. פתרון לשיער דליל - טופרים ופאות בהתאמה אישית.',
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
