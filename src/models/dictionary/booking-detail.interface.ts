import { LemaEntity } from "./lema-entity.interface";

export interface BookingDetail extends LemaEntity {
  Id: number;

  BookingId: number;

  RoomId?: number;

  StartTime: Date;

  EndTime?: Date;

  child?: number;

  adult?: number;

  Status?: number;

  Note?: String;

  GuestName?: string;

  GuestFirstName?: string;

  GuestLastName?: string;
}