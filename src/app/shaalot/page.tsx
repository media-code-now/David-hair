import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'שאלות ותשובות – טופרים, פאות ושיער דליל | David Hair Solutions',
  description:
    'תשובות ישירות לכל השאלות: מה זה טופר שיער, ההבדל בין טופר לפאה, כמה עולה, כמה זמן מחזיק, איך לטפל, מה מתאים אחרי כימותרפיה ועוד.',
  keywords:
    'מה זה טופר שיער, הבדל בין טופר לפאה, כמה עולה טופר שיער, פאה אחרי כימותרפיה, טופר לאלופציה, שיער אנושי רמי, בסיס לייס לעומת סילק, טיפול בטופר שיער',
  alternates: {
    canonical: 'https://hairtoppersisrael.com/shaalot',
    languages: { 'he-IL': 'https://hairtoppersisrael.com/shaalot' },
  },
  openGraph: {
    title: 'שאלות ותשובות – טופרים ופאות | David Hair Solutions',
    description:
      'מדריך מקיף: כל מה שצריך לדעת על טופרים, פאות ופתרונות לשיער דליל – תשובות ישירות מהמומחות.',
    type: 'article',
    locale: 'he_IL',
    siteName: 'David Hair Solutions',
    url: 'https://hairtoppersisrael.com/shaalot',
    images: [{ url: 'https://hairtoppersisrael.com/og-image.jpg', width: 1200, height: 630 }],
  },
};

// ─── Schema data ────────────────────────────────────────────────────────────

const ALL_FAQS = [
  // Definitions
  {
    q: 'מה זה טופר שיער?',
    a: 'טופר שיער (Hair Topper) הוא יחידת שיער חלקית המכסה אזור ספציפי של דלדול או נשירה – בדרך כלל הקדקוד, הקו האמצעי או הפדחת. בניגוד לפאה מלאה, הטופר מחובר לשיער הטבעי הקיים באמצעות קליפסים ומיועד לנשים עם נשירה חלקית עד בינונית. הוא מעניק נפח, כיסוי ומראה טבעי מלא.',
  },
  {
    q: 'מה ההבדל בין טופר שיער לפאה?',
    a: 'טופר מכסה חלק מהראש (קדקוד, פדחת, קו אמצעי) ומשתלב עם השיער הטבעי הקיים. פאה מלאה מכסה את כל הראש ומיועדת לנשירה נרחבת יותר. טופר מתאים לנשירה חלקית עד בינונית; פאה מתאימה לנשירה כוללת או כמעט-כוללת. בייעוץ אצלנו נבדוק יחד מה מתאים למצב הספציפי שלך.',
  },
  {
    q: 'מה זה שיער רמי (Remy Hair)?',
    a: 'שיער רמי הוא שיער אנושי 100% שבו כל הקוטיקולות מיושרות באותו כיוון. זה מונע סבכים, מעניק מראה טבעי וזורם, ומאפשר צביעה, סלסול והחלקה כמו שיער אמיתי. הוא הסטנדרט הגבוה ביותר בתעשיית טופרים ופאות, ובו משתמשים ב-David Hair Solutions.',
  },
  {
    q: 'מה ההבדל בין בסיס לייס לבסיס סילק?',
    a: 'בסיס לייס (Lace) עשוי מרשת דקה ושקופה שיוצרת מראה הירלין טבעי ושביל ריאליסטי – אידיאלי לקדקוד. בסיס סילק (Silk) מחקה את מראה הקרקפת ממש ומתאים במיוחד לנשים עם עור רגיש. בייעוץ אצלנו נבחר יחד מה מתאים לסוג השיער, לצרכים ולאורח החיים.',
  },
  // Fitting & Purchase
  {
    q: 'כמה עולה טופר שיער בישראל?',
    a: 'טופרים ב-David Hair Solutions מתחילים מ-₪650 לטופר מוכן. פאות מותאמות אישית מתחילות מ-₪890. המחיר הסופי תלוי באיכות השיער, גודל הבסיס ורמת ההתאמה הנדרשת. ייעוץ ראשוני חינם ללא התחייבות.',
  },
  {
    q: 'כמה זמן לוקח התהליך מייעוץ עד מוצר מוכן?',
    a: 'ייעוץ ראשוני אורך כשעה. עבור טופרים ופאות מוכנות, ההתאמה מתבצעת בדרך כלל באותו שבוע. מוצר בהתאמה אישית מלאה לוקח בין 2 ל-4 שבועות ממועד ההזמנה.',
  },
  {
    q: 'האם ניתן להזמין לפי מידות ומפרט אישי?',
    a: 'כן. אנחנו מציעות טופרים ופאות בהתאמה אישית מלאה – לפי מידת הראש, צבע ומרקם השיער, גודל הבסיס וסוג ההתקה. תהליך ההתאמה כולל מדידה, בחירת צבע ממוחשבת והתאמת גזירה בסלון.',
  },
  {
    q: 'האם יש שירות ואחריות לאחר הרכישה?',
    a: 'כן. כל לקוחה מקבלת הדרכה מלאה לתחזוקה ביתית. אנחנו מציעות ביקורות תקופתיות בסלון, תיקוני קליפסים, גזירה קלה ורענון מקצועי. השירות לאחר הרכישה הוא חלק בלתי-נפרד מהחוויה שלנו.',
  },
  // Use & Care
  {
    q: 'כמה זמן מחזיק טופר שיער איכותי?',
    a: 'טופר או פאה משיער רמי אנושי איכותי מחזיקים בממוצע בין שנה לשנתיים. עם תחזוקה נכונה – שטיפה עדינה, ייבוש מתאים ואחסון על סטנד – ניתן להאריך את חיי המוצר משמעותית.',
  },
  {
    q: 'האם אפשר לצבוע, לסלסל ולהחליק טופר שיער?',
    a: 'כן – טופרים ופאות משיער אנושי טבעי ניתנים לצביעה, החלקה, סלסול ועיצוב בחום בדיוק כמו שיער רגיל. הטיפולים מבוצעים אצלנו בסלון על ידי מומחיות שיער.',
  },
  {
    q: 'האם ניתן לשחות עם טופר שיער?',
    a: 'מומלץ להסיר את הטופר לפני שחייה, שכן מים מלוחים ומכלוריים עלולים לפגוע בשיער ובקליפסים לאורך זמן. לפעילויות אינטנסיביות יותר קיימות אפשרויות חיבור חזקות יותר – נדון בכך בייעוץ.',
  },
  {
    q: 'האם מומלץ לישון עם טופר שיער?',
    a: 'מומלץ להסיר את הטופר לפני שינה כדי למנוע שפשוף ולהאריך את חיי המוצר. יש לאחסן על סטנד ייעודי. נשים שמעדיפות לישון עם הטופר יכולות לקשור את השיער קלות – נדריך בייעוץ.',
  },
  // Medical
  {
    q: 'מה מתאים לנשים אחרי כימותרפיה?',
    a: 'לאחר כימותרפיה מומלצת פאה רפואית מלאה עשויה שיער אנושי רמי, עם בסיס רך וגמיש שלא מגרה את הקרקפת הרגישה. אנחנו מציעות פאות רפואיות עם התאמה מלאה בחדר פרטי, ברגישות ובסבלנות.',
  },
  {
    q: 'האם טופר מתאים לאלופציה?',
    a: 'תלוי בסוג האלופציה. אלופציה ארריאטה (כתמים) יכולה להיפתר עם טופר אם נשאר שיער בשאר הראש. אלופציה טוטאלית (נשירה מלאה) דורשת פאה מלאה. בייעוץ נבחן יחד את המצב ונמליץ על הפתרון הנכון.',
  },
  {
    q: 'האם קופות חולים מכסות עלות פאה רפואית?',
    a: 'חלק מהמצבים הרפואיים (כמו נשירה הנובעת מכימותרפיה) עשויים לזכות בהחזר חלקי מקופת חולים. מומלץ לפנות לקופה שלך עם מכתב מרופא לפני הרכישה. אנחנו יכולות לסייע בתהליך.',
  },
  {
    q: 'האם הטופר מתאים לנשים עם עור ראש רגיש?',
    a: 'כן. אנחנו בוחרות בסיסים מיוחדים (סילק, מונו) לנשים עם עור ראש רגיש, אלרגיות או לאחר טיפולים רפואיים. כל הקליפסים מרופדים ובחומרים ידידותיים לעור.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'he-IL',
  mainEntity: ALL_FAQS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const glossaryTerms = [
  {
    name: 'טופר שיער (Hair Topper)',
    description:
      'יחידת שיער חלקית המכסה אזורי דלדול ספציפיים (קדקוד, פדחת, שביל) תוך שילוב עם השיער הטבעי הקיים. מחובר בקליפסים. מיועד לנשירה חלקית.',
  },
  {
    name: 'פאה רפואית',
    description:
      'פאה מיועדת לנשים במצבים רפואיים (כימותרפיה, אלופציה). בנויה מבסיס רך, חומרים היפואלרגניים ומותאמת לעור קרקפת רגיש.',
  },
  {
    name: 'שיער רמי (Remy Hair)',
    description:
      'שיער אנושי 100% שבו כל הקוטיקולות מיושרות בכיוון אחד. מונע סבכים, מעניק מראה טבעי ומאפשר עיצוב בחום, צביעה וסלסול.',
  },
  {
    name: 'בסיס לייס (Lace Base)',
    description:
      'רשת דקה ושקופה המשמשת כבסיס לטופר או פאה. יוצרת מראה הירלין טבעי ביותר ושביל ריאליסטי לאורך הקדקוד.',
  },
];

const glossarySchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'מילון מונחי טופרים ופתרונות שיער',
  url: 'https://hairtoppersisrael.com/shaalot#glossary',
  inLanguage: 'he-IL',
  hasDefinedTerm: glossaryTerms.map((t) => ({
    '@type': 'DefinedTerm',
    name: t.name,
    description: t.description,
    inDefinedTermSet: 'https://hairtoppersisrael.com/shaalot#glossary',
  })),
};

const careHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'איך לטפל בטופר שיער – שמירה לאורך זמן',
  description: 'מדריך שלב-שלב לניקוי, ייבוש ואחסון נכון של טופר שיער אנושי להארכת חיי המוצר.',
  inLanguage: 'he-IL',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'שטיפה עדינה',
      text: 'שטפו את הטופר במים קרירים עם שמפו ייעודי לשיער רמי. אין לשפשף – עסו בתנועות עדינות מלמעלה למטה בלבד.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'מרכך ולחות',
      text: 'מרחו מרכך ייעודי לשיער רמי, הניחו לדקה-שתיים ושטפו במים קרירים.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'ייבוש נכון',
      text: 'לחצו (אל תשפשפו) במגבת מיקרופייבר עדינה. ייבשו בחום נמוך בלבד, או השאירו לייבוש טבעי על סטנד.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'אחסון נכון',
      text: 'אחסנו את הטופר על סטנד ייעודי (wig stand) כדי לשמור על הצורה. אם אחסנים בקופסה, השתמשו ב-hairnet.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'ביקורת תקופתית בסלון',
      text: 'הגיעו לסלון David Hair Solutions אחת לחודש-חודשיים לבדיקה, גזירה קלה ורענון מקצועי.',
    },
  ],
  supply: [
    { '@type': 'HowToSupply', name: 'שמפו לשיער רמי' },
    { '@type': 'HowToSupply', name: 'מרכך לשיער רמי' },
    { '@type': 'HowToSupply', name: 'מגבת מיקרופייבר' },
    { '@type': 'HowToSupply', name: 'סטנד לפאה (Wig Stand)' },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'דף הבית', item: 'https://hairtoppersisrael.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'שאלות ותשובות',
      item: 'https://hairtoppersisrael.com/shaalot',
    },
  ],
};

// ─── Page sections ───────────────────────────────────────────────────────────

const categories = [
  {
    id: 'definitions',
    title: 'הגדרות ובסיסות',
    faqs: ALL_FAQS.slice(0, 4),
  },
  {
    id: 'purchase',
    title: 'התאמה ורכישה',
    faqs: ALL_FAQS.slice(4, 8),
  },
  {
    id: 'care',
    title: 'שימוש ותחזוקה',
    faqs: ALL_FAQS.slice(8, 12),
  },
  {
    id: 'medical',
    title: 'שימוש רפואי ומצבים מיוחדים',
    faqs: ALL_FAQS.slice(12),
  },
];

const careSteps = [
  { n: '01', title: 'שטיפה עדינה', body: 'מים קרירים + שמפו לשיער רמי. עסו בעדינות מלמעלה למטה – אין לשפשף.' },
  { n: '02', title: 'מרכך', body: 'מרכך ייעודי לרמי למשך דקה-שתיים, ואז שטיפה קרה.' },
  { n: '03', title: 'ייבוש', body: 'לחצו במגבת מיקרופייבר ויבשו בחום נמוך, או השאירו לייבוש טבעי.' },
  { n: '04', title: 'אחסון', body: 'אחסנו על סטנד ייעודי לשמירת הצורה. בקופסה – השתמשו ב-hairnet.' },
  { n: '05', title: 'ביקורת בסלון', body: 'הגיעו אחת לחודש-חודשיים לרענון, גזירה קלה ובדיקת קליפסים.' },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ShaalotPage() {
  return (
    <>
      <Script
        id="shaalot-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="shaalot-glossary-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }}
      />
      <Script
        id="shaalot-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careHowToSchema) }}
      />
      <Script
        id="shaalot-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <main dir="rtl">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="pt-20 pb-12 bg-gradient-to-b from-navy-50/40 via-white to-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6" aria-label="breadcrumb">
              <Link href="/" className="hover:text-navy-700 transition-colors">דף הבית</Link>
              <span>/</span>
              <span className="text-gray-600 font-medium">שאלות ותשובות</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-gray-900 mb-4 tracking-tight leading-[1.2]">
              שאלות ותשובות על טופרים ופאות
            </h1>
            <p className="text-[17px] sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              מה זה טופר שיער, ההבדל בין טופר לפאה, מחירים, תחזוקה ומצבים רפואיים – תשובות ישירות לכל מה שחשוב לדעת לפני שמקבלים החלטה.
            </p>
          </div>
        </section>

        {/* ── FAQ Categories ─────────────────────────────────────── */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            {categories.map((cat) => (
              <div key={cat.id} id={cat.id}>
                <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100 tracking-tight">
                  {cat.title}
                </h2>
                <div className="space-y-3">
                  {cat.faqs.map((item, idx) => (
                    <details
                      key={idx}
                      className="group rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden hover:border-navy-300 transition-colors open:bg-white open:border-navy-200 open:shadow-sm"
                    >
                      <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none">
                        <span className="font-semibold text-gray-900 text-right leading-snug">{item.q}</span>
                        <span className="text-navy-600 text-lg flex-shrink-0 font-light">＋</span>
                      </summary>
                      <div className="px-6 pb-5 pt-1 text-gray-600 leading-relaxed text-right border-t border-gray-100">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Care HowTo ─────────────────────────────────────────── */}
        <section id="tiipul" className="py-14 bg-gradient-to-br from-navy-50/30 via-white to-gold-50/20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
              איך לטפל בטופר שיער – 5 שלבים לשמירה לאורך זמן
            </h2>
            <p className="text-gray-500 mb-8 text-[15px]">
              עם תחזוקה נכונה, טופר איכותי יחזיק שנה-שנתיים ויישאר במראהו הטבעי.
            </p>
            <ol className="space-y-4">
              {careSteps.map((step) => (
                <li key={step.n} className="flex gap-4 items-start bg-white rounded-2xl border border-gray-100 px-5 py-4 shadow-sm">
                  <span className="text-[13px] font-bold text-navy-600 bg-navy-50 rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {step.n}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-0.5">{step.title}</p>
                    <p className="text-gray-500 text-[14px] leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Glossary ───────────────────────────────────────────── */}
        <section id="glossary" className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">מילון מונחים</h2>
            <p className="text-gray-500 mb-8 text-[15px]">מונחים שחשוב להכיר לפני שבוחרים פתרון שיער.</p>
            <dl className="grid sm:grid-cols-2 gap-4">
              {glossaryTerms.map((term) => (
                <div key={term.name} className="bg-gray-50 rounded-2xl border border-gray-100 px-5 py-4">
                  <dt className="font-bold text-navy-900 mb-1 text-[15px]">{term.name}</dt>
                  <dd className="text-gray-600 text-[14px] leading-relaxed">{term.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────── */}
        <section className="py-14 bg-gradient-to-b from-white to-navy-50/30">
          <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
              עדיין יש לך שאלות?
            </h2>
            <p className="text-gray-500 mb-7 text-[16px]">
              הייעוץ הראשוני אצלנו חינם ללא התחייבות. נשמח לענות על כל שאלה ולמצוא יחד את הפתרון המתאים לך.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/book"
                className="px-8 py-4 rounded-2xl bg-gradient-to-b from-navy-800 to-navy-900 text-white hover:from-navy-700 hover:to-navy-800 transition-all duration-300 font-bold text-[17px] shadow-xl shadow-navy-900/20 active:scale-[0.97]"
              >
                ייעוץ חינם ללא התחייבות
              </Link>
              <a
                href="https://wa.me/972504001187"
                className="px-8 py-4 rounded-2xl bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all duration-300 font-semibold text-[17px] active:scale-[0.97]"
              >
                שאלה בוואטסאפ
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
