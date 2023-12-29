import { CardType } from './Blackjack';
import { Card } from './Card';

interface HandProps {
  title: string;
  hand: CardType[];
  total?: number;
  isDealer?: boolean;
  showDealerHand?: boolean;
}

export const Hand: React.FC<HandProps> = ({
  title,
  hand,
  total,
  isDealer,
  showDealerHand,
}) => (
  <div>
    <h2>
      {title} ({total})
    </h2>
    {hand.map((card, index) => {
      return (
        <Card
          key={index}
          card={card}
          isDealer={isDealer}
          showDealerHand={showDealerHand}
          index={index}
        />
      );
    })}
  </div>
);
