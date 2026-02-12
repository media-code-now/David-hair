'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';

const navItems = [
  { href: '/hair-toppers', label: 'טופרים' },
  { href: '/custom-wigs', label: 'פאות בהתאמה אישית' },
  { href: '/medical-wigs', label: 'פאה רפואית' },
  { href: '/salon-blending', label: 'סלון ושילוב' },
  { href: '/wig-repairs-upgrades', label: 'תיקון ושדרוג' },
  { href: '/#faq', label: 'שאלות נפוצות' },
  { href: '/#contact', label: 'צור קשר' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glass">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-3.5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-all duration-300 active:scale-95">
            <Image
              src="/logo-black.png"
              alt="David Hair Solutions"
              width={140}
              height={48}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 rounded-xl text-gray-600 hover:text-navy-900 hover:bg-navy-50/60 transition-all duration-200 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="https://wa.me/1234567890"
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-green-700 bg-green-50/80 hover:bg-green-100/80 transition-all duration-200 active:scale-95 border border-green-200/60"
            >
              <MessageCircle size={17} />
              <span className="text-sm font-semibold">וואטסאפ</span>
            </a>
            <Link
              href="/book"
              className="px-5 py-2.5 rounded-2xl bg-navy-900 text-white hover:bg-navy-800 transition-all duration-200 font-semibold text-sm active:scale-95 shadow-lg shadow-navy-900/25"
            >
              קביעת ייעוץ
            </Link>
          </div>

          {/* Mobile: Mini CTA */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://wa.me/1234567890"
              className="w-10 h-10 flex items-center justify-center rounded-2xl bg-green-50/80 text-green-600 active:scale-90 transition-all duration-200 border border-green-200/50"
              aria-label="וואטסאפ"
            >
              <MessageCircle size={18} />
            </a>
            <Link
              href="/book"
              className="px-5 py-2.5 rounded-2xl bg-navy-900 text-white text-xs font-bold active:scale-95 transition-all duration-200 shadow-lg shadow-navy-900/25"
            >
              קביעת תור
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
