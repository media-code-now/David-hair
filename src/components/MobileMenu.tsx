'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, Scissors, Crown, Heart, Sparkles, Wrench, HelpCircle, Phone, MessageCircle, CalendarCheck } from 'lucide-react';

const menuSections = [
  {
    title: 'שירותים',
    items: [
      { href: '/hair-toppers', label: 'טופרים לשיער דליל', icon: Sparkles, color: 'from-pink-100/80 to-rose-50/80' },
      { href: '/custom-wigs', label: 'פאות בהתאמה אישית', icon: Crown, color: 'from-blue-100/80 to-cyan-50/80' },
      { href: '/medical-wigs', label: 'פאה רפואית', icon: Heart, color: 'from-green-100/80 to-emerald-50/80' },
      { href: '/salon-blending', label: 'סלון ושילוב', icon: Scissors, color: 'from-purple-100/80 to-violet-50/80' },
      { href: '/wig-repairs-upgrades', label: 'תיקון ושדרוג', icon: Wrench, color: 'from-orange-100/80 to-amber-50/80' },
    ],
  },
  {
    title: 'מידע',
    items: [
      { href: '/#faq', label: 'שאלות נפוצות', icon: HelpCircle, color: 'from-gray-100/80 to-slate-50/80' },
      { href: '/#contact', label: 'צור קשר', icon: Phone, color: 'from-gray-100/80 to-slate-50/80' },
    ],
  },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* iOS 26 blurred backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/25 backdrop-blur-xl transition-opacity duration-400 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.2, 0.9, 0.3, 1)' }}
        onClick={onClose}
      />

      {/* Liquid Glass Sheet */}
      <div
        className={`fixed inset-x-0 bottom-0 z-[70] lg:hidden glass-elevated rounded-t-[28px] transition-transform duration-500 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{
          maxHeight: '90vh',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          transitionTimingFunction: 'cubic-bezier(0.2, 0.9, 0.3, 1)',
        }}
      >
        {/* iOS-style grab handle */}
        <div className="flex justify-center pt-2.5 pb-1">
          <div className="w-9 h-[5px] rounded-full bg-gray-300/60" />
        </div>

        {/* Sheet Header */}
        <div className="flex items-center justify-between px-6 py-3">
          <h2 className="text-[17px] font-bold text-navy-900 tracking-tight" dir="rtl">תפריט</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200/60 hover:bg-gray-300/60 active:scale-90 transition-all duration-200"
            aria-label="סגור תפריט"
          >
            <X size={16} className="text-gray-500" strokeWidth={2.5} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-5 py-2" style={{ maxHeight: 'calc(90vh - 100px)' }}>
          {menuSections.map((section, sIdx) => (
            <div key={section.title} className={sIdx > 0 ? 'mt-5' : ''}>
              <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.08em] mb-2.5 px-1" dir="rtl">
                {section.title}
              </h3>
              <div className="space-y-1.5">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center gap-3.5 px-3.5 py-3 rounded-2xl hover:bg-white/60 active:bg-white/80 active:scale-[0.98] transition-all duration-200"
                      dir="rtl"
                    >
                      <div className={`w-10 h-10 rounded-[14px] bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-sm`}>
                        <Icon size={19} className="text-navy-700" strokeWidth={2} />
                      </div>
                      <span className="text-[15px] font-semibold text-gray-800 tracking-tight">{item.label}</span>
                      <ChevronLeft size={15} className="text-gray-300 mr-auto" strokeWidth={2.5} />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Quick Actions */}
          <div className="mt-7 space-y-2.5 pb-5">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-green-50/90 text-green-700 font-bold text-[15px] active:scale-[0.97] transition-all duration-200 border border-green-200/50 shadow-sm"
            >
              <MessageCircle size={19} strokeWidth={2.2} />
              וואטסאפ עכשיו
            </a>
            <Link
              href="/book"
              onClick={onClose}
              className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-gradient-to-b from-navy-800 to-navy-900 text-white font-bold text-[15px] active:scale-[0.97] transition-all duration-200 shadow-xl shadow-navy-900/25 border border-navy-700/20"
            >
              <CalendarCheck size={19} strokeWidth={2.2} />
              קביעת ייעוץ חינם
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
