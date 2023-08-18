import type { Card } from '@/common/model/card.model';

const generateinitialCards = (): Card[] => {
  const redNumberCards = Array.from<never, Card>({ length: 10 }, (_, index) => ({
    id: `NUMBER_RED-${index}`,
    type: 'NUMBER',
    color: 'RED',
    number: index,
  }));

  const blueNumberCards = Array.from<never, Card>({ length: 10 }, (_, index) => ({
    id: `NUMBER_BLUE-${index}`,
    type: 'NUMBER',
    color: 'BLUE',
    number: index,
  }));

  const greenNumberCards = Array.from<never, Card>({ length: 10 }, (_, index) => ({
    id: `NUMBER_GREEN-${index}`,
    type: 'NUMBER',
    color: 'GREEN',
    number: index,
  }));

  const yellowNumberCards = Array.from<never, Card>({ length: 10 }, (_, index) => ({
    id: `NUMBER_YELLOW-${index}`,
    type: 'NUMBER',
    color: 'YELLOW',
    number: index,
  }));

  const skipCards = [
    { id: 'SKIP_RED', type: 'SKIP', color: 'RED', number: null },
    { id: 'SKIP_BLUE', type: 'SKIP', color: 'BLUE', number: null },
    { id: 'SKIP_GREEN', type: 'SKIP', color: 'GREEN', number: null },
    { id: 'SKIP_YELLOW', type: 'SKIP', color: 'YELLOW', number: null },
  ] satisfies Card[];

  const reverseCards = [
    { id: 'REVERSE_RED', type: 'REVERSE', color: 'RED', number: null },
    { id: 'REVERSE_BLUE', type: 'REVERSE', color: 'BLUE', number: null },
    { id: 'REVERSE_GREEN', type: 'REVERSE', color: 'GREEN', number: null },
    { id: 'REVERSE_YELLOW', type: 'REVERSE', color: 'YELLOW', number: null },
  ] satisfies Card[];

  const drawCards = [
    { id: 'DRAW_RED', type: 'DRAW', color: 'RED', number: null },
    { id: 'DRAW_BLUE', type: 'DRAW', color: 'BLUE', number: null },
    { id: 'DRAW_GREEN', type: 'DRAW', color: 'GREEN', number: null },
    { id: 'DRAW_YELLOW', type: 'DRAW', color: 'YELLOW', number: null },
  ] satisfies Card[];

  const wildCards = [
    { id: 'WILD_1', type: 'WILD', color: 'ANY', number: null },
    { id: 'WILD_2', type: 'WILD', color: 'ANY', number: null },
    { id: 'WILD_3', type: 'WILD', color: 'ANY', number: null },
    { id: 'WILD_4', type: 'WILD', color: 'ANY', number: null },
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
