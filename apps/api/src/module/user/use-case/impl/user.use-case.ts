import { Inject, Injectable } from '@nestjs/common';
import { match } from 'ts-pattern';
import { InjectionToken } from '@/common/constant/injection-token';
import type { Room } from '@/module/room/domain/room.model';
import { RoomRepositoryInterface } from '@/module/room/repository/room.repository';
import type { User, UserAccountSetting } from '@/module/user/domain/user.model';
import { UserRepositoryInterface } from '@/module/user/repository/user.repository';
import type { UserUseCaseInterface } from '@/module/user/use-case/user.use-case';

@Injectable()
export class UserUseCase implements UserUseCaseInterface {
  constructor(
    @Inject(InjectionToken.ROOM_REPOSITORY)
    private readonly roomRepository: RoomRepositoryInterface,
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async find(userId: User['id']): Promise<User | null> {
    const foundUser = await this.userRepository.find(userId);

    return foundUser;
  }

  async joinRoom(userAccountSetting: UserAccountSetting, roomId: Room['id']): Promise<User | null> {
    const foundRoom = await this.roomRepository.find(roomId);
    if (foundRoom === null) {
      return null;
    }

    const createdUser = this.userRepository.create({
      ...userAccountSetting,
      role: 'GENERAL',
      joiningRoomId: roomId,
    });

    return createdUser;
  }

  async exitRoom(userId: User['id']): Promise<User | null> {
    const foundUser = await this.userRepository.find(userId);
    if (foundUser === null) {
      return null;
    }

    const deletedUser = await this.userRepository.delete(userId);

    const foundUsers = await this.userRepository.findManyByRoomId(foundUser.joiningRoomId);
    if (foundUsers.length === 0) {
      await this.roomRepository.delete(foundUser.joiningRoomId);
    }

    return deletedUser;
  }

  async drawCardsFromDeckCards(userId: User['id'], n: number, shouldTransitionTurn: boolean): Promise<User | null> {
    const foundUser = await this.userRepository.find(userId);
    if (foundUser === null) {
      return null;
    }

    const foundRoom = await this.roomRepository.find(foundUser.joiningRoomId);
    if (foundRoom === null || foundUser.handCards === null) {
      throw new Error(`Cannnot find Room with userId ${foundUser.id}.`);
    }

    const drawCard = foundRoom.deckCards.slice(0, n);
    if (drawCard === undefined) {
      throw new Error('No card in deck card');
    }

    let updatedUser = await this.userRepository.update(userId, {
      handCards: [...foundUser.handCards, ...drawCard],
    });

    await this.roomRepository.update(foundRoom.id, {
      deckCards: foundRoom.deckCards.slice(n),
    });

    if (shouldTransitionTurn) {
      const orderedUsers = await this.userRepository.findManyByRoomIdOrderedByJoinedAt(foundRoom.id);

      const currentUserIndex = orderedUsers.findIndex((user) => user.id === updatedUser.id);
      if (currentUserIndex === -1) {
        throw new Error(`Cannnot find currentUser with userId ${updatedUser.id}.`);
      }

      const nextUser = orderedUsers[(currentUserIndex + 1) % orderedUsers.length];
      if (nextUser === undefined) {
        throw new Error('Cannnot find nextUser.');
      }

      [updatedUser] = await this.transitionTurn(updatedUser.id, nextUser.id);
    }

    const updatedRoom = await this.roomRepository.find(foundRoom.id);
    if (updatedRoom === null) {
      throw new Error(`Cannnot find updatedRoom with roomId ${foundRoom.id}.`);
    }

    if (updatedRoom.isDeckCardEmpty) {
      const foundUsers = await this.userRepository.findManyByRoomId(foundRoom.id);
      const notFinishedUsers = foundUsers.filter((user) => user.gameState !== 'FINISHED');

      const sortedUsers = notFinishedUsers.sort((a, b) => {
        if (a.handCards === null || b.handCards === null) {
          throw new Error('Cannnot find handCards.');
        }

        return a.handCards.length - b.handCards.length;
      });

      await Promise.all(
        sortedUsers.map(async (user) => {
          await this.userRepository.update(user.id, {
            gameState: 'FINISHED',
            finishedAt: new Date(),
          });
        }),
      );

      await this.roomRepository.update(foundRoom.id, {
        gameState: 'FINISHED',
      });
    }

    return updatedUser;
  }

  async putHandCardToFieldCards(
    userId: User['id'],
    handCardId: NonNullable<User['handCards']>[number]['id'],
    subCard: number | null,
  ): Promise<User | null> {
    const foundUser = await this.userRepository.find(userId);
    if (foundUser === null) {
      return null;
    }

    const foundRoom = await this.roomRepository.find(foundUser.joiningRoomId);
    if (foundRoom === null || foundUser.handCards === null) {
      throw new Error(`Cannnot find Room with userId ${foundUser.id}.`);
    }

    const putCard = foundUser.handCards.find((handCard) => handCard.id === handCardId);
    if (putCard === undefined) {
      throw new Error(`Cannnot find handCard with handCardId ${handCardId}.`);
    }

    let updatedUser = await this.userRepository.update(userId, {
      handCards: foundUser.handCards.filter((handCard) => handCard.id !== handCardId),
    });

    await this.roomRepository.update(foundRoom.id, {
      fieldCards: [...foundRoom.fieldCards, putCard],
    });

    const orderedUsers = await this.userRepository.findManyByRoomIdOrderedByJoinedAt(foundRoom.id);

    const updatedUserOrNull = await match(putCard.type)
      .with('NUMBER', () => this.numberCardEffect(userId, orderedUsers))
      .with('SKIP', () => {
        if (subCard === null) {
          throw new Error(`Do not abbreviate subCard with type ${putCard.type}.`);
        }

        return this.skipCardEffect(userId, orderedUsers, subCard);
      })
      .with('REVERSE', () => {
        if (subCard === null) {
          throw new Error(`Do not abbreviate subCard with type ${putCard.type}.`);
        }

        return this.reverseCardEffect(userId, orderedUsers, subCard);
      })
      .with('DRAW', () => {
        if (subCard === null) {
          throw new Error(`Do not abbreviate subCard with type ${putCard.type}.`);
        }

        return this.drawCardEffect(userId, orderedUsers, subCard);
      })
      .with('WILD', () => this.wildCardEffect(userId, orderedUsers))
      .exhaustive();

    if (updatedUserOrNull === null) {
      throw new Error(`Cannnot find updatedUser with userId ${userId}.`);
    }

    updatedUser = updatedUserOrNull;

    if (updatedUser.shouldFinish) {
      updatedUser = await this.userRepository.update(userId, {
        gameState: 'FINISHED',
        finishedAt: new Date(),
      });
    }

    const updatedUsers = await this.userRepository.findManyByRoomId(foundRoom.id);
    if (updatedUsers.filter((user) => user.gameState === 'FINISHED').length === updatedUsers.length - 1) {
      const notFinishedUser = updatedUsers.find((user) => user.gameState !== 'FINISHED');
      if (notFinishedUser === undefined) {
        throw new Error('Cannnot find notFinishedUser.');
      }

      await this.userRepository.update(notFinishedUser.id, {
        gameState: 'FINISHED',
        finishedAt: new Date(),
      });

      await this.roomRepository.update(foundRoom.id, {
        gameState: 'FINISHED',
      });
    }

    return updatedUser;
  }

  private async numberCardEffect(currentUserId: User['id'], orderedUsers: User[]): Promise<User> {
    const currentUserIndex = orderedUsers.findIndex((user) => user.id === currentUserId);
    if (currentUserIndex === -1) {
      throw new Error(`Cannnot find currentUser with userId ${currentUserId}.`);
    }

    const nextUser = orderedUsers[(currentUserIndex + 1) % orderedUsers.length];
    if (nextUser === undefined) {
      throw new Error('Cannnot find nextUser.');
    }

    const [updatedUser] = await this.transitionTurn(currentUserId, nextUser.id);

    return updatedUser;
  }

  private async skipCardEffect(currentUserId: User['id'], orderedUsers: User[], n: number): Promise<User> {
    const currentUserIndex = orderedUsers.findIndex((user) => user.id === currentUserId);
    if (currentUserIndex === -1) {
      throw new Error(`Cannnot find currentUser with userId ${currentUserId}.`);
    }

    const nextUser = orderedUsers[(currentUserIndex + n) % orderedUsers.length];
    if (nextUser === undefined) {
      throw new Error('Cannnot find nextUser.');
    }

    const [updatedCurrentUser] = await this.transitionTurn(currentUserId, nextUser.id);

    return updatedCurrentUser;
  }

  private async reverseCardEffect(currentUserId: User['id'], orderedUsers: User[], n: number): Promise<User> {
    const currentUserIndex = orderedUsers.findIndex((user) => user.id === currentUserId);
    if (currentUserIndex === -1) {
      throw new Error(`Cannnot find currentUser with userId ${currentUserId}.`);
    }

    const nextUser = orderedUsers[(currentUserIndex + (n % 2 === 0 ? 1 : -1)) % orderedUsers.length];
    if (nextUser === undefined) {
      throw new Error('Cannnot find nextUser.');
    }

    const [updatedCurrentUser] = await this.transitionTurn(currentUserId, nextUser.id);

    return updatedCurrentUser;
  }

  private async drawCardEffect(currentUserId: User['id'], orderedUsers: User[], n: number): Promise<User | null> {
    const currentUserIndex = orderedUsers.findIndex((user) => user.id === currentUserId);
    if (currentUserIndex === -1) {
      throw new Error(`Cannnot find currentUser with userId ${currentUserId}.`);
    }

    const nextUser = orderedUsers[(currentUserIndex + 1) % orderedUsers.length];
    if (nextUser === undefined) {
      throw new Error('Cannnot find nextUser.');
    }

    const updatedNextUser = await this.drawCardsFromDeckCards(nextUser.id, n, false);
    if (updatedNextUser === null) {
      throw new Error(`Cannnot find nextUser with userId ${nextUser.id}.`);
    }

    const [updatedCurrentUser] = await this.transitionTurn(nextUser.id, updatedNextUser.id);

    return updatedCurrentUser;
  }

  private async wildCardEffect(currentUserId: User['id'], orderedUsers: User[]): Promise<User> {
    const currentUserIndex = orderedUsers.findIndex((user) => user.id === currentUserId);
    if (currentUserIndex === -1) {
      throw new Error(`Cannnot find currentUser with userId ${currentUserId}.`);
    }

    const nextUser = orderedUsers[(currentUserIndex + 1) % orderedUsers.length];
    if (nextUser === undefined) {
      throw new Error('Cannnot find nextUser.');
    }

    const [updatedUser] = await this.transitionTurn(currentUserId, nextUser.id);

    return updatedUser;
  }

  private async transitionTurn(currentUserId: User['id'], nextUserId: User['id']): Promise<[User, User]> {
    const [updatedUser, updatedNextUser] = await Promise.all([
      await this.userRepository.update(currentUserId, {
        isMyTurn: false,
      }),
      await this.userRepository.update(nextUserId, {
        isMyTurn: true,
      }),
    ]);

    return [updatedUser, updatedNextUser];
  }
}
