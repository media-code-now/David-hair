import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbHero from '@/components/BreadcrumbHero';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'קביעת ייעוץ – התאמה אישית לטופר או פאה | David Hair',
  description: 'Book your free, private hair consultation. Choose your service, pick a time, and we\'ll take care of the rest. No obligation, 100% confidential.',
  keywords: 'קביעת ייעוץ שיער, תור לטופר, תור לפאה, ייעוץ חינם, התאמת פאה',
  openGraph: {
    title: 'קביעת ייעוץ – התאמה אישית לטופר או פאה | David Hair',
    description: 'קביעת ייעוץ להתאמת טופר או פאה. ללא התחייבות, דיסקרטי לחלוטין.',
    type: 'website',
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
