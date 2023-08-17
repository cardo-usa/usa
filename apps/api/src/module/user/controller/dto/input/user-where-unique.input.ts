import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UserWhereUniqueInput {
  @Field(() => ID, { nullable: false })
  id!: string;
}
