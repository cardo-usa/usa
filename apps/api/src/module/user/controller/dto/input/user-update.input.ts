import { Field, InputType } from '@nestjs/graphql';
import { CardObject } from '@/common/dto/object/card.object';
import { GameStateEnum } from '@/module/user/controller/dto/enum/game-state.enum';
import { IconBackgroundColorEnum } from '@/module/user/controller/dto/enum/icon-background-color.enum';
import { RoleEnum } from '@/module/user/controller/dto/enum/role.enum';
import type { User } from '@/module/user/domain/user.model';

@InputType()
export class UserUpdateInput implements Partial<User> {
  @Field(() => String, { nullable: true })
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

  @Field(() => GameStateEnum, { nullable: true })
  gameState?: GameStateEnum | null;

  @Field(() => Date, { nullable: true })
  finishedAt?: Date | null;
}
