import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CardObject } from '@/common/dto/object/card.object';
import { RoomObject } from '@/module/room/controller/dto/object/room.object';
import { IconBackgroundColorEnum } from '@/module/user/controller/dto/enum/icon-background-color.enum';
import { RoleEnum } from '@/module/user/controller/dto/enum/role.enum';
import { UserGameStateEnum } from '@/module/user/controller/dto/enum/user-game-state.enum';
import type { User } from '@/module/user/domain/user.model';

@ObjectType('User')
export class UserObject implements Omit<User, 'joiningRoomId' | 'shouldFinish'> {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => RoleEnum, { nullable: false })
  role!: RoleEnum;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  iconEmoji!: string;

  @Field(() => IconBackgroundColorEnum, { nullable: false })
  iconBackgroundColor!: IconBackgroundColorEnum;

  @Field(() => RoomObject, { nullable: false })
  joiningRoom!: RoomObject;

  @Field(() => Date, { nullable: false })
  joinedAt!: Date;

  @Field(() => [CardObject], { nullable: false })
  handCards!: CardObject[];

  @Field(() => Boolean, { nullable: true })
  isMyTurn!: boolean | null;

  @Field(() => UserGameStateEnum, { nullable: true })
  gameState!: UserGameStateEnum | null;

  @Field(() => Date, { nullable: true })
  finishedAt!: Date | null;
}
