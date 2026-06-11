'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import { Check, Star } from 'lucide-react';
import bannerOne from '@/images/banners/1.jpg';
import bannerTwo from '@/images/banners/2.jpg';

interface ServiceBenefit {
  title: string;
  description: string;
}

interface ServiceDetailSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  benefits: ServiceBenefit[];
  imageSrc?: string;
  imageAlt?: string;
  imagePlaceholder?: string;
  reversed?: boolean;
}

export default function ServiceDetailSection({
  eyebrow,
  title,
  description,
  benefits,
  imageSrc,
  imageAlt,
  imagePlaceholder = '📸',
  reversed = false,
}: ServiceDetailSectionProps) {
  const fallbackImages = [bannerOne, bannerTwo, '/breadcrumb-hairshades.jpg'] as const;
  const fallbackIndex = (title.length + imagePlaceholder.length) % fallbackImages.length;
  const resolvedImage = imageSrc ?? fallbackImages[fallbackIndex];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Ambient blob */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute ${reversed ? 'top-20 left-[10%]' : 'top-20 right-[10%]'} w-72 h-72 bg-navy-100/20 rounded-full blur-3xl`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
          {/* Content Side */}
          <div className={reversed ? 'md:order-2' : ''} dir="rtl">
            {eyebrow && (
              <div className="glass inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 text-navy-800">
                <Star size={10} className="text-gold-500" />
                {eyebrow}
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              {description}
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="glass-card flex gap-4 p-4 rounded-[14px] stagger-item">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-7 h-7 rounded-[8px] bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
                      <Check size={14} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-500 text-sm mt-0.5">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className={reversed ? 'md:order-1' : ''}>
            <div className="glass-card relative aspect-[4/3] rounded-[22px] flex items-center justify-center overflow-hidden">
              <Image
                src={resolvedImage}
                alt={imageAlt ?? `${title} - תמונה להמחשה`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
