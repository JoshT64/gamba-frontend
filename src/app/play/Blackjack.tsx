'use client';

import React, { useState, useEffect } from 'react';

const SUITS = ['♠', '♣', '♥', '♦'];
const RANKS = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A',
];

interface Card {
  suit: string;
  rank: string;
}

interface CardProps {
  card: Card;
}

const createDeck = () =>
  SUITS.flatMap((suit) => RANKS.map((rank) => ({ suit, rank })));

const shuffleDeck = (deck: Card[]): Card[] => {
  const shuffledDeck = [...deck];
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
  return shuffledDeck;
};

const calculateHandValue = (hand: Card[]): number => {
  let value = hand.reduce(
    (acc, card) => acc + Math.min(10, parseInt(card.rank) || 10),
    0
  );
  const hasAce = hand.some((card) => card.rank === 'A');
  return hasAce && value > 21 ? value - 10 : value;
};

const Card: React.FC<CardProps> = ({ card }) => (
  <span>{`${card.rank}${card.suit} `}</span>
);

interface HandProps {
  title: string;
  hand: Card[];
  total: number;
}

const Hand: React.FC<HandProps> = ({ title, hand, total }) => (
  <div>
    <h2>
      {title} ({total})
    </h2>
    {hand.map((card, index) => (
      <Card key={index} card={card} />
    ))}
  </div>
);

const Blackjack = () => {
  const [deck, setDeck] = useState<Card[]>([]);
  const [gameStatus, setGameStatus] = useState('live');
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [dealerHand, setDealerHand] = useState<Card[]>([]);
  const [playerTotal, setPlayerTotal] = useState(0);
  const [dealerTotal, setDealerTotal] = useState(0);

  useEffect(() => setDeck(shuffleDeck(createDeck())), []);

  const dealCards = () => {
    const newDeck = shuffleDeck(createDeck());
    setDeck(newDeck.slice(4));
    setPlayerHand(newDeck.slice(0, 2));
    setDealerHand(newDeck.slice(2, 4));
    setGameStatus('');
  };

  const hit = () => {
    if (deck.length && gameStatus === '') {
      const newPlayerHand = playerHand.concat(deck[0]);
      const newDeck = deck.slice(1);
      setPlayerHand(newPlayerHand);
      setDeck(newDeck);

      // Check for player bust
      if (calculateHandValue(newPlayerHand) > 21) {
        setGameStatus('Player busts!');
      }
    }
  };

  const stand = () => {
    let newDealerHand = [...dealerHand];
    let newDeck = [...deck];

    while (calculateHandValue(newDealerHand) < 17 && newDeck.length > 0) {
      newDealerHand = newDealerHand.concat(newDeck[0]);
      newDeck = newDeck.slice(1);
    }

    setDealerHand(newDealerHand);
    setDeck(newDeck);

    // After the dealer's turn, you may want to check for the winner
    // and update the game status accordingly.
    const playerFinalTotal = calculateHandValue(playerHand);
    const dealerFinalTotal = calculateHandValue(newDealerHand);
    if (dealerFinalTotal > 21 || playerFinalTotal > dealerFinalTotal) {
      setGameStatus('Player wins!');
    } else if (dealerFinalTotal === playerFinalTotal) {
      setGameStatus('Push!');
    } else {
      setGameStatus('Dealer wins!');
    }
  };

  useEffect(() => {
    setPlayerTotal(calculateHandValue(playerHand));
    setDealerTotal(calculateHandValue(dealerHand));
  }, [playerHand, dealerHand]);

  const isGameActive = gameStatus === '';
  const canPlayerHit = isGameActive && calculateHandValue(playerHand) <= 21;

  return (
    <div>
      <h1>Blackjack</h1>
      <button onClick={dealCards} disabled={isGameActive}>
        Deal
      </button>
      <Hand title="Player's Hand" hand={playerHand} total={playerTotal} />
      <Hand title="Dealer's Hand" hand={dealerHand} total={dealerTotal} />
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
