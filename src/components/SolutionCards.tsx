'use client';

import Link from 'next/link';
import { Crown, ShoppingBag, Heart, Scissors } from 'lucide-react';

const solutions = [
  {
    icon: Crown,
    title: 'טופר שיער לשיער דליל',
    description: 'מילוי מיידי לקודקוד או שביל. קל, בלתי נראה, ותוצאה מיידית.',
    cta: 'לצפייה בטופרים',
    gradient: 'from-pink-100/60 to-rose-50/40',
    iconBg: 'from-pink-200/80 to-pink-100/60',
    accent: 'text-pink-700',
    href: '/hair-toppers',
  },
  {
    icon: ShoppingBag,
    title: 'פאות בהתאמה אישית',
    description: 'נראית כמו השיער שלך. מותאמת למבנה הפנים וגוון העור שלך.',
    cta: 'התאמה לפאה',
    gradient: 'from-blue-100/60 to-cyan-50/40',
    iconBg: 'from-blue-200/80 to-blue-100/60',
    accent: 'text-blue-700',
    href: '/custom-wigs',
  },
  {
    icon: Heart,
    title: 'פאה רפואית',
    description: 'נוחה, עדינה ומכבדת. מלווה אותך בתקופה הכי קשה בכבוד.',
    cta: 'מידע לפאה רפואית',
    gradient: 'from-green-100/60 to-emerald-50/40',
    iconBg: 'from-green-200/80 to-green-100/60',
    accent: 'text-green-700',
    href: '/medical-wigs',
  },
  {
    icon: Scissors,
    title: 'סלון ושילוב',
    description: 'גזירה, צבע ועיצוב עד שאף אחד לא יזהה שזה לא השיער שלך.',
    cta: 'שירותי סלון',
    gradient: 'from-purple-100/60 to-violet-50/40',
    iconBg: 'from-purple-200/80 to-purple-100/60',
    accent: 'text-purple-700',
    href: '/salon-blending',
  },
];

export default function SolutionCards() {
  return (
    <section id="solutions" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gold-50/20 to-navy-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Link
                key={index}
                href={solution.href}
                className={`stagger-item bg-gradient-to-br ${solution.gradient} glass-card rounded-[22px] p-7 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer group block active:scale-[0.98]`}
              >
                <div className={`w-12 h-12 rounded-[14px] bg-gradient-to-br ${solution.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <Icon size={22} className={solution.accent} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2.5 tracking-tight" dir="rtl">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[13px] mb-5" dir="rtl">
                  {solution.description}
                </p>
                <div className="flex items-center text-navy-900 font-semibold text-[13px] group-hover:text-navy-700 transition" dir="rtl">
                  {solution.cta}
                  <span className="mr-2 group-hover:-translate-x-1.5 transition-transform duration-300">←</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
