import HProviders from '@/contexts/HProviders';
import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Survey',
  description: 'Survey',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HProviders>
          {children}
        </HProviders>
      </body>
    </html>
  );
}
