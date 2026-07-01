import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbHero from '@/components/BreadcrumbHero';

type CityPageData = {
  name: string;
  title: string;
  description: string;
  faq: Array<{ question: string; answer: string }>;
};

const cityPages: Record<string, CityPageData> = {
  'nes-ziona': {
    name: 'נס ציונה',
    title: 'טופרים ופאות בנס ציונה | David Hair',
    description:
      'טופרים, פאות רפואיות ופאות בהתאמה אישית לנשים בנס ציונה. התאמה דיסקרטית בחדר פרטי עם שירות מקצועי ונעים.',
    faq: [
      {
        question: 'האם ניתן לקבוע פגישת ייעוץ חינם בנס ציונה?',
        answer: 'כן. פגישת הייעוץ הראשונה אצלנו ללא עלות וללא התחייבות, בתיאום מראש.',
      },
      {
        question: 'איזה שירותים זמינים בנס ציונה?',
        answer: 'טופרים לשיער דליל, פאות בהתאמה אישית, פאות רפואיות, שילוב וגזירה ותיקון ושדרוג.',
      },
      {
        question: 'האם ההתאמה נעשית בחדר פרטי?',
        answer: 'בהחלט. כל תהליך הייעוץ וההתאמה נעשה בחדר פרטי ודיסקרטי לנשים בלבד.',
      },
    ],
  },
  'rishon-lezion': {
    name: 'ראשון לציון',
    title: 'טופרים ופאות בראשון לציון | David Hair',
    description:
      'לקוחות רבות מראשון לציון מגיעות להתאמת טופרים ופאות במראה טבעי, עם שירות אישי וליווי מקצועי מלא.',
    faq: [
      {
        question: 'אתן משרתות לקוחות מראשון לציון?',
        answer: 'כן, רבות מהלקוחות שלנו מגיעות מראשון לציון לפגישות ייעוץ, התאמה ותחזוקה שוטפת.',
      },
      {
        question: 'מה כולל תהליך ההתאמה?',
        answer: 'אבחון שיער, התאמת סוג פתרון, התאמת צבע ומבנה, ושילוב מקצועי עד לקבלת מראה טבעי.',
      },
      {
        question: 'אפשר לתאם גם תחזוקה שוטפת?',
        answer: 'כן. אנו מציעות שירותי תחזוקה, רענון, צביעה ושדרוג לטופרים ופאות.',
      },
    ],
  },
  rehovot: {
    name: 'רחובות',
    title: 'טופרים ופאות ברחובות | David Hair',
    description:
      'פתרונות שיער לנשים מרחובות: טופרים לשיער דליל, פאות רפואיות ופאות בהתאמה אישית עם דיסקרטיות מלאה.',
    faq: [
      {
        question: 'האם ניתן לקבל התאמה לשיער דליל מרחובות?',
        answer: 'כן. אנו מתמחות בטופרים לשיער דליל והתאמת כיסוי שביל וקודקוד במראה טבעי.',
      },
      {
        question: 'האם יש פאות רפואיות ללקוחות מרחובות?',
        answer: 'בוודאי. אנו מלוות לקוחות עם נשירה רפואית בהתאמה רגישה ונוחה לקרקפת עדינה.',
      },
      {
        question: 'כמה זמן נמשכת פגישת ייעוץ?',
        answer: 'בדרך כלל בין שעה לשעה וחצי, כדי לבצע אבחון מדויק והתאמה מלאה.',
      },
    ],
  },
  ashdod: {
    name: 'אשדוד',
    title: 'טופרים ופאות באשדוד | David Hair',
    description:
      'לקוחות מאשדוד נהנות מהתאמה אישית לטופרים ופאות, כולל ליווי מלא משלב הייעוץ ועד לתחזוקה שוטפת.',
    faq: [
      {
        question: 'האם יש שירות ללקוחות מאשדוד?',
        answer: 'כן. לקוחות מאשדוד מגיעות אלינו להתאמות מקצועיות ונהנות מליווי אישי לאורך כל התהליך.',
      },
      {
        question: 'מהו השירות המבוקש ביותר מאשדוד?',
        answer: 'טופרים לשיער דליל ופאות בהתאמה אישית הם השירותים הנפוצים ביותר בקרב לקוחות מאשדוד.',
      },
      {
        question: 'האם ניתן לשלב גם תיקון ושדרוג פאה קיימת?',
        answer: 'כן, אנו מציעות שירותי תיקון, חידוש ושדרוג גם לפריטים שנרכשו במקומות אחרים.',
      },
    ],
  },
  'tel-aviv': {
    name: 'תל אביב',
    title: 'טופרים ופאות בתל אביב | David Hair',
    description:
      'פתרונות שיער לנשים מתל אביב: טופרים ופאות במראה טבעי, התאמה אישית מדויקת ושירות דיסקרטי.',
    faq: [
      {
        question: 'האם אתן עובדות גם עם לקוחות מתל אביב?',
        answer: 'כן. לקוחות רבות מתל אביב מגיעות אלינו להתאמות מקצועיות ברמת גימור גבוהה.',
      },
      {
        question: 'מה היתרון בהתאמה אישית של פאה?',
        answer: 'התאמה אישית מעניקה ישיבה נוחה יותר, מראה טבעי יותר והתאמה מדויקת למבנה הפנים והראש.',
      },
      {
        question: 'האם יש אפשרות לייעוץ ראשוני ללא התחייבות?',
        answer: 'כן, הייעוץ הראשוני ניתן ללא התחייבות כדי לאפשר לך לקבל החלטה בביטחון מלא.',
      },
    ],
  },
};

type PageProps = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return Object.keys(cityPages).map((city) => ({ city }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const cityData = cityPages[city];

  if (!cityData) {
    return {};
  }

  const canonical = `https://hairtoppersisrael.com/areas/${city}`;

  return {
    title: cityData.title,
    description: cityData.description,
    alternates: {
      canonical,
      languages: { 'he-IL': canonical },
    },
    openGraph: {
      title: cityData.title,
      description: cityData.description,
      locale: 'he_IL',
      type: 'website',
      siteName: 'David Hair Solutions',
      url: canonical,
      images: [
        {
          url: 'https://hairtoppersisrael.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: cityData.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: cityData.title,
      description: cityData.description,
      images: ['https://hairtoppersisrael.com/og-image.jpg'],
    },
  };
}

export default async function AreaCityPage({ params }: PageProps) {
  const { city } = await params;
  const cityData = cityPages[city];

  if (!cityData) {
    notFound();
  }

  const canonical = `https://hairtoppersisrael.com/areas/${city}`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cityData.faq.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Header />
      <Script
        id={`faq-area-schema-${city}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbHero
        title={`טופרים ופאות ב${cityData.name}`}
        subtitle="פתרונות שיער לנשים במראה טבעי ובהתאמה אישית"
      />
      <main className="py-16 sm:py-20 lg:py-24" dir="rtl">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            שירותי טופרים ופאות באזור {cityData.name}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {cityData.description}
          </p>

          <div className="glass-card rounded-[20px] p-6 sm:p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">שירותים פופולריים באזור {cityData.name}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/hair-toppers" className="text-navy-900 hover:underline font-medium">טופר שיער</Link>
              <Link href="/hair-toppers-thin-hair" className="text-navy-900 hover:underline font-medium">טופרים לשיער דליל</Link>
              <Link href="/padachat" className="text-navy-900 hover:underline font-medium">פדחת לשיער דליל</Link>
              <Link href="/tzamidei-sear" className="text-navy-900 hover:underline font-medium">צמידי שיער</Link>
              <Link href="/custom-wigs" className="text-navy-900 hover:underline font-medium">פאות בהתאמה אישית</Link>
              <Link href="/medical-wigs" className="text-navy-900 hover:underline font-medium">פאה רפואית</Link>
              <Link href="/salon-blending" className="text-navy-900 hover:underline font-medium">שילוב וגזירה בסלון</Link>
              <Link href="/wig-repairs-upgrades" className="text-navy-900 hover:underline font-medium">תיקון ושדרוג</Link>
            </div>
          </div>

          <div className="space-y-3 mb-10">
            <h2 className="text-2xl font-bold text-gray-900">שאלות נפוצות</h2>
            {cityData.faq.map((faq) => (
              <div key={faq.question} className="glass-card rounded-[16px] p-5">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-[20px] p-6 sm:p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">רוצה ייעוץ אישי?</h2>
            <p className="text-gray-600 mb-6">נשמח להתאים לך פתרון שיער מדויק ונוח — ללא התחייבות.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/book"
                className="px-6 py-3 rounded-2xl bg-gradient-to-b from-navy-800 to-navy-900 text-white font-bold"
              >
                קביעת ייעוץ
              </Link>
              <a
                href="https://wa.me/972504001187"
                className="px-6 py-3 rounded-2xl bg-[#25D366] text-white font-semibold"
              >
                וואטסאפ
              </a>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}