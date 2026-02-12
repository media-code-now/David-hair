'use client';

import { useState } from 'react';
import Link from 'next/link';

const gallery = [
  { id: 1, category: 'טופרים' },
  { id: 2, category: 'רפואי' },
  { id: 3, category: 'פאות' },
  { id: 4, category: 'טופרים' },
  { id: 5, category: 'רפואי' },
  { id: 6, category: 'פאות' },
];

export default function BeforeAfterGallery() {
  const [sliderPosition, setSliderPosition] = useState<{ [key: number]: number }>({});

  const handleMouseMove = (e: React.MouseEvent, id: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition({ ...sliderPosition, [id]: position });
  };

  const getPosition = (id: number) => sliderPosition[id] ?? 50;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white/60 relative overflow-hidden">
      <div className="absolute -top-40 right-0 w-96 h-96 bg-navy-100/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[17px] text-gray-500 max-w-2xl mx-auto mb-2" dir="rtl">
            תוצאות אמיתיות של לקוחות אחרי התאמה ושילוב בסלון.
          </p>
          <p className="text-[13px] text-gray-400" dir="rtl">
            הערה: תאורה וזווית יכולים להשפיע על הנראות.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="stagger-item group cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, item.id)}
            >
              <div className="relative w-full aspect-square rounded-[22px] overflow-hidden bg-gray-100 shadow-lg shadow-navy-900/5 hover:shadow-xl transition-all duration-300">
                {/* After */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/80 to-gray-300/60 flex items-center justify-center text-gray-400 text-[14px] font-medium">
                  אחרי
                </div>

                {/* Before */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-gray-300/80 to-gray-400/60 flex items-center justify-center text-gray-400 text-[14px] font-medium overflow-hidden"
                  style={{ width: `${getPosition(item.id)}%`, transition: 'width 0.1s linear' }}
                >
                  לפני
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-white/80 group-hover:w-[3px] transition-all"
                  style={{ left: `${getPosition(item.id)}%`, transition: 'left 0.1s linear' }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -left-3.5 w-7 h-7 glass rounded-[10px] flex items-center justify-center shadow-lg">
                    <div className="text-[10px] font-bold text-gray-600">←→</div>
                  </div>
                </div>

                {/* Category — glass badge */}
                <div className="absolute top-3 left-3 glass rounded-full px-3 py-1.5 text-[11px] font-bold text-navy-800">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link href="/book" className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-b from-navy-800 to-navy-900 text-white hover:from-navy-700 hover:to-navy-800 transition-all duration-300 font-bold text-[17px] shadow-xl shadow-navy-900/25 active:scale-[0.97] border border-navy-700/20">
            קביעת ייעוץ
          </Link>
        </div>
      </div>
    </section>
  );
}
