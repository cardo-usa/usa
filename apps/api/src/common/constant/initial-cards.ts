import type { Card } from '@/common/model/card.model';

const generateinitialCards = (): Card[] => {
  const redNumberCards = Array.from<never, Card>({ length: 10 }, (_, index) => ({
    type: 'NUMBER',
    color: 'RED',
    number: index,
  }));

  const blueNumberCards = Array.from<never, Card>({ length: 10 }, (_, index) => ({
    type: 'NUMBER',
    color: 'BLUE',
    number: index,
  }));

  const greenNumberCards = Array.from<never, Card>({ length: 10 }, (_, index) => ({
    type: 'NUMBER',
    color: 'GREEN',
    number: index,
  }));

  const yellowNumberCards = Array.from<never, Card>({ length: 10 }, (_, index) => ({
    type: 'NUMBER',
    color: 'YELLOW',
    number: index,
  }));

  const skipCards = [
    { type: 'SKIP', color: 'RED', number: null },
    { type: 'SKIP', color: 'BLUE', number: null },
    { type: 'SKIP', color: 'GREEN', number: null },
    { type: 'SKIP', color: 'YELLOW', number: null },
  ] satisfies Card[];

  const reverseCards = [
    { type: 'REVERSE', color: 'RED', number: null },
    { type: 'REVERSE', color: 'BLUE', number: null },
    { type: 'REVERSE', color: 'GREEN', number: null },
    { type: 'REVERSE', color: 'YELLOW', number: null },
  ] satisfies Card[];

  const drawCards = [
    { type: 'DRAW', color: 'RED', number: null },
    { type: 'DRAW', color: 'BLUE', number: null },
    { type: 'DRAW', color: 'GREEN', number: null },
    { type: 'DRAW', color: 'YELLOW', number: null },
  ] satisfies Card[];

  const wildCards = [
    { type: 'WILD', color: 'ANY', number: null },
    { type: 'WILD', color: 'ANY', number: null },
    { type: 'WILD', color: 'ANY', number: null },
    { type: 'WILD', color: 'ANY', number: null },
  ] satisfies Card[];

  return [
    ...redNumberCards,
    ...blueNumberCards,
    ...greenNumberCards,
    ...yellowNumberCards,
    ...skipCards,
    ...reverseCards,
    ...drawCards,
    ...wildCards,
  ];
};

export const initialCards = generateinitialCards();
