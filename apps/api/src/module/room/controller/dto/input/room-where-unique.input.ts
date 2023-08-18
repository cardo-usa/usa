import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class RoomWhereUniqueInput {
  @Field(() => ID, { nullable: false })
  id!: string;
}
