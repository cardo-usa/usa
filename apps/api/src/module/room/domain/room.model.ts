import type { Card } from '@/common/model/card.model';

type GameState = 'WANTED' | 'READY' | 'IN_GAME' | 'FINISHED';

export class Room {
  readonly id!: string;

  readonly gameState!: GameState;

  readonly deckCards!: Card[];

  readonly fieldCards!: Card[];

  constructor(args: { id: string; gameState: GameState; deckCards: Card[]; fieldCards: Card[] }) {
    this.id = args.id;
    this.gameState = args.gameState;
    this.deckCards = args.deckCards;
    this.fieldCards = args.fieldCards;
  }

  get isWanted(): boolean {
    return this.gameState === 'WANTED';
  }
}
