import { EB_Garamond } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { JetBrains_Mono } from 'next/font/google';
import { title, description, url, alternates } from '@/config';
import { ServiceWorkerRegistration } from '@/components';

const ebGaramond = EB_Garamond({
  variable: '--font-eb-garamond',
  subsets: ['latin'],
  display: 'swap'
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap'
});

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f3ee' },
    { media: '(prefers-color-scheme: dark)', color: '#171717' }
  ]
};

export const metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: `%s | ${title}`
  },
  description,
  alternates: alternates('/'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }]
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title
  },
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og_image.png' }]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og_image.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${jetBrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col md:max-w-2xl mx-auto w-full bg-[#f5f3ee] dark:bg-neutral-900 px-4 md:px-0 pb-24">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
