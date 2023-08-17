import { Inject, Logger } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserUpdateGameStateInput } from './dto/input/user-update-game-state.input';
import { UserWhereUniqueInput } from './dto/input/user-where-unique.input';
import { UserObject } from './dto/object/user.object';
import { InjectionToken } from '@/common/constant/injection-token';
import type { User } from '@/module/user/domain/user.model';
import { UserUseCaseInterface } from '@/module/user/use-case/user.use-case';

@Resolver()
export class UserMutation {
  private readonly logger = new Logger(UserMutation.name);

  constructor(
    @Inject(InjectionToken.USER_USE_CASE)
    private readonly userUseCase: UserUseCaseInterface,
  ) {}

  @Mutation(() => UserObject)
  async updateUserGameState(
    @Args('where', { type: () => UserWhereUniqueInput })
    where: UserWhereUniqueInput,
    @Args('data', { type: () => UserUpdateGameStateInput })
    data: UserUpdateGameStateInput,
  ): Promise<User> {
    this.logger.log(`${this.updateUserGameState.name} called`);

    const updatedUser = await this.userUseCase.updateGameState(where.id, data.gameState);

    return updatedUser;
  }
}
