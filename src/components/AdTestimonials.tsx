'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'נועה כ., 34, תל אביב',
    title: 'התחיל לי להיות דליל אחרי ההיריון',
    content: 'אחרי הלידה השנייה, השיער שלי התחיל להיות דליל בחלק מהעוקץ. הייתי סוגרת את הרץ של התשובה השלי עם אדום וקלום. כשקראתי על David Hair, הייתי בפחד. אבל כשהגעתי, הצוות היו כל כך רכות וחנונות. הטופר שקיבלתי בדיוק מתאים ונראה כמו השיער שלי. זה שינה את החיים שלי!',
    hasVideo: true,
    image: '👩',
  },
  {
    id: 2,
    name: 'יעל ב., 42, חיפה',
    title: 'סובלתי מירידה קשה בשל סטרס',
    content: 'לאחר זמן בעל לחץ גבוה, שיערי החל לקחת בכמויות גדולות. זה היה בעצום אולם. חיפשתי כל מיני פתרונות כשהמלצה על David Hair. זה היה המעבר הטוב ביותר. לא רק שהשיער נראה טבעי, אלא הצוות הטפל בי כמו משפחה, לא כלקוחה.',
    hasVideo: true,
    image: '👩‍🦱',
  },
  {
    id: 3,
    name: 'מיכל ד., 29, ירושלים',
    title: 'איבדתי הרבה שיער בשל טיפולים רפואיים',
    content: 'כשעברתי טיפול רפואי, שיערי נשר כל כך הרבה. הייתי מנושלת וביודו אילו מישהי אחרת בגוף שלי. ובכנס ביקרתי David Hair ודלבר בדברו עם היצירה אלו הביטחון שלי.',
    hasVideo: true,
    image: '👱‍♀️',
  },
];

export default function AdTestimonials() {
  return (
    <section className="py-16 sm:py-24 bg-white/70 relative overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gold-100/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" dir="rtl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight" dir="rtl">
            נשים אמיתיות, תוצאות אמיתיות
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto italic" dir="rtl">
            &ldquo;פתאום זכרתי איך זה להרגיש יפה. לא רק להראות – להרגיש.&rdquo;
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-card rounded-[24px] p-8 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col h-full"
            >
              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold-400 text-gold-400" strokeWidth={1.5} />
                ))}
              </div>

              {/* Title */}
              <h3 className="text-[17px] font-bold text-gray-900 mb-3 tracking-tight" dir="rtl">
                {testimonial.title}
              </h3>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed mb-6 text-[14px] flex-grow" dir="rtl">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Reviewer info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100/60">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <p className="font-semibold text-gray-900 text-[14px]">{testimonial.name}</p>
                  <p className="text-[12px] text-gray-500">חלק משפחת David Hair</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below testimonials */}
        <div className="mt-16 text-center p-8 sm:p-12 rounded-[28px] bg-gradient-to-r from-navy-50 to-gold-50/50 border border-gold-200/50">
          <p className="text-gray-800 text-lg font-semibold mb-4" dir="rtl">
            סיפור שלך יכול להיות הבא.
          </p>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed" dir="rtl">
            אלפי נשים כבר גילו איך זה להרגיש בטוחה בעצמן שוב. בואי את תהיי הבאה.
          </p>
          <a
            href="/book"
            className="inline-block px-10 py-5 rounded-2xl bg-gold-400 text-navy-900 hover:bg-gold-300 transition-all duration-300 font-bold text-[17px] shadow-xl active:scale-[0.97]"
          >
            הזמני ייעוץ בחינם עכשיו
          </a>
        </div>
      </div>
    </section>
  );
}
