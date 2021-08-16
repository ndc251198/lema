import { LemaEntity } from "./lema-entity.interface";

export interface Booking extends LemaEntity {
  Id: number;

  BookingNo: string;

  HotelId?: number;

  GuestId?: number;

  CompanyId?: number;

  StartTime: Date;

  EndTime?: Date;

  Status?: number;

  Note?: String;

  GuestName?: string;

  GuestFirstName?: string;

  GuestLastName?: string;
}