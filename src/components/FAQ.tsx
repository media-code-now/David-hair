'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';

const faqs = [
  { id: 1, question: 'מה ההבדל בין טופר לפאה?', answer: 'טופר מכסה חלק מהראש (בדרך כלל קודקוד או שביל) ומשתלב עם השיער הקיים. פאה מכסה את כל הראש ומתאימה למי שזקוקה לכיסוי מלא. בייעוץ נבחר יחד את הפתרון המדויק.' },
  { id: 2, question: 'האם רואים את הקליפסים?', answer: 'לא. הקליפסים מוסתרים לחלוטין מתחת לשיער, ומותאמים בגודל ובמיקום כך שהם בלתי נראים. גם במגע קשה לזהות אותם.' },
  { id: 3, question: 'כמה זמן מחזיק טופר איכותי?', answer: 'טופר משיער טבעי איכותי מחזיק בין שנה לשנתיים בממוצע, תלוי בתחזוקה ובשימוש. עם טיפול נכון – ניקוי, רענון ושמירה – אפשר להאריך את חיי המוצר משמעותית.' },
  { id: 4, question: 'האם אפשר לצבוע/לעצב בחום?', answer: 'כן. טופרים ופאות משיער טבעי ניתנים לצביעה, החלקה, סלסול ועיצוב בחום – בדיוק כמו שיער רגיל. מומלץ לבצע עיצוב וצבע בסלון מקצועי.' },
  { id: 5, question: 'איך בוחרים בסיס (לייס/סילק)?', answer: 'בסיס לייס מעניק מראה טבעי מאוד עם שביל ריאליסטי. בסיס סילק נותן תחושה של קרקפת אמיתית. בייעוץ נבדוק מה מתאים לסוג השיער, לאורח החיים ולצורך שלך.' },
  { id: 6, question: 'האם אפשר לעשות התאמה דיסקרטית?', answer: 'בהחלט. כל ההתאמות מתבצעות בחדר פרטי וסגור. הסלון שלנו מיועד לנשים בלבד, עם דגש על פרטיות מלאה ואווירה נעימה.' },
  { id: 7, question: 'מה כוללת האחריות?', answer: 'האחריות מכסה פגמי ייצור, בעיות בבסיס ואי-התאמה. בנוסף אנחנו מציעים שירותי תחזוקה שוטפים – ניקוי מקצועי, רענון צבע ותיקונים קלים.' },
  { id: 8, question: 'תוך כמה זמן יש התאמה/אספקה?', answer: 'התאמה ראשונית מתבצעת בדרך כלל באותו השבוע. אספקה של מוצר מותאם אישית לוקחת בין 2-4 שבועות, תלוי בסוג המוצר ובמפרט שנבחר.' },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white/40 to-navy-50/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mb-4 tracking-tight" dir="rtl">
            שאלות נפוצות
          </h2>
        </div>

        {/* Accordion — glass cards */}
        <div className="space-y-2.5">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`stagger-item glass-card rounded-[18px] overflow-hidden transition-all duration-300 ${
                openId === faq.id ? 'shadow-md' : 'hover:shadow-md'
              }`}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4.5 flex items-center justify-between hover:bg-white/40 transition-all duration-200 text-right active:scale-[0.99]"
                aria-expanded={openId === faq.id}
                dir="rtl"
              >
                <span className="text-[15px] font-bold text-gray-900 pl-4 tracking-tight">
                  {faq.question}
                </span>
                <div className={`w-7 h-7 rounded-[8px] bg-navy-50/60 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}>
                  <ChevronDown size={16} className="text-navy-800" strokeWidth={2.5} />
                </div>
              </button>

              {/* Answer with smooth feel */}
              <div className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 py-4 bg-white/30 border-t border-gray-100/40">
                  <p className="text-gray-500 leading-relaxed text-[14px]" dir="rtl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions — glass card in Hebrew */}
        <div className="mt-14 glass-card rounded-[24px] p-8 sm:p-12 bg-gradient-to-br from-navy-900/95 to-navy-800/95 text-white text-center" style={{ backdropFilter: 'none' }}>
          <h3 className="text-2xl font-bold mb-3 tracking-tight" dir="rtl">עוד שאלות?</h3>
          <p className="text-navy-200 mb-6 max-w-lg mx-auto text-[15px]" dir="rtl">
            הייעוצניות שלנו כאן לעזור. פנו אלינו לייעוץ אישי.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/1234567890"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white text-navy-900 hover:bg-navy-50 transition-all duration-200 font-bold text-[15px] active:scale-[0.97]"
            >
              <MessageCircle size={17} strokeWidth={2.2} />
              הודעה בוואטסאפ
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-white/30 text-white hover:bg-white/10 transition-all duration-200 font-semibold text-[15px] active:scale-[0.97]"
            >
              <Phone size={17} strokeWidth={2.2} />
              התקשרי אלינו
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
