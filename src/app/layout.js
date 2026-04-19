import { EB_Garamond } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { JetBrains_Mono } from 'next/font/google';

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

export const metadata = {
  title: 'Enis Gültekin',
  description:
    'Enis Gültekin is a frontend developer and writer. He writes about JavaScript and his experiences here.'
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${jetBrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col md:max-w-2xl mx-auto w-full bg-[#f5f3ee] dark:bg-neutral-900">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
