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
import padachatBanner from '@/images/banners/2.jpg';
import beforeAfterFive from '@/images/before-after/5.jpg';

export const metadata: Metadata = {
  title: 'פדחת לשיער דליל נס ציונה – כיסוי טבעי לקדמת הראש | David Hair',
  description:
    'פתרונות פדחת לשיער דליל ולקדמת הראש בנס ציונה. דגמי טופ סקין, לייס ומיקרוליין בהתאמה אישית, מראה טבעי ודיסקרטיות מלאה.',
  keywords:
    'פדחת לשיער, פדחת לשיער דליל, פדחת קדמית, טופ סקין, פדחת לייס, פדחת מיקרוליין, פתרון לקדמת הראש',
  alternates: {
    canonical: 'https://hairtoppersisrael.com/padachat',
    languages: { 'he-IL': 'https://hairtoppersisrael.com/padachat' },
  },
  openGraph: {
    title: 'פדחת לשיער דליל נס ציונה – כיסוי טבעי לקדמת הראש',
    description:
      'כיסוי טבעי לקדמת הראש עם פדחת בהתאמה אישית: טופ סקין, לייס ומיקרוליין לנוחות ומראה בלתי נראה.',
    type: 'website',
    locale: 'he_IL',
    siteName: 'David Hair Solutions',
    url: 'https://hairtoppersisrael.com/padachat',
    images: [
      {
        url: 'https://hairtoppersisrael.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'פדחת לשיער דליל נס ציונה – כיסוי טבעי לקדמת הראש',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'פדחת לשיער דליל נס ציונה – כיסוי טבעי לקדמת הראש',
    description:
      'כיסוי טבעי לקדמת הראש עם פדחת בהתאמה אישית: טופ סקין, לייס ומיקרוליין לנוחות ומראה בלתי נראה.',
    images: ['https://hairtoppersisrael.com/og-image.jpg'],
  },
};

const faqs = [
  {
    question: 'מה זה פדחת לשיער ולמי זה מתאים?',
    answer:
      'פדחת היא יחידת שיער ממוקדת שמיועדת בעיקר לאזור הקדמי/העליון של הראש. היא מתאימה לנשים עם דלילות ממוקדת בקו הקדמי, באזור השביל או בקודקוד, שרוצות כיסוי טבעי בלי לעבור לפאה מלאה.',
  },
  {
    question: 'מה ההבדל בין פדחת טופ סקין, לייס ומיקרוליין?',
    answer:
      'טופ סקין מעניקה מראה חלק ודמוי קרקפת, לייס מעניקה קו קדמי אוורירי וגמיש, ומיקרוליין מאפשרת תחושת נשימה גבוהה ושילוב רך עם השיער הטבעי. במהלך הייעוץ נתאים את הבסיס לפי הקרקפת, רגישות העור ואורח החיים שלך.',
  },
  {
    question: 'האם אפשר להתאים צבע וגוון בדיוק לשיער שלי?',
    answer:
      'כן. ההתאמה כוללת בדיקת גוון מול השיער הטבעי, התאמת עומק צבע ולעיתים גם שילוב גוונים כדי להגיע לתוצאה טבעית יותר. המטרה היא שלא ייראה מעבר בין היחידה לשיער שלך.',
  },
  {
    question: 'האם הפדחת נוחה לשימוש יומיומי?',
    answer:
      'בהחלט. כאשר ההתאמה נכונה, הפדחת יושבת בצורה יציבה ונעימה ליום-יום. ניתן לבחור שיטת הצמדה בהתאם להעדפה האישית ולהנחיות מקצועיות, עם הדרכה מלאה לתחזוקה ביתית.',
  },
  {
    question: 'כמה זמן מחזיקה פדחת שיער?',
    answer:
      'משך החיים תלוי בסוג השיער, הבסיס, תדירות השימוש והתחזוקה. עם טיפול נכון וריענונים תקופתיים בסלון, אפשר לשמור על מראה איכותי לאורך זמן.',
  },
  {
    question: 'מה טווח המחירים לפתרון פדחת?',
    answer:
      'המחיר משתנה לפי סוג הבסיס, צפיפות השיער, אורך, גוונים ורמת ההתאמה. בייעוץ תקבלי המלצה מקצועית והצעת מחיר מדויקת לפי הצורך שלך.',
  },
];

export default function PadachatPage() {
  return (
    <>
      <Header />
      <ServiceReviewSchema
        serviceName="פדחת לשיער דליל"
        serviceUrl="https://hairtoppersisrael.com/padachat"
        aggregateRatingValue={4.9}
        reviewCount={67}
        reviews={[
          {
            author: 'מיה ש.',
            reviewBody: 'הפדחת השתלבה לי בקו הקדמי בצורה טבעית מאוד והחזירה לי ביטחון.',
            rating: 5,
          },
          {
            author: 'אנה ל.',
            reviewBody: 'התאמה מקצועית, צבע מדויק ונוחות מעולה לאורך כל היום.',
            rating: 5,
          },
        ]}
      />
      <BreadcrumbHero
        title="פדחת לשיער"
        subtitle="כיסוי טבעי לקדמת הראש ולשביל"
      />
      <main>
        <ServiceHero
          badge="פתרון ממוקד לקו קדמי"
          title="פדחת לשיער"
          titleAccent="במראה טבעי ודיסקרטי"
          subtitle="פתרון מדויק לנשים עם דלילות ממוקדת באזור הקדמי או העליון של הקרקפת. התאמה אישית של בסיס, גוון וצפיפות למראה חלק ובלתי נראה."
          features={['התאמה אישית מלאה', 'מראה קרקפת טבעי', 'שיטות בסיס שונות', 'שירות תחזוקה וליווי']}
        />

        <section className="py-8 sm:py-10 bg-white" dir="rtl">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[22px] shadow-xl shadow-navy-900/10">
              <Image
                src={padachatBanner}
                alt="פדחת לשיער – הדגמת תוצאה במראה טבעי"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <ServiceDetailSection
          eyebrow="סוגי בסיס"
          title="איך בוחרים פדחת שמתאימה בדיוק לך"
          description="בחירה נכונה של בסיס משפיעה על המראה, התחושה והעמידות. אנחנו מתאימים את היחידה למבנה הקרקפת, לרגישות העור ולשגרת החיים."
          benefits={[
            { title: 'טופ סקין', description: 'מראה נקי ודמוי עור קרקפת, מתאים למי שרוצה כיסוי מדויק ומלא.' },
            { title: 'לייס', description: 'קו קדמי קליל וגמיש עם מראה אוורירי, מצוין לאפקט טבעי בקדמת הראש.' },
            { title: 'מיקרוליין', description: 'תחושת נשימה גבוהה, שילוב רך עם שיער קיים ונוחות לאורך שעות רבות.' },
            { title: 'התאמת צפיפות ואורך', description: 'בחירה מדויקת של נפח, אורך וגוונים כדי ליצור המשכיות טבעית עם השיער שלך.' },
          ]}
          imagePlaceholder="👩‍🦱"
        />

        <ServiceDetailSection
          eyebrow="התאמה מקצועית"
          title="מה כולל תהליך ההתאמה לפדחת"
          description="מהאבחון הראשוני ועד הגימור הסופי, התהליך כולו מבוצע בחדר פרטי עם דגש על דיוק, אסתטיקה ונוחות יומיומית."
          benefits={[
            { title: 'אבחון אזור הדלילות', description: 'בדיקה ממוקדת של הקו הקדמי והשביל כדי לבחור מידה וסוג בסיס אידיאליים.' },
            { title: 'התאמת צבע חכמה', description: 'השוואת גוונים לשיער הטבעי והתאמות בסלון למראה אחיד ומדויק.' },
            { title: 'גזירה ושילוב בסלון', description: 'עיצוב היחידה יחד עם השיער הטבעי כך שהמעבר יהיה חלק וכמעט בלתי נראה.' },
            { title: 'הדרכה ותחזוקה', description: 'הנחיות שימוש, ניקוי ואחסון כדי לשמור על תוצאה יפה לאורך זמן.' },
          ]}
          imageSrc={beforeAfterFive}
          imageAlt="תהליך התאמה לפדחת לשיער"
          imagePlaceholder="✨"
          reversed
        />

        <ServiceFAQ faqs={faqs} subtitle="כל מה שחשוב לדעת על פתרון פדחת לשיער" />

        <ServiceCTA
          title="מתלבטים אם פדחת מתאימה לכם?"
          subtitle="קבעו ייעוץ אישי ללא התחייבות ונבדוק יחד את סוג הבסיס, הגוון והפתרון המדויק למבנה השיער שלכם."
          ctaText="קביעת ייעוץ לפדחת"
        />

        <RelatedServices exclude="/padachat" />
      </main>
      <Footer />
    </>
  );
}