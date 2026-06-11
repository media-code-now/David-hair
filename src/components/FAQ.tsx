'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';
import Script from 'next/script';

const faqs = [
  { id: 1, question: 'איך אדע איזה פתרון מתאים לי מבלי לנסות?', answer: 'בייעוץ האישי שלנו אנחנו בודקות את מצב השיער, מבנה הפנים, ואורח החיים שלך. בהתבסס על זה אנחנו ממליצות על הפתרון המדויק – טופר או פאה. הייעוץ חינם וללא התחייבות.' },
  { id: 2, question: 'כמה זה עולה? האם המחירים משתנים?', answer: 'המחירים משתנים לפי סוג המוצר, איכות השיער ורמת ההתאמה. טופרים מתחילים מ-₪650, ופאות מתחילות מ-₪890. בייעוץ תקבלי מחיר מדויק בהתאם לצורך שלך.' },
  { id: 3, question: 'האם רואים את הקליפסים או את הבסיס?', answer: 'לא. הקליפסים מוסתרים לחלוטין מתחת לשיער ומותאמים בגודל ובמיקום כך שהם כמעט בלתי נראים. גם במגע קשה להבחין בהם. בסיס הלייס או הסילק משתלב באופן טבעי עם הקרקפת.' },
  { id: 4, question: 'כמה זמן מחזיק טופר או פאה?', answer: 'טופר או פאה משיער טבעי איכותי מחזיקים בין שנה לשנתיים בממוצע, תלוי בתחזוקה ובשימוש. עם טיפול נכון – ניקוי, רענון ושמירה מתאימה – אפשר להאריך את חיי המוצר משמעותית.' },
  { id: 5, question: 'אפשר לצבוע או לסלסל את השיער?', answer: 'כן! טופרים ופאות משיער טבעי ניתנים לצביעה, החלקה, סלסול ועיצוב בחום – בדיוק כמו שיער רגיל. אנחנו מבצעות את כל הטיפולים האלה בסלון שלנו במקצועיות.' },
  { id: 6, question: 'איך בוחרים בין בסיס לייס לסילק?', answer: 'בסיס לייס מעניק מראה טבעי מאוד עם שביל ריאליסטי. בסיס סילק נותן תחושה של קרקפת אמיתית. בייעוץ נבדוק מה מתאים לסוג השיער, לאורח החיים ולצורך שלך.' },
  { id: 7, question: 'האם ההתאמה באמת דיסקרטית?', answer: 'בהחלט. כל ההתאמות מתבצעות בחדר פרטי וסגור. הסלון שלנו מיועד לנשים בלבד, עם דגש על פרטיות מלאה ואווירה נעימה.' },
  { id: 8, question: 'בתוך כמה זמן אקבל את המוצר?', answer: 'ההתאמה הראשונית מתבצעת בדרך כלל כבר באותו השבוע. אספקה של מוצר בהתאמה אישית אורכת בין 2–4 שבועות, בהתאם לסוג המוצר ולמפרט שנבחר.' },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white/40 to-navy-50/20">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mb-4 tracking-tight" dir="rtl">
            יש לך שאלות? טבעי לגמרי.
          </h2>
          <p className="text-[17px] text-gray-500 max-w-2xl mx-auto mb-8" dir="rtl">
            זהו תהליך חדש, ואנחנו מבינות את החששות. הנה תשובות לשאלות הנפוצות ביותר.
          </p>
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
                <div className={`w-7 h-7 rounded-[8px] bg-navy-50/60 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}>
                  <ChevronDown size={16} className="text-navy-800" strokeWidth={2.5} />
                </div>
                <span className="text-[15px] font-bold text-gray-900 pl-4 tracking-tight">
                  {faq.question}
                </span>
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
        <div className="mt-14 glass-card rounded-[24px] p-8 sm:p-12 bg-white text-gray-900 text-center">
          <h3 className="text-2xl font-bold mb-3 tracking-tight" dir="rtl">לא מצאת תשובה?</h3>
          <p className="text-gray-500 mb-6 max-w-lg mx-auto text-[15px]" dir="rtl">
            אין שאלה קטנה או מביכה. אנחנו כאן בשבילך – גם אם רק כדי לדבר.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/972504001187"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white transition-all duration-200 font-bold text-[15px] active:scale-[0.97]"
            >
              <MessageCircle size={17} strokeWidth={2.2} />
              שלחי הודעה בוואטסאפ
            </a>
            <a
              href="tel:+972504001187"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-navy-900/20 text-navy-900 hover:bg-navy-50 transition-all duration-200 font-semibold text-[15px] active:scale-[0.97]"
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
