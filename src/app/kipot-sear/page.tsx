import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbHero from '@/components/BreadcrumbHero';
import ServiceHero from '@/components/ServiceHero';
import ServiceDetailSection from '@/components/ServiceDetailSection';
import ServiceCTA from '@/components/ServiceCTA';
import ServiceFAQ from '@/components/ServiceFAQ';
import RelatedServices from '@/components/RelatedServices';
import ServiceReviewSchema from '@/components/ServiceReviewSchema';
import bannerOne from '@/images/banners/1.jpg';
import beforeAfterOne from '@/images/before-after/before-after-1.jpg';

const URL = 'https://hairtoppersisrael.com/kipot-sear';

export const metadata: Metadata = {
  title: { absolute: 'כיפות שיער לנשים – כיפת שיער לדלילות בהתאמה אישית | David Hair' },
  description:
    'כיפות שיער לנשים משיער אנושי 100%: כיפת משי, תחרה או מונופילמנט בהתאמה אישית לשביל מתרחב, קודקוד ודלילות נרחבת. חדר פרטי לנשים בלבד בנס ציונה, ייעוץ חינם ללא התחייבות.',
  keywords:
    'כיפות שיער לנשים, כיפת שיער לנשים, כיפת שיער, כיפות שיער, כיפת שיער לדלילות, כיפת שיער לשיער דליל, כיפת משי, כיפת תחרה, כיפת מונופילמנט, כיפת שיער מחיר, כיפת שיער נס ציונה',
  alternates: {
    canonical: URL,
    languages: { 'he-IL': URL },
  },
  openGraph: {
    title: 'כיפות שיער לנשים – כיפת שיער לדלילות בהתאמה אישית',
    description:
      'כיפת משי, תחרה או מונופילמנט משיער אנושי 100%, בהתאמה אישית לרמת הדלילות. חדר פרטי לנשים בלבד.',
    type: 'website',
    locale: 'he_IL',
    siteName: 'David Hair Solutions',
    url: URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'כיפות שיער לנשים – כיפת שיער לדלילות בהתאמה אישית',
    description:
      'כיפת משי, תחרה או מונופילמנט משיער אנושי 100%, בהתאמה אישית לרמת הדלילות. חדר פרטי לנשים בלבד.',
  },
};

const domeTypes = [
  {
    title: 'כיפת משי (Silk Top)',
    text: 'השיער מוחדר דרך שכבת משי שמדמה עור קרקפת, כך שגם במבט ישיר על השביל רואים "קרקפת" ולא רשת. המראה הטבעי ביותר מקרוב, מתאים במיוחד לשביל מתרחב.',
  },
  {
    title: 'כיפת תחרה (Lace)',
    text: 'רשת עדינה, קלה ונושמת שכמעט נעלמת על הקרקפת. מתאימה במיוחד לקו השיער הקדמי ולמי שחשוב לה אוורור ונוחות בימים חמים.',
  },
  {
    title: 'כיפת מונופילמנט (Mono)',
    text: 'בסיס עמיד ונוח שבו כל שערה נקשרת בנפרד, כך שאפשר להסיט את השיער לכל כיוון ולשנות שביל. בחירה טובה לשימוש יומיומי ממושך.',
  },
];

const faqs = [
  {
    question: 'מה זו כיפת שיער לנשים?',
    answer:
      'כיפת שיער לנשים היא יחידת שיער לא-כירורגית משיער אנושי שנבנית על בסיס (כיפה) שיושב על הקרקפת. השיער נקשר לכיפה, והיא מונחת על אזור הדלילות – שביל, קודקוד, כתר או חלק גדול מהראש – ומשתלבת עם השיער הטבעי. אפשר להסיר אותה בכל עת.',
  },
  {
    question: 'מה ההבדל בין כיפת משי, תחרה ומונופילמנט?',
    answer:
      'כיפת משי מדמה קרקפת טבעית והיא הטבעית ביותר במבט מקרוב. כיפת תחרה קלה ונושמת וכמעט בלתי נראית בקו הקדמי. כיפת מונופילמנט עמידה ונוחה ומאפשרת להזיז את השיער לכל כיוון. בייעוץ בוחרים לפי אזור הדלילות, מבנה הראש ואורח החיים.',
  },
  {
    question: 'מה ההבדל בין כיפת שיער לטופר?',
    answer:
      'טופר הוא כיפה קטנה וממוקדת שמתחברת בקליפסים לשיער הקיים ומכסה אזור אחד, כמו שביל או קודקוד. כיפת שיער יכולה להיות גדולה יותר ולכסות אזורים רחבים, ולכן מתאימה גם כשהדלילות מתפשטת או כשאין מספיק שיער טבעי לחבר אליו טופר.',
  },
  {
    question: 'כמה עולה כיפת שיער לנשים?',
    answer:
      'המחיר תלוי בגודל הכיפה, בסוג הבסיס (משי יקר יותר מתחרה או מונופילמנט), באורך ובצפיפות של השיער האנושי וברמת ההתאמה האישית. כיפות קטנות בסגנון טופר מתחילות מ-₪900. בייעוץ הראשוני, שהוא חינם וללא התחייבות, מקבלים הצעת מחיר מדויקת.',
  },
  {
    question: 'כמה זמן מחזיקה כיפת שיער?',
    answer:
      'כיפת שיער איכותית משיער אנושי מחזיקה בדרך כלל כשנה עד שנתיים בשימוש יומיומי, עם טיפול נכון וביקורות תקופתיות בסלון לריענון, תיקון קליפסים וגזירה.',
  },
  {
    question: 'האם כיפת שיער מורגשת או נראית?',
    answer:
      'כיפה שהותאמה נכון קלה ונושמת, והגוון, הצפיפות והגזירה מותאמים לשיער שלך כך שהיא משתלבת בו. רוב הלקוחות מתרגלות אליה תוך ימים ספורים.',
  },
  {
    question: 'כמה זמן לוקח לקבל כיפת שיער?',
    answer:
      'כיפה מוכנה מותאמת בדרך כלל באותו שבוע. כיפה בהתאמה אישית מלאה לוקחת 2–4 שבועות. הייעוץ הראשוני אורך כשעה.',
  },
];

export default function KipotSearPage() {
  return (
    <>
      <Header />
      <ServiceReviewSchema serviceName="כיפות שיער לנשים" serviceUrl={URL} />
      <BreadcrumbHero
        title="כיפות שיער לנשים"
        subtitle="כיפת שיער לדלילות בהתאמה אישית – משי, תחרה ומונופילמנט"
        pathname="/kipot-sear"
      />
      <main>
        <ServiceHero
          badge="פתרון טבעי לדלילות"
          title="כיפות שיער לנשים"
          titleAccent="בהתאמה אישית מלאה"
          subtitle="כיפת שיער משיער אנושי 100% שמונחת על אזור הדלילות ומשתלבת בשיער הטבעי שלך. בוחרות יחד את סוג הכיפה, הגודל, הגוון והצפיפות, בחדר פרטי לנשים בלבד."
          features={['שיער אנושי 100%', 'משי, תחרה או מונופילמנט', 'ללא ניתוח', 'ייעוץ חינם']}
        />

        <section className="py-16 sm:py-20 bg-white" dir="rtl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block text-gold-600 font-semibold mb-3">מה זה בעצם</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">מה זו כיפת שיער לנשים?</h2>
            </div>
            <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-gray-900">כיפות שיער לנשים</strong> הן יחידות שיער לא-כירורגיות שבהן
                השיער נקשר לבסיס דק – הכיפה – שיושב על הקרקפת. הכיפה היא מה שקובע איך היחידה נראית מקרוב,
                כמה היא נושמת וכמה היא נוחה, ולכן הבחירה בה חשובה לא פחות מהבחירה בשיער עצמו.
              </p>
              <p>
                אצל נשים הדלילות מופיעה בדרך כלל במרכז הראש: שביל שמתרחב, קודקוד שנראה דרך השיער וכתר שאיבד
                נפח. <strong className="text-gray-900">כיפת שיער לנשים</strong> נבנית בדיוק לאזור הזה ומשתלבת
                בשיער הטבעי מסביב, כך שמקבלים כיסוי ונפח מיידיים בלי לוותר על השיער הבריא.
              </p>
              <p>
                בשפה היומיומית משתמשים לפעמים ב&quot;כיפת שיער&quot; וב&quot;יחידת שיער&quot; לאותו פתרון.
                יחידות השיער כוללות גם טופרים, פדחות ופאות, ואת כולן אפשר להשוות בדף{' '}
                <a href="/hair-units" className="text-navy-900 font-semibold underline hover:text-gold-600">
                  יחידות שיער לנשים
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-gray-50" dir="rtl">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">סוגי כיפות שיער לנשים</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                שלושה סוגי בסיס, כל אחד עם יתרונות משלו. בייעוץ נראה ונרגיש את ההבדל בפועל.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {domeTypes.map((t) => (
                <div key={t.title} className="p-7 bg-white rounded-2xl border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceDetailSection
          eyebrow="למי זה מתאים"
          title="למי מתאימה כיפת שיער לדלילות?"
          description="כיפת שיער מתאימה לנשים שרוצות כיסוי מיידי וטבעי בלי ניתוח ובלי זמן החלמה, בכל שלב של דלילות."
          benefits={[
            { title: 'שביל מתרחב וקודקוד', description: 'כיפה קטנה וממוקדת שמכסה את מרכז הראש ומשאירה את השיער הטבעי מסביב.' },
            { title: 'דלילות שמתפשטת', description: 'כשהדלילות עוברת לכמה אזורים, כיפה רחבה יותר נותנת כיסוי אחיד.' },
            { title: 'דלילות הורמונלית', description: 'אחרי לידה, בגיל המעבר או בתקופות של לחץ – פתרון זמני או קבוע, לפי הצורך.' },
            { title: 'מי שלא רוצה ניתוח', description: 'פתרון הפיך שאפשר להסיר בכל עת, וגם דרך לבחון שינוי מראה לפני החלטה קבועה.' },
          ]}
          imageSrc={bannerOne}
          imageAlt="כיפת שיער לנשים – כיסוי טבעי לשביל ולקודקוד"
        />

        <section className="py-16 sm:py-20 bg-white" dir="rtl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10">
              כיפת שיער, טופר או פאה – מה ההבדל?
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { title: 'טופר שיער', text: 'כיפה קטנה בקליפסים לאזור אחד – שביל או קודקוד. החל מ-₪900.', href: '/hair-toppers', cta: 'טופר לשיער נשים' },
                { title: 'כיפת שיער', text: 'כיפה בגודל מותאם לאזורים רחבים יותר, כשטופר כבר לא מספיק.', href: '/kipot-sear#service-faq', cta: 'שאלות על כיפות' },
                { title: 'פאה בהתאמה אישית', text: 'כיסוי מלא של כל הקרקפת לדלילות נרחבת או נשירה.', href: '/custom-wigs', cta: 'פאות בהתאמה אישית' },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="block p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-gold-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.text}</p>
                  <span className="text-navy-900 font-medium text-sm">{item.cta} ←</span>
                </a>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-8">
              רוצות להעמיק? קראו את המדריכים{' '}
              <Link href="/blog/hair-dome-for-thinning-hair" className="text-navy-900 font-semibold underline hover:text-gold-600">
                מה זו כיפה ואיזה סוג לבחור
              </Link>{' '}
              ו
              <Link href="/blog/thin-hair-topper-vs-hair-dome" className="text-navy-900 font-semibold underline hover:text-gold-600">
                טופר או כיפה – ההבדלים
              </Link>
              .
            </p>
          </div>
        </section>

        <ServiceDetailSection
          eyebrow="התהליך"
          title="איך מתאימים כיפת שיער אישית"
          description="כל התאמה נעשית בחדר ייעוץ פרטי לנשים בלבד, מהאבחון ועד העיצוב הסופי."
          benefits={[
            { title: 'אבחון אזור הדלילות', description: 'בודקות את הקרקפת, כמות השיער הטבעי ומבנה הראש, וקובעות את גודל הכיפה.' },
            { title: 'בחירת סוג הכיפה', description: 'משי, תחרה או מונופילמנט – לפי המראה הרצוי, הנוחות ואורח החיים.' },
            { title: 'התאמת גוון וצפיפות', description: 'התאמה מדויקת לצבע ולצפיפות של השיער שלך, כדי שהמעבר יהיה בלתי מורגש.' },
            { title: 'גזירה ועיצוב', description: 'גוזרות ומשלבות את הכיפה עם השיער הטבעי, ומלמדות איך לחבר ולתחזק בבית.' },
          ]}
          imageSrc={beforeAfterOne}
          imageAlt="התאמת כיפת שיער לנשים בחדר פרטי"
          reversed
        />

        <ServiceFAQ faqs={faqs} subtitle="כל מה שרציתן לדעת על כיפות שיער לנשים" />

        <ServiceCTA
          title="רוצה לבדוק איזו כיפת שיער מתאימה לך?"
          subtitle="קבעי ייעוץ חינם בחדר פרטי. נבדוק את אזור הדלילות, תראי ותרגישי את סוגי הכיפות, ותקבלי הצעת מחיר מדויקת."
          ctaText="קביעת ייעוץ לכיפת שיער"
        />

        <RelatedServices exclude="/kipot-sear" />
      </main>
      <Footer />
    </>
  );
}
