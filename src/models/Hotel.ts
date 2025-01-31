export interface HotelCreationDTO {
  name: string;
  location: string;
  isActive: boolean;
}

export interface Hotel extends HotelCreationDTO {
  id: string;
  createdAt: number;
  updatedAt: number;
}

export interface HotelFilter {
  checkInDate: string;
  checkOutDate: string;
  numberOfPeople: number;
  destinationCity: string;
}
