import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbHero from '@/components/BreadcrumbHero';
import ServiceHero from '@/components/ServiceHero';
import ServiceDetailSection from '@/components/ServiceDetailSection';
import ServiceCTA from '@/components/ServiceCTA';
import ServiceFAQ from '@/components/ServiceFAQ';
import RelatedServices from '@/components/RelatedServices';
import ServiceReviewSchema from '@/components/ServiceReviewSchema';

export const metadata: Metadata = {
  title: 'פאות בהתאמה אישית נס ציונה – עיצוב והתאמה מלאה | David Hair',
  description: 'פאות בהתאמה אישית בנס ציונה לפי צבע, אורך, מרקם וסגנון. שיער טבעי 100%, בנייה ידנית והתאמה למבנה הפנים בחדר פרטי. משרתות גם ראשון לציון ורחובות.',
  keywords: 'פאות בהתאמה אישית נס ציונה, פאה מותאמת ראשון לציון, פאת שיער טבעי מרכז, התאמת פאה נס ציונה, פאה לפי מידה, custom wigs israel',
  alternates: {
    canonical: 'https://hairtoppersisrael.com/custom-wigs',
    languages: { 'he-IL': 'https://hairtoppersisrael.com/custom-wigs' },
  },
  openGraph: {
    title: 'פאות בהתאמה אישית נס ציונה – עיצוב והתאמה מלאה',
    description: 'פאות מעוצבות בהתאמה אישית בנס ציונה לפי המפרט המדויק שלך, עם שיער אנושי 100% ובנייה ידנית.',
    type: 'website',
    locale: 'he_IL',
    siteName: 'David Hair Solutions',
    url: 'https://hairtoppersisrael.com/custom-wigs',
    images: [
      {
        url: 'https://hairtoppersisrael.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'פאות בהתאמה אישית נס ציונה – עיצוב והתאמה מלאה',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'פאות בהתאמה אישית נס ציונה – עיצוב והתאמה מלאה',
    description: 'פאות מעוצבות בהתאמה אישית בנס ציונה לפי המפרט המדויק שלך, עם שיער אנושי 100% ובנייה ידנית.',
    images: ['https://hairtoppersisrael.com/og-image.jpg'],
  },
};

const faqs = [
  {
    question: 'כמה זמן לוקח להכין פאה מותאמת אישית?',
    answer: 'הכנת פאה מותאמת אישית נמשכת בדרך כלל 4–8 שבועות, בהתאם למורכבות העיצוב. במהלך הזמן הזה, הפאה נבנית ביד לפי המפרט המדויק שלך — צבע, אורך, צפיפות, מרקם ומידת הכיפה. במקרים דחופים קיימות גם אפשרויות מזורזות.'
  },
  {
    question: 'אילו סוגי שיער זמינים לפאות מותאמות?',
    answer: 'אנחנו מציעים שיער אנושי אירופי, אסייתי ומשולב פרימיום. לכל סוג יש מאפיינים ייחודיים מבחינת מרקם, עובי והתנהגות בעיצוב. במהלך הייעוץ נעזור לבחור את סוג השיער המתאים ביותר לשיער הטבעי או למראה הרצוי.'
  },
  {
    question: 'אפשר לבחור את הצבע והגוונים המדויקים?',
    answer: 'בהחלט. פאות מותאמות מותאמות לחלוטין מבחינת צבע. אנחנו יכולים להתאים בדיוק לצבע השיער הנוכחי, ליצור גוון חדש, להוסיף הבהרות, צללים, בלאיאז׳ או כל טכניקת צבע. צוות הסלון שלנו יכול גם לצבוע את הפאה אחרי שמגיעה לגימור מדויק.'
  },
  {
    question: 'אילו סוגי בניית כיפה אתם מציעים?',
    answer: 'אנחנו מציעים כיפות תחרה קדמית, תחרה מלאה, מונופילמנט, משי עליון ורשת קשורה ידנית. לכל סוג בנייה יתרונות שונים מבחינת טבעיות, נשימה ונוחות. נמליץ על האפשרות הטובה ביותר בהתאם לאורח החיים והצרכים.'
  },
  {
    question: 'מה ההבדל בין פאה מותאמת לפאה מהמדף?',
    answer: 'פאה מותאמת נבנית לפי מידות הראש המדויקות שלך, מפרט השיער והעדפות הסגנון שלך. בניגוד לפאות מהמדף, כל פרט — ממידת הכיפה ועד כיוון השיער — מותאם אישית. התוצאה היא פאה שמתאימה בצורה מושלמת, נראית טבעית לחלוטין, ומרגישה כאילו נעשתה בשבילך — כי היא אכן נעשתה.'
  },
  {
    question: 'האם אתם מציעים תשלומים או מימון?',
    answer: 'כן, אנחנו מבינים שפאה מותאמת היא השקעה. אנחנו מציעים אפשרויות תשלום גמישות ונשמח לדון בתוכנית תשלומים במהלך הייעוץ. אנחנו רוצים לוודא שכל אחת ואחד יוכלו לקבל את האיכות שמגיעה להם.'
  },
];

export default function CustomWigsPage() {
  return (
    <>
      <Header />
      <ServiceReviewSchema
        serviceName="פאות בהתאמה אישית"
        serviceUrl="https://hairtoppersisrael.com/custom-wigs"
      />
      <BreadcrumbHero 
        title="פאות בהתאמה אישית"
        subtitle="עיצוב והתאמה מלאה עבורך"
      />
      <main>

      <ServiceHero
        badge="קולקציית פרימיום"
        title="פאות בהתאמה אישית"
        titleAccent="מעוצבות במיוחד בשבילך"
        subtitle="כל פרט מותאם לחזון שלך — מסוג השיער והצבע ועד האורך והמרקם. פאה כל כך מושלמת שהיא הופכת למראה הטבעי שלך."
        features={['שיער אנושי 100%', 'בנייה ידנית', 'מידות מדויקות', 'בחירת צבע מלאה']}
      />

      <ServiceDetailSection
        eyebrow="החזון שלך, המלאכה שלנו"
        title="פאה שנבנית לגמרי סביבך"
        description="פאות מהמדף מיוצרות לראש ממוצע. פאה מותאמת נעשית לראש שלך — כל מידה, כל שערה, כל פרט מותאם למאפיינים הייחודיים שלך."
        benefits={[
          { title: 'מדידות ראש מדויקות', description: 'אנחנו לוקחות יותר מ-12 מדידות של הראש כדי להבטיח שהכיפה יושבת בצורה מושלמת. ללא החלקה, ללא נקודות לחץ וללא צורך בהתאמות.' },
          { title: 'בחירת שיער', description: 'בחרו משיער אירופי, אסיאתי ומיוחד פרימיום. בחרו את המרקם המדויק — חלק, גלי, מתולתל — ואת העובי שמתאים לחזון שלכם.' },
          { title: 'התאמת צבעים אישית', description: 'הקולוריסטיות שלנו יוצרות מתכוני צבע רב-ממדיים. שורשים, אמצע וקצוות — כל אזור מקבל התאמה מדויקת למראה הטבעי ביותר.' },
          { title: 'בחירת מבנה כיפה', description: 'תחרה קדמית, תחרה מלאה, מונופילמנט, משי עליון — נעזור לך לבחור את המבנה שמתאים ביותר לאורח החיים והנוחות שלך.' },
        ]}
        imagePlaceholder="👗"
      />

      {/* תהליך העיצוב */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-navy-900 font-semibold text-sm uppercase tracking-wider mb-3">המסע</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              תהליך עיצוב הפאה המותאמת שלך
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              מהחזון הראשוני ועד לחשיפה הסופית — תהליך קפדני בן 5 שלבים שמבטיח שלמות
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'ייעוץ', desc: 'דיון על החזון, אורח החיים וההעדפות שלך בחדר הפרטי שלנו' },
              { step: '02', title: 'מדידה', desc: 'מדידות ראש מדויקות וניתוח שיער להתאמה מושלמת' },
              { step: '03', title: 'עיצוב', desc: 'בחירת סוג שיער, צבע, צפיפות, אורך ומבנה כיפה' },
              { step: '04', title: 'יצירה', desc: 'הפאה נבנית ידנית על ידי אומנים מומחים במשך 4-8 שבועות' },
              { step: '05', title: 'חשיפה', desc: 'התאמה סופית, גזירה, עיצוב ושילוב בסלון שלנו' },
            ].map((item) => (
              <div key={item.step} className="text-center bg-white rounded-xl p-6 border border-gray-200 hover:border-navy-900 hover:shadow-lg transition">
                <div className="text-3xl font-bold text-navy-900 mb-3">{item.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceDetailSection
        eyebrow="הבטחת איכות"
        title="למה הפאות המותאמות שלנו בליגה אחרת"
        description="אנחנו לא מתפשרות. כל פאה מותאמת מייצגת מאות שעות של אומנות מיומנת, חומרים פרימיום ותשומת לב קפדנית לכל פרט."
        benefits={[
          { title: 'בנייה ידנית', description: 'כל שערה נקשרת בנפרד ביד לתנועה טבעית, צפיפות ריאליסטית ועיצוב רב-כיווני.' },
          { title: 'קו שיער בלתי נראה', description: 'אפשרויות תחרה קדמית ותחרה מלאה יוצרות קו שיער שכמעט בלתי ניתן לזיהוי. עשו שביל בכל מקום ועצבו בכל דרך.' },
          { title: 'נושם ונוח', description: 'מבנה כיפה קל משקל עם אוורור מבטיח נוחות כל היום, גם במזג אוויר חם.' },
          { title: 'איכות מתמשכת', description: 'בנייה פרימיום ושיער איכותי מבטיחים שהפאה שומרת על יופיה למשך 2-3+ שנים עם טיפול נכון.' },
        ]}
        imagePlaceholder="✨"
        reversed
      />

      <ServiceFAQ faqs={faqs} subtitle="כל מה שצריך לדעת על פאות מותאמות אישית" />

      <ServiceCTA
        title="התחילו לעצב את הפאה המותאמת שלכם"
        subtitle="הכול מתחיל בשיחה. קבעו ייעוץ חינם ונגשים את החזון שלכם — מותאם אישית בכל פרט."
        ctaText="ייעוץ עיצוב פאה"
      />

      <RelatedServices exclude="/custom-wigs" />

      </main>
      <Footer />
    </>
  );
}
