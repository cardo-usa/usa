import type { Room } from '@/module/room/domain/room.model';
import type { User } from '@/module/user/domain/user.model';

export interface UserRepositoryInterface {
  find(userId: User['id']): Promise<User | null>;
  findManyByRoomId(roomId: Room['id']): Promise<User[]>;
  findManyByRoomIdEnsureOrder(roomId: Room['id']): Promise<User[]>;
  findManyByRoomIds(roomIds: Room['id'][]): Promise<User[]>;
  create(user: Omit<User, 'id' | 'joinedAt' | 'handCards' | 'isMyTurn' | 'gameState' | 'finishedAt'>): Promise<User>;
  update(
    userId: User['id'],
    user: Partial<Omit<User, 'id' | 'handCards'> & Record<keyof Pick<User, 'handCards'>, NonNullable<User['handCards']>>>,
  ): Promise<User>;
}
