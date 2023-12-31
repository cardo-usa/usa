import { Field, ID, InputType } from '@nestjs/graphql';
import { CardObject } from '@/common/dto/object/card.object';
import { IconBackgroundColorEnum } from '@/module/user/controller/dto/enum/icon-background-color.enum';
import { RoleEnum } from '@/module/user/controller/dto/enum/role.enum';
import { UserGameStateEnum } from '@/module/user/controller/dto/enum/user-game-state.enum';
import type { User } from '@/module/user/domain/user.model';

@InputType()
export class UserUpdateInput implements Partial<User> {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field(() => RoleEnum, { nullable: true })
  role?: RoleEnum;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  iconEmoji?: string;

  @Field(() => IconBackgroundColorEnum, { nullable: true })
  iconBackgroundColor?: IconBackgroundColorEnum;

  @Field(() => Date, { nullable: true })
  joinedAt?: Date;

  @Field(() => [CardObject], { nullable: true })
  handCards?: CardObject[];

  @Field(() => Boolean, { nullable: true })
  isMyTurn?: boolean | null;

  @Field(() => UserGameStateEnum, { nullable: true })
  gameState?: UserGameStateEnum | null;

  @Field(() => Date, { nullable: true })
  finishedAt?: Date | null;
}
