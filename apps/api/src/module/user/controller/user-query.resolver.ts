import { Inject, Logger } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './dto/input/user-where-unique.input';
import { UserObject } from './dto/object/user.object';
import { InjectionToken } from '@/common/constant/injection-token';
import type { User } from '@/module/user/domain/user.model';
import { UserUseCaseInterface } from '@/module/user/use-case/user.use-case';

@Resolver()
export class UserQuery {
  private readonly logger = new Logger(UserQuery.name);

  constructor(
    @Inject(InjectionToken.USER_USE_CASE)
    private readonly userUseCase: UserUseCaseInterface,
  ) {}

  @Query(() => UserObject, { nullable: true })
  async findUser(
    @Args('where', { type: () => UserWhereUniqueInput })
    where: UserWhereUniqueInput,
  ): Promise<User | null> {
    this.logger.log(`${this.findUser.name} called`);

    const foundUser = await this.userUseCase.find(where.id);

    return foundUser;
  }
}
