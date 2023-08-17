import { Inject, Injectable } from '@nestjs/common';
import { InjectionToken } from '@/common/constant/injection-token';
import { RoomRepositoryInterface } from '@/module/room/repository/room.repository';
import type { RoomUseCaseInterface } from '@/module/room/use-case/room.use-case';

@Injectable()
export class RoomUseCase implements RoomUseCaseInterface {
  constructor(
    @Inject(InjectionToken.ROOM_REPOSITORY)
    private readonly roomRepository: RoomRepositoryInterface,
  ) {}

  async verifyCanJoinRoom(roomId: string): Promise<boolean> {
    const foundRoom = await this.roomRepository.find(roomId);

    const canJoinRoom = foundRoom?.isWanted ?? false;

    return canJoinRoom;
  }
}
