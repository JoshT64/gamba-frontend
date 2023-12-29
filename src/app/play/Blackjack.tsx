'use client';

import React, { useState, useEffect } from 'react';
import { Hand } from './Hand';
import { calculateHandValue, createDeck, shuffleDeck } from './utils';
import { useBlackjack } from './useBlackjack';

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
    <div>
      <h1>Blackjack</h1>
      <button onClick={dealCards} disabled={isGameActive}>
        Deal
      </button>
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
      <div>{gameStatus}</div>
      {isGameActive && (
        <>
          <button onClick={hit} disabled={!canPlayerHit}>
            Hit
          </button>
          <button onClick={stand} disabled={!isGameActive}>
            Stand
          </button>
        </>
      )}
    </div>
  );
};

export default Blackjack;
