export interface Room {
  id: string;
  hotelId: string;
  type: string;
  baseCost: number;
  taxes: number;
  location: string;
  isActive: boolean;
  createdAt: number;
  updatedAt: number;
}
