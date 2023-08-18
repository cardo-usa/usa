import { Field, InputType } from '@nestjs/graphql';
import { IconBackgroundColorEnum } from '@/module/user/controller/dto/enum/icon-background-color.enum';
import type { UserAccountSetting } from '@/module/user/domain/user.model';

@InputType()
export class UserUpdateAccountSettingInput implements Partial<UserAccountSetting> {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  iconEmoji?: string;

  @Field(() => IconBackgroundColorEnum, { nullable: true })
  iconBackgroundColor?: IconBackgroundColorEnum;
}
