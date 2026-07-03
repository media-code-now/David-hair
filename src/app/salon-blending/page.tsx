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
  title: 'סלון שילוב פאות נס ציונה – גזירה, צביעה והתאמה | David Hair',
  description: 'שירותי סלון מקצועיים לטופרים ולפאות בנס ציונה. גזירה, צביעה, שילוב ועיצוב למראה טבעי וחלק. משרתות גם ראשון לציון ורחובות. קביעת תור.',
  keywords: 'סלון שילוב פאה נס ציונה, גזירת טופר ראשון לציון, צביעת פאה נס ציונה, שילוב שיער מרכז, סלון פאות, עיצוב טופר',
  alternates: {
    canonical: 'https://hairtoppersisrael.com/salon-blending',
    languages: { 'he-IL': 'https://hairtoppersisrael.com/salon-blending' },
  },
  openGraph: {
    title: 'סלון שילוב פאות נס ציונה – גזירה, צביעה והתאמה',
    description: 'שירותי סלון מקצועיים לטופרים ולפאות בנס ציונה, עם גזירה, צביעה ושילוב למראה טבעי.',
    type: 'website',
    locale: 'he_IL',
    siteName: 'David Hair Solutions',
    url: 'https://hairtoppersisrael.com/salon-blending',
    images: [
      {
        url: 'https://hairtoppersisrael.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'סלון שילוב פאות נס ציונה – גזירה, צביעה והתאמה',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'סלון שילוב פאות נס ציונה – גזירה, צביעה והתאמה',
    description: 'שירותי סלון מקצועיים לטופרים ולפאות בנס ציונה, עם גזירה, צביעה ושילוב למראה טבעי.',
    images: ['https://hairtoppersisrael.com/og-image.jpg'],
  },
};

const faqs = [
  {
    question: 'האם צריך פגישת שילוב אחרי רכישת טופר?',
    answer: 'מומלץ מאוד. גם אם הטופר נראה נהדר ישר מהקופסה, פגישת שילוב מקצועית היא זו שהופכת אותו לכמעט בלתי ניתן לזיהוי. המעצבות שלנו גוזרות, יוצרות שכבות ומשלבות את שיער הטופר עם השיער הטבעי שלך, כך שהמעבר נראה טבעי לחלוטין.'
  },
  {
    question: 'אפשר לצבוע את הטופר שלי בדיוק לצבע השיער הטבעי?',
    answer: 'כן! אם הטופר עשוי משיער אנושי, אנחנו יכולים לצבוע אותו בהתאמה אישית לגוון המדויק — כולל שורשים, הבהרות וצבע רב-ממדי. מומלץ לעשות זאת בסלון להתאמה מדויקת מול השיער הטבעי.'
  },
  {
    question: 'כמה פעמים צריך להגיע לתחזוקה?',
    answer: 'מומלץ ביקור בסלון כל 4-8 שבועות לתחזוקת טופר/פאה: קיצוץ, רענון, מרכך עמוק ושילוב מחדש. אם צובעים את השיער הטבעי, כדאי לתאם את צביעת הטופר עם אותם תורים.'
  },
  {
    question: 'אפשר לקבל תספורת לשיער הטבעי באותה הפגישה?',
    answer: 'בהחלט. הרבה לקוחות מעצבות את השיער הטבעי והטופר/פאה באותו התור. זה למעשה אידיאלי — זה מבטיח שהשילוב בין השיער הטבעי לפריט הוא חלק בכל אורך.'
  },
  {
    question: 'מה אם רכשתי את הפאה או הטופר במקום אחר?',
    answer: 'אנחנו מקבלים כל פריט, ללא קשר למקום הרכישה. לצוות הסלון שלנו ניסיון עם כל המותגים וסוגי הבנייה המרכזיים. אנחנו יכולים לגזור, לצבוע, לשלב ולעצב כל פריט שיער אנושי.'
  },
  {
    question: 'האם המעצבות שלכם עברו הכשרה מיוחדת לפאות וטופרים?',
    answer: 'כן. המעצבות שלנו עברו הכשרה ספציפית בגזירה, שילוב ועיצוב של פריטי שיער. זה שונה מאוד מעיצוב שיער רגיל — זה דורש הבנה של מבנה בסיס, ניהול צפיפות ואינטגרציה חלקה עם שיער טבעי.'
  },
];

export default function SalonBlendingPage() {
  return (
    <>
      <Header />
      <ServiceReviewSchema
        serviceName="שילוב וגזירה בסלון"
        serviceUrl="https://hairtoppersisrael.com/salon-blending"
      />
      <BreadcrumbHero 
        title="סלון שילוב וגזירה"
        subtitle="צבע, שכבות והתאמה מקצועית"
      />
      <main>

      <ServiceHero
        badge="עיצוב מקצועי"
        title="שירותי סלון"
        titleAccent="שילוב וגזירה"
        subtitle="הסוד לטופר או פאה שכמעט בלתי ניתנים לזיהוי? שילוב מקצועי בסלון. המעצבות המיומנות שלנו גוזרות, צובעות ומעצבות את הפריט שלך למראה חלק וטבעי."
        features={['מעצבות מתמחות', 'התאמת צבע', 'שילוב חלק', 'כל המותגים']}
      />

      {/* תפריט שירותי סלון */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-navy-900 font-semibold text-sm uppercase tracking-wider mb-3">תפריט הסלון</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              שירותי סלון לנושאות פאה וטופר
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: 'גזירה ושילוב מותאם',
                desc: 'גזירה מקצועית ויצירת שכבות לשילוב חלק של הטופר או הפאה עם השיער הטבעי. אנחנו מעצבים את הפריט בהתאם למבנה הפנים ולסגנון האישי.',
                icon: '✂️',
                features: ['שכבות מסגרות פנים', 'דילול צפיפות', 'גזירת מעבר חלקה'],
              },
              {
                title: 'התאמת צבע וטיפול',
                desc: 'שירותי צבע מדויקים לפריטי שיער אנושי. אנחנו מתאימים, משלבים או משנים את הצבע לפי המפרט המדויק.',
                icon: '🎨',
                features: ['התאמת צבע שורשים', 'הבהרות ובלאיאז׳', 'כיוונוני טונר'],
              },
              {
                title: 'שטיפה, מרכך ועיצוב',
                desc: 'ניקוי עמוק מקצועי, מרכך ועיצוב מחדש. החייאת פריטים עייפים, שטוחים או מסובכים.',
                icon: '💆',
                features: ['מרכך עמוק', 'טיפול פתיחת סבכים', 'ייבוש ועיצוב'],
              },
              {
                title: 'חבילת תחזוקה',
                desc: 'טיפול שוטף לשמירת מראה רענן של הפריט. שילוב גזירה, רענון צבע, מרכך ושילוב בפגישה אחת.',
                icon: '📋',
                features: ['קיצוץ ועיצוב מחדש', 'רענון צבע', 'בדיקת קליפסים/הצמדה'],
              },
            ].map((service, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-navy-50 rounded-2xl p-8 border border-gray-200 hover:border-navy-900 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                <div className="space-y-2">
                  {service.features.map((feat, fi) => (
                    <div key={fi} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-600">✓</span>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceDetailSection
        eyebrow="ההבדל"
        title="למה סלון רגיל לא יכול לעשות את זה"
        description="גזירת טופר או פאה דורשת טכניקות שונות לחלוטין מגזירת שיער טבעי. המעצבות שלנו עברו הכשרה ספציפית לעבודה עם פריטי שיער."
        benefits={[
          { title: 'גזירה מותאמת לבסיס', description: 'אנחנו מבינות איך סוגי בסיס שונים (תחרה, מונו, רשת) משפיעים על הדרך שהשיער נופל ונע. אנחנו גוזרות בהתאם.' },
          { title: 'ניהול צפיפות', description: 'עבה מדי? שטוח מדי? אנחנו מדללות, משכבתות ומכווננות צפיפות לאורך הפריט למראה הכי טבעי.' },
          { title: 'מומחיות בקו השילוב', description: 'המעבר מהפריט לשיער הטבעי הוא המקום שבו רוב המעצבות נכשלות. הצוות שלנו מתמחה ביצירת קווי שילוב שכמעט בלתי נראים.' },
          { title: 'אינטגרציית צבע', description: 'אנחנו לא רק מתאימות צבע — אנחנו משלבות אותו. שורשים, אמצע, קצוות ואזור השילוב — כולם מקבלים תשומת לב אישית.' },
        ]}
        imagePlaceholder="💇"
      />

      <ServiceDetailSection
        eyebrow="החוויה שלכם"
        title="מה מחכה לך בביקור הסלון"
        description="כל ביקור בסלון הוא חוויה פרטית ואישית. הנה מה שקורה מהרגע שנכנסים."
        benefits={[
          { title: 'סוויטה פרטית', description: 'כל השירותים מבוצעים באזור פרטי או חצי-פרטי. הנוחות והדיסקרטיות תמיד בראש סדר העדיפויות.' },
          { title: 'ייעוץ תחילה', description: 'אנחנו מתחילים בדיון על המטרות, בחינת הפריט ותכנון השירות. ללא הפתעות.' },
          { title: 'ביצוע מקצועי', description: 'המעצבים המיומנים שלנו מבצעים את העבודה בדיוק ובזהירות, ובודקים שביעות רצון לאורך כל התהליך.' },
          { title: 'הנחיות טיפול', description: 'לפני היציאה, אנחנו עוברים יחד על הטיפול הביתי: שטיפה, עיצוב ושמירה על התוצאה בין הפגישות.' },
        ]}
        imagePlaceholder="🪞"
        reversed
      />

      {/* מחירון */}
      <section className="py-16 sm:py-20 bg-gray-50" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            מחירון שקוף
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            המחירים משתנים בהתאם לשירות ולמורכבות. הנה טווחים מקובלים:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { service: 'גזירה ושילוב', price: 'החל מ-₪300' },
              { service: 'התאמת צבע', price: 'החל מ-₪450' },
              { service: 'שטיפה ועיצוב', price: 'החל מ-₪180' },
              { service: 'חבילה מלאה', price: 'החל מ-₪650' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                <p className="text-sm text-gray-600 mb-2">{item.service}</p>
                <p className="text-2xl font-bold text-navy-900">{item.price}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6 italic">
            * המחיר הסופי נקבע בייעוץ בהתאם לסוג הפריט ומורכבות השירות
          </p>
        </div>
      </section>

      <ServiceFAQ faqs={faqs} subtitle="שאלות נפוצות על שירותי הסלון שלנו" />

      <ServiceCTA
        title="קבעו תור לסלון"
        subtitle="בין אם זה השילוב הראשון שלך או תחזוקה שוטפת — המעצבות המומחות שלנו מוכנות לגרום לפריט שלך להיראות במיטבו."
        ctaText="קביעת תור לסלון"
      />

      <RelatedServices exclude="/salon-blending" />

      </main>
      <Footer />
    </>
  );
}
