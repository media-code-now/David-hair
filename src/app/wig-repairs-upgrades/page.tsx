import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import ServiceDetailSection from '@/components/ServiceDetailSection';
import ServiceCTA from '@/components/ServiceCTA';
import ServiceFAQ from '@/components/ServiceFAQ';
import RelatedServices from '@/components/RelatedServices';

export const metadata: Metadata = {
  title: 'תיקון ושדרוג פאות וטופרים – חידוש מקצועי | David Hair',
  description: 'שירותי תיקון, חידוש ושדרוג מקצועיים לפאות וטופרים. פתיחת סבכים, החלפת רשת, צביעה מחדש והתאמת מידה. שחזור לכמו חדש.',
  keywords: 'תיקון פאה, חידוש פאה, שדרוג פאה, תיקון טופר, תחזוקת פאה, wig repair',
  openGraph: {
    title: 'תיקון ושדרוג פאות וטופרים – חידוש מקצועי',
    description: 'תיקון, חידוש ושדרוג מקצועיים לפאות וטופרים. שחזור לכמו חדש.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'אילו סוגי נזק אתם יכולים לתקן?',
    answer: 'אנחנו מטפלים כמעט בכל סוגי הנזק לפאות וטופרים: סבכים, נשירת שערות, רשתות שבורות, תחרה קרועה, כיפה מתוחה, צבע דהוי, שיער יבש/פגום, קליפסים שבורים ובעיות מבניות. אם הבסיס שלם, כמעט תמיד נוכל לשקם את הפריט.'
  },
  {
    question: 'כמה זמן לוקח תיקון?',
    answer: 'תיקונים פשוטים (החלפת קליפסים, פתיחת סבכים בסיסית, מרכך) לעיתים קרובות נעשים באותו היום. עבודות מורכבות יותר (החלפת רשת, צביעה מחדש, תיקון תחרה, שינוי מידה) לוקחות בדרך כלל 3-7 ימי עסקים. שירות מזורז זמין לצרכים דחופים.'
  },
  {
    question: 'האם כדאי לתקן או לקנות חדש?',
    answer: 'זה תלוי במצב הפריט ובתקציב שלך. במקרים רבים, שיקום מקצועי יכול להאריך את חיי הפריט ב-6-12 חודשים בחלק קטן מעלות ההחלפה. ניתן לך הערכה כנה במהלך הבדיקה — אם נחשוב שפריט חדש ישרת אותך טוב יותר, נגיד לך.'
  },
  {
    question: 'אפשר לשנות את הצבע של הפאה הקיימת שלי?',
    answer: 'כן, אם הפאה עשויה משיער אנושי אמיתי. אנחנו יכולות להכהות, להבהיר (בגבולות), להוסיף הבהרות או לשנות את הצבע לחלוטין. לפאות סינתטיות יש אפשרויות שינוי צבע מוגבלות, שנדון בהן במהלך הבדיקה.'
  },
  {
    question: 'אפשר לשנות את מידת הפאה שלי אם היא כבר לא מתאימה?',
    answer: 'בהחלט. בין אם הפאה נמתחה עם הזמן או שמידת הראש שלך השתנתה, אנחנו יכולות להקטין או להגדיל את הכיפה להתאמה מושלמת. אנחנו גם יכולות להוסיף או להחליף רצועות מתכווננות וגומיות לאבטחה טובה יותר.'
  },
  {
    question: 'אתם מטפלים בפאות שנרכשו במקום אחר?',
    answer: 'כן! אנחנו מטפלות ומתקנות פאות וטופרים ללא קשר למקום הרכישה. לצוות שלנו ניסיון עם כל המותגים וסוגי הבנייה המרכזיים. הביאי את הפריט להערכה חינמית.'
  },
];

export default function WigRepairsPage() {
  return (
    <>
      <Header />
      <main>

      <ServiceHero
        badge="שחזור וחידוש"
        title="תיקון ושדרוג"
        titleAccent="פאות וטופרים"
        subtitle="אל תחליפי — שקמי. שירותי תיקון, חידוש ושדרוג מקצועיים שמחזירים לפאה או לטופר שלך את החיים."
        features={['תיקונים פשוטים באותו היום', 'כל המותגים', 'רענון צבע', 'שינוי מידה']}
      />

      {/* רשת שירותים */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-navy-900 font-semibold text-sm uppercase tracking-wider mb-3">השירותים שלנו</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              תפריט תיקון ושדרוג מלא
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              מתיקונים מהירים ועד שיקום מלא — אנחנו מטפלות בהכל
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'מרכך עמוק ופתיחת סבכים',
                desc: 'טיפול ברמה מקצועית להחזרת רכות, ברק וסדר לשיער יבש ומסובך.',
                icon: '🧴',
                tag: 'תחזוקה'
              },
              {
                title: 'רענון צבע וצביעה מחדש',
                desc: 'שחזור צבע דהוי, הוספת הבהרות חדשות, או שינוי גוון מוחלט לשיער אנושי.',
                icon: '🎨',
                tag: 'צבע'
              },
              {
                title: 'תיקון רשת ותחרה',
                desc: 'תיקון תחרה קדמית קרועה, החלפת רשתות פגומות, ותיקון בעיות מבניות בכיפה.',
                icon: '🪡',
                tag: 'מבני'
              },
              {
                title: 'שינוי מידת כיפה',
                desc: 'הקטנה או הגדלה של הכיפה להתאמה מושלמת. החלפת גומיות, רצועות ואביזרי כיוונון.',
                icon: '📐',
                tag: 'התאמה'
              },
              {
                title: 'החלפת קליפסים ואביזרי הצמדה',
                desc: 'החלפת קליפסים, מסרקונים ומנגנוני הצמדה בלויים או שבורים באביזרים מקצועיים.',
                icon: '🔧',
                tag: 'תיקון מהיר'
              },
              {
                title: 'שיקום מלא',
                desc: 'חידוש מקיף: ניקוי עמוק, מרכך, תיקון, צביעה מחדש, עיצוב מחדש והתאמה. כמו פריט חדש.',
                icon: '✨',
                tag: 'פרימיום'
              },
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-navy-900 hover:shadow-lg transition group">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{service.icon}</span>
                  <span className="text-xs font-semibold text-navy-900 bg-navy-100 px-2 py-1 rounded-full">{service.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-navy-900 transition">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceDetailSection
        eyebrow="איך זה עובד"
        title="הביאי את הפריט, אנחנו נחזיר אותו לחיים"
        description="תהליך התיקון שלנו פשוט: הביאי את הפריט, קבלי הערכה כנה, ואנחנו נשקם אותו למצב הטוב ביותר שלו."
        benefits={[
          { title: 'הערכה חינמית', description: 'הביאי את הפאה או הטופר להערכה ללא עלות. נגיד לך בדיוק מה צריך לעשות ומה העלות — ללא הפתעות.' },
          { title: 'המלצה כנה', description: 'אם התיקון לא שווה את זה, נגיד לך. אנחנו מעדיפות לזכות באמון שלך בכנות מאשר למכור לך שירות שאת לא צריכה.' },
          { title: 'אומנות מיומנת', description: 'צוות התיקון שלנו עם שנות ניסיון בכל סוגי הבנייה. תיקונים ידניים, שחזור תחרה ועבודת צבע מדויקת.' },
          { title: 'בדיקת איכות ומסירה', description: 'כל תיקון עובר בדיקת איכות לפני ההחזרה. אנחנו מעצבות ומגישות אותו מוכן ללבישה.' },
        ]}
        imagePlaceholder="🔧"
      />

      <ServiceDetailSection
        eyebrow="שדרוגים"
        title="שדרגי את הפריט הקיים שלך"
        description="אוהבת את הפאה אבל רוצה משהו נוסף? אנחנו יכולות לשדרג פריטים קיימים עם תכונות חדשות, בנייה טובה יותר ושיפורים מודרניים."
        benefits={[
          { title: 'הוספת תחרה קדמית', description: 'שדרוג פאת רשת עם תחרה קדמית קשורה ביד לקו שיער טבעי יותר.' },
          { title: 'כיוונון צפיפות', description: 'עבה מדי? דליל מדי? אנחנו יכולות להוסיף או להוריד שיער כדי להגיע לצפיפות האידיאלית שלך.' },
          { title: 'שינוי סגנון', description: 'שני את התספורת, הוסיפי שכבות, עדכני את הצורה — הפכי את הפאה לסגנון חדש לגמרי.' },
          { title: 'שיפורי נוחות', description: 'הוספת בטנות רכות, שדרוג רצועות, שיפור אוורור — הפכי את הפריט הקיים לנוח יותר.' },
        ]}
        imagePlaceholder="⬆️"
        reversed
      />

      <ServiceFAQ faqs={faqs} subtitle="שאלות נפוצות על תיקון ושדרוג פאות" />

      <ServiceCTA
        title="תני לפריט שלך חיים חדשים"
        subtitle="הביאי את הפאה או הטופר להערכה חינמית. ניתן לך הערכה כנה ומחיר שקוף — ללא התחייבות."
        ctaText="קביעת הערכה חינמית"
      />

      <RelatedServices exclude="/wig-repairs-upgrades" />

      </main>
      <Footer />
    </>
  );
}
