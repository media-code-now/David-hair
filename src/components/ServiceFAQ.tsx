'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import Script from 'next/script';

export interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}

export default function ServiceFAQ({
  title = 'שאלות נפוצות',
  subtitle,
  faqs,
}: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const schemaId = `service-faq-schema-${faqs[0]?.question ?? title}`.replace(/[^a-zA-Z0-9\u0590-\u05FF]/g, '-').slice(0, 80);

  return (
    <section id="service-faq" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gold-50/20 to-navy-50/15">
      <Script
        id={schemaId}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" dir="rtl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600">{subtitle}</p>
          )}
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden hover:border-navy-900 transition"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-100 transition text-right"
                aria-expanded={openIndex === index}
                dir="rtl"
              >
                <ChevronDown
                  size={22}
                  className={`flex-shrink-0 text-navy-900 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
                <span className="text-lg font-semibold text-gray-900 pl-4">
                  {faq.question}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200" dir="rtl">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Related questions → knowledge hub (internal link to /shaalot) */}
        <div className="mt-10 rounded-2xl border border-navy-100 bg-white/70 p-6 sm:p-7 text-center" dir="rtl">
          <p className="text-lg font-bold text-gray-900 mb-1.5">
            לא מצאתם את התשובה שחיפשתם?
          </p>
          <p className="text-gray-600 mb-5">
            במאגר השאלות והתשובות המלא שלנו תמצאו הסברים מפורטים על טופרים, פאות, יחידות שיער,
            תחזוקה, מחירים ופתרונות רפואיים.
          </p>
          <Link
            href="/shaalot"
            className="inline-flex items-center gap-2 bg-navy-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-navy-800 transition-colors"
          >
            למדריך השאלות והתשובות המלא
            <ArrowLeft size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
