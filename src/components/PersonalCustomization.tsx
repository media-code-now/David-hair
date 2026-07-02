'use client';

import { Check, Shield, Users, Sparkles } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: Sparkles,
    title: 'התאמה מדויקת',
    description: 'בדיקת מבנה פנים, סוג שיער וצרכים אישיים',
  },
  {
    icon: Shield,
    title: 'מקורות איכותיים',
    description: 'שיער טבעי ממקורות מובחרים ברחבי העולם',
  },
  {
    icon: Users,
    title: 'צוות מקצועי',
    description: 'ייעוצניות מנוסות זמינות לכל שאלה',
  },
];

const process = [
  { step: '1', title: 'נפגשות ומקשיבות', desc: 'שיחה אמיתית על מה שחשוב לך' },
  { step: '2', title: 'בוחרות יחד', desc: 'אין "אחד כזה". יש את הנכון בשבילך' },
  { step: '3', title: 'מתאימות בדיוק', desc: 'גזירה ושילוב עד שזה מושלם' },
  { step: '4', title: 'תמיד כאן', desc: 'גם אחרי שבועיים, חודש או שנה' },
];

export default function PersonalCustomization() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-navy-50/50 via-white to-gold-50/40 relative overflow-hidden">
      {/* Ambient blob */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 bg-gold-100/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6">
                <Sparkles size={16} className="text-navy-800" strokeWidth={2.5} />
                <span className="text-sm font-bold text-navy-900 tracking-tight">התאמה אישית</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mb-5 tracking-tight leading-[1.2]" dir="rtl">
                כל אישה היא עולם שלם. הפתרון שלך צריך להיות בדיוק כמוך.
              </h2>
              
              <p className="text-[17px] text-gray-500 leading-relaxed mb-6" dir="rtl">
                אנחנו לא מוכרות מוצרים מדף. אנחנו יוצרות פתרונות אישיים שמתאימים לסוג השיער, למבנה הפנים, ולאורח החיים שלך. זה מה שעושה את ההבדל.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 glass-card rounded-2xl p-5 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-navy-100 to-navy-50 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-navy-800" strokeWidth={2.2} />
                      </div>
                      <div className="text-right flex-1" dir="rtl">
                        <h3 className="font-bold text-gray-900 mb-1 text-[15px]">{benefit.title}</h3>
                        <p className="text-gray-500 text-[14px] leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                href="/book"
                className="px-8 py-4 rounded-2xl bg-gradient-to-b from-navy-800 to-navy-900 text-white hover:from-navy-700 hover:to-navy-800 transition-all duration-300 font-bold text-[17px] text-center shadow-xl shadow-navy-900/25 active:scale-[0.97] border border-navy-700/20"
              >
                קביעת ייעוץ ראשוני
              </Link>
              <a
                href="https://wa.me/972504001187"
                className="px-8 py-4 rounded-2xl bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all duration-300 font-semibold text-[17px] text-center active:scale-[0.97]"
              >
                שאלות? דברי איתנו
              </a>
            </div>
          </div>

          {/* Left Content - Process */}
          <div className="glass-card rounded-[28px] p-8 sm:p-10 bg-gradient-to-br from-white/80 to-navy-50/40">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight" dir="rtl">
              התהליך שלנו
            </h3>

            <div className="space-y-6">
              {process.map((item, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg shadow-navy-900/20">
                    {item.step}
                  </div>
                  <div className="text-right flex-1 pt-1" dir="rtl">
                    <h4 className="font-bold text-gray-900 mb-1.5 text-[16px]">{item.title}</h4>
                    <p className="text-gray-500 text-[14px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3 text-right" dir="rtl">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Check size={20} className="text-green-600" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-[14px]">אחריות ושירות מלא</p>
                  <p className="text-gray-500 text-[13px]">תמיכה והדרכה גם אחרי הרכישה</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
