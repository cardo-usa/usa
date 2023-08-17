import type { Card } from '@/common/model/card.model';
import type { Room } from '@/module/room/domain/room.model';

type Role = 'GAME_MASTER' | 'GENERAL';

type IconBackgroundColor = 'TOMATO' | 'VIOLET' | 'INDIGO' | 'CYAN' | 'GREEN' | 'ORANGE' | 'BROWN' | 'AMBER';

type UserGameState = 'IN_GAME' | 'FINISHED';

export class User {
  readonly id: string;

  readonly role: Role;

  readonly name: string;

  readonly iconEmoji: string;

  readonly iconBackgroundColor: IconBackgroundColor;

  readonly joiningRoomId: Room['id'];

  readonly joinedAt: Date;

  readonly handCards: Card[] | null;

  readonly isMyTurn: boolean | null;

  readonly gameState: UserGameState | null;

  readonly finishedAt: Date | null;

  constructor(args: {
    id: string;
    role: Role;
    name: string;
    iconEmoji: string;
    iconBackgroundColor: IconBackgroundColor;
    joiningRoomId: Room['id'];
    joinedAt: Date;
    handCards: Card[] | null;
    isMyTurn: boolean | null;
    gameState: UserGameState | null;
    finishedAt: Date | null;
  }) {
    this.id = args.id;
    this.role = args.role;
    this.name = args.name;
    this.iconEmoji = args.iconEmoji;
    this.iconBackgroundColor = args.iconBackgroundColor;
    this.joiningRoomId = args.joiningRoomId;
    this.joinedAt = args.joinedAt;
    this.handCards = args.handCards;
    this.isMyTurn = args.isMyTurn;
    this.gameState = args.gameState;
    this.finishedAt = args.finishedAt;
  }
}

export type UserAccountSetting = Pick<User, 'name' | 'iconEmoji' | 'iconBackgroundColor'>;
