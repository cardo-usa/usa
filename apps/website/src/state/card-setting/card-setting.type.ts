type CardColor = 'red' | 'blue' | 'green' | 'yellow' | 'any';
type CardType = 'number' | 'skip' | 'reverse' | 'draw' | 'wild';

type CardDataType = {
  id: string;
  color: CardColor;
} & (
  | {
      type: 'skip' | 'reverse' | 'draw' | 'wild';
      value: null;
    }
  | {
      type: 'number';
      value: number;
    }
);

export type { CardColor, CardType, CardDataType };
