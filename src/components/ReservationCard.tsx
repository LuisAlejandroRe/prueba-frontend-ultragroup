import { Reservation } from '../models/Reservation';

interface ReservationCardProps {
  reservation: Reservation;
}

const ReservationCard = ({ reservation }: ReservationCardProps) => {
  return (
    <li className="card-container my-2 gap-6">
      <div className="flex w-full justify-center border-b border-blue-300 px-7 py-3">
        <h3 className="font-aladin text-3xl font-semibold text-yellow-200">Reservación {reservation.id}</h3>
      </div>

      <span>
        <strong>Destino:</strong> {reservation.destinationCity}
      </span>
      <span>
        <strong>Check-in:</strong> {reservation.checkInDate}
      </span>
      <span>
        <strong>Check-out:</strong> {reservation.checkOutDate}
      </span>
      <span>
        <strong>Número de pasajeros:</strong> {reservation.numberOfPeople}
      </span>

      {/* Pasajeros */}
      <div className="mt-2 w-full px-7">
        <h4 className="text-lg font-semibold text-yellow-200">Pasajeros:</h4>
        <ul>
          {reservation.passengers.map((passenger, index) => (
            <li key={index} className="my-2 border-b pb-2">
              <p>
                <strong>Nombre:</strong> {passenger.fullName}
              </p>
              <p>
                <strong>Fecha de nacimiento:</strong> {passenger.birthDate}
              </p>
              <p>
                <strong>Género:</strong> {passenger.gender}
              </p>
              <p>
                <strong>Documento:</strong> {passenger.documentType} - {passenger.documentNumber}
              </p>
              <p>
                <strong>Email:</strong> {passenger.email}
              </p>
              <p>
                <strong>Teléfono:</strong> {passenger.contactPhone}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Contacto de emergencia */}
      <div className="mt-2 w-full px-7">
        <h4 className="text-lg font-semibold text-yellow-200">Contacto de Emergencia:</h4>
        <p>
          <strong>Nombre:</strong> {reservation.emergencyContact.fullName}
        </p>
        <p>
          <strong>Teléfono:</strong> {reservation.emergencyContact.contactPhone}
        </p>
      </div>

      <span className="mb-7 text-xs text-gray-400">Creado el {new Date(reservation.createdAt).toLocaleDateString()}</span>
    </li>
  );
};

export default ReservationCard;
