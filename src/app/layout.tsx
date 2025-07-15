import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'vietnamese'] });

export const metadata: Metadata = {
  title: 'DongL - 편지를 통해 마음을 연결하다',
  description:
    '멀리 있는 가족, 복무 중인 군인, 그리고 정신적 지원이 필요한 모든 사람들에게 의미 있는 편지를 보내는 플랫폼입니다.',
  keywords: [
    '편지',
    '가족 연결',
    '군인 편지',
    '격려 편지',
    'DongL',
    'handwritten letters',
  ],
  authors: [{ name: 'DongL Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'DongL - 편지를 통해 마음을 연결하다',
    description:
      '멀리 있는 가족과 친구들에게 의미 있는 편지를 보내는 플랫폼',
    type: 'website',
    locale: 'ko_KR',
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
    title: 'DongL - 편지를 통해 마음을 연결하다',
    description: '가족과 친구들에게 의미 있는 편지를 보내는 플랫폼',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
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
