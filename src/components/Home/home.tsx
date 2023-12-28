import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';
import { PlayButton } from './PlayButton';

export function Home() {
  return (
    <main className='min-h-screen flex flex-col'>
      <header className='px-4 lg:px-6 h-14 flex items-center'>
        <Link className='flex items-center justify-center' href='#'>
          <WalletCardsIcon className='h-6 w-6' />
          <span className='sr-only'>Blackjack Game</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            Rules
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            About
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                  Welcome to Blackjack
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                  Enjoy the thrilling game of Blackjack right from your browser.
                  No download, no registration required.
                </p>
              </div>
              <div className='space-x-4'>
                <PlayButton />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © Blackjack Game. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Rules
          </Link>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            About
          </Link>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Contact
          </Link>
        </nav>
      </footer>
    </main>
  );
}

function WalletCardsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='18' height='18' x='3' y='3' rx='2' />
      <path d='M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2' />
      <path d='M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21' />
      {/* SVG content */}
    </svg>
  );
}
