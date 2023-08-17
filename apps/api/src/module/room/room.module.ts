import { Module } from '@nestjs/common';
import { RoomQuery } from './controller/room-query.resolver';
import { RoomRepository } from './repository/impl/room.repository';
import { RoomUseCase } from './use-case/impl/room.use-case';
import { InjectionToken } from '@/common/constant/injection-token';

@Module({
  providers: [
    { provide: InjectionToken.ROOM_REPOSITORY, useClass: RoomRepository },
    { provide: InjectionToken.ROOM_USE_CASE, useClass: RoomUseCase },
    RoomQuery,
  ],
  exports: [{ provide: InjectionToken.ROOM_REPOSITORY, useClass: RoomRepository }],
})
export class RoomModule {}
