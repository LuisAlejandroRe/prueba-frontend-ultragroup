interface Passenger {
  fullName: string;
  birthDate: string;
  gender: string;
  documentType: string;
  documentNumber: string;
  email: string;
  contactPhone: string;
}

interface EmergencyContact {
  fullName: string;
  contactPhone: string;
}

export interface ReservationCreationDTO {
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  numberOfPeople: number;
  destinationCity: string;
  passengers: Passenger[];
  emergencyContact: EmergencyContact;
}

export interface Reservation extends ReservationCreationDTO {
  id: string;
  createdAt: number;
  updatedAt: number;
}
