'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import AccessibleMenu from './AccessibleMenu';

const navItems = [
  { href: '/hair-toppers', label: 'טופרים', ariaLabel: 'טופרים לשיער' },
  { href: '/custom-wigs', label: 'פאות בהתאמה אישית', ariaLabel: 'פאות בהתאמה אישית' },
  { href: '/medical-wigs', label: 'פאה רפואית', ariaLabel: 'פאה רפואית' },
  { href: '/salon-blending', label: 'סלון ושילוב', ariaLabel: 'סלון ושילוב שיער' },
  { href: '/wig-repairs-upgrades', label: 'תיקון ושדרוג', ariaLabel: 'תיקון ושדרוג פאות' },
  { href: '/#faq', label: 'שאלות נפוצות', ariaLabel: 'שאלות נפוצות' },
  { href: '/#contact', label: 'צור קשר', ariaLabel: 'צור קשר עם התמיכה' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glass" role="banner">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-3.5" aria-label="Main navigation">
        <div className="flex justify-between items-center" dir="rtl">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center hover:opacity-80 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 rounded-lg"
            aria-label="David Hair Solutions - דף הבית"
          >
            <Image
              src="/logo-black.png"
              alt="David Hair Solutions - פתרונות שיער לנשים"
              width={140}
              height={48}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block" dir="rtl">
            <AccessibleMenu 
              items={navItems}
              orientation="horizontal"
              ariaLabel="תפריט ניווט"
            />
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={() => window.open('https://wa.me/972504001187', '_blank')}
              aria-label="יצירת קשר בוואטסאפ"
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
            >
              <MessageCircle size={17} aria-hidden="true" />
              <span className="text-sm font-semibold">וואטסאפ</span>
            </button>
            <Link 
              href="/book"
              className="px-5 py-2.5 rounded-2xl bg-navy-900 text-white hover:bg-navy-800 transition-all duration-200 font-semibold text-sm active:scale-95 shadow-lg shadow-navy-900/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 inline-block"
            >
              קביעת ייעוץ
            </Link>
          </div>

          {/* Mobile: Mini CTA */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => window.open('https://wa.me/972504001187', '_blank')}
              aria-label="יצירת קשר בוואטסאפ"
              className="w-10 h-10 flex items-center justify-center rounded-2xl bg-[#25D366] text-white active:scale-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
            >
              <MessageCircle size={18} aria-hidden="true" />
            </button>
            <Link 
              href="/book"
              className="px-5 py-2.5 rounded-2xl bg-navy-900 text-white text-xs font-bold active:scale-95 transition-all duration-200 shadow-lg shadow-navy-900/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 inline-block"
            >
              קביעת תור
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
