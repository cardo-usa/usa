import { Field, InputType } from '@nestjs/graphql';
import type { RoomUpdateInput } from './room-update.input';
import { RoomGameStateEnum } from '@/module/room/controller/dto/enum/room-game-state.enum';

@InputType()
export class RoomUpdateGameStateInput implements Record<keyof Pick<RoomUpdateInput, 'gameState'>, NonNullable<RoomUpdateInput['gameState']>> {
  @Field(() => RoomGameStateEnum, { nullable: false })
  gameState!: RoomGameStateEnum;
}
