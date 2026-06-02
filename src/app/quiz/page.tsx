import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbHero from '@/components/BreadcrumbHero';
import HairQuiz from '@/components/HairQuiz';

export const metadata: Metadata = {
  title: 'חידון שיער – David Hair Solutions',
  description: 'עני על כמה שאלות קצרות ונעזור לך למצוא את פתרון השיער המתאים ביותר עבורך — טופר, פאה או פתרון מותאם אישית.',
  openGraph: {
    title: 'חידון שיער – David Hair Solutions',
    description: 'עני על כמה שאלות קצרות ונעזור לך למצוא את פתרון השיער המתאים ביותר עבורך.',
    type: 'website',
  },
};

export default function QuizPage() {
  return (
    <>
      <Header />
      <BreadcrumbHero 
        title="חידון שיער"
        subtitle="מצא את הפתרון המושלם עבורך"
      />
      <HairQuiz />
      <Footer />
    </>
  );
}
