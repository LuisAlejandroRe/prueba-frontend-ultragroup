export interface HotelCreationDTO {
  name: string;
  location: string;
  isActive: boolean;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  isActive: boolean;
  createdAt: number;
  updatedAt: number;
}
