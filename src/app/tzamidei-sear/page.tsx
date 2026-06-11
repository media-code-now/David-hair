import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbHero from '@/components/BreadcrumbHero';
import ServiceHero from '@/components/ServiceHero';
import ServiceDetailSection from '@/components/ServiceDetailSection';
import ServiceCTA from '@/components/ServiceCTA';
import ServiceFAQ from '@/components/ServiceFAQ';
import RelatedServices from '@/components/RelatedServices';
import ServiceReviewSchema from '@/components/ServiceReviewSchema';
import tzamideiBanner from '@/images/banners/1.jpg';

export const metadata: Metadata = {
  title: 'צמידי שיער נס ציונה – תוספת נפח ואורך מהירה | David Hair',
  description:
    'צמידי שיער לנפח ואורך במראה טבעי: התאמה מקצועית של גוון, אורך וצפיפות, עם אבחון אישי לבדיקת התאמה לשיער שלך.',
  keywords:
    'צמידי שיער, תוספות שיער בצמיד, הארכת שיער מהירה, תוספות שיער טבעי, תוספות נפח לשיער, צמיד לשיער דליל',
  alternates: {
    canonical: 'https://hairtoppersisrael.com/tzamidei-sear',
    languages: { 'he-IL': 'https://hairtoppersisrael.com/tzamidei-sear' },
  },
  openGraph: {
    title: 'צמידי שיער נס ציונה – תוספת נפח ואורך מהירה',
    description:
      'פתרון מהיר לנפח ואורך עם צמידי שיער, כולל התאמת גוון מקצועית ואבחון אישי לשיטת חיבור נכונה.',
    type: 'website',
    locale: 'he_IL',
  },
};

const faqs = [
  {
    question: 'מה זה צמידי שיער?',
    answer:
      'צמידי שיער הם תוספת שיער מוכנה על בסיס רציף, שמטרתה להוסיף נפח ואורך במהירות. זו שיטה פופולרית במיוחד כשמחפשים שינוי מיידי עם תחושת נוחות לאורך היום.',
  },
  {
    question: 'למי השיטה מתאימה במיוחד?',
    answer:
      'השיטה מתאימה בעיקר לנשים שרוצות תוספת נפח ואורך באזורים אמצעיים ותחתונים של השיער. לפני התאמה מבצעים אבחון מקצועי כדי לוודא שהשיטה אכן מתאימה למבנה השיער והקרקפת שלך.',
  },
  {
    question: 'האם צמידי שיער מתאימים לשיער דליל מאוד בקו העליון?',
    answer:
      'לא תמיד. בדלילות משמעותית בקו העליון, לעיתים עדיף פתרון ממוקד יותר כמו טופר או פדחת. לכן חשוב לבצע אבחון לפני בחירת השיטה.',
  },
  {
    question: 'איך מתבצעת התאמת צבע וגוון?',
    answer:
      'התאמה מקצועית כוללת השוואת גוונים, עומק צבע ולעיתים שילוב בין כמה גוונים כדי ליצור מעבר טבעי בין השיער שלך לתוספת.',
  },
  {
    question: 'כמה זמן מחזיקים צמידי שיער?',
    answer:
      'העמידות תלויה באיכות השיער, שגרת התחזוקה ותדירות הריענון בסלון. עם תחזוקה נכונה והקפדה על הוראות טיפול ניתן לשמור על מראה יפה לאורך זמן.',
  },
  {
    question: 'האם אפשר לעשות גם תוצאה של נפח וגם אורך?',
    answer:
      'כן. אפשר לבנות התאמה שמשלבת תוספת נפח, הארכת אורך או שילוב בין שניהם – בהתאם לגזרה, לסוג השיער ולתוצאה שאת רוצה.',
  },
];

export default function TzamideiSearPage() {
  return (
    <>
      <Header />
      <ServiceReviewSchema
        serviceName="צמידי שיער"
        serviceUrl="https://hairtoppersisrael.com/tzamidei-sear"
        aggregateRatingValue={4.8}
        reviewCount={58}
        reviews={[
          {
            author: 'דנה י.',
            reviewBody: 'קיבלתי נפח ואורך בצורה מאוד טבעית ובזמן קצר. התאמה מקצועית ושירות מעולה.',
            rating: 5,
          },
          {
            author: 'רוני א.',
            reviewBody: 'אהבתי במיוחד את התאמת הצבע והנוחות ביום-יום. התוצאה נראית חלק מהשיער שלי.',
            rating: 5,
          },
        ]}
      />
      <BreadcrumbHero
        title="צמידי שיער"
        subtitle="הארכת שיער מהירה במראה טבעי"
      />
      <main>
        <ServiceHero
          badge="שיטה מהירה ופופולרית"
          title="צמידי שיער"
          titleAccent="לתוספת נפח ואורך"
          subtitle="פתרון מהיר שמאפשר לשדרג את מראה השיער בזמן קצר. מתאימים במיוחד למי שרוצה אורך ונפח עם גימור טבעי והתאמת גוון מקצועית."
          features={['שינוי מיידי במראה', 'התאמת צבע מקצועית', 'מבחר אורכים', 'תחזוקה מותאמת אישית']}
        />

        <section className="py-8 sm:py-10 bg-white" dir="rtl">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[22px] shadow-xl shadow-navy-900/10">
              <Image
                src={tzamideiBanner}
                alt="צמידי שיער – תוספת נפח ואורך במראה טבעי"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <ServiceDetailSection
          eyebrow="למה לבחור בצמידי שיער"
          title="שדרוג מהיר לשיער מלא, ארוך ונוכח"
          description="צמידי שיער הם בחירה מצוינת כשמחפשים תוצאה מורגשת כבר מהטיפול הראשון, עם מראה עשיר יותר של נפח ואורך."
          benefits={[
            { title: 'התקנה מהירה', description: 'מתאימים למי שמחפשת תהליך יעיל עם תוצאה נראית לעין כבר באותו מפגש.' },
            { title: 'תוספת נפח משמעותית', description: 'פתרון מצוין לשיער דק או שטוח, במיוחד באזורי האורך והקצוות.' },
            { title: 'אפשרות להארכה', description: 'בחירה מדויקת של אורך חדש לפי הסגנון שאת רוצה – טבעי, מודגש או דרמטי יותר.' },
            { title: 'התאמה לגוון האישי', description: 'שילוב גוונים ליצירת מעבר רך בין השיער שלך לתוספת.' },
          ]}
          imagePlaceholder="💁‍♀️"
        />

        <ServiceDetailSection
          eyebrow="התאמה נכונה לפני הכל"
          title="לא כל שיטה מתאימה לכל לקוחה"
          description="בייעוץ אישי נבדוק את מבנה השיער, צפיפות הקרקפת והציפיות שלך כדי לוודא שהשיטה הנכונה נבחרת עבורך – או להמליץ על חלופה מדויקת יותר במקרה הצורך."
          benefits={[
            { title: 'אבחון מקצועי', description: 'בדיקה אם צמידי שיער אכן יתנו את התוצאה הטובה ביותר לסוג השיער שלך.' },
            { title: 'שקיפות מלאה', description: 'נסביר יתרונות, מגבלות ותחזוקה צפויה כדי שתוכלי לבחור בביטחון.' },
            { title: 'חלופות חכמות', description: 'במקרים של דלילות בקו העליון נציע פתרונות ממוקדים כמו טופר או פדחת.' },
            { title: 'ליווי ותחזוקה', description: 'הנחיות ברורות לטיפול בבית וריענון תקופתי בסלון לשמירה על התוצאה.' },
          ]}
          imagePlaceholder="🔍"
          reversed
        />

        <ServiceFAQ faqs={faqs} subtitle="שאלות נפוצות על צמידי שיער ותהליך ההתאמה" />

        <ServiceCTA
          title="רוצה לבדוק אם צמידי שיער מתאימים לך?"
          subtitle="קבעי ייעוץ אישי ללא התחייבות ונבנה עבורך פתרון מדויק לנפח, אורך ומראה טבעי."
          ctaText="קביעת ייעוץ לצמידי שיער"
        />

        <RelatedServices exclude="/tzamidei-sear" />
      </main>
      <Footer />
    </>
  );
}