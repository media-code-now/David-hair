'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { Star, Shield, MessageCircle } from 'lucide-react';

interface ServiceHeroProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  features?: string[];
  ctaText?: string;
  ctaSecondaryText?: string;
  children?: ReactNode;
}

export default function ServiceHero({
  badge,
  title,
  titleAccent,
  subtitle,
  features = [],
  ctaText = 'קביעת ייעוץ חינם',
  ctaSecondaryText = 'שלחי הודעה בוואטסאפ',
}: ServiceHeroProps) {
  return (
    <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 overflow-hidden bg-[#fafbfd]">
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-[10%] w-80 h-80 bg-navy-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-[15%] w-96 h-96 bg-gold-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-navy-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center" dir="rtl">
          {badge && (
            <div className="glass inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium mb-6 text-navy-800">
              <div className="w-5 h-5 rounded-[6px] bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center">
                <Star size={11} className="text-white" />
              </div>
              {badge}
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {title}{' '}
            {titleAccent && (
              <span className="bg-gradient-to-l from-navy-700 to-navy-900 bg-clip-text text-transparent">
                {titleAccent}
              </span>
            )}
          </h1>

          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>

          {features.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="glass flex items-center gap-2 px-4 py-2 rounded-[14px] text-sm text-gray-700"
                >
                  <div className="w-5 h-5 rounded-[6px] bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
                    <Shield size={10} className="text-white" />
                  </div>
                  {feature}
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/book"
              className="px-8 py-3.5 rounded-[14px] bg-gradient-to-b from-navy-800 to-navy-900 text-white hover:from-navy-700 hover:to-navy-800 transition-all font-semibold text-lg shadow-lg shadow-navy-900/25 text-center active:scale-[0.97]"
            >
              {ctaText}
            </Link>
            <a
              href="https://wa.me/972504001187"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-[14px] bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all font-medium text-lg active:scale-[0.97]"
            >
              <MessageCircle size={20} />
              {ctaSecondaryText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
