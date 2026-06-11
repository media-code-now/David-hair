'use client';

import Link from 'next/link';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';

interface ServiceCTAProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

export default function ServiceCTA({
  title = 'מוכנים להתחיל?',
  subtitle = 'קבעו ייעוץ חינם ללא התחייבות. נעזור למצוא את הפתרון המתאים ביותר עבורכם, בסביבה פרטית ונעימה.',
  ctaText = 'קביעת ייעוץ חינם',
}: ServiceCTAProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-navy-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" dir="rtl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {title}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/book" className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-navy-900 text-white hover:bg-navy-800 transition font-semibold text-lg shadow-lg shadow-navy-900/20">
            <ArrowRight size={20} className="rtl:rotate-180" />
            {ctaText}
          </Link>
          <a
            href="https://wa.me/972504001187"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#25D366] text-white hover:bg-[#20BA5A] transition font-semibold text-lg"
          >
            <MessageCircle size={20} />
            שלחו הודעה בוואטסאפ
          </a>
          <a
            href="tel:+972504001187"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-gray-300 text-gray-900 hover:border-gray-400 transition font-semibold text-lg"
          >
            <Phone size={20} />
            התקשרו עכשיו
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span>✓ ייעוץ חינם</span>
          <span>✓ חדר התאמה פרטי</span>
          <span>✓ ללא התחייבות</span>
          <span>✓ מענה מהיר ביום הפנייה</span>
        </div>
      </div>
    </section>
  );
}
