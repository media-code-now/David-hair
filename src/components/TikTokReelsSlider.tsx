'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import type { TikTokReel } from '@/lib/tiktok';
import { TIKTOK_PROFILE_URL, TIKTOK_USERNAME } from '@/lib/tiktok';

export default function TikTokReelsSlider({ reels }: { reels: TikTokReel[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [openId, setOpenId] = useState<string | null>(null);
  const [broken, setBroken] = useState<Record<string, boolean>>({});

  // Track the card nearest the start edge so the dots stay in sync with touch scrolling.
  const syncActive = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const step = rail.firstElementChild?.clientWidth ?? 1;
    const gap = 16;
    setActive(Math.round(Math.abs(rail.scrollLeft) / (step + gap)));
  }, []);

  const scrollByCards = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const step = (rail.firstElementChild?.clientWidth ?? 240) + 16;
    // In RTL, scrollLeft decreases as you advance through the list.
    const rtl = getComputedStyle(rail).direction === 'rtl';
    rail.scrollBy({ left: (rtl ? -1 : 1) * direction * step, behavior: 'smooth' });
  };

  const scrollToCard = (index: number) => {
    const rail = railRef.current;
    const card = rail?.children[index] as HTMLElement | undefined;
    if (!rail || !card) return;
    const rtl = getComputedStyle(rail).direction === 'rtl';
    const offset = rtl
      ? card.offsetLeft + card.clientWidth - (rail.offsetLeft + rail.clientWidth)
      : card.offsetLeft - rail.offsetLeft;
    rail.scrollTo({ left: offset, behavior: 'smooth' });
  };

  // Lightbox: lock background scroll and close on Escape.
  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenId(null);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [openId]);

  return (
    <>
      <div className="relative">
        {/* Desktop arrows */}
        <button
          onClick={() => scrollByCards(-1)}
          className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 glass-heavy w-11 h-11 rounded-2xl items-center justify-center text-navy-800 hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="הסרטונים הקודמים"
        >
          <ChevronRight size={20} strokeWidth={2.4} />
        </button>
        <button
          onClick={() => scrollByCards(1)}
          className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 glass-heavy w-11 h-11 rounded-2xl items-center justify-center text-navy-800 hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="הסרטונים הבאים"
        >
          <ChevronLeft size={20} strokeWidth={2.4} />
        </button>

        {/* Rail */}
        <div
          ref={railRef}
          onScroll={syncActive}
          dir="rtl"
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          {reels.map((reel, i) => (
            <button
              key={reel.id}
              onClick={() => setOpenId(reel.id)}
              className="group relative snap-start flex-shrink-0 w-[70%] sm:w-[45%] md:w-[31%] lg:w-[23%] aspect-[9/16] rounded-[24px] overflow-hidden bg-navy-900 shadow-lg shadow-navy-900/10 hover:shadow-2xl hover:shadow-navy-900/20 transition-all duration-300 hover:-translate-y-1 text-right"
              aria-label={reel.desc ? `נגן סרטון: ${reel.desc.slice(0, 60)}` : `נגן סרטון ${i + 1}`}
            >
              {reel.coverUrl && !broken[reel.id] ? (
                /* eslint-disable-next-line @next/next/no-img-element -- signed TikTok CDN host, not proxied through next/image */
                <img
                  src={reel.coverUrl}
                  alt=""
                  loading={i < 4 ? 'eager' : 'lazy'}
                  referrerPolicy="no-referrer"
                  onError={() => setBroken((prev) => ({ ...prev, [reel.id]: true }))}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900" />
              )}

              {/* Legibility scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-navy-950/25" />

              {/* Play affordance */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full glass-heavy flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Play size={22} className="text-navy-900 ms-0.5" fill="currentColor" />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p
                  className="text-[13px] leading-snug font-medium text-white/95 line-clamp-2"
                  dir="rtl"
                >
                  {reel.desc || `@${TIKTOK_USERNAME}`}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reels.map((reel, i) => (
            <button
              key={reel.id}
              onClick={() => scrollToCard(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? 'bg-navy-800 w-7' : 'bg-navy-900/20 w-2 hover:bg-navy-900/40'
              }`}
              aria-label={`עבור לסרטון ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox — the TikTok player only loads once a card is clicked */}
      {openId && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/70 backdrop-blur-md p-4 animate-[scaleIn_0.25s_ease-out]"
          onClick={() => setOpenId(null)}
          role="dialog"
          aria-modal="true"
          aria-label="נגן סרטוני טיקטוק"
        >
          <button
            onClick={() => setOpenId(null)}
            className="absolute top-5 right-5 z-10 glass-heavy w-11 h-11 rounded-2xl flex items-center justify-center text-navy-900 active:scale-95 transition-all duration-200"
            aria-label="סגירה"
          >
            <X size={20} strokeWidth={2.4} />
          </button>

          <div
            className="relative rounded-[24px] overflow-hidden bg-black shadow-2xl"
            style={{ width: 'min(92vw, 340px)', height: 'min(86vh, 740px)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              key={openId}
              src={`https://www.tiktok.com/embed/v2/${openId}`}
              title="סרטון טיקטוק"
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>

          <a
            href={TIKTOK_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-6 text-[14px] font-semibold text-white/85 hover:text-white underline underline-offset-4 transition-colors duration-200"
            dir="rtl"
          >
            פתחו את הפרופיל בטיקטוק
          </a>
        </div>
      )}
    </>
  );
}
