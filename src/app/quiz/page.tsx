import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbHero from '@/components/BreadcrumbHero';
import HairQuiz from '@/components/HairQuiz';

export const metadata = {
  title: 'חידון שיער - David Hair Solutions',
  description: 'עזור לנו למצוא את פתרון השיער המושלם עבורך עם חידון שיער אישי',
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
