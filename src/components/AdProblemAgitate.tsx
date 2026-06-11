'use client';

import { AlertCircle, Lightbulb } from 'lucide-react';

const problems = [
  {
    title: 'דלילות שיער זה כמו מצב נפשי',
    desc: 'זה לא רק בעיה פיזית. זה משפיע על הביטחון העצמי, על החברה וקשה לדבר על זה.'
  },
  {
    title: 'הפתרונות הרגילים לא עובדים',
    desc: 'שמפו מיוחד, ויטמינים, או טיפולים יקרים – לרבות מהנשים זה לא מספיק.'
  },
  {
    title: 'מה אם יש פתרון שבאמת עובד?',
    desc: 'למה לא לנסות משהו שנתן לאלפי נשים את את הביטחון שלהן חזרה?'
  },
];

export default function AdProblemAgitate() {
  return (
    <section className="py-16 sm:py-24 bg-white/70 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-64 h-64 bg-navy-100/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" dir="rtl">
        {/* Problem/Agitate Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight" dir="rtl">
            אתה בעצמך יודעת את המציאות
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" dir="rtl">
            אם את כאן, יכול להיות שאתה או מישהי קרובה לך סובלת מדלילות שיער. וזה קשה.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="glass-card rounded-[22px] p-7 border border-red-100/50 hover:shadow-lg transition-all duration-300"
            >
              {idx < 2 ? (
                <AlertCircle size={28} className="text-red-500 mb-4" strokeWidth={1.8} />
              ) : (
                <Lightbulb size={28} className="text-yellow-500 mb-4" strokeWidth={1.8} />
              )}
              <h3 className="text-[17px] font-bold text-gray-900 mb-3 tracking-tight" dir="rtl">
                {problem.title}
              </h3>
              <p className="text-[14px] text-gray-600 leading-relaxed" dir="rtl">
                {problem.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Agitation callout */}
        <div className="bg-gradient-to-br from-red-50/80 to-red-50/40 border-l-4 border-red-400 rounded-lg p-8 text-center" dir="rtl">
          <p className="text-gray-800 text-lg font-semibold mb-2">
            <AlertCircle size={24} className="text-red-600 inline mr-2 align-text-bottom" strokeWidth={2} />
            <strong>אל תחזרו לפתרונות שעבדו לפני 10 שנים.</strong>
          </p>
          <p className="text-gray-600 text-[15px]">
            הטכנולוגיה התקדמה. הפתרונות התקדמו. וכיום יש אפשרות שבאמת עובדת – וזה טבעי כל כך שאיש לא יבחין.
          </p>
        </div>
      </div>
    </section>
  );
}
