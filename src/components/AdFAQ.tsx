'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    q: 'האם זה יראה טבעי?',
    a: 'בהחלט. אנחנו משתמשות בחומרים פרימיום וכל פתרון מותאם אישית כדי שיראה כמו השיער שלך בדיוק. רוב האנשים לא יכולות להבחין בהבדל.',
  },
  {
    q: 'כמה עולה ייעוץ חינם?',
    a: 'הייעוץ הראשון שלך בחינם לגמרי. אתה אישור של לא נחוצה לתשלם כלום כדי לגלות אם זה הפתרון הנכון עבורך.',
  },
  {
    q: 'כמה זמן זה לוקח?',
    a: 'ייעוץ ראשוני: 30-45 דקות. התאמה: 1-2 שעות. תוצאות? אתה רואה את זה מיד, אבל הביטחון העצמי מגיע מעט מהר יותר.',
  },
  {
    q: 'זה יסגור לי להשתמש במוצרי טיפול רגילים?',
    a: 'לא. רוב הפתרונות שלנו עובדות בצד המוצרים הרגילים שלך. צוויתנו תגידו לך בדיוק איך לטפל בזה.',
  },
  {
    q: 'מה אם זה לא מרגיש נכון?',
    a: 'זה נדיר, אבל דברו איתנו על זה. אנחנו יכולים לעדכן, לשנות צבע, או לדבר על אפשרויות שונות עד שמרגישים מצוין.',
  },
  {
    q: 'האם דברים דברים מכיוונים שלך?',
    a: 'כן. אנחנו חוששות על הפרטיות שלך לגמרי. חדרנו פרטי, אין חלון, ואנחנו לא משוחחות אל הלקוחות אחרות בך או בבקרה שלך.',
  },
];

export default function AdFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-white/60 relative overflow-hidden">
      <div className="absolute top-20 -right-40 w-96 h-96 bg-navy-100/15 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" dir="rtl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight" dir="rtl">
            שאלות נפוצות
          </h2>
          <p className="text-lg text-gray-600" dir="rtl">
            עדיין מתלבטים? הנה תשובות לשאלות הנפוצות ביותר.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-card rounded-[20px] overflow-hidden border border-gray-100/50 hover:border-gold-200/50 transition-all duration-300"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-navy-50/40 transition-colors duration-200"
              >
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-gray-500 transition-transform duration-300 ${
                    expandedIndex === idx ? 'rotate-180' : ''
                  }`}
                  strokeWidth={2}
                />
                <h3 className="text-[17px] font-bold text-gray-900 tracking-tight flex-1 pr-4" dir="rtl">
                  {faq.q}
                </h3>
              </button>

              {expandedIndex === idx && (
                <div className="px-8 pb-6 pt-0 border-t border-gray-100/50">
                  <p className="text-[15px] text-gray-600 leading-relaxed" dir="rtl">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 text-[15px] font-semibold mb-6" dir="rtl">
            עדיין יש שאלות? בואי וְדברנו בישירה.
          </p>
          <a
            href="/book"
            className="inline-block px-10 py-5 rounded-2xl bg-gold-400 text-navy-900 hover:bg-gold-300 transition-all duration-300 font-bold text-[17px] shadow-lg active:scale-[0.97]"
          >
            קביעת ייעוץ - זה חינם
          </a>
        </div>
      </div>
    </section>
  );
}
