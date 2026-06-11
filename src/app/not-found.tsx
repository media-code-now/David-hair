import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, ArrowRight, MessageCircle, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'הדף לא נמצא (404) | David Hair Solutions',
  description: 'הדף שחיפשת לא קיים. חזרי לדף הבית או צרי קשר לקביעת ייעוץ.',
  robots: { index: false, follow: false },
};

const quickLinks = [
  { href: '/hair-toppers', label: 'טופר שיער' },
  { href: '/custom-wigs', label: 'פאות בהתאמה אישית' },
  { href: '/medical-wigs', label: 'פאה רפואית' },
  { href: '/book', label: 'קביעת ייעוץ' },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center justify-center py-16 px-4">
        {/* Ambient blobs */}
        <div className="fixed top-20 -right-32 w-80 h-80 bg-navy-200/15 rounded-full blur-3xl pointer-events-none" />
        <div className="fixed bottom-20 -left-20 w-64 h-64 bg-gold-200/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-lg w-full text-center relative z-10" dir="rtl">
          {/* 404 badge */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-[28px] bg-gradient-to-b from-navy-800 to-navy-900 text-white text-3xl font-bold shadow-xl shadow-navy-900/25 mb-8">
            404
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            אופס, הדף לא נמצא
          </h1>
          <p className="text-[17px] text-gray-500 leading-relaxed mb-10">
            ייתכן שהקישור שגוי, הדף הועבר, או שהוא פשוט לא קיים.
            <br />
            אבל השיער שלך — זה כבר אנחנו יכולות לטפל בו.
          </p>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-3 mb-10">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="glass-card rounded-[16px] px-4 py-3.5 text-[14px] font-semibold text-gray-800 hover:shadow-md hover:scale-[1.02] transition-all duration-200 active:scale-[0.98] flex items-center justify-between gap-2"
              >
                <ArrowRight size={14} className="text-navy-600 flex-shrink-0 rotate-180" />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-b from-navy-800 to-navy-900 text-white font-bold text-[15px] shadow-xl shadow-navy-900/25 hover:from-navy-700 hover:to-navy-800 transition-all duration-300 active:scale-[0.97]"
            >
              <Home size={16} strokeWidth={2.2} />
              חזרי לדף הבית
            </Link>
            <a
              href="https://wa.me/972504001187"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#25D366] text-white font-semibold text-[15px] hover:bg-[#20BA5A] transition-all duration-300 active:scale-[0.97]"
            >
              <MessageCircle size={16} strokeWidth={2.2} />
              וואטסאפ
            </a>
            <a
              href="tel:+972504001187"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl border border-navy-900/20 text-navy-900 font-semibold text-[15px] hover:bg-navy-50 transition-all duration-300 active:scale-[0.97]"
            >
              <Phone size={16} strokeWidth={2.2} />
              050-4001187
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
