import { Field, ObjectType } from '@nestjs/graphql';
import { CardObject } from '@/common/dto/object/card.object';
import { RoomGameStateEnum } from '@/module/room/controller/dto/enum/room-game-state.enum';
import type { Room } from '@/module/room/domain/room.model';

@ObjectType('Room')
export class RoomObject implements Omit<Room, 'isWanted'> {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => RoomGameStateEnum, { nullable: false })
  gameState!: RoomGameStateEnum;

  @Field(() => [CardObject], { nullable: false })
  deckCards!: CardObject[];

  @Field(() => [CardObject], { nullable: false })
  fieldCards!: CardObject[];
}
