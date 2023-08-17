import type { User } from '@/module/user/domain/user.model';

export interface UserRepositoryInterface {
  find(userId: string): Promise<User | null>;
  update(userId: string, user: Partial<Omit<User, 'id'>>): Promise<User>;
}
