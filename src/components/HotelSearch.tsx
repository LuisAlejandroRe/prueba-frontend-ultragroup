import { HotelService } from '../services/HotelService';
import { RoomService } from '../services/RoomService';
import { useHotelFilterModel } from '../viewmodels/HotelFilterModel';
import HotelFilterModal from './HotelFilterModal';
import Loader from './Loader';
import ReservationCreation from './ReservationCreation';

const hotelService = new HotelService();
const roomService = new RoomService();

const HotelSearch = () => {
  const { hotels, hotelFilters, loading, fetchHotels } = useHotelFilterModel(hotelService, roomService);

  return (
    <div className="w-11/12 max-w-screen-lg p-6">
      <header className="mb-8 flex w-full flex-col items-center justify-between gap-7">
        <h2 className="font-aladin text-3xl font-bold text-white">Encuentra un hotel</h2>
        <HotelFilterModal onSubmit={fetchHotels} />
      </header>
      {loading ? (
        <Loader />
      ) : hotels.length === 0 ? (
        <div className="flex w-full justify-center text-center text-lg text-gray-400">
          <p>Aún no tenemos resultados</p>
        </div>
      ) : (
        <ul className="flex w-full flex-wrap items-start justify-center gap-4">
          {hotels.map(hotel => (
            <li key={hotel.id} className="card-container my-2 gap-6">
              <div className="flex w-full justify-center border-b border-blue-300 py-3">
                <h3 className="font-aladin text-3xl font-semibold text-yellow-200">{hotel.name}</h3>
              </div>
              <span>Ubicación: {hotel.location}</span>
              <div className="flex items-center justify-center gap-5 px-5 py-4">
                {hotel.rooms.length > 0 &&
                  hotel.rooms.map(room => (
                    <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-500 p-4 shadow-custom">
                      <span className="font-aladin text-xl text-yellow-200">Habitación {room.name}</span>
                      <span>Tipo: {room.type}</span>
                      <span>Costo base: {room.baseCost}</span>
                      <span>Impuestos: {room.taxes}</span>
                      <ReservationCreation
                        reservationData={{
                          roomId: room.id,
                          checkInDate: hotelFilters.checkInDate,
                          checkOutDate: hotelFilters.checkOutDate,
                          numberOfPeople: hotelFilters.numberOfPeople,
                          destinationCity: hotelFilters.destinationCity,
                        }}
                      />
                    </div>
                  ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HotelSearch;
