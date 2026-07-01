import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import ADAAccessibilityWidget from "@/components/ADAAccessibilityWidget";
import Script from "next/script";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-FK6YWP18VY";

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "David Hair Solutions",
  description:
    "טופרים, פאות בהתאמה אישית ופאות רפואיות עם התאמה דיסקרטית בחדר פרטי. שילוב וגזירה מקצועיים בסלון נשים פרטי בנס ציונה.",
  url: "https://hairtoppersisrael.com",
  telephone: "+972504001187",
  email: "office@hairtoppersisrael.com",
  image: "https://hairtoppersisrael.com/logo-black.png",
  logo: "https://hairtoppersisrael.com/logo-black.png",
  priceRange: "₪₪",
  currenciesAccepted: "ILS",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "שביט 8",
    addressLocality: "נס ציונה",
    addressRegion: "מרכז",
    postalCode: "7408028",
    addressCountry: "IL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.9299,
    longitude: 34.8007,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://share.google/R340fKvDvgtSkAReJ",
    "https://wa.me/972504001187",
    "https://www.facebook.com/davidhairsolution/",
    "https://www.instagram.com/david_hair_solutions/",
  ],
  areaServed: [
    { "@type": "City", name: "נס ציונה" },
    { "@type": "City", name: "ראשון לציון" },
    { "@type": "City", name: "רחובות" },
    { "@type": "City", name: "אשדוד" },
    { "@type": "City", name: "תל אביב" },
    { "@type": "State", name: "מרכז" },
  ],
  serviceType: [
    "טופר שיער",
    "יחידות שיער",
    "פאות בהתאמה אישית",
    "פאה רפואית",
    "שילוב פאה בסלון",
    "תיקון ושדרוג פאה",
    "פתרון לשיער דליל",
  ],
  hasMap: "https://maps.google.com/?q=שביט+8+נס+ציונה",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "905",
    bestRating: "5",
    worstRating: "1",
  },
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "David Hair Solutions",
  url: "https://hairtoppersisrael.com",
  inLanguage: "he-IL",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://hairtoppersisrael.com/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "David Hair Solutions",
  alternateName: "דיוויד הייר סולושנס",
  url: "https://hairtoppersisrael.com",
  logo: "https://hairtoppersisrael.com/logo-black.png",
  image: "https://hairtoppersisrael.com/og-image.jpg",
  telephone: "+972504001187",
  email: "office@hairtoppersisrael.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "שביט 8",
    addressLocality: "נס ציונה",
    addressRegion: "מרכז",
    postalCode: "7408028",
    addressCountry: "IL",
  },
  sameAs: [
    "https://share.google/R340fKvDvgtSkAReJ",
    "https://wa.me/972504001187",
    "https://www.facebook.com/davidhairsolution/",
    "https://www.instagram.com/david_hair_solutions/",
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  verification: {
    google: "WjVHKo40P4C4W7VMcqMKR8ldQWFyi-xIe24mpxwJqQ4",
  },
  title: {
    default: "David Hair Solutions – טופרים ופאות | נס ציונה",
    template: "%s | David Hair Solutions – נס ציונה",
  },
  description:
    "טופרים, פאות בהתאמה אישית ופאות רפואיות בנס ציונה. שירות דיסקרטי בחדר פרטי לנשים בלבד. משרתות גם ראשון לציון, רחובות ואזור המרכז. ייעוץ חינם ללא התחייבות.",
  manifest: "/manifest.json",
  keywords:
    "טופר שיער נס ציונה, פאות בהתאמה אישית נס ציונה, פאה רפואית מרכז, שיער דליל נשים, סלון שיער נס ציונה, טופר שיער ראשון לציון, פאה רפואית ראשון לציון, תיקון פאה נס ציונה, שילוב פאה סלון, פתרון שיער דליל",
  authors: [{ name: "David Hair Solutions" }],
  creator: "David Hair Solutions",
  publisher: "David Hair Solutions",
  category: "hair salon",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any" },
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "David Hair",
  },
  openGraph: {
    title: "David Hair Solutions – טופרים ופאות | נס ציונה",
    description:
      "טופרים, פאות בהתאמה אישית ופאות רפואיות בנס ציונה. שירות דיסקרטי לנשים בלבד. משרתות גם ראשון לציון, רחובות ואזור המרכז.",
    type: "website",
    locale: "he_IL",
    siteName: "David Hair Solutions",
    url: "https://hairtoppersisrael.com",
    images: [
      {
        url: "https://hairtoppersisrael.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "David Hair Solutions – טופרים ופאות נס ציונה",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Hair Solutions – טופרים ופאות | נס ציונה",
    description:
      "טופרים, פאות בהתאמה אישית ופאות רפואיות בנס ציונה. שירות דיסקרטי לנשים בלבד.",
    images: ["https://hairtoppersisrael.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://hairtoppersisrael.com",
    languages: {
      "he-IL": "https://hairtoppersisrael.com",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hairtoppersisrael.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}');
                `,
              }}
            />
          </>
        ) : null}
        {/* Meta Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init','1414086640777594');
              fbq('track','PageView');
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1414086640777594&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
        <BottomNav />
        <ADAAccessibilityWidget />
      </body>
    </html>
  );
}
