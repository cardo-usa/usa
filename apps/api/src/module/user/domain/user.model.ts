import type { Card } from '@/common/model/card.model';

type Role = 'GAME_MASTER' | 'GENERAL';

type IconBackgroundColor = 'TOMATO' | 'VIOLET' | 'INDIGO' | 'CYAN' | 'GREEN' | 'ORANGE' | 'BROWN' | 'AMBER';

type GameState = 'IN_GAME' | 'FINISHED';

export class User {
  readonly id: string;

  readonly role: Role;

  readonly name: string;

  readonly iconEmoji: string;

  readonly iconBackgroundColor: IconBackgroundColor;

  readonly joinedAt: Date;

  readonly handCards: Card[];

  readonly isMyTurn: boolean | null;

  readonly gameState: GameState | null;

  readonly finishedAt: Date | null;

  constructor(args: {
    id: string;
    role: Role;
    name: string;
    iconEmoji: string;
    iconBackgroundColor: IconBackgroundColor;
    joinedAt: Date;
    handCards: Card[];
    isMyTurn: boolean | null;
    gameState: GameState | null;
    finishedAt: Date | null;
  }) {
    this.id = args.id;
    this.role = args.role;
    this.name = args.name;
    this.iconEmoji = args.iconEmoji;
    this.iconBackgroundColor = args.iconBackgroundColor;
    this.joinedAt = args.joinedAt;
    this.handCards = args.handCards;
    this.isMyTurn = args.isMyTurn;
    this.gameState = args.gameState;
    this.finishedAt = args.finishedAt;
  }
}
