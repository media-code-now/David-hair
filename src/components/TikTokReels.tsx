import { getTikTokReels, TIKTOK_PROFILE_URL } from '@/lib/tiktok';
import TikTokReelsSlider from './TikTokReelsSlider';

export default async function TikTokReels() {
  const reels = await getTikTokReels(8);

  return (
    <section
      id="tiktok"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-navy-50/30 via-white to-gold-50/40 relative overflow-hidden"
    >
      {/* Ambient blob */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold-100/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mb-4 tracking-tight"
            dir="rtl"
          >
            עקבו אחרינו בטיקטוק
          </h2>
          <p className="text-[17px] text-gray-500 max-w-2xl mx-auto" dir="rtl">
            הצצה מאחורי הקלעים – טרנספורמציות, טיפים ושילובים אמיתיים מהסלון.
          </p>
        </div>

        <TikTokReelsSlider reels={reels} />

        {/* CTA to full profile */}
        <div className="text-center mt-10">
          <a
            href={TIKTOK_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-navy-700 hover:text-navy-900 underline underline-offset-2 transition-colors duration-200"
            dir="rtl"
          >
            צפו בכל הסרטונים בטיקטוק
          </a>
        </div>
      </div>
    </section>
  );
}
