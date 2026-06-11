'use client';

import Image from 'next/image';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import type { StaticImageData } from 'next/image';

interface BreadcrumbHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string | StaticImageData;
}

export default function BreadcrumbHero({ title, subtitle, backgroundImage = '/breadcrumb-hairshades.jpg' }: BreadcrumbHeroProps) {
  const pathname = usePathname();
  const baseUrl = 'https://hairtoppersisrael.com';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'דף הבית',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title,
        item: `${baseUrl}${pathname}`,
      },
    ],
  };

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
      <Script
        id={`breadcrumb-schema-${pathname}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Breadcrumb nav — visible + semantic */}
      <nav
        className="absolute top-4 right-4 z-10 flex items-center gap-1.5 text-white/70 text-[13px]"
        aria-label="breadcrumb"
        dir="rtl"
      >
        <a href="/" className="hover:text-white transition-colors">דף הבית</a>
        <span aria-hidden="true">›</span>
        <span className="text-white font-medium" aria-current="page">{title}</span>
      </nav>

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
