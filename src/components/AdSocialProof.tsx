'use client';

import { Star, TrendingUp, Award, Heart } from 'lucide-react';

export default function AdSocialProof() {
  return (
    <section className="py-16 sm:py-20 bg-white/60 relative overflow-hidden">
      <div className="absolute -bottom-20 -left-40 w-80 h-80 bg-green-100/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" dir="rtl">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { number: '500+', label: 'ביקורות חיוביות', icon: Star },
            { number: '4.9★', label: 'דירוג ממוצע', icon: TrendingUp },
            { number: '10+', label: 'שנים בתחום', icon: Award },
            { number: '95%', label: 'חוזרות ללקוחות', icon: Heart },
          ].map((stat, idx) => (
            <div key={idx} className="text-center glass-card rounded-[22px] p-8">
              <div className="text-4xl font-bold text-navy-900 mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600 font-semibold text-[15px]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="bg-gradient-to-r from-green-50/80 to-blue-50/80 rounded-[24px] p-8 border border-green-200/50">
          <p className="text-center text-gray-700 text-[15px] font-semibold mb-6" dir="rtl">
            אנחנו מהימנות על ידי אלפי נשים כמוך:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              '✓ רישיון עסק תקף',
              '✓ בדק בעל כישרון',
              '✓ משמירת סודיות חלוטה',
              '✓ ביטוח ושירות לקוח',
            ].map((badge) => (
              <span key={badge} className="text-sm font-semibold text-gray-700">
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial snippet */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {[
            {
              quote: '"לא הייתי מאמינה שזה יעבוד כל כך טוב. נראה בדיוק כמו השיער שלי. אני לא מבחינה בשום הבדל."',
              author: 'שרה מ., תל אביב',
            },
            {
              quote: '"הצוות היה כל כך רך ומטפל. לא הרגשתי בושה אפילו רגע אחד. בחזרה אני בטוחה בעצמי."',
              author: 'ג\'ניפר ל., חיפה',
            },
          ].map((testimonial, idx) => (
            <div key={idx} className="glass-card rounded-[22px] p-8 border-l-4 border-gold-400">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold-400 text-gold-400" strokeWidth={1.5} />
                ))}
              </div>
              <p className="text-gray-700 italic text-[15px] mb-4 leading-relaxed" dir="rtl">
                {testimonial.quote}
              </p>
              <p className="text-gray-600 font-semibold text-[14px]" dir="rtl">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
