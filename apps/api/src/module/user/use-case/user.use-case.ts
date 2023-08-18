import type { Room } from '@/module/room/domain/room.model';
import type { User, UserAccountSetting } from '@/module/user/domain/user.model';

export interface UserUseCaseInterface {
  find(userId: User['id']): Promise<User | null>;
  joinRoom(userAccountSetting: UserAccountSetting, roomId: Room['id']): Promise<User | null>;
  exitRoom(userId: User['id']): Promise<User | null>;
  drawCardsFromDeckCards(userId: User['id'], n: number, shouldTransitionTurn: boolean): Promise<User | null>;
  putHandCardToFieldCards(userId: User['id'], handCardId: NonNullable<User['handCards']>[number]['id'], subCard: number | null): Promise<User | null>;
}
