import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'vietnamese'] });

export const metadata: Metadata = {
  title: 'DongL – Connecting Hearts Through Letters',
  description:
    'DongL is a heartfelt platform that helps families and friends send thoughtful letters to loved ones who are far away — including military members and those in need of emotional support.',
  keywords: [
    'letter writing',
    'send a letter',
    'family connection',
    'emotional support',
    'military letters',
    'prison letters',
    'DongL',
    'handwritten letters',
  ],
  authors: [{ name: 'DongL Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'DongL – Connecting Hearts Through Letters',
    description:
      'Send meaningful letters to your loved ones — no matter where they are. A gentle way to stay emotionally connected.',
    type: 'website',
    locale: 'en_US',
    siteName: 'DongL',
    // image can be added if available
    // images: [
    //   {
    //     url: 'https://dongl.co.kr/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'DongL – Connecting Hearts Through Letters',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DongL – Connecting Hearts Through Letters',
    description:
      'A thoughtful platform that lets you send letters with care and meaning. For families, soldiers, and everyone in between.',
    // image: 'https://dongl.co.kr/twitter-image.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
