'use client';

import Link from 'next/link';
import { ArrowLeft, Sparkles, ShoppingBag, Heart, Scissors, Wrench, Crown } from 'lucide-react';

const allServices = [
  { href: '/hair-toppers', title: 'טופרי שיער', description: 'כיסוי טבעי לשיער דליל', icon: Crown, color: 'from-pink-50 to-rose-50' },
  { href: '/hair-toppers-thin-hair', title: 'טופרים לשיער דליל', description: 'פתרונות לשביל ונפח', icon: Sparkles, color: 'from-purple-50 to-violet-50' },
  { href: '/custom-wigs', title: 'פאות בהתאמה אישית', description: 'עיצוב מותאם לחלוטין', icon: ShoppingBag, color: 'from-blue-50 to-cyan-50' },
  { href: '/medical-wigs', title: 'פאות רפואיות', description: 'פתרונות רגישים לנשירת שיער', icon: Heart, color: 'from-green-50 to-emerald-50' },
  { href: '/wig-repairs-upgrades', title: 'תיקון ושדרוג', description: 'שחזור וחידוש פריטים קיימים', icon: Wrench, color: 'from-navy-50 to-gold-50' },
  { href: '/salon-blending', title: 'סלון ושילוב', description: 'גזירה, צבע ועיצוב מקצועי', icon: Scissors, color: 'from-teal-50 to-cyan-50' },
];

interface RelatedServicesProps {
  exclude?: string;
  title?: string;
  maxItems?: number;
}

export default function RelatedServices({
  exclude,
  title = 'שירותים נוספים שלנו',
  maxItems = 4,
}: RelatedServicesProps) {
  const services = allServices.filter((s) => s.href !== exclude).slice(0, maxItems);

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10" dir="rtl">
          {title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                href={service.href}
                className={`group bg-gradient-to-br ${service.color} rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-navy-900 transition`}
              >
                <Icon size={28} className="text-navy-900 mb-4 group-hover:scale-110 transition" />
                <h3 className="font-bold text-gray-900 mb-1" dir="rtl">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4" dir="rtl">{service.description}</p>
                <span className="text-navy-900 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all" dir="rtl">
                  למידע נוסף <ArrowLeft size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
