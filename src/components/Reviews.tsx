'use client';

import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1, name: 'נועה כ., 34, תל אביב', rating: 5, title: 'אחרי 10 שנים עם שיער דליל',
    content: 'השיער שלי התחיל להיות דליל אחרי הלידה השנייה. ניסיתי כל מיני פתרונות והרגשתי שכולם רואים. כשהגעתי לסלון, הייעוצנית בילתה איתי שעה שלמה, בדקה כל פרט, והתאימה לי טופר שבאמת נראה כמו השיער שלי. זה שינה את החיים שלי.',
    hasVideo: true,
  },
  {
    id: 2, name: 'יעל ב., 42, חיפה', rating: 5, title: 'לאחרי טיפולי כימותרפיה',
    content: 'אחרי הטיפולים השיער שלי נשר. הייתי מנושלת ופחדתי שאף פאה לא תראה טבעית. הצוות כאן הייתה מדהימה – ישבנו, דיברנו, והן עזרו לי להרגיש בטוחה שוב. הפאה שקיבלתי נראית ומרגישה אמיתית. אני ממליצה לכל אישה שעוברת את זה.',
    hasVideo: false,
  },
  {
    id: 3, name: 'מיכל ד., 29, ירושלים', rating: 5, title: 'הפתרון לשיער דליל בקודקוד',
    content: 'השיער שלי תמיד היה דק, אבל בשנים האחרונות השביל בקודקוד התרחב וזה הראה לי מבוגרת מדי. הטופר שקיבלתי פה בדיוק מתאים לאיזור, קל לשימוש, והכי חשוב – נראה טבעי לגמרי. אני משתמשת בו כבר שנה והוא נשאר מושלם.',
    hasVideo: true,
  },
];

export default function Reviews() {
  // NOTE: No Review/AggregateRating JSON-LD is emitted here. The testimonials
  // below are illustrative marketing content, not verified customer reviews, so
  // marking them up as schema.org Review would breach Google's review-snippet
  // policy. Add real review markup only once genuine reviews are collected.
  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gold-50/40 via-white to-navy-50/30 relative overflow-hidden">
      {/* Ambient blob */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gold-100/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mb-4 tracking-tight" dir="rtl">
            לא רק שיער. החזרת ביטחון עצמי.
          </h2>
          <p className="text-[17px] text-gray-500 max-w-2xl mx-auto italic" dir="rtl">
            &ldquo;פתאום זכרתי איך זה להרגיש יפה. לא רק להראות – להרגיש.&rdquo;
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
                למעלה מ-500 נשים סמכו עלינו
              </h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                כי יש דברים שלא מתפשרים עליהם. איכות, פרטיות, ותוצאה שנראית כמו השיער שלך – זה מה שעושה את ההבדל.
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
                <p className="text-gray-400 text-[13px] font-medium mb-3">דירוג ממוצע</p>
                <a
                  href="https://share.google/R340fKvDvgtSkAReJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy-700 hover:text-navy-900 underline underline-offset-2 transition-colors duration-200"
                >
                  ראו את כל הביקורות בגוגל
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
