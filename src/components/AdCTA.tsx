'use client';

import Link from 'next/link';
import { MessageCircle, ArrowLeft } from 'lucide-react';

export default function AdCTA() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gold-50/60 to-navy-50/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-200/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" dir="rtl">
        {/* Main CTA block */}
        <div className="rounded-[32px] p-10 sm:p-16 lg:p-20 text-center bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden shadow-2xl shadow-navy-900/30">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-navy-400/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight" dir="rtl">
              בואי נתחיל את הטרנספורמציה שלך.
            </h2>

            {/* Subheadline */}
            <p className="text-xl text-navy-100 leading-relaxed mb-12 max-w-2xl mx-auto" dir="rtl">
              פגישה ראשונה בחינם, ללא התחייבות, וללא שום לחץ. רק שיחה אמיתית על מה שטוב בשבילך.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                href="/book"
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-b from-gold-400 to-gold-500 text-navy-900 hover:from-gold-300 hover:to-gold-400 transition-all duration-300 font-bold text-[18px] shadow-2xl shadow-gold-400/30 active:scale-[0.97] flex items-center justify-center gap-2 group"
              >
                קביעת ייעוץ בחינם
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://wa.me/972504001187"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-10 py-5 rounded-2xl bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all duration-300 font-semibold text-[17px] active:scale-[0.97] shadow-lg shadow-[#25D366]/30"
              >
                <MessageCircle size={20} strokeWidth={2.2} />
                שלחי הודעה בוואטסאפ
              </a>
            </div>

            {/* Social proof mini - below buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-300">500+</div>
                <p className="text-[13px] text-navy-200">ביקורות 5 כוכבים</p>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-300">95%</div>
                <p className="text-[13px] text-navy-200">חוזרות ללקוחות</p>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-300">10+</div>
                <p className="text-[13px] text-navy-200">שנים בתחום</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom micro-copy */}
        <div className="mt-10 text-center">
          <p className="text-[13px] text-gray-600 tracking-wide" dir="rtl">
            ✓ אין קרדיט קארד נדרש  •  ✓ פגישה בחינם וללא התחייבות  •  ✓ סביבה פרטית ומכבדת
          </p>
        </div>
      </div>
    </section>
  );
}
