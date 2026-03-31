import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Keshika Arunkumar — Data Engineer & Analytics',
  description:
    'Results-driven Data Engineer skilled in building scalable data pipelines, cloud-native architectures, and ML-driven analytics using AWS/Azure, Python, SQL, and Spark.',
  keywords: [
    'Data Engineer',
    'Data Analytics',
    'Azure',
    'AWS',
    'Apache Airflow',
    'Python',
    'SQL',
    'ETL',
    'Machine Learning',
    'Keshika Arunkumar',
    'Northeastern University',
  ],
  authors: [{ name: 'Keshika Arunkumar' }],
  openGraph: {
    title: 'Keshika Arunkumar — Data Engineer',
    description: 'Building scalable data pipelines and ML-driven analytics.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-warm-50 dark:bg-warm-900 text-warm-800 dark:text-warm-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
