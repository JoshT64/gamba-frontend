import { CardType } from './Blackjack';

interface CardProps {
  card: CardType;
  isDealer?: boolean;
  showDealerHand?: boolean;
  index?: number;
}

export const Card: React.FC<CardProps> = ({
  card,
  isDealer,
  showDealerHand,
  index,
}) => {
  if (isDealer && !showDealerHand && index === 1) {
    return <span>🂠 </span>;
  }
  return <span>{`${card.rank}${card.suit} `}</span>;
};
