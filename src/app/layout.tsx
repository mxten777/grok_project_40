import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.siteName,
  description: `${siteConfig.eventYear}년 ${siteConfig.eventCount} 송년회 공식 웹사이트입니다. ${siteConfig.eventDate}에 ${siteConfig.eventLocation}에서 열리는 따뜻한 송년의 밤에 초대합니다.`,
  keywords: ["송년회", "삼광", "동기회", "모임", "파티", siteConfig.shortName, "2025"],
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
          '--primary-color': siteConfig.primaryColor,
          '--accent-color': siteConfig.accentColor,
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
