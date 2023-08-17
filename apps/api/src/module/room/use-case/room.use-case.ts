export interface RoomUseCaseInterface {
  verifyCanJoinRoom(roomId: string): Promise<boolean>;
}
