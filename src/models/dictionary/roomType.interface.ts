import { Room } from "./room.interface";

export interface RoomType {
  id: number;

  code: string;

  name: string;
  
  description: string;

  rooms: Array<Room>
}