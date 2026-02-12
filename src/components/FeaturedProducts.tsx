'use client';

import { Star, Heart } from 'lucide-react';
import { useState } from 'react';

const products = [
  { id: 1, name: 'טופר בלונד לוקס', category: 'טופר שיער', price: '₪690', rating: 4.9, reviews: 24 },
  { id: 2, name: 'פאה גלית חומה', category: 'פאה מותאמת', price: '₪1,090', rating: 4.8, reviews: 31 },
  { id: 3, name: 'פאה רפואית נוחה', category: 'פאה רפואית', price: '₪910', rating: 4.9, reviews: 18 },
  { id: 4, name: 'טופר משי ערמוני', category: 'טופר שיער', price: '₪730', rating: 4.8, reviews: 22 },
  { id: 5, name: 'פאה פלטינום יוקרתית', category: 'פאה מותאמת', price: '₪1,280', rating: 5.0, reviews: 15 },
  { id: 6, name: 'טופר ערמון בלנד', category: 'טופר שיער', price: '₪650', rating: 4.9, reviews: 28 },
];

export default function FeaturedProducts() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-navy-50/20 to-white/60 relative overflow-hidden">
      {/* Ambient blob */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gold-100/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mb-4 tracking-tight" dir="rtl">
            טופרים ופאות מומלצים
          </h2>
          <p className="text-[17px] text-gray-500" dir="rtl">
            הדגמים הכי מבוקשים שלנו, עם אפשרות התאמה אישית בייעוץ.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="stagger-item glass-card rounded-[22px] overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group active:scale-[0.98]"
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-100/80 to-gray-200/60 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center glass-card rounded-2xl p-6">
                    <div className="text-4xl mb-2">📦</div>
                    <p className="text-[13px] text-gray-500 font-medium">{product.category}</p>
                  </div>
                </div>

                {/* Favorite — glass circle */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-[12px] glass flex items-center justify-center active:scale-90 transition-all duration-200"
                  aria-label="הוספה למועדפים"
                >
                  <Heart
                    size={17}
                    strokeWidth={2}
                    className={`transition ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-500'}`}
                  />
                </button>

                {/* Category — glass badge */}
                <div className="absolute top-3 left-3 glass rounded-full px-3 py-1.5 text-[11px] font-bold text-navy-800 tracking-tight">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5" dir="rtl">
                <h3 className="text-[16px] font-bold text-gray-900 mb-2 tracking-tight group-hover:text-navy-800 transition">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} strokeWidth={1.5} className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'} />
                    ))}
                  </div>
                  <span className="text-[12px] text-gray-400 font-medium">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-navy-900 tracking-tight">{product.price}</span>
                  <button className="px-4 py-2.5 rounded-2xl bg-gradient-to-b from-navy-800 to-navy-900 text-white hover:from-navy-700 hover:to-navy-800 transition-all duration-200 text-[13px] font-bold active:scale-95 shadow-md shadow-navy-900/20 border border-navy-700/20">
                    צפייה
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-14 text-center">
          <button className="px-8 py-3.5 rounded-2xl border-2 border-navy-800/20 text-navy-900 hover:bg-navy-50/60 transition-all duration-200 font-bold text-[16px] active:scale-[0.97]">
            לכל הקולקציה
          </button>
        </div>
      </div>
    </section>
  );
}
