import type { Metadata } from 'next';
import Script from 'next/script';
import { Crown, Target, Sparkles, ShoppingBag, ArrowLeft, Layers } from 'lucide-react';
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
import bannerTwo from '@/images/banners/2.jpg';

export const metadata: Metadata = {
  title: { absolute: 'יחידות שיער לנשים – יחידת שיער בהתאמה אישית לדלילות | David Hair' },
  description:
    'יחידות שיער לנשים משיער אנושי 100% בנס ציונה: טופר, פדחת, צמיד או פאה – יחידת שיער בהתאמה אישית לשביל מתרחב, קודקוד ודלילות נרחבת. חדר פרטי לנשים בלבד, ייעוץ חינם ללא התחייבות.',
  keywords:
    'יחידות שיער לנשים, יחידת שיער לנשים, יחידות שיער, יחידת שיער, יחידת שיער לשיער דליל, יחידת שיער נס ציונה, יחידת שיער מחיר, יחידת שיער מול פאה, יחידת שיער או השתלת שיער, hair unit נשים, hair system נשים',
  alternates: {
    canonical: 'https://hairtoppersisrael.com/hair-units',
    languages: { 'he-IL': 'https://hairtoppersisrael.com/hair-units' },
  },
  openGraph: {
    title: 'יחידות שיער לנשים – יחידת שיער בהתאמה אישית לדלילות',
    description:
      'טופר, פדחת, צמיד או פאה מלאה – כל סוגי יחידות השיער לנשים במקום אחד, עם אבחון אישי שמתאים את הפתרון המדויק לרמת הדלילות.',
    type: 'website',
    locale: 'he_IL',
    siteName: 'David Hair Solutions',
    url: 'https://hairtoppersisrael.com/hair-units',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'יחידות שיער לנשים – יחידת שיער בהתאמה אישית לדלילות',
    description:
      'טופר, פדחת, צמיד או פאה מלאה – כל סוגי יחידות השיער לנשים במקום אחד, עם אבחון אישי שמתאים את הפתרון המדויק לרמת הדלילות.',
  },
};

const hairUnitTypes = [
  {
    icon: Crown,
    title: 'טופר שיער',
    description: 'כיסוי לקודקוד ולשיער דליל כללי, עם התאמה מדויקת של גוון וצפיפות.',
    href: '/hair-toppers',
    cta: 'לפרטים על טופרים',
    color: 'from-pink-50 to-rose-50',
  },
  {
    icon: Layers,
    title: 'כיפת שיער',
    description: 'כיפת משי, תחרה או מונופילמנט בגודל מותאם, כשהדלילות רחבה מטופר.',
    href: '/kipot-sear',
    cta: 'לפרטים על כיפות שיער',
    color: 'from-teal-50 to-cyan-50',
  },
  {
    icon: Target,
    title: 'פדחת לשיער',
    description: 'יחידה ממוקדת לאזור הקדמי והשביל המתרחב – קלה וכמעט בלתי מורגשת.',
    href: '/padachat',
    cta: 'לפרטים על פדחת',
    color: 'from-amber-50 to-yellow-50',
  },
  {
    icon: Sparkles,
    title: 'צמידי שיער',
    description: 'תוספת מיידית לנפח ואורך, לתוצאה מורגשת כבר מהפגישה הראשונה.',
    href: '/tzamidei-sear',
    cta: 'לפרטים על צמידים',
    color: 'from-indigo-50 to-blue-50',
  },
  {
    icon: ShoppingBag,
    title: 'פאה בהתאמה אישית',
    description: 'כיסוי מלא לכל הקרקפת, לדלילות נרחבת או נשירה משמעותית.',
    href: '/custom-wigs',
    cta: 'לפרטים על פאות',
    color: 'from-purple-50 to-violet-50',
  },
];

const SITE = 'https://hairtoppersisrael.com';

// ItemList schema — tells search engines the page is a category listing of hair-unit types.
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'סוגי יחידות שיער לנשים',
  description: 'סוגי יחידות השיער לנשים: טופר, כיפת שיער, פדחת, צמיד ופאה בהתאמה אישית.',
  itemListElement: hairUnitTypes.map((type, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: type.title,
    description: type.description,
    url: `${SITE}${type.href}`,
  })),
};

// HowTo schema — the "how a hair unit is built" process, AEO-eligible.
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'איך בונים יחידת שיער מותאמת אישית',
  description:
    'תהליך ההתאמה של יחידת שיער בחדר ייעוץ פרטי – מהאבחון הראשוני ועד לעיצוב הסופי.',
  totalTime: 'PT2H',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'אבחון וייעוץ ראשוני',
      text: 'בודקים את היקף הדלילות, מבנה הקרקפת והמטרות שלכם, וממליצים על סוג היחידה המתאים ביותר.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'התאמת גוון וצפיפות',
      text: 'משווים גוונים ורמות צפיפות ליצירת מעבר טבעי ובלתי מורגש בין היחידה לשיער הקיים.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'התקנה מדויקת ובטוחה',
      text: 'מיקום והצמדה מקצועיים שמבטיחים נוחות מלאה וביטחון לאורך כל היום.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'גזירה ועיצוב סופי',
      text: 'עיצוב אישי שמשלב את היחידה עם השיער הטבעי למראה אחיד וטבעי לחלוטין.',
    },
  ],
};

const faqs = [
  {
    question: 'מה זו יחידת שיער לנשים וכמה זמן לוקח לקבל אותה?',
    answer:
      'יחידת שיער לנשים היא פתרון לא-כירורגי משיער אנושי שמכסה אזור של דלילות ומשתלב בשיער הקיים. יחידה מוכנה מותאמת בדרך כלל באותו שבוע, ויחידה בהתאמה אישית מלאה לוקחת 2–4 שבועות. הייעוץ הראשוני אורך כשעה והוא חינם וללא התחייבות.',
  },
  {
    question: 'איזו יחידת שיער מתאימה לנשים עם שיער דליל?',
    answer:
      'התשובה תלויה באזור ובהיקף הדלילות. לשביל מתרחב ולקודקוד מתאים טופר שיער על כיפה קלה, לדלילות בקו הקדמי מתאימה פדחת, ולדלילות נרחבת או כיסוי מלא מתאימה פאה בהתאמה אישית. בייעוץ אישי בודקים את הקרקפת והשיער הקיים ובוחרים יחד את היחידה, הכיפה והגוון.',
  },
  {
    question: 'מה זו בעצם יחידת שיער?',
    answer:
      'יחידת שיער (Hair Unit) הוא שם כולל לפתרונות שיער לא-כירורגיים שמטרתם להחזיר נפח, כיסוי ומראה טבעי באזורים של דלילות או נשירה. תחת הקטגוריה הזו נכנסים טופרים, פדחות, צמידי שיער ופאות בהתאמה אישית – כל אחד מתאים לסוג ולהיקף דלילות שונים. בייעוץ אישי בוחרים יחד את סוג היחידה המדויק לצרכים שלכם.',
  },
  {
    question: 'מה ההבדל בין יחידת שיער לפאה רגילה?',
    answer:
      '"פאה" מתייחסת בדרך כלל לכיסוי מלא של הקרקפת, בעוד "יחידת שיער" הוא מונח רחב יותר שכולל גם פתרונות חלקיים וממוקדים – כמו טופר לקודקוד או פדחת לקו הקדמי. כך אפשר להתאים בדיוק את היקף הכיסוי לאזור הדלילות, בלי להחליף שיער בריא שכלל לא צריך כיסוי.',
  },
  {
    question: 'מה ההבדל בין יחידת שיער לכיפת שיער?',
    answer:
      'כיפת שיער היא הבסיס שעליו נקשר השיער של היחידה, ובשפה היומיומית משתמשים לפעמים בשני המונחים לאותו פתרון. יחידות שיער לנשים הן שם כולל שמכיל טופרים, כיפות שיער, פדחות, צמידים ופאות. סוג הכיפה (משי, תחרה או מונופילמנט) נבחר בייעוץ לפי מבנה הראש ורמת הדלילות.',
  },
  {
    question: 'יחידת שיער או השתלת שיער – מה עדיף?',
    answer:
      'זו שאלה של עיתוי ומטרה. השתלת שיער היא פתרון כירורגי וקבוע, עם זמן החלמה ותוצאה שמתפתחת בהדרגה לאורך חודשים. יחידת שיער, לעומת זאת, היא פתרון מיידי, לא פולשני והפיך – מתאימה למי שרוצה תוצאה מהירה, רוצה לבחון שינוי מראה לפני החלטה קבועה יותר, או שהשתלה פשוט אינה רלוונטית במצב הנוכחי. הרבה לקוחות בוחרים ביחידת שיער דווקא כי היא מאפשרת לחזור למראה מלא כבר באותו שבוע.',
  },
  {
    question: 'כמה עולה יחידת שיער לנשים?',
    answer:
      'טופרים מתחילים מ-₪900. המחיר משתנה בהתאם לסוג היחידה (טופר, פדחת, צמיד או פאה מלאה), היקף השיער הטבעי הנדרש, סוג הבסיס ורמת ההתאמה האישית. בייעוץ הראשוני, שהוא ללא עלות וללא התחייבות, בונים הצעת מחיר מדויקת בהתאם לתוצאה הרצויה ולתקציב.',
  },
  {
    question: 'האם יחידת שיער מתאימה גם לדלילות באזור מסוים בלבד?',
    answer:
      'כן, זה בדיוק היתרון המרכזי של יחידות שיער. בניגוד לפאה מלאה, אפשר לבחור יחידה שמכסה רק את האזור הדליל – קודקוד, שביל מתרחב או קו קדמי – ולשמר את כל השיער הטבעי הבריא מסביב. האבחון בייעוץ קובע בדיוק איזו יחידה ובאיזה גודל מתאימה למקרה הספציפי.',
  },
  {
    question: 'כמה זמן לוקח להתרגל ליחידת שיער וכמה זמן היא מחזיקה?',
    answer:
      'רוב הלקוחות מדווחים על הרגשת נוחות מלאה כבר בימים הראשונים. מבחינת עמידות, עם תחזוקה נכונה ושמירה על הוראות הטיפול, יחידת שיער איכותית משיער טבעי מחזיקה בממוצע כשנה עד שנתיים, לצד שירותי ריענון ותחזוקה שוטפים בסלון.',
  },
];

export default function HairUnitsPage() {
  return (
    <>
      <Header />
      <ServiceReviewSchema
        serviceName="יחידות שיער לנשים"
        serviceUrl="https://hairtoppersisrael.com/hair-units"
      />
      <Script
        id="hair-units-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Script
        id="hair-units-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <BreadcrumbHero
        title="יחידות שיער לנשים"
        subtitle="יחידת שיער בהתאמה אישית לכל סוג ורמת דלילות"
        pathname="/hair-units"
      />
      <main>
        <ServiceHero
          badge="הפתרון המקיף לדלילות שיער"
          title="יחידות שיער לנשים"
          titleAccent="בהתאמה אישית מלאה"
          subtitle="מטופר קטן לשביל ועד פאה מלאה – יחידות שיער לנשים הן שם כולל לכל פתרונות השיער הלא-כירורגיים שלנו. באבחון אישי בחדר פרטי נמצא את יחידת השיער המדויקת לסוג ולהיקף הדלילות שלך."
          features={['שיער אנושי 100%', 'התאמה אישית מלאה', 'ללא ניתוח וללא כאב', 'ייעוץ פרטי ללא התחייבות']}
        />

        <ServiceDetailSection
          eyebrow="המושג המקצועי"
          title="מה זו יחידת שיער לנשים?"
          description="יחידת שיער היא כל פתרון שיער לא-כירורגי שמטרתו להחזיר נפח, כיסוי ומראה טבעי לאזור של דלילות או נשירה. ההבדל בין הסוגים הוא בעיקר בהיקף הכיסוי ובשיטת ההתקנה."
          benefits={[
            { title: 'מגוון רחב של פתרונות', description: 'מטופרים קטנים לשביל ועד פאות מלאות – כל יחידה נבנית לפי היקף הדלילות הספציפי שלכם.' },
            { title: 'שיער אנושי איכותי', description: 'כל היחידות שלנו מיוצרות משיער אנושי 100%, לתנועה, ברק וטבעיות מלאה.' },
            { title: 'לא פולשני ולא קבוע', description: 'ללא ניתוח, ללא זמן החלמה וללא פגיעה בשיער הטבעי הקיים – ניתן להסרה בכל עת.' },
            { title: 'התאמה מדויקת בייעוץ', description: 'אבחון מקצועי קובע בדיוק איזה סוג יחידה, גודל וגוון מתאימים לכם.' },
          ]}
          imageSrc={bannerOne}
          imageAlt="יחידת שיער בהתאמה אישית - מראה טבעי"
        />

        {/* יחידות שיער לנשים */}
        <section className="py-16 sm:py-20 bg-white" dir="rtl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block text-gold-600 font-semibold mb-3">מותאם לנשים</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                יחידות שיער לנשים – איך בוחרים את היחידה הנכונה
              </h2>
            </div>
            <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-gray-900">יחידות שיער לנשים</strong> הן פתרון לא-כירורגי משיער אנושי
                שמחזיר נפח וכיסוי לאזורי דלילות – שביל מתרחב, קודקוד, כתר או הראש כולו. בניגוד לפאה מלאה,
                אפשר לבחור יחידה שמכסה רק את האזור הדליל ולשמור על כל השיער הבריא מסביב.
              </p>
              <p>
                <strong className="text-gray-900">יחידת שיער לנשים</strong> נבנית בהתאמה אישית מלאה: בוחרים
                את סוג היחידה, את הכיפה, את הצפיפות ואת הגוון כך שישתלבו בשיער הטבעי שלך, ואפשר להסיר אותה בכל עת.
                טופרים מתחילים מ-₪900, והייעוץ הראשוני חינם וללא התחייבות.
              </p>
              <p>
                הדלילות אצל נשים מופיעה לרוב כשביל שמתרחב ואיבוד נפח בקודקוד ובכתר, בזמן שקו השיער הקדמי
                נשמר. לכן <strong className="text-gray-900">יחידות שיער לנשים</strong> נבנות בעיקר כפתרון חלקי
                למרכז הראש, וההתאמה מתחילה באבחון אישי של האזור. כל יחידה נבנית על בסיס קל ונושם – ואת סוגי
                הבסיס פירטנו בדף{' '}
                <a href="/kipot-sear" className="text-navy-900 font-semibold underline hover:text-gold-600">
                  כיפות שיער לנשים
                </a>
                .
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-5 mt-8">
              {[
                { title: 'דלילות בשביל ובקודקוד', text: 'טופר שיער על כיפה קלה, החל מ-₪900.', href: '/hair-toppers', cta: 'טופר לשיער נשים' },
                { title: 'דלילות בקו הקדמי', text: 'פדחת לשיער לכיסוי טבעי של חזית הראש.', href: '/padachat', cta: 'פדחת לשיער' },
                { title: 'דלילות נרחבת', text: 'פאה בהתאמה אישית לכיסוי מלא של הקרקפת.', href: '/custom-wigs', cta: 'פאות בהתאמה אישית' },
              ].map((item) => (
                <a
                  key={item.href}
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
              רוצות להבין מה מתאים לכן? קראו את המדריך{' '}
              <a href="/blog/hair-units-for-women" className="text-navy-900 font-semibold underline hover:text-gold-600">
                איך בוחרים יחידת שיער לפי אזור הדלילות
              </a>
              {' '}או קבעו ייעוץ חינם.
            </p>
          </div>
        </section>
        {/* Types grid */}
        <section className="py-16 sm:py-20 bg-gray-50" dir="rtl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">סוגי יחידות שיער לנשים</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                כל סוג מתאים להיקף ולמיקום שונים של דלילות – באבחון אישי נמצא יחד את ההתאמה המדויקת עבורכם
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hairUnitTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <a
                    key={type.href}
                    href={type.href}
                    className={`group bg-gradient-to-br ${type.color} glass-card rounded-[22px] p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 block`}
                  >
                    <div className="w-12 h-12 rounded-[14px] bg-white/70 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <Icon size={22} className="text-navy-900" strokeWidth={2} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1.5">{type.title}</h3>
                    <p className="text-sm text-gray-600 mb-5 leading-relaxed">{type.description}</p>
                    <span className="text-navy-900 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      <ArrowLeft size={14} /> {type.cta}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <ServiceDetailSection
          eyebrow="התהליך המקצועי"
          title="איך בונים יחידת שיער מותאמת אישית"
          description="כל יחידת שיער עוברת תהליך התאמה מוקפד בחדר ייעוץ פרטי – מהאבחון הראשוני ועד לעיצוב הסופי."
          benefits={[
            { title: 'אבחון וייעוץ ראשוני', description: 'בודקים את היקף הדלילות, מבנה הקרקפת והמטרות שלכם, וממליצים על סוג היחידה המתאים ביותר.' },
            { title: 'התאמת גוון וצפיפות', description: 'משווים גוונים ורמות צפיפות ליצירת מעבר טבעי ובלתי מורגש בין היחידה לשיער הקיים.' },
            { title: 'התקנה מדויקת ובטוחה', description: 'מיקום והצמדה מקצועיים שמבטיחים נוחות מלאה וביטחון לאורך כל היום.' },
            { title: 'גזירה ועיצוב סופי', description: 'עיצוב אישי שמשלב את היחידה עם השיער הטבעי למראה אחיד וטבעי לחלוטין.' },
          ]}
          imageSrc={bannerTwo}
          imageAlt="תהליך התאמת יחידת שיער בסלון פרטי"
          reversed
        />

        {/* Comparison table */}
        <section className="py-16 sm:py-20 bg-white" dir="rtl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
              יחידת שיער מול פאה מלאה מול השתלת שיער
            </h2>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <table className="w-full text-right">
                <thead>
                  <tr className="bg-navy-900 text-white">
                    <th className="px-6 py-4 font-semibold">תכונה</th>
                    <th className="px-6 py-4 font-semibold text-center">יחידת שיער</th>
                    <th className="px-6 py-4 font-semibold text-center">פאה מלאה</th>
                    <th className="px-6 py-4 font-semibold text-center">השתלת שיער</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-gray-900 font-medium">תוצאה מיידית באותו ביקור</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                    <td className="px-6 py-4 text-center text-red-500 font-bold">✗</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">ללא ניתוח וזמן החלמה</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                    <td className="px-6 py-4 text-center text-red-500 font-bold">✗</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900 font-medium">הפיך – ניתן להסרה בכל עת</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                    <td className="px-6 py-4 text-center text-red-500 font-bold">✗</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">שומר על השיער הטבעי הקיים</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                    <td className="px-6 py-4 text-center text-red-500 font-bold">✗</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900 font-medium">מתאים לדלילות ממוקדת בלבד</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                    <td className="px-6 py-4 text-center text-red-500 font-bold">✗</td>
                    <td className="px-6 py-4 text-center text-yellow-500">משתנה</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">עלות התחלתית נמוכה יחסית</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                    <td className="px-6 py-4 text-center text-yellow-500">משתנה</td>
                    <td className="px-6 py-4 text-center text-red-500 font-bold">✗</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Dome pointer -> /kipot-sear */}
        <section className="py-16 sm:py-20 bg-gray-50" dir="rtl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 space-y-5 text-lg text-gray-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">הכיפה – הבסיס של כל יחידת שיער</h2>
              <p>
                כל יחידת שיער נבנית על כיפה (בסיס) שיושבת על הקרקפת: משי שמדמה עור, תחרה קלה ונושמת או
                מונופילמנט עמיד. סוג הכיפה קובע איך היחידה נראית מקרוב וכמה היא נוחה ביומיום. כשהדלילות רחבה
                מדי לטופר, כיפה גדולה יותר נותנת כיסוי אחיד.
              </p>
              <a
                href="/kipot-sear"
                className="inline-flex items-center gap-1.5 text-navy-900 font-semibold underline decoration-gold-400 underline-offset-4 hover:text-gold-600"
              >
                <ArrowLeft size={16} /> כל המידע על כיפות שיער לנשים
              </a>
            </div>
          </div>
        </section>

        {/* Pricing / cost section — commercial intent */}
        <section className="py-16 sm:py-20 bg-white" dir="rtl">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-gold-600 font-semibold mb-3">שקיפות מלאה</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                כמה עולה יחידת שיער לנשים?
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                מכיוון שכל יחידה נתפרת בהתאמה אישית, אין מחיר אחיד. המחיר הסופי נקבע לפי ארבעה גורמים עיקריים —
                ובייעוץ החינמי תקבלו הצעת מחיר שקופה ומדויקת.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                { title: 'סוג היחידה', text: 'טופר, פדחת וצמיד עולים פחות מפאה מלאה, כי הם מכסים אזור קטן יותר.' },
                { title: 'סוג הכיפה', text: 'כיפת משי מדמה-קרקפת יקרה יותר מתחרה או מונופילמנט סטנדרטיים.' },
                { title: 'כמות ואיכות השיער', text: 'שיער אנושי 100%, אורך רב וצפיפות גבוהה מעלים את עלות היחידה.' },
                { title: 'רמת ההתאמה האישית', text: 'התאמת גוון מדויקת, גזירה ועיצוב אישי כלולים במחיר היחידה.' },
              ].map((item) => (
                <div key={item.title} className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                href="/book"
                className="inline-flex items-center justify-center gap-2 bg-navy-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-navy-800 transition-colors"
              >
                קבלת הצעת מחיר בייעוץ חינם
              </a>
              <p className="text-sm text-gray-500 mt-3">ללא עלות וללא התחייבות</p>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={faqs} subtitle="כל מה שרציתן לדעת על יחידות שיער לנשים" />

        <ServiceCTA
          title="מוכנים למצוא את יחידת השיער המתאימה לכם?"
          subtitle="קבעו ייעוץ אישי ללא התחייבות. נבחן יחד את היקף הדלילות ונמליץ על יחידת השיער המדויקת לצרכים ולתקציב שלכם."
          ctaText="קביעת ייעוץ ליחידת שיער"
        />

        <RelatedServices exclude="/hair-units" />
      </main>
      <Footer />
    </>
  );
}
