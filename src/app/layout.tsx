import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import ADAAccessibilityWidget from "@/components/ADAAccessibilityWidget";
import Script from "next/script";

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "David Hair Solutions",
  description:
    "טופרים, פאות בהתאמה אישית ופאות רפואיות עם התאמה דיסקרטית בחדר פרטי. שילוב וגזירה מקצועיים בסלון נשים פרטי בנס ציונה.",
  url: "https://davidhair.co.il",
  telephone: "+972504001187",
  email: "contact@davidhair.co.il",
  image: "https://davidhair.co.il/logo-black.png",
  logo: "https://davidhair.co.il/logo-black.png",
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
    "https://wa.me/972504001187",
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
    "פאות בהתאמה אישית",
    "פאה רפואית",
    "שילוב פאה בסלון",
    "תיקון ושדרוג פאה",
    "פתרון לשיער דליל",
  ],
  hasMap: "https://maps.google.com/?q=שביט+8+נס+ציונה",
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
    apple: "/logo-black.png",
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
    url: "https://davidhair.co.il",
    images: [
      {
        url: "https://davidhair.co.il/og-image.jpg",
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
    images: ["https://davidhair.co.il/og-image.jpg"],
  },
  alternates: {
    canonical: "https://davidhair.co.il",
    languages: {
      "he-IL": "https://davidhair.co.il",
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
  metadataBase: new URL("https://davidhair.co.il"),
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
        {children}
        <BottomNav />
        <ADAAccessibilityWidget />
      </body>
    </html>
  );
}
