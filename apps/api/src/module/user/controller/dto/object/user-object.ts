import { Field, ObjectType } from '@nestjs/graphql';
import { CardObject } from '@/common/dto/object/card.object';
import { GameStateEnum } from '@/module/user/controller/dto/enum/game-state.enum';
import { IconBackgroundColorEnum } from '@/module/user/controller/dto/enum/icon-background-color.enum';
import { RoleEnum } from '@/module/user/controller/dto/enum/role.enum';
import type { User } from '@/module/user/domain/user.model';

@ObjectType('User')
export class UserObject implements User {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => RoleEnum, { nullable: false })
  role!: RoleEnum;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  iconEmoji!: string;

  @Field(() => IconBackgroundColorEnum, { nullable: false })
  iconBackgroundColor!: IconBackgroundColorEnum;

  @Field(() => Date, { nullable: false })
  joinedAt!: Date;

  @Field(() => [CardObject], { nullable: false })
  handCards!: CardObject[];

  @Field(() => Boolean, { nullable: true })
  isMyTurn!: boolean | null;

  @Field(() => GameStateEnum, { nullable: true })
  gameState!: GameStateEnum | null;

  @Field(() => Date, { nullable: true })
  finishedAt!: Date | null;
}
