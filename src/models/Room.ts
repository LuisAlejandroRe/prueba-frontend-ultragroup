export interface RoomCreationDTO {
  hotelId: string;
  name: string;
  type: string;
  location: string;
  baseCost: number;
  taxes: number;
  capacity: number;
  isActive: boolean;
}

export interface Room extends RoomCreationDTO {
  id: string;
  createdAt: number;
  updatedAt: number;
}
