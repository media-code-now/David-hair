'use client';

import { Target, Users, Lock, Sparkles, Shield, Heart, type LucideIcon } from 'lucide-react';

type ValueProp = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const valueProps: ValueProp[] = [
  {
    icon: Target,
    title: 'התאמה מושלמת',
    desc: 'לא קונים "גדול" או "קטן". את מקבלה בדיוק מה שמתאים לך.'
  },
  {
    icon: Users,
    title: 'ייעוץ אישי',
    desc: 'צוות מנוסה שמבינה בדיוק מה את צריכה ותשמעי אותן.'
  },
  {
    icon: Lock,
    title: 'פרטיות מוחלטת',
    desc: 'חדר פרטי, אין סביבה של כמהות או בושה.'
  },
  {
    icon: Sparkles,
    title: 'טבעי 100%',
    desc: 'יראה כמו השיער שלך. רק יותר מלא וטוב.'
  },
  {
    icon: Shield,
    title: 'אחריות שלמה',
    desc: 'משהו לא בסדר? אנחנו מטפלות בזה. לא קשה.'
  },
  {
    icon: Heart,
    title: 'כמהות אמיתית',
    desc: 'זה לא רק עסק. אנחנו באמת חוששות על בעלותך.'
  },
];

export default function AdValueProps() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-navy-50/50 to-gold-50/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-200/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" dir="rtl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight" dir="rtl">
            מה שהופך אותנו לשונות
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" dir="rtl">
            לא רק מוכרים שיער. אנחנו שיקום עצמי.
          </p>
        </div>

        {/* Value props grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((prop, idx) => {
            const IconComponent = prop.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-[22px] p-8 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 stagger-item"
              >
                <IconComponent size={40} className="text-navy-900 mb-5" strokeWidth={1.5} />
                <h3 className="text-[18px] font-bold text-gray-900 mb-2.5 tracking-tight" dir="rtl">
                  {prop.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed" dir="rtl">
                  {prop.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 sm:p-12 rounded-[28px] bg-gradient-to-r from-navy-900/90 to-navy-800/90 border border-gold-400/20 text-center">
          <p className="text-white text-lg mb-6 max-w-2xl mx-auto leading-relaxed" dir="rtl">
            <strong>זה לא משהו שאת צריכה לגדול איתו.</strong> יש פתרון. ויש לנו אותו.
          </p>
          <a
            href="/book"
            className="inline-block px-8 py-4 rounded-2xl bg-gold-400 text-navy-900 hover:bg-gold-300 transition-all duration-300 font-bold text-[17px] shadow-lg active:scale-[0.97]"
          >
            בואי נדבר על זה
          </a>
        </div>
      </div>
    </section>
  );
}
