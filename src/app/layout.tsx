import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import ADAAccessibilityWidget from "@/components/ADAAccessibilityWidget";

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
  title: "David Hair Solutions – טופרים ופאות במראה טבעי",
  description:
    "טופרים, פאות בהתאמה אישית ופאות רפואיות עם התאמה דיסקרטית בחדר פרטי. שילוב וגזירה מקצועיים בסלון נשים פרטי. קביעת ייעוץ ללא התחייבות.",
  manifest: "/manifest.json",
  keywords:
    "טופר שיער, פאות בהתאמה אישית, פאה רפואית, שיער דליל, סלון שילוב פאה, תיקון פאה",
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
    title: "David Hair Solutions – טופרים ופאות במראה טבעי",
    description:
      "טופרים, פאות בהתאמה אישית ופאות רפואיות עם התאמה דיסקרטית בחדר פרטי. שילוב מקצועי וייעוץ ללא התחייבות.",
    type: "website",
    locale: "he_IL",
    siteName: "David Hair Solutions",
  },
  metadataBase: new URL("https://davidhair.co.il"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <BottomNav />
        <ADAAccessibilityWidget />
      </body>
    </html>
  );
}
