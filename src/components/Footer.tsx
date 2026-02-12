'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block hover:opacity-80 transition">
              <Image
                src="/logo-white.png"
                alt="David Hair Solutions"
                width={160}
                height={54}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-[13px] text-gray-500 mt-4 mb-5 leading-relaxed" dir="rtl">
              טופרים ופאות במראה טבעי, עם התאמה אישית בסלון נשים.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/1234567890' },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} className="w-9 h-9 rounded-[10px] bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-200 active:scale-90" aria-label={label}>
                  <Icon size={17} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4 text-[14px] tracking-tight" dir="rtl">שירותים</h4>
            <ul className="space-y-2.5 text-[13px]" dir="rtl">
              <li><Link href="/hair-toppers" className="hover:text-white transition-colors duration-200">טופר שיער לשיער דליל</Link></li>
              <li><Link href="/custom-wigs" className="hover:text-white transition-colors duration-200">פאות בהתאמה אישית</Link></li>
              <li><Link href="/medical-wigs" className="hover:text-white transition-colors duration-200">פאה רפואית</Link></li>
              <li><Link href="/salon-blending" className="hover:text-white transition-colors duration-200">שילוב וגזירה בסלון</Link></li>
              <li><Link href="/wig-repairs-upgrades" className="hover:text-white transition-colors duration-200">תיקון ושדרוג פאה</Link></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white mb-4 text-[14px] tracking-tight" dir="rtl">ניווט</h4>
            <ul className="space-y-2.5 text-[13px]" dir="rtl">
              <li><Link href="/" className="hover:text-white transition-colors duration-200">דף הבית</Link></li>
              <li><Link href="/#reviews" className="hover:text-white transition-colors duration-200">נשים מספרות</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors duration-200">שאלות נפוצות</Link></li>
              <li><Link href="/book" className="hover:text-white transition-colors duration-200">קביעת ייעוץ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-[14px] tracking-tight" dir="rtl">צור קשר</h4>
            <ul className="space-y-2.5 text-[13px]" dir="rtl">
              <li><a href="tel:+1234567890" className="hover:text-white transition-colors duration-200">+1 (234) 567-8900</a></li>
              <li><a href="https://wa.me/1234567890" className="hover:text-white transition-colors duration-200">וואטסאפ עכשיו</a></li>
              <li><a href="mailto:info@davidhair.com" className="hover:text-white transition-colors duration-200">info@davidhair.com</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/8 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[12px] text-gray-500">
          <p>&copy; {currentYear} David Hair Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-white transition-colors duration-200">מדיניות פרטיות</Link>
            <Link href="#" className="hover:text-white transition-colors duration-200">תנאי שימוש</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
