import { Inject, Injectable } from '@nestjs/common';
import { InjectionToken } from '@/common/constant/injection-token';
import type { User } from '@/module/user/domain/user.model';
import { UserRepositoryInterface } from '@/module/user/repository/user.repository';
import type { UserUseCaseInterface } from '@/module/user/use-case/user.use-case';

@Injectable()
export class UserUseCase implements UserUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async find(userId: string): Promise<User | null> {
    const foundUser = await this.userRepository.find(userId);

    return foundUser;
  }

  async updateGameState(userId: string, gameState: NonNullable<User['gameState']>): Promise<User> {
    const updatedUser = await this.userRepository.update(userId, {
      gameState,
    });

    return updatedUser;
  }
}
