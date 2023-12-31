import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '@/infra/prisma/prisma.service';
import type { Room } from '@/module/room/domain/room.model';
import { User } from '@/module/user/domain/user.model';
import type { UserRepositoryInterface } from '@/module/user/repository/user.repository';

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(@Inject(PrismaService) private readonly prismaService: PrismaService) {}

  async find(userId: User['id']): Promise<User | null> {
    const foundUser = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    return foundUser && new User(foundUser);
  }

  async findManyByRoomId(roomId: Room['id']): Promise<User[]> {
    const foundUsers = await this.prismaService.user.findMany({
      where: { joiningRoomId: roomId },
    });

    return foundUsers.map((user) => new User(user));
  }

  async findManyByRoomIdOrderedByJoinedAt(roomId: Room['id']): Promise<User[]> {
    const foundUsers = await this.prismaService.user.findMany({
      where: { joiningRoomId: roomId },
      orderBy: { joinedAt: 'asc' },
    });

    return foundUsers.map((user) => new User(user));
  }

  async findManyOrderedByFinishedAt(roomId: Room['id']): Promise<User[]> {
    const foundUsers = await this.prismaService.user.findMany({
      where: { joiningRoomId: roomId },
      orderBy: { finishedAt: 'asc' },
    });

    return foundUsers.map((user) => new User(user));
  }

  async findManyByRoomIds(roomIds: Room['id'][]): Promise<User[]> {
    const foundUsers = await this.prismaService.user.findMany({
      where: { joiningRoomId: { in: roomIds } },
    });

    return foundUsers.map((user) => new User(user));
  }

  async create(user: User): Promise<User> {
    const createdUser = await this.prismaService.user.create({
      data: {
        ...user,
        handCards: user.handCards ?? undefined,
      },
    });

    return new User(createdUser);
  }

  async update(
    userId: User['id'],
    user: Partial<Omit<User, 'id' | 'handCards' | 'shouldFinish'> & Record<keyof Pick<User, 'handCards'>, NonNullable<User['handCards']>>>,
  ): Promise<User> {
    const updatedUser = await this.prismaService.user.update({
      where: { id: userId },
      data: user,
    });

    return new User(updatedUser);
  }

  async delete(userId: User['id']): Promise<User> {
    const deletedUser = await this.prismaService.user.delete({
      where: { id: userId },
    });

    return new User(deletedUser);
  }
}
