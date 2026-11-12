import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbHero from '@/components/BreadcrumbHero';
import ServiceHero from '@/components/ServiceHero';
import ServiceDetailSection from '@/components/ServiceDetailSection';
import ServiceCTA from '@/components/ServiceCTA';
import ServiceFAQ from '@/components/ServiceFAQ';
import HairUnitsCallout from '@/components/HairUnitsCallout';
import RelatedServices from '@/components/RelatedServices';
import ServiceReviewSchema from '@/components/ServiceReviewSchema';
import bannerTwo from '@/images/banners/2.jpg';
import beforeAfterOne from '@/images/before-after/before-after-1.jpg';

export const metadata: Metadata = {
  title: { absolute: 'טופר לשיער נשים – טופר שיער טבעי בהתאמה אישית | דוד פתרונות לשיער' },
  description: 'טופר לשיער נשים משיער אנושי 100%: כיסוי טבעי לשביל מתרחב, קודקוד ושיער דליל, בהתאמה אישית בחדר פרטי לנשים בלבד בנס ציונה. טופרים לנשים החל מ-₪900, ייעוץ חינם.',
  keywords: 'טופר לשיער נשים, טופר שיער לנשים, טופרים לנשים, טופר לנשים, טופר שיער, טופר שיער טבעי, טופר שיער נס ציונה, טופר שיער ראשון לציון, טופר לשיער דליל, כיסוי שביל, hair topper for women',
  alternates: {
    canonical: 'https://hairtoppersisrael.com/hair-toppers',
    languages: { 'he-IL': 'https://hairtoppersisrael.com/hair-toppers' },
  },
  openGraph: {
    title: 'טופר לשיער נשים – טופר שיער טבעי בהתאמה אישית',
    description: 'טופר שיער לנשים משיער אנושי 100% לכיסוי השביל והקודקוד, בהתאמה אישית בחדר פרטי. החל מ-₪900.',
    type: 'website',
    locale: 'he_IL',
    siteName: 'דוד פתרונות לשיער',
    url: 'https://hairtoppersisrael.com/hair-toppers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'טופר לשיער נשים – טופר שיער טבעי בהתאמה אישית',
    description: 'טופר שיער לנשים משיער אנושי 100% לכיסוי השביל והקודקוד, בהתאמה אישית בחדר פרטי. החל מ-₪900.',
  },
};

const faqs = [
  {
    question: 'מה זה טופר לשיער נשים?',
    answer: 'טופר לשיער נשים הוא יחידת שיער חלקית משיער אנושי, שמתחברת לשיער הקיים בקליפסים עדינים ומכסה אזור מוגדר – שביל מתרחב, קודקוד או כתר. הוא נבנה במיוחד לדפוס הדלילות הנשי, שבו השיער מתדלדל בעיקר במרכז הראש ולא בקו הקדמי, ולכן מאפשר לשמור על כל השיער הטבעי ולהוסיף כיסוי ונפח רק היכן שצריך.'
  },
  {
    question: 'כמה עולה טופר שיער לנשים?',
    answer: 'טופרים לנשים מתחילים מ-₪900. המחיר הסופי תלוי בגודל הבסיס, סוג הכיפה (משי, תחרה או מונופילמנט), אורך וצפיפות השיער ורמת ההתאמה האישית. בייעוץ הראשוני, שהוא חינם וללא התחייבות, מקבלים הצעת מחיר מדויקת.'
  },
  {
    question: 'מהו טופר שיער ולמי הוא מתאים?',
    answer: 'טופר שיער הוא תוספת חלקית שמתחברת לשיער הקיים שלך באמצעות קליפסים, ומוסיפה נפח, כיסוי ומלאות. הוא מושלם לנשים עם שיער דליל, שביל מתרחב או נשירה מקומית. בניגוד לפאה מלאה, טופר משתלב עם השיער הטבעי שלך למראה חלק לחלוטין.'
  },
  {
    question: 'איך אדע איזה גודל טופר אני צריכה?',
    answer: 'גדלי הטופרים משתנים בהתאם לאזור הכיסוי הנדרש. במהלך הייעוץ אנחנו מודדות את האזור הדליל וממליצות על גודל הבסיס המתאים ביותר — מקליפסים קטנים לכיסוי שביל ועד יחידות גדולות יותר לאזורים רחבים. אנחנו מוודאות שהבסיס יושב באופן טבעי על הקרקפת.'
  },
  {
    question: 'האם הטופר יתאים לצבע השיער הטבעי שלי?',
    answer: 'כן. אנחנו מבצעים ניתוח צבע מפורט במהלך ההתאמה כדי להתאים את הטופר בדיוק לגוון הטבעי. אנחנו גם יכולים לצבוע את הפריט בסלון שלנו להתאמה מדויקת, כולל גוונים והבהרות.'
  },
  {
    question: 'כמה זמן מחזיק טופר שיער?',
    answer: 'עם טיפול נכון, טופר שיער איכותי משיער טבעי מחזיק בדרך כלל 1–2 שנים בשימוש יומיומי. אנחנו מספקות מדריך טיפול מלא ומציעות שירותי תחזוקה הכוללים חפיפה, טיפול משקם ועיצוב מחדש כדי להאריך את חיי הפריט.'
  },
  {
    question: 'אפשר לעצב את הטופר עם כלי חום?',
    answer: 'כן! כל הטופרים שלנו עשויים משיער אנושי 100%, כך שאפשר לסלסל, להחליק, לייבש בפן ולעצב אותם בדיוק כמו שיער טבעי. נלמד אותך את הטכניקות הטובות ביותר במהלך פגישת ההתאמה.'
  },
  {
    question: 'האם ההצמדה מאובטחת? הטופר לא יפול?',
    answer: 'הטופרים שלנו משתמשים בקליפסים ושיטות הצמדה מקצועיות שתוכננו לאבטחה כל היום. בין אם את מתאמנת, עובדת או בפעילות חברתית — הטופר נשאר במקום. אנחנו בודקות את ההתאמה ביסודיות במהלך הפגישה כדי להבטיח ביטחון מלא.'
  },
];

export default function HairToppersPage() {
  return (
    <>
      <Header />
      <ServiceReviewSchema
        serviceName="טופר לשיער נשים"
        serviceUrl="https://hairtoppersisrael.com/hair-toppers"
      />
      <BreadcrumbHero 
        title="טופר לשיער נשים"
        subtitle="טופר שיער טבעי לנשים – כיסוי ונפח בהתאמה אישית"
        pathname="/hair-toppers"
      />
      <main>

      <ServiceHero
        badge="הפתרון הפופולרי ביותר"
        title="טופר שיער לנשים"
        titleAccent="במראה טבעי לחלוטין"
        subtitle="טופר לשיער נשים הוא יחידה קלה ונושמת שמתחברת לשיער הטבעי שלך ומעניקה נפח, כיסוי וביטחון מיידי. שיער אנושי 100%, התאמה אישית בחדר פרטי לנשים בלבד, החל מ-₪900."
        features={['שיער אנושי אמיתי', 'הצמדה בקליפסים', 'התאמת צבע מושלמת', 'אחריות כלולה']}
      />

      <ServiceDetailSection
        eyebrow="הבחירה הטבעית"
        title="למה טופר לשיער נשים הוא הפתרון מספר 1 לדלילות"
        description="טופר שיער הוא הדרך הטבעית והלא פולשנית ביותר להחזיר נפח וכיסוי. בניגוד לפאה מלאה, הוא משתלב עם השיער שלך — כך שרק את יודעת שהוא שם."
        benefits={[
          { title: 'שילוב חלק', description: 'מתחבר ישירות לשיער הקיים שלך, ויוצר מעבר בלתי נראה בין הטופר לצמיחה הטבעית.' },
          { title: 'נוחות קלת משקל', description: 'בסיסי רשת נושמים שתוכננו ללבישה כל היום ללא לחץ, חום או אי-נוחות על הקרקפת.' },
          { title: 'אפשרויות כיסוי מגוונות', description: 'מקליפסים קטנים לכיסוי שביל ועד יחידות גדולות יותר לאזורים רחבים — אנחנו מתאימים את הגודל המדויק לצרכים.' },
          { title: 'חופש עיצוב', description: 'סלסול, החלקה, ייבוש — שיער אנושי אמיתי מאפשר אפשרויות עיצוב ללא הגבלה, עם תנועה וברק טבעיים.' },
        ]}
        imageSrc={bannerTwo}
        imageAlt="טופר לשיער נשים – טופר שיער טבעי בהתאמה אישית"
        imagePlaceholder="💇‍♀️"
      />

      <ServiceDetailSection
        eyebrow="התהליך"
        title="חוויית ההתאמה האישית שלכם"
        description="כל התאמה היא חוויה אישית בחדר הייעוץ הפרטי שלנו. מהתאמת צבע ועד עיצוב סופי, אנחנו מטפלים בכל פרט."
        benefits={[
          { title: 'ייעוץ פרטי', description: 'אנחנו דנות במטרות שלך, מנתחות את השיער, וממליצות על סוג וגודל הטופר האידיאלי בסביבה חסויה.' },
          { title: 'התאמת צבע מדויקת', description: 'המומחיות שלנו מתאימות או משלבות צבעים לגוון המדויק שלך — כולל שורשים, הבהרות ווריאציות טבעיות.' },
          { title: 'התאמה מאובטחת', description: 'אנחנו ממקמות ומצמידות את הטופר לנוחות ואבטחה מקסימלית, ומכווננות עד שההתאמה מושלמת.' },
          { title: 'עיצוב מקצועי', description: 'צוות הסלון שלנו גוזר ומשלב את הטופר עם השיער הטבעי שלך למראה חלק וכמעט בלתי ניתן לזיהוי.' },
        ]}
        imageSrc={beforeAfterOne}
        imageAlt="תהליך התאמה אישית לטופר שיער"
        imagePlaceholder="✨"
        reversed
      />

      {/* Social proof banner */}
      <section className="py-12 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">+300</div>
              <p className="text-gold-200 text-sm">טופרים שהותאמו</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">4.9★</div>
              <p className="text-gold-200 text-sm">דירוג לקוחות</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">1-2 שעות</div>
              <p className="text-gold-200 text-sm">התאמה מלאה</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <p className="text-gold-200 text-sm">שיער אנושי אמיתי</p>
            </div>
          </div>
        </div>
      </section>

      {/* טופר לשיער נשים – keyword content block */}
      <section className="py-16 sm:py-20 bg-white" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-gold-600 font-semibold mb-3">מותאם לנשים</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              טופר לשיער נשים – מה חשוב לדעת לפני שבוחרים
            </h2>
          </div>
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong className="text-gray-900">טופר לשיער נשים</strong> שונה מפתרונות שיער לגברים. אצל נשים
              הדלילות מופיעה בדרך כלל כשביל שמתרחב, קודקוד שנראה דרך השיער ואיבוד נפח בחלק העליון של הראש,
              בזמן שקו השיער הקדמי נשמר. לכן טופר שיער לנשים נבנה כדי להשתלב בשיער הקיים ולכסות רק את מרכז
              הראש, בלי להחליף שיער בריא.
            </p>
            <p>
              הסיבות לדלילות אצל נשים מגוונות: שינויים הורמונליים אחרי לידה או בגיל המעבר, גנטיקה, לחץ,
              מחסורים תזונתיים או טיפולים רפואיים. בכל המקרים האלה{' '}
              <strong className="text-gray-900">טופרים לנשים</strong> מאפשרים לחזור למראה מלא כבר באותו
              שבוע – בלי ניתוח, בלי זמן החלמה ועם אפשרות להסיר את הטופר בכל עת.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">איך בוחרים טופר שיער לנשים?</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: 'גודל הבסיס', text: 'בסיס קטן לשביל מתרחב, ובסיס רחב יותר לקודקוד ולכתר. מודדות את אזור הדלילות בייעוץ.' },
              { title: 'סוג הכיפה', text: 'כיפת משי מדמה קרקפת טבעית, תחרה קלה ונושמת, ומונופילמנט עמיד עם תנועת שיער חופשית.' },
              { title: 'גוון וצפיפות', text: 'התאמת צבע מדויקת לשיער שלך, כולל שורשים והבהרות, וצפיפות שלא "מכבידה" על השיער הטבעי.' },
              { title: 'אורך ומרקם', text: 'שיער אנושי 100% שאפשר לגזור, לצבוע, להחליק ולסלסל – בדיוק כמו השיער שלך.' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">טופר לנשים, כיפת שיער או פאה?</h3>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              כשהדלילות ממוקדת בשביל ובקודקוד ויש מספיק שיער טבעי לחבר אליו את הקליפסים, טופר הוא הבחירה
              הטבעית והמשתלמת ביותר. כשהדלילות מתפשטת לאזורים רחבים יותר, כדאי להכיר את{' '}
              <a href="/kipot-sear" className="text-navy-900 font-semibold underline hover:text-gold-600">כיפות שיער לנשים</a>,
              ולכיסוי מלא של הקרקפת –{' '}
              <a href="/custom-wigs" className="text-navy-900 font-semibold underline hover:text-gold-600">פאה בהתאמה אישית</a>.
              אם השיער שלך דליל במיוחד, ריכזנו מידע ייעודי בדף{' '}
              <a href="/hair-toppers-thin-hair" className="text-navy-900 font-semibold underline hover:text-gold-600">טופר לשיער דליל</a>.
            </p>
            <p>
              לא בטוחה מה מתאים לך? כל הסוגים מרוכזים בדף{' '}
              <a href="/hair-units" className="text-navy-900 font-semibold underline hover:text-gold-600">יחידות שיער לנשים</a>,
              ובייעוץ חינם בחדר פרטי נבדוק יחד את השיער ונמליץ על הפתרון המדויק.
            </p>
          </div>
        </div>
      </section>

      <HairUnitsCallout unitName="טופר שיער" />

      <ServiceFAQ faqs={faqs} subtitle="כל מה שצריך לדעת על טופר לשיער נשים" />

      <ServiceCTA
        title="מצאי את טופר השיער המושלם לך"
        subtitle="קבעו ייעוץ חינם ותחוו את ההבדל שטופר שיער מותאם אישית יכול לעשות. סביבה פרטית, ללא התחייבות."
        ctaText="קביעת ייעוץ לטופר"
      />

      <RelatedServices exclude="/hair-toppers" />

      </main>
      <Footer />
    </>
  );
}
