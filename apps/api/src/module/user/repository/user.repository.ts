import type { User } from '@/module/user/domain/user.model';

export interface UserRepositoryInterface {
  find(userId: string): Promise<User | null>;
  findManyByRoomIds(roomIds: string[]): Promise<User[]>;
  create(user: Omit<User, 'id' | 'joinedAt' | 'handCards' | 'isMyTurn' | 'gameState' | 'finishedAt'>): Promise<User>;
  update(
    userId: string,
    user: Partial<Omit<User, 'id' | 'handCards'> & Record<keyof Pick<User, 'handCards'>, NonNullable<User['handCards']>>>,
  ): Promise<User>;
}
