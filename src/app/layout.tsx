import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gamba',
  description: 'Online Crypto Gambling',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main
          id='skip'
          className='min-h-screen flex flex-col justify-center md:min-h[calc(100dvh-5rem)]'
        >
          {children}
        </main>
      </body>
    </html>
  );
}
