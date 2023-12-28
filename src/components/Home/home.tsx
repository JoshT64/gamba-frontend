import Link from 'next/link';
import { PlayButton } from './PlayButton';
import { HotelIcon, LucideWalletCards } from 'lucide-react';
import Terminal from '../TerminalUI/terminal';

export function Home() {
  return (
    <main className='min-h-screen flex flex-col'>
      <header className='px-4 lg:px-6 h-14 flex items-center'>
        <Link className='flex items-center justify-center' href='#'>
          <HotelIcon />
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
