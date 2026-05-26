'use client';

export default function AdSolutionShowcase() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-navy-900/5 to-gold-50/30 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold-200/15 rounded-full blur-3xl translate-x-1/3" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" dir="rtl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight" dir="rtl">
            איך זה עובד
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" dir="rtl">
            תהליך פשוט, שקוף, וכלולא לגמרי בדיסקרטיות.
          </p>
        </div>

        {/* Process steps */}
        <div className="space-y-6">
          {[
            {
              step: '1',
              title: 'ייעוץ חינם',
              desc: 'דברי איתנו. תגידי מה שקורה, מה את צריכה, ומה הוא ספקות שלך. אלא מרויה.'
            },
            {
              step: '2',
              title: 'בחירה ותאימה',
              desc: 'משהו כל פתרון (טופר, פאה, שילוב) נבחר בדיוק עבורך. זה נראה כמו לך.',
            },
            {
              step: '3',
              title: 'התאמה מושלמת',
              desc: 'צוותנו עובד בפרט. תכול, גזירה, צביע – הכל כדי שתרגישי מושלמת.',
            },
            {
              step: '4',
              title: 'שירות לאחר קנייה',
              desc: 'זה לא מסתיים. אנחנו כאן לתיקוני, עדכונים, וכל שאלה שיש לך.',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                {item.step}
              </div>
              <div className="glass-card rounded-[20px] p-7 flex-1">
                <h3 className="text-[18px] font-bold text-gray-900 mb-2.5 tracking-tight" dir="rtl">
                  {item.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed" dir="rtl">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below process */}
        <div className="mt-14 text-center">
          <p className="text-gray-700 text-[15px] font-semibold mb-6" dir="rtl">
            נשמע טוב? בואי נתחיל:
          </p>
          <a
            href="/book"
            className="inline-block px-10 py-5 rounded-2xl bg-navy-900 text-white hover:bg-navy-800 transition-all duration-300 font-bold text-[17px] shadow-xl active:scale-[0.97]"
          >
            קביעת ייעוץ בחינם היום
          </a>
        </div>
      </div>
    </section>
  );
}
