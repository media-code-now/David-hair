'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, DoorClosed, ShieldCheck, Heart } from 'lucide-react';
import { useState } from 'react';

const proofItems = [
  { icon: Sparkles, label: 'התאמה אישית' },
  { icon: DoorClosed, label: 'חדר פרטי ודיסקרטי' },
  { icon: ShieldCheck, label: 'אחריות ושירות לאחר הרכישה' },
  { icon: Heart, label: 'נשים בלבד' },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { type: 'before-after', label: 'פתרון לשיער דליל' },
    { type: 'before-after', label: 'פאה רפואית' },
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-navy-50/40 via-white to-gold-50/20 pt-8 pb-8 relative overflow-hidden">
      {/* Ambient background blobs — iOS 26 style */}
      <div className="absolute top-20 -right-32 w-80 h-80 bg-navy-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-20 w-64 h-64 bg-gold-200/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-7">
            {/* Proof Pills — glass capsules */}
            <div className="flex flex-wrap gap-2.5">
              {proofItems.map((item, i) => (
                <div
                  key={item.label}
                  className="glass-card rounded-full px-4 py-2.5 inline-flex items-center gap-2 stagger-item"
                >
                  <item.icon size={15} className="text-navy-800 flex-shrink-0" strokeWidth={2.2} />
                  <span className="text-[13px] font-semibold text-gray-700 tracking-tight">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-[1.2] tracking-tight" dir="rtl">
                השיער שלכם מגדיר איך אתם מרגישים.{' '}
                <span className="bg-gradient-to-l from-navy-800 to-navy-600 bg-clip-text text-transparent">אנחנו כאן כדי להחזיר לכם את הביטחון.</span>
              </h1>
              <p className="text-[17px] sm:text-lg text-gray-500 leading-relaxed" dir="rtl">
                פתרונות שיער פרימיום עם התאמה מושלמת – כך שאף אחד לא יבחין, ורק אתם תרגישו את ההבדל.
              </p>
            </div>

            {/* CTAs — iOS 26 pill buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/book" className="px-8 py-4 rounded-2xl bg-gradient-to-b from-navy-800 to-navy-900 text-white hover:from-navy-700 hover:to-navy-800 transition-all duration-300 font-bold text-[17px] text-center shadow-xl shadow-navy-900/25 active:scale-[0.97] border border-navy-700/20">
                ייעוץ חינם ללא התחייבות
              </Link>
              <a href="https://wa.me/972504001187" className="px-8 py-4 rounded-2xl bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all duration-300 font-semibold text-[17px] text-center active:scale-[0.97]">
                שלחו הודעה בוואטסאפ
              </a>
            </div>

            {/* Micro copy */}
            <p className="text-[13px] text-gray-400 tracking-wide" dir="rtl">
              פגישה ראשונה ללא עלות • ללא התחייבות • סביבה פרטית ומכבדת
            </p>
          </div>

          {/* Right Content - Before/After visual */}
          <div className="relative h-96 sm:h-full max-h-96 sm:max-h-none">
            <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-gray-100 shadow-2xl shadow-navy-900/10">
              {/* Image */}
              <Image
                src="/before-after-1.jpg"
                alt="תוצאות לפני ואחרי"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
                priority
                unoptimized
              />

              {/* Glass navigation arrows */}
              <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 glass w-10 h-10 rounded-2xl flex items-center justify-center active:scale-90 transition-all duration-200" aria-label="שקופית קודמת">
                ←
              </button>
              <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 glass w-10 h-10 rounded-2xl flex items-center justify-center active:scale-90 transition-all duration-200" aria-label="שקופית הבאה">
                →
              </button>

              {/* Glass indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 glass rounded-full px-3 py-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeSlide ? 'bg-white w-7' : 'bg-white/40 w-2'
                    }`}
                    aria-label={`שקופית ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
