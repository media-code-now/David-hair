'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Scissors, CalendarCheck, MessageCircle, LayoutGrid } from 'lucide-react';
import MobileMenu from './MobileMenu';

const tabs = [
  { href: '/', label: 'ראשי', icon: Home },
  { href: '/#solutions', label: 'שירותים', icon: Scissors },
  { href: '/book', label: 'קביעת תור', icon: CalendarCheck, highlight: true },
  { href: 'https://wa.me/972504001187', label: 'וואטסאפ', icon: MessageCircle, external: true },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* iOS 26 Liquid Glass Bottom Tab Bar */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden glass-elevated"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <div className="flex items-center justify-around px-1 h-[72px]">
          {tabs.map((tab) => {
            const isActive = tab.href === '/' ? pathname === '/' : pathname.startsWith(tab.href);
            const Icon = tab.icon;

            if (tab.highlight) {
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className="flex flex-col items-center justify-center -mt-6"
                >
                  <div className="w-[56px] h-[56px] rounded-[20px] bg-gradient-to-b from-navy-800 to-navy-900 text-white flex items-center justify-center shadow-xl shadow-navy-900/30 active:scale-90 transition-all duration-300 border border-navy-700/30">
                    <Icon size={23} strokeWidth={2.2} />
                  </div>
                  <span className="text-[10px] font-bold text-navy-900 mt-1 tracking-tight">{tab.label}</span>
                </Link>
              );
            }

            if (tab.external) {
              return (
                <a
                  key={tab.href}
                  href={tab.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1 py-2 min-w-[60px] active:scale-90 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#25D366] flex items-center justify-center border border-[#25D366]/20">
                    <Icon size={19} className="text-white" strokeWidth={2.2} />
                  </div>
                  <span className="text-[10px] font-semibold text-green-600">{tab.label}</span>
                </a>
              );
            }

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className="flex flex-col items-center justify-center gap-1 py-2 min-w-[60px] active:scale-90 transition-all duration-200"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'bg-navy-900/10 border border-navy-200/50'
                    : 'bg-transparent'
                }`}>
                  <Icon
                    size={19}
                    strokeWidth={isActive ? 2.4 : 1.8}
                    className={`transition-colors duration-200 ${isActive ? 'text-navy-900' : 'text-gray-400'}`}
                  />
                </div>
                <span className={`text-[10px] transition-colors duration-200 ${isActive ? 'text-navy-900 font-bold' : 'text-gray-400 font-medium'}`}>
                  {tab.label}
                </span>
              </Link>
            );
          })}

          {/* Menu Tab */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col items-center justify-center gap-1 py-2 min-w-[60px] active:scale-90 transition-all duration-200"
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center">
              <LayoutGrid size={19} strokeWidth={1.8} className="text-gray-400" />
            </div>
            <span className="text-[10px] font-medium text-gray-400">תפריט</span>
          </button>
        </div>
      </nav>
    </>
  );
}
