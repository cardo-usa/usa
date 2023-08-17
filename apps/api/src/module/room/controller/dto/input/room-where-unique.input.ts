import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RoomWhereUniqueInput {
  @Field(() => String, { nullable: false })
  id!: string;
}
