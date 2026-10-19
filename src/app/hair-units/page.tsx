import type { Metadata } from 'next';
import Script from 'next/script';
import { Crown, Target, Sparkles, ShoppingBag, ArrowLeft } from 'lucide-react';
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
  title: 'יחידות שיער וכיפות שיער לנשים נס ציונה – לדלילות | David Hair',
  description:
    'יחידת שיער לנשים וכיפות שיער בהתאמה אישית בנס ציונה: כיפת שיער לדלילות עם כיסוי טבעי ומדויק לשביל מתרחב, קודקוד וקרקפת נראית. שיער אנושי 100%, מחיר לפי התאמה, ייעוץ פרטי ללא התחייבות. משרתים גם ראשון לציון ורחובות.',
  keywords:
    'יחידות שיער לנשים, כיפות שיער לנשים, יחידת שיער לנשים, כיפת שיער לדלילות, כיפת שיער לשיער דליל, יחידת שיער, יחידות שיער, כיפת שיער, כיפות שיער, כיפת שיער לנשים, כיפת שיער מחיר, יחידת שיער נס ציונה, יחידת שיער לנשים, יחידת שיער מחיר, יחידת שיער מול פאה, יחידת שיער או השתלת שיער, hair unit נשים, hair system נשים',
  alternates: {
    canonical: 'https://hairtoppersisrael.com/hair-units',
    languages: { 'he-IL': 'https://hairtoppersisrael.com/hair-units' },
  },
  openGraph: {
    title: 'יחידות שיער וכיפות שיער לנשים נס ציונה – פתרון טבעי לדלילות',
    description:
      'טופר, פדחת, צמיד או פאה מלאה – כל סוגי יחידות השיער וכיפות השיער במקום אחד, עם אבחון אישי שמתאים את הפתרון המדויק לרמת הדלילות שלכם.',
    type: 'website',
    locale: 'he_IL',
    siteName: 'David Hair Solutions',
    url: 'https://hairtoppersisrael.com/hair-units',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'יחידות שיער וכיפות שיער לנשים נס ציונה – פתרון טבעי לדלילות',
    description:
      'טופר, פדחת, צמיד או פאה מלאה – כל סוגי יחידות השיער וכיפות השיער במקום אחד, עם אבחון אישי שמתאים את הפתרון המדויק לרמת הדלילות שלכם.',
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
  name: 'סוגי יחידות שיער',
  description: 'סוגי יחידות השיער הלא-כירורגיות שלנו: טופר, פדחת, צמיד ופאה בהתאמה אישית.',
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
    question: 'מה ההבדל בין כיפות שיער לנשים: משי, תחרה ומונופילמנט?',
    answer:
      'כיפת משי מדמה קרקפת טבעית ומתאימה למי שרוצה את המראה הטבעי ביותר מקרוב. כיפת תחרה קלה ונושמת וכמעט בלתי נראית בקו השיער הקדמי. כיפת מונופילמנט עמידה ונוחה, עם תנועת שיער חופשית. הבחירה נעשית בייעוץ לפי מבנה הראש, רמת הדלילות ואורח החיים.',
  },
  {
    question: 'מה זו כיפת שיער לדלילות ולמי היא מתאימה?',
    answer:
      'כיפת שיער לדלילות היא יחידת שיער לא-כירורגית משיער אנושי, שנבנית על כיפה (בסיס) בצורת משי, תחרה או מונופילמנט ומכסה אזור של שיער דליל – שביל מתרחב, קודקוד, כתר או הראש כולו. היא מתאימה למי שרוצה כיסוי ונפח טבעיים מיידיים, בלי ניתוח ובלי זמן החלמה, ואפשר להסיר אותה בכל עת. היקף הכיסוי וסוג הכיפה נקבעים בייעוץ אישי לפי רמת הדלילות.',
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
    question: 'מה זו כיפת שיער והאם זה אותו דבר כמו יחידת שיער?',
    answer:
      'המונח "כיפת שיער" מתייחס לבסיס (הכיפה) שעליו קשור השיער של היחידה – החלק שיושב על הקרקפת ומחזיק את השערות. בשפה היומיומית רבים משתמשים ב"כיפת שיער" ו"יחידת שיער" כמילים נרדפות לאותו פתרון: יחידת שיער לא-כירורגית שמונחת על הראש ומעניקה כיסוי ונפח טבעיים. אצלנו כל כיפת שיער נבנית בהתאמה אישית – סוג הבסיס (משי, תחרה או מונופילמנט), הצפיפות והגוון נקבעים לפי מבנה הראש ורמת הדלילות שלכם.',
  },
  {
    question: 'כמה עולה כיפת שיער / יחידת שיער?',
    answer:
      'מחיר כיפת שיער או יחידת שיער נקבע לפי מספר גורמים: סוג היחידה (טופר, פדחת, צמיד או פאה מלאה), סוג הבסיס (כיפה), כמות ואיכות השיער האנושי, וגודל אזור הכיסוי. מכיוון שכל יחידה נתפרת בהתאמה אישית, אין מחיר אחיד – בייעוץ הראשוני, שהוא ללא עלות וללא התחייבות, בונים הצעת מחיר שקופה ומדויקת בהתאם לתוצאה הרצויה ולתקציב שלכם.',
  },
  {
    question: 'יחידת שיער או השתלת שיער – מה עדיף?',
    answer:
      'זו שאלה של עיתוי ומטרה. השתלת שיער היא פתרון כירורגי וקבוע, עם זמן החלמה ותוצאה שמתפתחת בהדרגה לאורך חודשים. יחידת שיער, לעומת זאת, היא פתרון מיידי, לא פולשני והפיך – מתאימה למי שרוצה תוצאה מהירה, רוצה לבחון שינוי מראה לפני החלטה קבועה יותר, או שהשתלה פשוט אינה רלוונטית במצב הנוכחי. הרבה לקוחות בוחרים ביחידת שיער דווקא כי היא מאפשרת לחזור למראה מלא כבר באותו שבוע.',
  },
  {
    question: 'כמה עולה יחידת שיער?',
    answer:
      'המחיר משתנה בהתאם לסוג היחידה (טופר, פדחת, צמיד או פאה מלאה), היקף השיער הטבעי הנדרש, סוג הבסיס ורמת ההתאמה האישית. בייעוץ הראשוני, שהוא ללא עלות וללא התחייבות, בונים הצעת מחיר מדויקת בהתאם לתוצאה הרצויה ולתקציב.',
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
        serviceName="יחידות שיער"
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
        title="יחידות שיער"
        subtitle="פתרון מקצועי ומותאם אישית לכל סוג ורמת דלילות"
        pathname="/hair-units"
      />
      <main>
        <ServiceHero
          badge="הפתרון המקיף לדלילות שיער"
          title="יחידות שיער לנשים"
          titleAccent="וכיפות שיער בהתאמה אישית"
          subtitle="מטופר קטן לשביל ועד פאה מלאה – יחידת שיער (או כיפת שיער) היא שם כולל לכל פתרונות השיער הלא-כירורגיים שלנו. באבחון אישי נמצא את היחידה המדויקת לסוג ולהיקף הדלילות שלכם."
          features={['שיער אנושי 100%', 'התאמה אישית מלאה', 'ללא ניתוח וללא כאב', 'ייעוץ פרטי ללא התחייבות']}
        />

        <ServiceDetailSection
          eyebrow="המושג המקצועי"
          title="מה זו בעצם יחידת שיער?"
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

        {/* יחידות שיער לנשים / כיפות שיער לנשים */}
        <section className="py-16 sm:py-20 bg-white" dir="rtl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block text-gold-600 font-semibold mb-3">מותאם לנשים</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                יחידות שיער וכיפות שיער לנשים
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
                <strong className="text-gray-900">כיפות שיער לנשים</strong> נבנות על בסיס קל ונושם שמדמה קרקפת
                טבעית, ונבחרות לפי מבנה הראש, רמת הדלילות ואורח החיים. הדלילות אצל נשים מופיעה לרוב כשביל
                שמתרחב ואיבוד נפח בקודקוד ובכתר, ולכן ההתאמה מתחילה באבחון אישי של האזור.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-5 mt-8">
              {[
                { title: 'דלילות בשביל ובקודקוד', text: 'טופר שיער על כיפה קלה, החל מ-₪900.', href: '/hair-toppers-thin-hair', cta: 'טופר לשיער דליל' },
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
                יחידות שיער לנשים – סוגים וכיפות
              </a>
              {' '}או קבעו ייעוץ חינם.
            </p>
          </div>
        </section>
        {/* Types grid */}
        <section className="py-16 sm:py-20 bg-gray-50" dir="rtl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">סוגי יחידות השיער שלנו</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                כל סוג מתאים להיקף ולמיקום שונים של דלילות – באבחון אישי נמצא יחד את ההתאמה המדויקת עבורכם
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* כיפת שיער explainer */}
        <section className="py-16 sm:py-20 bg-gray-50" dir="rtl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block text-gold-600 font-semibold mb-3">המונח המקצועי</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                כיפת שיער לדלילות — הבסיס של יחידת השיער
              </h2>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 space-y-5 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-gray-900">כיפת שיער</strong> היא הבסיס (הכיפה) שעליו נקשר השיער של היחידה —
                החלק שיושב על הקרקפת, מחזיק את השערות ומעניק ליחידה את הצורה, הנוחות והטבעיות שלה.
                רבים משתמשים במונחים <strong className="text-gray-900">כיפת שיער</strong> ו
                <strong className="text-gray-900">יחידת שיער</strong> כמילים נרדפות — שניהם מתארים פתרון
                שיער לא-כירורגי שמונח על הראש ומעניק כיסוי ונפח טבעיים לשיער דליל.
              </p>
              <p>
                ההבדל האמיתי הוא בסוג הכיפה. אצלנו כל כיפת שיער נבנית בהתאמה אישית מלאה, מתוך מבחר בסיסים:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-gold-500 font-bold">•</span>
                  <span><strong className="text-gray-900">כיפת משי (Silk Top):</strong> מדמה קרקפת טבעית, כך שגם מבט ישיר על השביל רואה &quot;עור&quot; ולא בד — הטבעית ביותר.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-500 font-bold">•</span>
                  <span><strong className="text-gray-900">כיפת תחרה (Lace):</strong> קלה, נושמת וכמעט בלתי נראית לאורך קו השיער הקדמי.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-500 font-bold">•</span>
                  <span><strong className="text-gray-900">כיפת מונופילמנט:</strong> עמידה ונוחה, עם תנועת שיער חופשית לכל כיוון.</span>
                </li>
              </ul>
              <p>
                <strong className="text-gray-900">כיפת שיער לדלילות</strong> מתאימה במיוחד למי שיש לה שביל מתרחב,
                קרקפת שנראית דרך השיער או דלילות כללית בקודקוד ובכתר. כשהדלילות ממוקדת, טופר קטן על כיפה
                קלה יספיק, ולכן כדאי להכיר גם את{' '}
                <a href="/hair-toppers-thin-hair" className="text-navy-900 font-semibold underline hover:text-gold-600">
                  טופר לשיער דליל
                </a>
                . כשהדלילות נרחבת, כיפה גדולה יותר או פאה בהתאמה אישית ייתנו כיסוי מלא.
              </p>
              <p>
                בייעוץ האישי נתאים את סוג כיפת השיער המדויק למבנה הראש, לרמת הדלילות ולאורח החיים שלכם —
                כדי שהיחידה תרגיש טבעית ותשב בנוחות לאורך כל היום.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing / cost section — commercial intent */}
        <section className="py-16 sm:py-20 bg-white" dir="rtl">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-gold-600 font-semibold mb-3">שקיפות מלאה</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                כמה עולה יחידת שיער או כיפת שיער?
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

        <ServiceFAQ faqs={faqs} subtitle="כל מה שרציתם לדעת על יחידות שיער וכיפות שיער" />

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
