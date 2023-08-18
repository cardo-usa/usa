import { Module, forwardRef } from '@nestjs/common';
import { UserMutation } from './controller/user-mutation.resolver';
import { UserQuery } from './controller/user-query.resolver';
import { UserSubscription } from './controller/user-subscription.resolver';
import { UserResolver } from './controller/user.resolver';
import { UserRepository } from './repository/impl/user.repository';
import { UserUseCase } from './use-case/impl/user.use-case';
import { InjectionToken } from '@/common/constant/injection-token';
import { RoomModule } from '@/module/room/room.module';

@Module({
  imports: [forwardRef(() => RoomModule)],
  providers: [
    { provide: InjectionToken.USER_REPOSITORY, useClass: UserRepository },
    { provide: InjectionToken.USER_USE_CASE, useClass: UserUseCase },
    UserResolver,
    UserQuery,
    UserMutation,
    UserSubscription,
  ],
  exports: [{ provide: InjectionToken.USER_REPOSITORY, useClass: UserRepository }],
})
export class UserModule {}
