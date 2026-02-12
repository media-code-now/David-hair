import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

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
  title: "David Hair Solutions – טופרים ופאות במראה טבעי",
  description:
    "טופרים, פאות בהתאמה אישית ופאות רפואיות עם התאמה דיסקרטית בחדר פרטי. שילוב וגזירה מקצועית בסלון נשים. קביעת ייעוץ ללא התחייבות.",
  manifest: "/manifest.json",
  keywords:
    "טופר שיער, פאות בהתאמה אישית, פאה רפואית, שיער דליל, סלון שילוב פאה, תיקון פאה",
  icons: {
    icon: "/favicon.svg",
    apple: "/icon-192.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "David Hair",
  },
  openGraph: {
    title: "David Hair Solutions – טופרים ופאות במראה טבעי",
    description:
      "טופרים, פאות בהתאמה אישית ופאות רפואיות עם התאמה דיסקרטית בחדר פרטי. קביעת ייעוץ ללא התחייבות.",
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
      </body>
    </html>
  );
}
