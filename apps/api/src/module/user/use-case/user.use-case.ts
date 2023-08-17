import type { User } from '@/module/user/domain/user.model';

export interface UserUseCaseInterface {
  find(userId: string): Promise<User | null>;
  updateGameState(userId: string, gameState: NonNullable<User['gameState']>): Promise<User>;
}
