import { useReservationViewModel } from '../viewmodels/ReservationViewModel';
import { ReservationService } from '../services/ReservationService';
import Loader from '../components/Loader';
import ReservationCard from '../components/ReservationCard';

const reservationService = new ReservationService();

const ReservationsView = () => {
  const { reservations, loading } = useReservationViewModel(reservationService);

  return (
    <div className="w-11/12 max-w-screen-lg p-6">
      <header className="mb-8 flex w-full flex-col items-center justify-between gap-7">
        <h2 className="font-aladin text-3xl font-bold text-white">Lista de Reservaciones</h2>
      </header>
      {loading ? (
        <Loader />
      ) : reservations.length === 0 ? (
        <div className="flex w-full justify-center text-center text-lg text-gray-400">
          <p>Aún no tienes reservaciones.</p>
        </div>
      ) : (
        <ul className="flex w-full flex-wrap items-start justify-center gap-4">
          {reservations.map(reservation => (
            <ReservationCard key={reservation.id} reservation={reservation} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReservationsView;
