import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function CTABlock() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-navy-900/5 via-white to-gold-100/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] p-8 sm:p-12 lg:p-16 text-center bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden shadow-2xl shadow-navy-900/20">
          {/* Ambient glass circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-400/8 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-5 tracking-tight" dir="rtl">
              זה הזמן להרגיש שוב כמו עצמך.
            </h2>
            <p className="text-[17px] text-navy-200 leading-relaxed mb-10 max-w-xl mx-auto" dir="rtl">
              בואי לשיחה קצרה וכנה. אין לחץ, אין מכירה אגרסיבית. רק שיחה אמיתית על מה שטוב בשבילך.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/book"
                className="px-8 py-4 rounded-2xl bg-white text-navy-900 hover:bg-navy-50 transition-all duration-200 font-bold text-[17px] shadow-lg active:scale-[0.97]"
              >
                קביעת ייעוץ
              </Link>
              <a
                href="https://wa.me/972504001187"
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all duration-200 font-semibold text-[17px] active:scale-[0.97]"
              >
                <MessageCircle size={19} strokeWidth={2.2} />
                וואטסאפ עכשיו
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
