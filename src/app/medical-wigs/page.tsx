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
  title: 'פאה רפואית נס ציונה – כימותרפיה ואלופציה | David Hair',
  description: 'פאות רפואיות בנס ציונה לכימותרפיה, אלופציה ונשירת שיער רפואית. התאמה נוחה ודיסקרטית בחדר פרטי, עם ליווי לביטוח. משרתות גם ראשון לציון, רחובות ואשדוד.',
  keywords: 'פאה רפואית נס ציונה, פאה לכימותרפיה ראשון לציון, פאה לאלופציה מרכז, נשירת שיער רפואית, פאה רפואית מרכז, medical wig israel',
  alternates: {
    canonical: 'https://hairtoppersisrael.com/medical-wigs',
    languages: { 'he-IL': 'https://hairtoppersisrael.com/medical-wigs' },
  },
  openGraph: {
    title: 'פאה רפואית נס ציונה – כימותרפיה ואלופציה | David Hair',
    description: 'פאות רפואיות בנס ציונה לכימותרפיה ואלופציה, עם התאמה נוחה ודיסקרטית בחדר פרטי.',
    type: 'website',
    locale: 'he_IL',
  },
};

const faqs = [
  {
    question: 'מתי כדאי להגיע להתאמת פאה רפואית?',
    answer: 'באופן אידיאלי, כדאי להגיע לפני תחילת הטיפול או מוקדם ככל האפשר. כך נוכל להתאים במדויק את צבע השיער, המרקם והסגנון הנוכחי שלכם. עם זאת, אנחנו מקבלים לקוחות בכל שלב — אף פעם לא מאוחר מדי למצוא פתרון יפה ונוח.'
  },
  {
    question: 'האם הביטוח מכסה פאה רפואית?',
    answer: 'תוכניות ביטוח רבות וקופות חולים מכסות פאות רפואיות באופן חלקי או מלא, כאשר יש לכך המלצה או מרשם מרופא. אנחנו יכולים לספק את התיעוד והקבלות הנדרשים לתביעת הביטוח, ונלווה אתכם לאורך התהליך. מומלץ לבדוק את הזכאות מול הגורם המבטח שלכם.'
  },
  {
    question: 'כמה מהר אפשר לקבל פאה רפואית?',
    answer: 'אנחנו מחזיקות מבחר פאות רפואיות מוכנות ללבישה, שאפשר להתאים אישית כבר באותו היום. לפריטים מותאמים לחלוטין, הייצור נמשך בדרך כלל 4–8 שבועות. אם מדובר בצורך דחוף, עדכני אותנו — אנחנו מתעדפות לקוחות רפואיות ולעיתים קרובות יכולות להציע גם אפשרויות מזורזות.'
  },
  {
    question: 'האם הפאה תגרה בקרקפת הרגישה שלי?',
    answer: 'לא. הפאות הרפואיות שלנו תוכננו במיוחד לקרקפות רגישות. אנחנו משתמשות בחומרי כיפה היפואלרגניים, בטנות כותנה רכות ומתח מתכוונן להבטחת אפס גירוי. הרבה לקוחות בכימותרפיה מוצאות את הפאות שלנו נוחות מאוד גם בימים הכי רגישים.'
  },
  {
    question: 'אפשר להביא מישהו לפגישת ההתאמה?',
    answer: 'כמובן! אנחנו מעודדים להביא מלווה קרוב/ה. חדרי ההתאמה הפרטיים שלנו נוחים ומזמינים. נוכחות של אדם קרוב יכולה להפוך את החוויה למהנה יותר ולעזור בקבלת החלטות.'
  },
  {
    question: 'מה קורה כשהשיער שלי חוזר לצמוח?',
    answer: 'כשהשיער הטבעי מתחיל לצמוח מחדש, אנחנו כאן כדי לעזור במעבר. אנחנו יכולים להתאים את הפאה ככל שהשיער חוזר, לעבור לטופר לשלב המעבר, או לעזור בעיצוב השיער הצומח. הרבה לקוחות ממשיכים ליהנות מלבישת הפאה גם כשהשיער חוזר.'
  },
];

export default function MedicalWigsPage() {
  return (
    <>
      <Header />
      <ServiceReviewSchema
        serviceName="פאה רפואית"
        serviceUrl="https://hairtoppersisrael.com/medical-wigs"
        aggregateRatingValue={4.9}
        reviewCount={94}
        reviews={[
          { author: 'נעמה ק.', reviewBody: 'ליוו אותי ברגישות מלאה בתהליך והפאה יצאה נוחה וטבעית.', rating: 5 },
          { author: 'רותי א.', reviewBody: 'שירות אנושי ומקצועי עם התאמה מעולה לקרקפת רגישה.', rating: 5 },
        ]}
      />
      <BreadcrumbHero 
        title="פאות רפואיות"
        subtitle="בנוחות ודיסקרטיות מלאה"
      />
      <main>

      <ServiceHero
        badge="ליווי רגיש ואישי"
        title="פאות רפואיות"
        titleAccent="בנוחות ודיסקרטיות מלאה"
        subtitle="אובדן שיער לא חייב לגרום לאובדן ביטחון. אנחנו מספקים פאות יפות ונוחות לנשירת שיער רפואית — עם הטיפול, הפרטיות והרגישות שמגיעים לכם."
        features={['בטוח לקרקפת רגישה', 'ליווי ביטוחי', 'התאמה באותו היום', 'חדר התאמה פרטי']}
      />

      {/* הקדמה רגישה */}
      <section className="py-16 sm:py-20 bg-white" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-navy-50 to-gold-50 rounded-2xl p-8 sm:p-12 border border-navy-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              אנחנו מבינים מה אתם עוברים
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              בין אם מתמודדים עם כימותרפיה, אלופציה, או נשירת שיער מכל מצב רפואי — עזרנו למאות נשים במסע הזה. אתם לא לבד, ואנחנו כאן כדי להקל על החלק הזה של התהליך.
            </p>
            <p className="text-gray-600 italic">
              &ldquo;המטרה שלנו פשוטה: כשתסתכלו במראה, תראו <strong>את עצמכם</strong>.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <ServiceDetailSection
        eyebrow="מעוצב לנוחות"
        title="פאות רפואיות שנבנו לצרכים רגישים"
        description="נשירת שיער רפואית מביאה אתגרים ייחודיים. הפאות שלנו תוכננו במיוחד לנוחות, רגישות ומראה טבעי במהלך הטיפול וההחלמה."
        benefits={[
          { title: 'חומרים היפואלרגניים', description: 'חומרי כיפה רכים ברמה רפואית שלא יגרו קרקפות רגישות או לאחר טיפול. נבדקו לתאימות עור.' },
          { title: 'מערכת התאמה מתכווננת', description: 'ככל שהראש משתנה במהלך הטיפול, הפאה מתאימה את עצמה. רצועות קטיפה ורצועות מתכווננות מבטיחות נוחות בכל שלב.' },
          { title: 'מבנה קל משקל', description: 'עיצובים קלים כנוצה שלא מוסיפים לחץ או חום. כיפות נושמות לנוחות כל היום, גם בזמן מנוחה.' },
          { title: 'התאמת צבע לפני טיפול', description: 'הגיעו לפני תחילת הטיפול ונתאים בדיוק את הצבע, הסגנון והמרקם שלכם — כדי לשמור על המראה בצורה חלקה.' },
          { title: 'הנחיות טיפול', description: 'לפני היציאה, אנחנו עוברים איתכם על הטיפול הביתי: שטיפה, עיצוב ושמירה על מראה טבעי בין הפגישות.' },
        ]}
        imagePlaceholder="💕"
      />

      <ServiceDetailSection
        eyebrow="המסע שלכם"
        title="איך אנחנו מלוות אותך בכל שלב"
        description="מהייעוץ הראשון ועד שהשיער חוזר לצמוח — אנחנו איתכם בכל צעד. הגישה שלנו עדינה, ללא לחץ, וממוקדת לחלוטין בנוחות שלכם."
        benefits={[
          { title: 'ייעוץ ראשוני', description: 'שיחה רגועה ופרטית על הצרכים, לוח הזמנים וההעדפות שלכם. ללא לחץ, ללא חיפזון. אפשר להביא אדם קרוב.' },
          { title: 'התאמה ועיצוב', description: 'אנחנו מתאימים את הפאה, מכווננים את הכיפה, ומעצבים את התספורת והסגנון. יוצאים נראים ומרגישים כמו עצמכם.' },
          { title: 'תמיכה שוטפת', description: 'בדיקות שגרתיות, כיוונונים ותחזוקה. ככל שהצרכים משתנים במהלך הטיפול, אנחנו מתאימים את הפאה בהתאם.' },
          { title: 'תכנון מעבר', description: 'כשהשיער חוזר, אנחנו עוזרים במעבר — מפאה לטופר ועד לשיער הטבעי. חוגגים יחד כל אבן דרך.' },
        ]}
        imagePlaceholder="🤝"
        reversed
      />

      {/* מידע ביטוחי ופיננסי */}
      <section className="py-16 sm:py-20 bg-gray-50" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-navy-900 font-semibold text-sm uppercase tracking-wider mb-3">תמיכה כלכלית</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                הנחיות ביטוח וכיסוי
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                הרבה תוכניות ביטוח בריאות וקופות חולים מספקות כיסוי לפאות רפואיות. אנחנו כאן לעזור לך לנווט בתהליך.
              </p>
              <div className="space-y-4">
                {[
                  'הכנת תיעוד לתביעות ביטוח',
                  'הנחיות לכיסוי קופת חולים וזכאות',
                  'קבלות מפורטות ומכתבי נחיצות רפואית',
                  'אפשרויות תשלום גמישות להוצאות שאינן מכוסות',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">רשימת בדיקה מהירה</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-navy-900 font-bold">1.</span>
                  <p>קבלו מרשם / הפניה מהרופא</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-navy-900 font-bold">2.</span>
                  <p>בדקי מול הביטוח / קופת החולים לגבי כיסוי</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-navy-900 font-bold">3.</span>
                  <p>קבעו ייעוץ אצלנו (אנחנו נטפל בתיעוד)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-navy-900 font-bold">4.</span>
                  <p>הגישו את התביעה עם הקבלות שאנחנו מספקים</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-500 italic">
                * הכיסוי משתנה בין תוכניות. מומלץ לאמת מול הספק שלכם.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceFAQ faqs={faqs} subtitle="שאלות נפוצות על פאות רפואיות" />

      <ServiceCTA
        title="מגיע לך להרגיש יפה"
        subtitle="קבעו ייעוץ חינם ופרטי. אנחנו נדאג לכל דבר — ממציאת הפאה המושלמת ועד עזרה בניירת הביטוח. ללא לחץ, רק תמיכה."
        ctaText="ייעוץ לפאה רפואית"
      />

      <RelatedServices exclude="/medical-wigs" />

      </main>
      <Footer />
    </>
  );
}
