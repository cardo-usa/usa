import { Field, InputType } from '@nestjs/graphql';
import { IconBackgroundColorEnum } from '@/module/user/controller/dto/enum/icon-background-color.enum';
import type { UserAccountSetting } from '@/module/user/domain/user.model';

@InputType()
export class UserAccountSettingInput implements Partial<UserAccountSetting> {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  iconEmoji!: string;

  @Field(() => IconBackgroundColorEnum, { nullable: false })
  iconBackgroundColor!: IconBackgroundColorEnum;
}
