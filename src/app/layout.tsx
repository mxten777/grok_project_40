import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import "./globals.css";

function hexToHsl(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

export const metadata: Metadata = {
  title: siteConfig.siteName,
  description: `${siteConfig.eventYear}년 ${siteConfig.eventCount} 송년회 공식 웹사이트입니다. ${siteConfig.eventDate}에 ${siteConfig.eventLocation}에서 열리는 따뜻한 송년의 밤에 초대합니다.`,
  keywords: ["송년회", "강둑", "동기회", "모임", "파티", siteConfig.shortName, "2025"],
  authors: [{ name: siteConfig.shortName }],
  creator: siteConfig.shortName,
  publisher: siteConfig.shortName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://samkwang30.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.siteName,
    description: `${siteConfig.eventYear}년 ${siteConfig.eventCount} 송년회 공식 웹사이트입니다. ${siteConfig.eventDate}에 ${siteConfig.eventLocation}에서 열리는 따뜻한 송년의 밤에 초대합니다.`,
    url: 'https://samkwang30.vercel.app',
    siteName: siteConfig.siteName,
    images: [
      {
        url: siteConfig.invitationImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.siteName} 초대장`,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteName,
    description: `${siteConfig.eventYear}년 ${siteConfig.eventCount} 송년회 공식 웹사이트입니다.`,
    images: [siteConfig.invitationImage],
    creator: '@samkwang30',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className="antialiased"
        style={{
          '--primary': hexToHsl(siteConfig.primaryColor),
          '--accent': hexToHsl(siteConfig.accentColor),
          '--primary-color': siteConfig.primaryColor,
          '--accent-color': siteConfig.accentColor,
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
