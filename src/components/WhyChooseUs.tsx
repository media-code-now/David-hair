'use client';

import { Check } from 'lucide-react';

const bullets = [
  'מראה טבעי שאף אחד לא יזהה – גם מקרוב',
  'התאמה אישית מדויקת לפנים, צבע וסגנון החיים שלך',
  'סביבה פרטית ומכבדת – רק את ואנחנו',
  'ליווי מתמשך: תחזוקה, רענון ותמיכה',
  'רק מוצרים מהשורה הראשונה – בלי פשרות',
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gold-50/40 via-white to-navy-50/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mb-4 tracking-tight" dir="rtl">
            יש הרבה מקומות. למה כאן?
          </h2>
          <p className="text-[17px] text-gray-500 max-w-2xl mx-auto" dir="rtl">
            כי את לא סתם מספר. כי אנחנו לא ממהרות. וכי התוצאה חשובה לנו כמו שהיא חשובה לך.
          </p>
        </div>

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
              <p className="text-gray-800 font-semibold leading-relaxed text-[15px] tracking-tight flex-1">
                {bullet}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
