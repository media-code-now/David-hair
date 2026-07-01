import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbHero from '@/components/BreadcrumbHero';
import HairQuiz from '@/components/HairQuiz';

export const metadata: Metadata = {
  title: 'חידון שיער – David Hair Solutions',
  description: 'עני על כמה שאלות קצרות ונעזור לך למצוא את פתרון השיער המתאים ביותר עבורך — טופר, פאה או פתרון מותאם אישית.',
  keywords: 'חידון שיער, איזה פתרון שיער מתאים לי, טופר או פאה, בדיקת התאמה לשיער דליל',
  alternates: {
    canonical: 'https://hairtoppersisrael.com/quiz',
    languages: { 'he-IL': 'https://hairtoppersisrael.com/quiz' },
  },
  openGraph: {
    title: 'חידון שיער – David Hair Solutions',
    description: 'עני על כמה שאלות קצרות ונעזור לך למצוא את פתרון השיער המתאים ביותר עבורך.',
    type: 'website',
    locale: 'he_IL',
    siteName: 'David Hair Solutions',
    url: 'https://hairtoppersisrael.com/quiz',
    images: [
      {
        url: 'https://hairtoppersisrael.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'חידון שיער – David Hair Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'חידון שיער – David Hair Solutions',
    description: 'עני על כמה שאלות קצרות ונעזור לך למצוא את פתרון השיער המתאים ביותר עבורך.',
    images: ['https://hairtoppersisrael.com/og-image.jpg'],
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
