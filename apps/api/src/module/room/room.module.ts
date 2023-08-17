import { Module, forwardRef } from '@nestjs/common';
import { RoomMutation } from './controller/room-mutation.resolver';
import { RoomQuery } from './controller/room-query.resolver';
import { RoomResolver } from './controller/room.resolver';
import { RoomUsersDataLoader } from './dataloader/room-users.dataloader';
import { RoomDataLoader } from './dataloader/room.dataloader';
import { RoomRepository } from './repository/impl/room.repository';
import { RoomUseCase } from './use-case/impl/room.use-case';
import { InjectionToken } from '@/common/constant/injection-token';
import { UserModule } from '@/module/user/user.module';

@Module({
  imports: [forwardRef(() => UserModule)],
  providers: [
    RoomDataLoader,
    RoomUsersDataLoader,
    { provide: InjectionToken.ROOM_REPOSITORY, useClass: RoomRepository },
    { provide: InjectionToken.ROOM_USE_CASE, useClass: RoomUseCase },
    RoomResolver,
    RoomQuery,
    RoomMutation,
  ],
  exports: [RoomDataLoader, RoomUsersDataLoader, { provide: InjectionToken.ROOM_REPOSITORY, useClass: RoomRepository }],
})
export class RoomModule {}
