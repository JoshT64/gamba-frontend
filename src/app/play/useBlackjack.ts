import { useEffect, useState } from 'react';
import { calculateHandValue, createDeck, shuffleDeck } from './utils';
import { CardType } from './Blackjack';

export const useBlackjack = () => {
  const [deck, setDeck] = useState<CardType[]>([]);
  const [gameStatus, setGameStatus] = useState('live');
  const [playerHand, setPlayerHand] = useState<CardType[]>([]);
  const [dealerHand, setDealerHand] = useState<CardType[]>([]);
  const [playerTotal, setPlayerTotal] = useState(0);
  const [dealerTotal, setDealerTotal] = useState(0);
  const [showDealerHand, setShowDealerHand] = useState(false); // New state variable

  const faceUpCardValue =
    dealerHand.length > 0
      ? Math.min(
          10,
          parseInt(dealerHand[0].rank) || (dealerHand[0].rank === 'A' ? 11 : 10)
        )
      : 0;

  useEffect(() => setDeck(shuffleDeck(createDeck())), []);

  useEffect(() => {
    setPlayerTotal(calculateHandValue(playerHand));
    // Calculate the value of the dealer's face-up card (assuming it's the first card)

    setDealerTotal(calculateHandValue(dealerHand));
  }, [playerHand, dealerHand, showDealerHand, faceUpCardValue]);

  const dealCards = () => {
    const newDeck = shuffleDeck(createDeck());
    setDeck(newDeck.slice(4));
    setPlayerHand(newDeck.slice(0, 2));
    setDealerHand(newDeck.slice(2, 4));
    setShowDealerHand(false);
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
        setShowDealerHand(true);
        setGameStatus('Player busts!');
      }
    }
  };

  const stand = () => {
    setShowDealerHand(true); // Reveal the dealer's hand when the player stands
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

  const isGameActive = gameStatus === '';
  const canPlayerHit = isGameActive && calculateHandValue(playerHand) <= 21;
  return {
    dealCards,
    isGameActive,
    playerHand,
    playerTotal,
    dealerHand,
    canPlayerHit,
    dealerTotal,
    faceUpCardValue,
    showDealerHand,
    gameStatus,
    hit,
    stand,
  };
};
