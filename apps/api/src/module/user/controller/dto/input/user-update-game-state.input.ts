import { Field, InputType } from '@nestjs/graphql';
import type { UserUpdateInput } from './user-update.input';
import { UserGameStateEnum } from '@/module/user/controller/dto/enum/user-game-state.enum';

@InputType()
export class UserUpdateGameStateInput implements Record<keyof Pick<UserUpdateInput, 'gameState'>, NonNullable<UserUpdateInput['gameState']>> {
  @Field(() => UserGameStateEnum, { nullable: false })
  gameState!: UserGameStateEnum;
}
