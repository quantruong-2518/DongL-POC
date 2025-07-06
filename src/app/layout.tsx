import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'vietnamese'] });

export const metadata: Metadata = {
  title: 'DongL - Kết Nối Trái Tim Qua Từng Dòng Thư',
  description:
    'Nền tảng hỗ trợ gia đình và bạn bè gửi những lá thư ý nghĩa đến người thân đang ở xa, những người lính đang làm nhiệm vụ, và những ai đang cần sự động viên tinh thần.',
  keywords: [
    'thư tín',
    'kết nối gia đình',
    'thư cho lính',
    'thư động viên',
    'DongL',
  ],
  authors: [{ name: 'DongL Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'DongL - Kết Nối Trái Tim Qua Từng Dòng Thư',
    description:
      'Nền tảng hỗ trợ gia đình và bạn bè gửi những lá thư ý nghĩa đến người thân đang ở xa',
    type: 'website',
    locale: 'vi_VN',
    siteName: 'DongL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DongL - Kết Nối Trái Tim Qua Từng Dòng Thư',
    description: 'Nền tảng hỗ trợ gia đình và bạn bè gửi những lá thư ý nghĩa',
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
