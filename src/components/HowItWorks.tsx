'use client';

import Link from 'next/link';

const steps = [
  { number: 1, title: 'מאזינות ומבינות', description: 'מה חשוב לך? מה הציפיות? אנחנו מתחילות ממקום של הקשבה אמיתית.' },
  { number: 2, title: 'בוחרות את המושלם', description: 'בדיקת צבע, מרקם, אורך ובסיס. עד שנמצא את הנכון בדיוק בשבילך.' },
  { number: 3, title: 'מתאימות בדיוק', description: 'גזירה, שילוב ועיצוב עד שזה נראה ומרגיש בדיוק כמו השיער שלך.' },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white/40 to-navy-50/30 relative overflow-hidden">
      {/* Ambient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-100/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" dir="rtl">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative stagger-item">
              {/* Connector Line (RTL: goes to the left) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 -left-4 w-8 h-[2px] bg-gradient-to-l from-navy-300/40 to-transparent" />
              )}

              {/* Glass Step Card */}
              <div className="glass-card rounded-[22px] p-8 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 h-full active:scale-[0.98]">
                {/* Step Number — squircle */}
                <div className="w-12 h-12 rounded-[14px] bg-gradient-to-b from-navy-800 to-navy-900 text-white flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-navy-900/20">
                  {step.number}
                </div>

                <h3 className="text-xl lg:text-[22px] font-bold text-gray-900 mb-3 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-gray-500 leading-relaxed text-[15px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link href="/book" className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-b from-navy-800 to-navy-900 text-white hover:from-navy-700 hover:to-navy-800 transition-all duration-300 font-bold text-[17px] shadow-xl shadow-navy-900/25 active:scale-[0.97] border border-navy-700/20">
            קביעת ייעוץ
          </Link>
        </div>
      </div>
    </section>
  );
}
