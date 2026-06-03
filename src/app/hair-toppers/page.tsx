import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbHero from '@/components/BreadcrumbHero';
import ServiceHero from '@/components/ServiceHero';
import ServiceDetailSection from '@/components/ServiceDetailSection';
import ServiceCTA from '@/components/ServiceCTA';
import ServiceFAQ from '@/components/ServiceFAQ';
import RelatedServices from '@/components/RelatedServices';

export const metadata: Metadata = {
  title: 'טופר שיער נס ציונה – כיסוי שביל וקודקוד | David Hair',
  description: 'טופרי שיער בנס ציונה לכיסוי הקודקוד והשביל במראה טבעי. קלים, דיסקרטיים ובהתאמה אישית בחדר פרטי. משרתות גם ראשון לציון ורחובות. קביעת ייעוץ ללא התחייבות.',
  keywords: 'טופר שיער נס ציונה, טופר שיער ראשון לציון, טופר לשיער דליל, כיסוי שביל נס ציונה, טופר שיער טבעי, נפח לשיער, hair toppers israel',
  alternates: {
    canonical: 'https://hairtoppersisrael.com/hair-toppers',
    languages: { 'he-IL': 'https://hairtoppersisrael.com/hair-toppers' },
  },
  openGraph: {
    title: 'טופר שיער נס ציונה – כיסוי שביל וקודקוד | David Hair',
    description: 'טופרי שיער בנס ציונה לכיסוי הקודקוד והשביל במראה טבעי, עם התאמה אישית בחדר פרטי.',
    type: 'website',
    locale: 'he_IL',
  },
};

const faqs = [
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
    answer: 'כן. אנחנו מבצעות ניתוח צבע מפורט במהלך ההתאמה כדי להתאים את הטופר בדיוק לגוון הטבעי שלך. אנחנו גם יכולות לצבוע את הפריט בסלון שלנו להתאמה מדויקת, כולל גוונים והבהרות.'
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
      <BreadcrumbHero 
        title="טופרי שיער"
        subtitle="כיסוי ונפח טבעיים בהתאמה אישית"
      />
      <main>

      <ServiceHero
        badge="הפתרון הפופולרי ביותר"
        title="טופרי שיער"
        titleAccent="במראה טבעי לחלוטין"
        subtitle="טופרים קלים ונושמים שמתחברים לשיער הטבעי שלך ומעניקים נפח, כיסוי וביטחון מיידי. שיער טבעי 100% והתאמה אישית בסביבה פרטית."
        features={['שיער אנושי אמיתי', 'הצמדה בקליפסים', 'התאמת צבע מושלמת', 'אחריות כלולה']}
      />

      <ServiceDetailSection
        eyebrow="הבחירה הטבעית"
        title="למה טופר שיער הוא הפתרון מספר 1 לשיער דליל"
        description="טופר שיער הוא הדרך הטבעית והלא פולשנית ביותר להחזיר נפח וכיסוי. בניגוד לפאה מלאה, הוא משתלב עם השיער שלך — כך שרק את יודעת שהוא שם."
        benefits={[
          { title: 'שילוב חלק', description: 'מתחבר ישירות לשיער הקיים שלך, ויוצר מעבר בלתי נראה בין הטופר לצמיחה הטבעית.' },
          { title: 'נוחות קלת משקל', description: 'בסיסי רשת נושמים שתוכננו ללבישה כל היום ללא לחץ, חום או אי-נוחות על הקרקפת.' },
          { title: 'אפשרויות כיסוי מגוונות', description: 'מקליפסים קטנים לכיסוי שביל ועד יחידות גדולות יותר לאזורים רחבים — אנחנו מתאימות את הגודל המדויק לצרכים שלך.' },
          { title: 'חופש עיצוב', description: 'סלסול, החלקה, ייבוש — שיער אנושי אמיתי מאפשר אפשרויות עיצוב ללא הגבלה, עם תנועה וברק טבעיים.' },
        ]}
        imagePlaceholder="💇‍♀️"
      />

      <ServiceDetailSection
        eyebrow="התהליך"
        title="חווית ההתאמה האישית שלך"
        description="כל התאמה היא חוויה אישית בחדר הייעוץ הפרטי שלנו. מהתאמת צבע ועד עיצוב סופי, אנחנו מטפלות בכל פרט."
        benefits={[
          { title: 'ייעוץ פרטי', description: 'אנחנו דנות במטרות שלך, מנתחות את השיער, וממליצות על סוג וגודל הטופר האידיאלי בסביבה חסויה.' },
          { title: 'התאמת צבע מדויקת', description: 'המומחיות שלנו מתאימות או משלבות צבעים לגוון המדויק שלך — כולל שורשים, הבהרות ווריאציות טבעיות.' },
          { title: 'התאמה מאובטחת', description: 'אנחנו ממקמות ומצמידות את הטופר לנוחות ואבטחה מקסימלית, ומכווננות עד שההתאמה מושלמת.' },
          { title: 'עיצוב מקצועי', description: 'צוות הסלון שלנו גוזר ומשלב את הטופר עם השיער הטבעי שלך למראה חלק וכמעט בלתי ניתן לזיהוי.' },
        ]}
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

      <ServiceFAQ faqs={faqs} subtitle="כל מה שצריך לדעת על טופרי שיער" />

      <ServiceCTA
        title="מצאי את הטופר המושלם שלך"
        subtitle="קבעי ייעוץ חינם וחווי את ההבדל שטופר שיער מותאם אישית יכול לעשות. סביבה פרטית, ללא התחייבות."
        ctaText="קביעת ייעוץ לטופר"
      />

      <RelatedServices exclude="/hair-toppers" />

      </main>
      <Footer />
    </>
  );
}
