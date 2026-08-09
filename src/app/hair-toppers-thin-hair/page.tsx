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
  title: 'טופר לשיער דליל נס ציונה – כיסוי שביל וקודקוד | David Hair',
  description: 'טופרים מותאמים לשיער דליל בנס ציונה ולשביל מתרחב. כיסוי קל משקל וכמעט בלתי נראה שמחזיר נפח באופן טבעי. משרתות גם ראשון לציון ורחובות.',
  keywords: 'טופר לשיער דליל נס ציונה, כיסוי שביל ראשון לציון, שיער דליל נשים, נשירת שיער מרכז, טופר נפח, כיסוי קרקפת',
  alternates: {
    canonical: 'https://hairtoppersisrael.com/hair-toppers-thin-hair',
    languages: { 'he-IL': 'https://hairtoppersisrael.com/hair-toppers-thin-hair' },
  },
  openGraph: {
    title: 'טופר לשיער דליל נס ציונה – כיסוי שביל וקודקוד',
    description: 'טופרים מותאמים לשיער דליל בנס ציונה ולשביל מתרחב, עם כיסוי קל וכמעט בלתי נראה.',
    type: 'website',
    locale: 'he_IL',
    siteName: 'David Hair Solutions',
    url: 'https://hairtoppersisrael.com/hair-toppers-thin-hair',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'טופר לשיער דליל נס ציונה – כיסוי שביל וקודקוד',
    description: 'טופרים מותאמים לשיער דליל בנס ציונה ולשביל מתרחב, עם כיסוי קל וכמעט בלתי נראה.',
  },
};

const faqs = [
  {
    question: 'השיער שלי מאוד דליל — האם טופר עלול לפגוע בו?',
    answer: 'לא. הטופרים שלנו תוכננו במיוחד לשיער דליל ועדין. אנחנו משתמשות בקליפסים עדינים ובבסיסים קלי משקל, שאינם מושכים את השיער הטבעי שלך ואינם מפעילים עליו לחץ. למעשה, רבות מהלקוחות שלנו מגלות שהכיסוי של האזור הדליל אף מסייע להגן עליו מפני נזקי הסביבה.'
  },
  {
    question: 'כמה קטן יכול להיות טופר רק לאזור השביל?',
    answer: 'אנחנו מציעים טופרים קטנים במידות החל מ-5x8 ס"מ לכיסוי ממוקד של השביל. טופרי מיני כאלה יושבים ישירות על השביל המתרחב ומתחברים באמצעות 1–2 קליפסים בלבד. הם כמעט בלתי נראים, ולוקח שניות ספורות להצמיד אותם.'
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
  {
    question: 'מה ההבדל בין טופר לשיער דליל, פדחת וצמיד שיער?',
    answer: 'טופר לשיער דליל מיועד לכיסוי דלילות באזור השביל, הקודקוד והכתר — בדיוק במרכז הראש. פדחת מתמקדת בחזית ובקו השיער, ומתאימה למי שקו השיער נסוג או דליל בחלק הקדמי. צמיד שיער נועד בעיקר להוספת נפח ואורך, ומתאים פחות לכיסוי דלילות מקומית. בייעוץ אנחנו בוחנות את סוג הדלילות וממליצות על הפתרון המדויק — לעיתים שילוב של כמה פתרונות.'
  },
  {
    question: 'מתי לבחור טופר ומתי פדחת?',
    answer: 'הכלל הפשוט: אם הדלילות שלך במרכז הראש — בשביל, בקודקוד או בכתר — טופר הוא הבחירה הנכונה. אם הדלילות בחזית או שקו השיער נסוג, פדחת תיתן כיסוי טבעי יותר דווקא באזור הזה. אם יש דלילות גם במרכז וגם בחזית, אפשר לשלב. נשמח לעזור לך להחליט בייעוץ החינמי.'
  },
];

export default function ThinHairToppersPage() {
  return (
    <>
      <Header />
      <ServiceReviewSchema
        serviceName="טופר לשיער דליל"
        serviceUrl="https://hairtoppersisrael.com/hair-toppers-thin-hair"
      />
      <BreadcrumbHero 
        title="טופרים לשיער דליל"
        subtitle="כיסוי שביל וקודקוד בטבעיות מלאה"
        pathname="/hair-toppers-thin-hair"
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
          { title: 'כיסוי מתקדם', description: 'התחילו עם טופר קטן והתאימו עם הזמן בהתאם לצרכים. אנחנו מציעים מסלולי שדרוג נוחים ככל שצרכי הכיסוי משתנים.' },
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

      {/* טבלת השוואה: טופר מול פדחת מול צמיד */}
      <section className="py-16 sm:py-20 bg-gray-50" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
            טופר לשיער דליל מול פדחת מול צמיד
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            שלושה פתרונות שונים לשיער דליל — לכל אחד יתרונות משלו. השוו ביניהם וגלו מה מתאים לכם.
          </p>
          <div className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 overflow-x-auto">
            <table className="w-full text-right min-w-[640px]">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="px-6 py-4 font-semibold">תכונה</th>
                  <th className="px-6 py-4 font-semibold text-center">טופר לשיער דליל</th>
                  <th className="px-6 py-4 font-semibold text-center">פדחת</th>
                  <th className="px-6 py-4 font-semibold text-center">צמיד שיער</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">אזור כיסוי עיקרי</td>
                  <td className="px-6 py-4 text-center text-gray-700">שביל, קודקוד וכתר</td>
                  <td className="px-6 py-4 text-center text-gray-700">חזית וקו השיער</td>
                  <td className="px-6 py-4 text-center text-gray-700">נפח והוספת אורך</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">מתאים לשיער דליל</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">מצוין</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">מצוין</td>
                  <td className="px-6 py-4 text-center text-yellow-500">בינוני</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">כיסוי שביל מתרחב</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-yellow-500">חלקי</td>
                  <td className="px-6 py-4 text-center text-red-500 font-bold">✗</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">קל משקל ונושם</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">הרכבה עצמית קלה</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-yellow-500">בעזרה</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">שומר על השיער הטבעי</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">מתאים במיוחד ל…</td>
                  <td className="px-6 py-4 text-center text-gray-700">דלילות בשביל ובקודקוד</td>
                  <td className="px-6 py-4 text-center text-gray-700">קו שיער נסוג בחזית</td>
                  <td className="px-6 py-4 text-center text-gray-700">מי שרוצה נפח ואורך</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center flex flex-wrap justify-center gap-4">
            <a href="/padachat" className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-gold-600 transition-colors">
              קראו עוד על פדחת לשיער ←
            </a>
            <a href="/tzamidei-sear" className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-gold-600 transition-colors">
              קראו עוד על צמידי שיער ←
            </a>
          </div>
        </div>
      </section>

      {/* מי מתאים/ה לטופר לשיער דליל */}
      <section className="py-16 sm:py-20 bg-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-gold-600 font-semibold mb-3">התאמה אישית</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              מי מתאים/ה לטופר לשיער דליל?
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              טופר לשיער דליל הוא הפתרון האידיאלי במגוון מצבים. אם אחד מהם מתאר אתכם — כדאי לבוא לייעוץ.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '🎯', title: 'שביל מתרחב', text: 'מבחינים שהשביל נראה רחב יותר או שהקרקפת מציצה — טופר מכסה בדיוק את האזור הזה.' },
              { icon: '👑', title: 'דלילות בקודקוד ובכתר', text: 'איבוד נפח באזור העליון של הראש שגורם לשיער להיראות שטוח — טופר מחזיר נפח מיידי.' },
              { icon: '🌸', title: 'שינויים הורמונליים', text: 'דלילות אחרי לידה, בגיל המעבר או עקב שינויים הורמונליים — פתרון עדין ולא פולשני.' },
              { icon: '💊', title: 'נשירה עונתית או רפואית', text: 'שיער שנעשה דליל זמנית — טופר מספק כיסוי מלא בזמן שהשיער הטבעי מתאושש.' },
              { icon: '💪', title: 'רוצה נפח בלי מחויבות', text: 'עדיין יש לכן רוב השיער ורק רוצות תוספת נפח וכיסוי — בלי דבק, בלי ניתוח ובלי נזק.' },
              { icon: '⏱️', title: 'מחפשת פתרון מהיר', text: 'רוצות תוצאה טבעית תוך פחות משעה, שאפשר להרכיב ולהסיר לבד בכל בוקר.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-gold-300 hover:shadow-md transition-all">
                <div className="text-3xl shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-10 max-w-2xl mx-auto">
            לא בטוחות אם טופר הוא הפתרון הנכון? בייעוץ החינמי נבחן יחד את סוג הדלילות ונמליץ על הפתרון המדויק עבורכן.
          </p>
        </div>
      </section>

      <ServiceFAQ faqs={faqs} subtitle="שאלות נפוצות על טופרים לשיער דליל" />

      <ServiceCTA
        title="עשו את הצעד הראשון"
        subtitle="שיער דליל לא חייב להגדיר את המראה שלכם. קבעו ייעוץ חינם וגלו איך טופר מותאם אישית יכול לשנות את תחושת הביטחון שלכם."
        ctaText="ייעוץ לשיער דליל"
      />

      <RelatedServices exclude="/hair-toppers-thin-hair" />

      </main>
      <Footer />
    </>
  );
}
