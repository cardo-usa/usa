import { Field, InputType } from '@nestjs/graphql';
import type { UserUpdateInput } from './user-update.input';
import { GameStateEnum } from '@/module/user/controller/dto/enum/game-state.enum';

@InputType()
export class UserUpdateGameStateInput implements Record<keyof Pick<UserUpdateInput, 'gameState'>, NonNullable<UserUpdateInput['gameState']>> {
  @Field(() => GameStateEnum, { nullable: false })
  gameState!: GameStateEnum;
}
