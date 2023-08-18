import { Field, ID, InputType } from '@nestjs/graphql';
import { CardObject } from '@/common/dto/object/card.object';
import { RoomGameStateEnum } from '@/module/room/controller/dto/enum/room-game-state.enum';
import type { Room } from '@/module/room/domain/room.model';

@InputType()
export class RoomUpdateInput implements Partial<Omit<Room, 'isWanted' | 'isDeckCardEmpty'>> {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field(() => RoomGameStateEnum, { nullable: true })
  gameState?: RoomGameStateEnum;

  @Field(() => CardObject, { nullable: true })
  deckCards?: CardObject[];

  @Field(() => CardObject, { nullable: true })
  fieldCards?: CardObject[];
}
