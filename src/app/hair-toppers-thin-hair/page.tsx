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
  title: 'טופר שיער לשיער דליל – כיסוי שביל וקודקוד | David Hair',
  description: 'טופרים מותאמים לשיער דליל ולשביל מתרחב. כיסוי קל משקל וכמעט בלתי נראה שמחזיר נפח באופן טבעי. קביעת ייעוץ ללא התחייבות.',
  keywords: 'טופר לשיער דליל, כיסוי שביל, שיער דליל נשים, נשירת שיער, טופר נפח, כיסוי קרקפת',
  openGraph: {
    title: 'טופר שיער לשיער דליל – כיסוי שביל וקודקוד',
    description: 'טופרים מותאמים לשיער דליל ולשביל מתרחב, עם כיסוי קל וכמעט בלתי נראה.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'השיער שלי מאוד דליל — האם טופר עלול לפגוע בו?',
    answer: 'לא. הטופרים שלנו תוכננו במיוחד לשיער דליל ועדין. אנחנו משתמשות בקליפסים עדינים ובבסיסים קלי משקל, שאינם מושכים את השיער הטבעי שלך ואינם מפעילים עליו לחץ. למעשה, רבות מהלקוחות שלנו מגלות שהכיסוי של האזור הדליל אף מסייע להגן עליו מפני נזקי הסביבה.'
  },
  {
    question: 'כמה קטן יכול להיות טופר רק לאזור השביל?',
    answer: 'אנחנו מציעות טופרים קטנים במידות החל מ-5x8 ס"מ לכיסוי ממוקד של השביל. טופרי מיני כאלה יושבים ישירות על השביל המתרחב ומתחברים באמצעות 1–2 קליפסים בלבד. הם כמעט בלתי נראים, ולוקח שניות ספורות להצמיד אותם.'
  },
  {
    question: 'אפשר ללבוש טופר אם עדיין יש לי רוב השיער?',
    answer: 'בהחלט! הרבה מהלקוחות שלנו חוות דלילות באזורים ספציפיים אבל השיער שלהן בריא באופן כללי. טופר הוא אידיאלי כי הוא עובד עם השיער הקיים שלך — הוא לא מחליף אותו. את שומרת על השיער הטבעי שלך ופשוט מוסיפה נפח וכיסוי היכן שצריך.'
  },
  {
    question: 'איך אדע אם אני צריכה טופר או פאה?',
    answer: 'אם הדלילות שלך מקומית (קודקוד, שביל, כתר) ועדיין יש לך שיער מסביב לקו המתאר, טופר הוא בדרך כלל הבחירה הטובה ביותר. אם הדלילות נרחבת יותר, פאה מלאה עשויה להתאים יותר. נעזור לך להחליט במהלך הייעוץ החינמי.'
  },
  {
    question: 'האם אנשים ישימו לב שאני לובשת טופר?',
    answer: 'כשטופר מותאם ומשולב כמו שצריך, הוא לחלוטין בלתי ניתן לזיהוי — גם לאנשים שעומדים ממש לידך. התאמת הצבע המדויקת, הגזירה המקצועית וטכניקות השילוב שלנו מבטיחות שהמעבר מהטופר לשיער הטבעי הוא בלתי נראה.'
  },
  {
    question: 'איך מטפלים בטופר בבית?',
    answer: 'אנחנו מספקות ערכת טיפול מלאה והדרכה. באופן כללי, שוטפים את הטופר 1-2 פעמים בשבוע עם מוצרים ללא סולפטים, מייבשים באוויר ושומרים על מעמד ייעודי. אנחנו גם מציעות שירותי שטיפה ועיצוב מקצועיים בסלון לתחזוקה מעמיקה.'
  },
];

export default function ThinHairToppersPage() {
  return (
    <>
      <Header />
      <BreadcrumbHero 
        title="טופרים לשיער דליל"
        subtitle="כיסוי שביל וקודקוד בטבעיות מלאה"
      />
      <main>

      <ServiceHero
        badge="פתרון ייעודי"
        title="טופרים לשיער דליל"
        titleAccent="וכיסוי שביל"
        subtitle="מתמודדת עם שביל מתרחב או קרקפת נראית? הטופרים הקלים במיוחד שלנו מוסיפים נפח טבעי בדיוק היכן שצריך — בלי שאף אחד ידע."
        features={['כיסוי שביל', 'קל משקל במיוחד', 'עדין לשיער דליל', 'שילוב בלתי נראה']}
      />

      <ServiceDetailSection
        eyebrow="מותאם לשיער דליל"
        title="כיסוי בדיוק היכן שצריך"
        description="שיער דליל מתחיל לרוב באזור השביל והכתר. הטופרים המתמחים שלנו נבנו בדיוק לאזורים אלה — כיסוי שנראה ומרגיש טבעי לחלוטין."
        benefits={[
          { title: 'טופרים מיני לשביל', description: 'חתיכות קטנות וממוקדות (החל מ-5x8 ס"מ) שמכסות שביל מתרחב ללא מגושמות. בלתי נראות גם מקרוב.' },
          { title: 'בסיסים דמויי קרקפת', description: 'בסיסי משי ותחרה שמחקים את מראה הקרקפת הטבעית, כך שגם אם מישהו מסתכל ישירות על השביל שלך — הוא רואה עור, לא בד.' },
          { title: 'מבנה נוצה', description: 'תוכנן במיוחד לשיער דליל ועדין. ללא משיכה, ללא לחץ, ללא נזק לשיער הקיים.' },
          { title: 'כיסוי מתקדם', description: 'התחילי עם טופר קטן והתאימי עם הזמן בהתאם לצרכים. אנחנו מציעות מסלולי שדרוג נוחים ככל שצרכי הכיסוי משתנים.' },
        ]}
        imagePlaceholder="🔍"
      />

      <ServiceDetailSection
        eyebrow="תוצאות אמיתיות"
        title="לפני ואחרי: שינויים בשיער דליל"
        description="ראי איך הלקוחות שלנו עברו מקרקפת נראית ושביל דליל לשיער מלא ונפחי בפגישה אחת."
        benefits={[
          { title: 'נפח מיידי', description: 'משיער שטוח ודליל לנפח מלא בפחות משעה. ללא ניתוח, ללא כימיקלים, ללא זמן החלמה.' },
          { title: 'תנועה טבעית', description: 'שיער אנושי 100% שמתנועע, קופץ וזורם בדיוק כמו שלך. עצבי אותו איך שתרצי.' },
          { title: 'ביטחון מחודש', description: 'לקוחות מספרות לנו שהשינוי הגדול הוא לא בשיער — אלא בחופש להפסיק לדאוג איך הן נראות.' },
          { title: 'נוחות כל היום', description: 'עיצוב נושם וקל משקל שגורם לך לשכוח שאת לובשת אותו. גם במזג אוויר חם.' },
        ]}
        imagePlaceholder="✨"
        reversed
      />

      {/* טבלת השוואה */}
      <section className="py-16 sm:py-20 bg-gray-50" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            השוואה בין טופר לפתרונות אחרים
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <table className="w-full text-right">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="px-6 py-4 font-semibold">תכונה</th>
                  <th className="px-6 py-4 font-semibold text-center">טופר</th>
                  <th className="px-6 py-4 font-semibold text-center">פאה מלאה</th>
                  <th className="px-6 py-4 font-semibold text-center">תוספות שיער</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">כיסוי שביל</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-red-500 font-bold">✗</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">שומר על השיער הטבעי</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-red-500 font-bold">✗</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">קל משקל</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-yellow-500">משתנה</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">הרכבה יומית קלה</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-red-500 font-bold">✗</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">ללא נזק לשיער</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-red-500 font-bold">✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ServiceFAQ faqs={faqs} subtitle="שאלות נפוצות על טופרים לשיער דליל" />

      <ServiceCTA
        title="עשי את הצעד הראשון"
        subtitle="שיער דליל לא חייב להגדיר את המראה שלך. קבעי ייעוץ חינם וגלי איך טופר מותאם אישית יכול לשנות את תחושת הביטחון שלך."
        ctaText="ייעוץ לשיער דליל"
      />

      <RelatedServices exclude="/hair-toppers-thin-hair" />

      </main>
      <Footer />
    </>
  );
}
