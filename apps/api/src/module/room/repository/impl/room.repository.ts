import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { Room } from '@/module/room/domain/room.model';
import type { RoomRepositoryInterface } from '@/module/room/repository/room.repository';

@Injectable()
export class RoomRepository implements RoomRepositoryInterface {
  constructor(@Inject(PrismaService) private readonly prismaService: PrismaService) {}

  async find(roomId: string): Promise<Room | null> {
    const foundRoom = await this.prismaService.room.findUnique({
      where: { id: roomId },
    });

    return foundRoom && new Room(foundRoom);
  }

  async findMany(roomIds: string[]): Promise<Room[]> {
    const foundRooms = await this.prismaService.room.findMany({
      where: { id: { in: roomIds } },
    });

    return foundRooms.map((foundRoom) => new Room(foundRoom));
  }

  async create(): Promise<Room> {
    const createdRoom = await this.prismaService.room.create({});

    return new Room(createdRoom);
  }
}
