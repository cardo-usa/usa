import { Inject, Logger } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserAccountSettingInput } from './dto/input/user-account-setting.input';
import { UserWhereUniqueInput } from './dto/input/user-where-unique.input';
import { UserObject } from './dto/object/user.object';
import { InjectionToken } from '@/common/constant/injection-token';
import { RoomWhereUniqueInput } from '@/module/room/controller/dto/input/room-where-unique.input';
import { RoomPublishUseCaseInterface } from '@/module/room/use-case/room-publish.use-case';
import type { User } from '@/module/user/domain/user.model';
import { UserUseCaseInterface } from '@/module/user/use-case/user.use-case';

@Resolver()
export class UserMutation {
  private readonly logger = new Logger(UserMutation.name);

  constructor(
    @Inject(InjectionToken.USER_USE_CASE)
    private readonly userUseCase: UserUseCaseInterface,
    @Inject(InjectionToken.ROOM_PUBLISH_USE_CASE)
    private readonly roomPublishUseCase: RoomPublishUseCaseInterface,
  ) {}

  @Mutation(() => UserObject)
  async joinRoom(
    @Args('where', { type: () => RoomWhereUniqueInput })
    where: RoomWhereUniqueInput,
    @Args('data', { type: () => UserAccountSettingInput })
    accountSetting: UserAccountSettingInput,
  ): Promise<User> {
    this.logger.log(`${this.joinRoom.name} called`);

    const createdUser = await this.userUseCase.joinRoom(accountSetting, where.id);
    if (createdUser === null) {
      throw new Error(`Cannnot find Room with id ${where.id}.`);
    }

    await this.roomPublishUseCase.publishUpdatedRoom(where.id, (room) => ({ updatedRoom: room }));

    return createdUser;
  }

  @Mutation(() => UserObject)
  async drawCardFromDeckCards(
    @Args('where', { type: () => UserWhereUniqueInput })
    where: UserWhereUniqueInput,
  ): Promise<User> {
    this.logger.log(`${this.drawCardFromDeckCards.name} called`);

    const updatedUser = await this.userUseCase.drawCardsFromDeckCards(where.id, 1, true);
    if (updatedUser === null) {
      throw new Error(`Cannnot find User with id ${where.id}.`);
    }

    await this.roomPublishUseCase.publishUpdatedRoom(updatedUser.joiningRoomId, (room) => ({ updatedRoom: room }));

    return updatedUser;
  }

  @Mutation(() => UserObject)
  async putHandCardToFieldCards(
    @Args('where', { type: () => UserWhereUniqueInput })
    where: UserWhereUniqueInput,
    @Args('handCardId', { type: () => String }) handCardId: string,
    @Args('subCard', { type: () => Number, nullable: true }) subCard: number,
  ): Promise<User> {
    this.logger.log(`${this.putHandCardToFieldCards.name} called`);

    const updatedUser = await this.userUseCase.putHandCardToFieldCards(where.id, handCardId, subCard);
    if (updatedUser === null) {
      throw new Error(`Cannnot find User with id ${where.id}.`);
    }

    await this.roomPublishUseCase.publishUpdatedRoom(updatedUser.joiningRoomId, (room) => ({ updatedRoom: room }));

    return updatedUser;
  }
}
