'use client';

import { Star, Play } from 'lucide-react';

const reviews = [
  {
    id: 1, name: 'שרה מ.', rating: 5, title: 'שינוי מוחלט',
    content: 'סוף סוף מצאתי פתרון שנראה לגמרי טבעי. הייעוץ היה מדהים והצוות גרם לי להרגיש בנוח מהרגע הראשון.',
    hasVideo: true,
  },
  {
    id: 2, name: "ג'ניפר ל.", rating: 5, title: 'שירות מעולה',
    content: 'איכות השיער מדהימה. ההתאמה מושלמת והטופר משתלב בצורה חלקה עם השיער הטבעי שלי. ממליצה בחום!',
    hasVideo: false,
  },
  {
    id: 3, name: 'מישל פ.', rating: 4.5, title: 'מקצועיות ודיסקרטיות',
    content: 'חדר ההתאמה הפרטי והגישה המקצועית עשו את ההבדל. המעצבות באמת יודעות מה הן עושות. שווה כל שקל.',
    hasVideo: true,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-white/60 relative overflow-hidden">
      {/* Ambient blob */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gold-100/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mb-4 tracking-tight" dir="rtl">
            נשים מספרות
          </h2>
          <p className="text-[17px] text-gray-500 max-w-2xl mx-auto italic" dir="rtl">
            &ldquo;היה לי חשוב שזה ייראה טבעי. כבר במדידה הראשונה הרגשתי ביטחון.&rdquo;
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="stagger-item glass-card rounded-[22px] p-7 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]"
            >
              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className={i < Math.floor(review.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              <h3 className="text-[17px] font-bold text-gray-900 mb-3 tracking-tight" dir="rtl">
                {review.title}
              </h3>

              <p className="text-gray-500 leading-relaxed mb-6 text-[14px]" dir="rtl">
                &ldquo;{review.content}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100/60">
                <div className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-gold-200 to-gold-300 flex-shrink-0 shadow-sm" />
                <div>
                  <p className="font-semibold text-gray-900 text-[14px]">{review.name}</p>
                  {review.hasVideo && (
                    <div className="flex items-center gap-1.5 text-navy-800 text-[12px] font-semibold cursor-pointer hover:text-navy-600 transition">
                      <Play size={11} className="fill-navy-800" />
                      סרטון ביקורת
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Summary — glass banner */}
        <div className="mt-14 glass-card rounded-[24px] p-8 sm:p-12 bg-gradient-to-r from-navy-50/40 to-gold-50/30">
          <div className="grid sm:grid-cols-2 gap-8">
            <div dir="rtl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                500+ לקוחות מרוצות
              </h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                המחויבות שלנו לאיכות, פרטיות ותוצאות טבעיות הביאה לדירוגים גבוהים ולקוחות חוזרות לאורך שנים.
              </p>
            </div>
            <div className="flex items-center justify-center sm:justify-end">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={28} className="fill-yellow-400 text-yellow-400" strokeWidth={1.5} />
                  ))}
                </div>
                <div className="text-4xl font-bold text-gray-900 tracking-tight">4.9</div>
                <p className="text-gray-400 text-[13px] font-medium">דירוג ממוצע</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
