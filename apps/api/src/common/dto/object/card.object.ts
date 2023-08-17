import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CardColorEnum } from '@/common/dto/enum/card-color.enum';
import { CardTypeEnum } from '@/common/dto/enum/card-type.enum';
import type { Card } from '@/common/model/card.model';

@ObjectType('Card')
export class CardObject implements Card {
  @Field(() => CardTypeEnum)
  type!: CardTypeEnum;

  @Field(() => CardColorEnum)
  color!: CardColorEnum;

  @Field(() => Int, { nullable: true })
  number!: number | null;
}
