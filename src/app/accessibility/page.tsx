import type { Metadata } from 'next';
import Link from 'next/link';
import { Accessibility, Check, Mail, Phone, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'הצהרת נגישות | David Hair Solutions',
  description:
    'הצהרת הנגישות של אתר David Hair Solutions – מחויבות לנגישות דיגיטלית לפי תקן ישראלי 5568 ותקן WCAG 2.0 ברמה AA, כלי נגישות באתר ודרכי פנייה לרכז הנגישות.',
  alternates: {
    canonical: 'https://hairtoppersisrael.com/accessibility',
    languages: { 'he-IL': 'https://hairtoppersisrael.com/accessibility' },
  },
  robots: { index: true, follow: true },
};

const features = [
  'תפריט נגישות צף הזמין מכל עמוד באתר, הנפתח בלחיצה על סמל הנגישות',
  'התאמת גודל הטקסט (הגדלה והקטנה) עד 160%',
  'גופן קריא וגופן ידידותי לדיסלקציה',
  'התאמת ריווח אותיות, גובה שורה ויישור טקסט',
  'הדגשת קישורים וכותרות לזיהוי מהיר',
  'מצבי ניגודיות: ניגודיות גבוהה, מצב כהה, היפוך צבעים וגווני אפור',
  'התאמת רוויית הצבעים באתר',
  'סמן עכבר מוגדל, קו קריאה ומסכת קריאה למיקוד',
  'עצירת אנימציות והסתרת תמונות',
  'הדגשת אלמנטים במעבר עכבר וסימון ברור של מיקוד המקלדת',
  'ניווט מלא באמצעות מקלדת ותמיכה בקוראי מסך',
  'שמירת העדפות הנגישות בדפדפן להמשך הגלישה',
];

export default function AccessibilityStatementPage() {
  return (
    <>
      <Header />
      <main dir="rtl" className="bg-gradient-to-b from-white to-navy-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          {/* Heading */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-navy-900 text-white mb-6 shadow-lg shadow-navy-900/25">
              <Accessibility size={30} aria-hidden="true" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight mb-4">
              הצהרת נגישות
            </h1>
            <p className="text-[17px] text-gray-500 leading-relaxed">
              אנו ב-David Hair Solutions רואים חשיבות רבה במתן שירות שוויוני לכלל הלקוחות, ופועלים
              להנגשת האתר כך שיהיה זמין ונוח לשימוש עבור אנשים עם מוגבלות.
            </p>
          </div>

          <div className="space-y-10">
            {/* Commitment */}
            <section className="glass-card rounded-[24px] p-7 sm:p-9">
              <h2 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                מחויבות לנגישות
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                אתר זה הונגש בהתאם להוראות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות
                לשירות), התשע&quot;ג-2013, ועומד ברמת ההנגשה של התקן הישראלי 5568 המבוסס על הנחיות
                הנגישות לתכני אינטרנט WCAG 2.0 ברמה AA, ככל שהדבר ניתן.
              </p>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-5 tracking-tight">
                אמצעי הנגישות באתר
              </h2>
              <ul className="space-y-3">
                {features.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-gray-600 leading-relaxed">
                    <span className="w-6 h-6 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={15} className="text-green-600" strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Limitations */}
            <section className="glass-card rounded-[24px] p-7 sm:p-9">
              <h2 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                החרגות ומגבלות
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                אנו משקיעים מאמצים מתמשכים לשפר את נגישות האתר. ייתכן שחלקים מסוימים באתר, ובכללם תכנים
                של צד שלישי המוטמעים באתר, טרם הונגשו במלואם או שיימצאו בהם ליקויים. אם נתקלתם בתוכן או
                ברכיב שאינו נגיש, נשמח שתפנו אלינו ונפעל לתקן זאת בהקדם.
              </p>
            </section>

            {/* Contact — accessibility coordinator */}
            <section className="rounded-[24px] p-7 sm:p-9 bg-navy-900 text-white">
              <h2 className="text-xl font-bold mb-2 tracking-tight">פנייה לרכז הנגישות</h2>
              <p className="text-white/70 leading-relaxed text-[15px] mb-6">
                נתקלתם בבעיית נגישות או שיש לכם הצעה לשיפור? נשמח לשמוע. ניתן לפנות אלינו בכל אחת מהדרכים
                הבאות:
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+972504001187"
                  className="flex items-center gap-3 text-[15px] font-semibold hover:text-gold-300 transition-colors"
                >
                  <Phone size={18} aria-hidden="true" className="text-gold-300" />
                  050-4001187
                </a>
                <a
                  href="https://wa.me/972504001187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[15px] font-semibold hover:text-gold-300 transition-colors"
                >
                  <MessageCircle size={18} aria-hidden="true" className="text-gold-300" />
                  וואטסאפ: 050-4001187
                </a>
                <a
                  href="mailto:info@hairtoppersisrael.com"
                  className="flex items-center gap-3 text-[15px] font-semibold hover:text-gold-300 transition-colors"
                >
                  <Mail size={18} aria-hidden="true" className="text-gold-300" />
                  info@hairtoppersisrael.com
                </a>
              </div>
            </section>

            {/* Updated date */}
            <p className="text-center text-[13px] text-gray-400">
              הצהרת הנגישות עודכנה לאחרונה בחודש יולי 2026.{' '}
              <Link href="/" className="text-navy-700 underline underline-offset-2 font-semibold">
                חזרה לדף הבית
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
