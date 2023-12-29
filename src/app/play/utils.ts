import { CardType } from './Blackjack';

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

export const createDeck = () =>
  SUITS.flatMap((suit) => RANKS.map((rank) => ({ suit, rank })));

export const shuffleDeck = (deck: CardType[]): CardType[] => {
  const shuffledDeck = [...deck];
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
  return shuffledDeck;
};

export const calculateHandValue = (hand: CardType[]): number => {
  let value = hand.reduce((acc, card) => {
    if (card.rank === 'A') {
      return acc + 11; // Initially count Aces as 11
    } else {
      return acc + Math.min(10, parseInt(card.rank) || 10);
    }
  }, 0);

  const aces = hand.filter((card) => card.rank === 'A').length;
  for (let i = 0; i < aces; i++) {
    if (value > 21) {
      value -= 10; // Change an Ace from 11 to 1 by subtracting 10
    }
  }

  return value;
};
