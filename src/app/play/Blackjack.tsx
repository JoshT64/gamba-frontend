'use client';

import React, { useState, useEffect } from 'react';
import { Hand } from './Hand';
import { calculateHandValue, createDeck, shuffleDeck } from './utils';
import { useBlackjack } from './useBlackjack';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface CardType {
  suit: string;
  rank: string;
}

const Blackjack = () => {
  const {
    dealCards,
    isGameActive,
    playerHand,
    playerTotal,
    canPlayerHit,
    dealerHand,
    dealerTotal,
    faceUpCardValue,
    showDealerHand,
    gameStatus,
    hit,
    stand,
  } = useBlackjack();
  return (
    <div className='flex flex-col gap-2  text-center items-center'>
      <h1 className='fixed top-0 font-mono font-bold'>Blackjack</h1>

      <Button onClick={dealCards} disabled={isGameActive}>
        Deal
      </Button>
      <Hand
        title="Player's Hand"
        isDealer={false}
        hand={playerHand}
        total={playerTotal}
      />
      <Hand
        title="Dealer's Hand"
        hand={dealerHand}
        total={showDealerHand ? dealerTotal : faceUpCardValue}
        isDealer={true}
        showDealerHand={showDealerHand}
      />
      {gameStatus.length > 1 && (
        <Badge
          variant={
            gameStatus === 'Dealer wins!' || gameStatus === 'Player busts!'
              ? 'destructive'
              : gameStatus === 'Player wins!'
              ? 'success'
              : 'secondary'
          }
        >
          {gameStatus}
        </Badge>
      )}
      {isGameActive && (
        <div className='flex gap-3'>
          <Button
            className='bg-green-400 ml-3 hover:bg-green-500'
            onClick={hit}
            disabled={!canPlayerHit}
          >
            Hit
          </Button>
          <Button
            className='bg-red-400 hover:bg-red-500'
            onClick={stand}
            disabled={!isGameActive}
          >
            Stand
          </Button>
        </div>
      )}
    </div>
  );
};

export default Blackjack;
