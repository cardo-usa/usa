import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { Room } from '@/module/room/domain/room.model';
import type { RoomRepositoryInterface } from '@/module/room/repository/room.repository';

@Injectable()
export class RoomRepository implements RoomRepositoryInterface {
  constructor(@Inject(PrismaService) private readonly prismaService: PrismaService) {}

  async find(roomId: Room['id']): Promise<Room | null> {
    const foundRoom = await this.prismaService.room.findUnique({
      where: { id: roomId },
    });

    return foundRoom && new Room(foundRoom);
  }

  async findMany(roomIds: Room['id'][]): Promise<Room[]> {
    const foundRooms = await this.prismaService.room.findMany({
      where: { id: { in: roomIds } },
    });

    return foundRooms.map((foundRoom) => new Room(foundRoom));
  }

  async create(): Promise<Room> {
    const createdRoom = await this.prismaService.room.create({});

    return new Room(createdRoom);
  }

  async update(roomId: Room['id'], room: Partial<Omit<Room, 'id' | 'isWanted'>>): Promise<Room> {
    const updatedRoom = await this.prismaService.room.update({
      where: { id: roomId },
      data: room,
    });

    return new Room(updatedRoom);
  }
}
