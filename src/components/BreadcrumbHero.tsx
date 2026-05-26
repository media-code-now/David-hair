'use client';

import Image from 'next/image';

interface BreadcrumbHeroProps {
  title: string;
  subtitle?: string;
}

export default function BreadcrumbHero({ title, subtitle }: BreadcrumbHeroProps) {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/breadcrumb-hairshades.jpg"
        alt={title}
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4" dir="rtl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-center drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-center opacity-90 drop-shadow-md max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
