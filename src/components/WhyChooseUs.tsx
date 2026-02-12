'use client';

import { Check } from 'lucide-react';

const bullets = [
  'מראה טבעי במיוחד באזור השביל והקודקוד',
  'התאמה אישית לפי פנים, צבע וסגנון חיים',
  'שירות דיסקרטי בחדר פרטי',
  'ליווי תחזוקה: ניקוי, רענון ושדרוג',
  'מוצרים נבחרים ואיכותיים בלבד',
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white/60 to-navy-50/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          {bullets.map((bullet, index) => (
            <div
              key={index}
              className="stagger-item glass-card flex items-start gap-4 p-5 rounded-[18px] hover:shadow-md hover:scale-[1.01] transition-all duration-300 active:scale-[0.99]"
              dir="rtl"
            >
              <div className="flex-shrink-0 mt-0.5">
                <div className="flex items-center justify-center h-7 w-7 rounded-[10px] bg-gradient-to-br from-navy-100 to-navy-50 text-navy-800 shadow-sm">
                  <Check size={15} strokeWidth={3} />
                </div>
              </div>
              <p className="text-gray-800 font-semibold leading-relaxed text-[15px] tracking-tight">
                {bullet}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
