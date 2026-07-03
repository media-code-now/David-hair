import type { Metadata } from 'next';
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
  title: 'יחידות שיער נס ציונה – פתרון טבעי ומדויק לשיער דליל | David Hair',
  description:
    'יחידות שיער בהתאמה אישית בנס ציונה: כיסוי טבעי ומדויק לשיער דליל, קרקפת נראית ושביל מתרחב. שיער אנושי 100%, ייעוץ פרטי ללא התחייבות. משרתים גם ראשון לציון ורחובות.',
  keywords:
    'יחידות שיער, יחידת שיער נס ציונה, יחידת שיער לנשים, יחידת שיער מחיר, יחידת שיער מול פאה, יחידת שיער או השתלת שיער, hair unit נשים',
  alternates: {
    canonical: 'https://hairtoppersisrael.com/hair-units',
    languages: { 'he-IL': 'https://hairtoppersisrael.com/hair-units' },
  },
  openGraph: {
    title: 'יחידות שיער נס ציונה – פתרון טבעי ומדויק לשיער דליל',
    description:
      'טופר, פדחת, צמיד או פאה מלאה – כל סוגי יחידות השיער במקום אחד, עם אבחון אישי שמתאים את הפתרון המדויק לרמת הדלילות שלכם.',
    type: 'website',
    locale: 'he_IL',
    siteName: 'David Hair Solutions',
    url: 'https://hairtoppersisrael.com/hair-units',
    images: [
      {
        url: 'https://hairtoppersisrael.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'יחידות שיער נס ציונה – פתרון טבעי ומדויק לשיער דליל',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'יחידות שיער נס ציונה – פתרון טבעי ומדויק לשיער דליל',
    description:
      'טופר, פדחת, צמיד או פאה מלאה – כל סוגי יחידות השיער במקום אחד, עם אבחון אישי שמתאים את הפתרון המדויק לרמת הדלילות שלכם.',
    images: ['https://hairtoppersisrael.com/og-image.jpg'],
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

const faqs = [
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
      <BreadcrumbHero
        title="יחידות שיער"
        subtitle="פתרון מקצועי ומותאם אישית לכל סוג ורמת דלילות"
      />
      <main>
        <ServiceHero
          badge="הפתרון המקיף לדלילות שיער"
          title="יחידות שיער"
          titleAccent="בהתאמה אישית מלאה"
          subtitle="מטופר קטן לשביל ועד פאה מלאה – יחידת שיער היא שם כולל לכל פתרונות השיער הלא-כירורגיים שלנו. באבחון אישי נמצא את היחידה המדויקת לסוג ולהיקף הדלילות שלכם."
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

        <ServiceFAQ faqs={faqs} subtitle="כל מה שרציתם לדעת על יחידות שיער" />

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
