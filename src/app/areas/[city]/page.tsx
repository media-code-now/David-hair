import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { MapPin, Clock, Check, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbHero from '@/components/BreadcrumbHero';
import { getCity, citySlugs } from '../cities';

const SITE = 'https://hairtoppersisrael.com';

const services = [
  { href: '/hair-units', label: 'יחידות שיער', blurb: (c: string) => `כל סוגי יחידות השיער וכיפות השיער במקום אחד — פתרון מדויק לנשים מ${c}.` },
  { href: '/hair-toppers', label: 'טופר שיער', blurb: (c: string) => `טופר שיער ב${c} לכיסוי קודקוד ושביל מתרחב, עם התאמת גוון מדויקת.` },
  { href: '/hair-toppers-thin-hair', label: 'טופרים לשיער דליל', blurb: (c: string) => `פתרון לשיער דליל ל${c}: כיסוי קל ובלתי נראה שמחזיר נפח טבעי.` },
  { href: '/padachat', label: 'פדחת לשיער דליל', blurb: (c: string) => `פדחת לשיער ל${c} לכיסוי הקו הקדמי והשביל בטבעיות מלאה.` },
  { href: '/tzamidei-sear', label: 'צמידי שיער', blurb: (c: string) => `צמידי שיער ל${c} לתוספת נפח ואורך מיידית כבר מהפגישה הראשונה.` },
  { href: '/custom-wigs', label: 'פאות בהתאמה אישית', blurb: (c: string) => `פאה בהתאמה אישית ל${c}, בנויה ביד משיער אנושי 100%.` },
  { href: '/medical-wigs', label: 'פאה רפואית', blurb: (c: string) => `פאה רפואית לנשים מ${c} בליווי רגיש לנשירה רפואית ולאחר טיפולים.` },
  { href: '/salon-blending', label: 'שילוב וגזירה בסלון', blurb: (c: string) => `שילוב וגזירה מקצועיים ללקוחות מ${c} למראה אחיד וטבעי.` },
  { href: '/wig-repairs-upgrades', label: 'תיקון ושדרוג', blurb: (c: string) => `תיקון ושדרוג פאות וטופרים קיימים ללקוחות מ${c}.` },
];

type PageProps = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return citySlugs.map((city) => ({ city }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const data = getCity(city);
  if (!data) return {};

  const canonical = `${SITE}/areas/${city}`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: `טופר שיער ${data.name}, יחידת שיער ${data.name}, כיפת שיער ${data.name}, פאה ${data.name}, פאה רפואית ${data.name}, טופרים ${data.name}, פאה בהתאמה אישית ${data.name}, פדחת ${data.name}, פתרון לשיער דליל ${data.name}`,
    alternates: { canonical, languages: { 'he-IL': canonical } },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      locale: 'he_IL',
      type: 'website',
      siteName: 'David Hair Solutions',
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title: data.metaTitle,
      description: data.metaDescription,
    },
  };
}

export default async function AreaCityPage({ params }: PageProps) {
  const { city } = await params;
  const data = getCity(city);
  if (!data) notFound();

  const canonical = `${SITE}/areas/${city}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'דף הבית', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'אזורי שירות', item: `${SITE}/areas` },
      { '@type': 'ListItem', position: 3, name: data.name, item: canonical },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'התאמת טופרים ופאות',
    name: `טופרים ופאות ב${data.name}`,
    description: data.metaDescription,
    url: canonical,
    areaServed: { '@type': 'City', name: data.name },
    provider: {
      '@type': 'HairSalon',
      name: 'David Hair Solutions',
      telephone: '+972525550415',
      image: `${SITE}/logo-black.png`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'שביט 8',
        addressLocality: 'נס ציונה',
        addressRegion: 'מרכז',
        postalCode: '7408028',
        addressCountry: 'IL',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `שירותי שיער ב${data.name}`,
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.label },
      })),
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const nearby = data.nearby
    .map((slug) => getCity(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      <Header />
      <Script
        id={`schema-area-${city}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, serviceSchema, faqSchema]),
        }}
      />
      <BreadcrumbHero
        title={`טופרים ופאות ב${data.name}`}
        subtitle="פתרונות שיער לנשים במראה טבעי ובהתאמה אישית"
        pathname={`/areas/${city}`}
        emitSchema={false}
      />

      <main className="py-16 sm:py-20 lg:py-24" dir="rtl">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 tracking-tight leading-[1.2]">
            {data.h1}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">{data.intro}</p>

          {/* Distance / location badge */}
          <div className="inline-flex items-center gap-2.5 glass-card rounded-full px-5 py-2.5 mb-10">
            <MapPin size={18} className="text-navy-800" strokeWidth={2.2} aria-hidden="true" />
            <span className="text-[15px] font-semibold text-navy-900">{data.distanceLine}</span>
          </div>

          {/* Local context */}
          <div className="glass-card rounded-[22px] p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              שירות מקומי לנשים מ{data.name}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">{data.localContext}</p>

            {data.neighborhoods.length > 0 && (
              <div className="mb-5">
                <p className="text-[13px] font-bold text-gray-400 uppercase tracking-wide mb-2.5">
                  מגיעות אלינו מכל אזורי {data.name}
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.neighborhoods.map((n) => (
                    <span
                      key={n}
                      className="text-[13px] font-medium text-navy-800 bg-navy-50 rounded-full px-3.5 py-1.5"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-start gap-3 pt-4 border-t border-gray-100">
              <Clock size={18} className="text-navy-700 flex-shrink-0 mt-0.5" strokeWidth={2.2} aria-hidden="true" />
              <p className="text-gray-600 text-[15px] leading-relaxed">{data.travel}</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {data.highlights.map((h) => (
              <div key={h} className="flex items-start gap-3 glass-card rounded-2xl p-4">
                <span className="w-6 h-6 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={15} className="text-green-600" strokeWidth={2.5} aria-hidden="true" />
                </span>
                <span className="text-gray-700 text-[15px] font-medium leading-relaxed">{h}</span>
              </div>
            ))}
          </div>

          {/* Services — city × service local copy */}
          <div className="glass-card rounded-[22px] p-6 sm:p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
              השירותים שלנו ללקוחות מ{data.name}
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              נשים מ{data.name} מגיעות אלינו למגוון פתרונות שיער לא-כירורגיים — מטופר וכיפת שיער
              לכיסוי דלילות ממוקדת ועד פאה מלאה בהתאמה אישית. כל שירות ניתן בהתאמה אישית מלאה
              בסלון הפרטי בנס ציונה, כולל התאמת גוון, גזירה ועיצוב סופי.
            </p>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex flex-col gap-1 rounded-xl border border-gray-200 hover:border-navy-300 hover:bg-navy-50/50 px-4 py-3.5 transition-all duration-200 group"
                >
                  <span className="flex items-center justify-between gap-2 text-navy-900 font-semibold">
                    {s.label} ב{data.name}
                    <ArrowLeft
                      size={16}
                      className="text-navy-400 group-hover:text-navy-700 transition-colors flex-shrink-0"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-gray-500 text-[13px] leading-relaxed">{s.blurb(data.name)}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 tracking-tight">
              שאלות נפוצות – טופרים ופאות ב{data.name}
            </h2>
            <div className="space-y-3">
              {data.faq.map((f) => (
                <div key={f.question} className="glass-card rounded-[16px] p-5">
                  <h3 className="font-bold text-gray-900 mb-2 text-[16px]">{f.question}</h3>
                  <p className="text-gray-600 leading-relaxed text-[15px]">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby cities — internal linking mesh */}
          {nearby.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">אזורי שירות נוספים</h2>
              <div className="flex flex-wrap gap-2.5">
                {nearby.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/areas/${c.slug}`}
                    className="glass-card rounded-full px-5 py-2.5 text-navy-900 font-semibold hover:shadow-md hover:scale-[1.02] transition-all duration-200"
                  >
                    טופרים ופאות ב{c.name}
                  </Link>
                ))}
                <Link
                  href="/areas"
                  className="rounded-full px-5 py-2.5 text-navy-700 font-semibold underline underline-offset-2 hover:text-navy-900 transition-colors"
                >
                  כל אזורי השירות
                </Link>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="glass-card rounded-[22px] p-6 sm:p-10 text-center bg-gradient-to-br from-navy-50/60 to-gold-50/40">
            <h2 className="text-2xl sm:text-[28px] font-bold text-gray-900 mb-3 tracking-tight">
              רוצה ייעוץ אישי, {data.name}?
            </h2>
            <p className="text-gray-600 mb-6 text-[16px] max-w-xl mx-auto">
              נשמח להתאים לך פתרון שיער מדויק ונוח — בחדר פרטי, ללא התחייבות. הייעוץ הראשון ללא עלות.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/book"
                className="px-8 py-4 rounded-2xl bg-gradient-to-b from-navy-800 to-navy-900 text-white font-bold text-[17px] shadow-xl shadow-navy-900/25 hover:from-navy-700 hover:to-navy-800 transition-all active:scale-[0.97]"
              >
                קביעת ייעוץ ללא עלות
              </Link>
              <a
                href="https://wa.me/972525550415"
                className="px-8 py-4 rounded-2xl bg-[#25D366] text-white font-semibold text-[17px] hover:bg-[#20BA5A] transition-all active:scale-[0.97]"
              >
                וואטסאפ: 052-555-0415
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
