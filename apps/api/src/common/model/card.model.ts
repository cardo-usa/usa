type CardType = 'NUMBER' | 'SKIP' | 'REVERSE' | 'DRAW' | 'WILD';

type CardColor = 'RED' | 'BLUE' | 'GREEN' | 'YELLOW' | 'ANY';

export type Card = {
  type: CardType;
  color: CardColor;
  number: number | null;
};

export const shuffleCards = (cards: Card[]): Card[] => {
  const shuffledCards = [...cards];

  for (let i = shuffledCards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: This expression is not callable.
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  }

  return shuffledCards;
};
