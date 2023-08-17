type CardType = 'NUMBER' | 'SKIP' | 'REVERSE' | 'DRAW' | 'WILD';

type CardColor = 'RED' | 'BLUE' | 'GREEN' | 'YELLOW' | 'ANY';

export type Card = {
  type: CardType;
  color: CardColor;
  number: number | null;
};
