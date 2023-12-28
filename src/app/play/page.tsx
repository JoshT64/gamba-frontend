import { Suspense } from 'react';
import Loading from '../Loading';
import Blackjack from './Blackjack';

export default async function PricingPage() {
  return (
    <Suspense fallback={<Loading />}>
      <div className=' h-full flex place-content-center items-center justify-center'>
        <Blackjack></Blackjack>
      </div>
    </Suspense>
  );
}
