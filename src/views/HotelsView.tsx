import { useHotelViewModel } from '../viewmodels/HotelViewModel';
import { HotelService } from '../services/HotelService';
import Loader from '../components/Loader';
import HotelCreation from '../components/HotelCreation';
import HotelCard from '../components/HotelCard';

const hotelService = new HotelService();

const HotelsView = () => {
  const { hotels, loading, fetchHotels, updateHotel } = useHotelViewModel(hotelService);

  return (
    <div className="w-11/12 max-w-screen-lg p-6">
      <header className="mb-8 flex w-full flex-col items-center justify-between gap-7">
        <HotelCreation onSuccess={fetchHotels} />
        <h2 className="font-aladin text-3xl font-bold text-white">Lista de Hoteles</h2>
      </header>
      {loading ? (
        <Loader />
      ) : hotels.length === 0 ? (
        <div className="flex w-full justify-center text-center text-lg text-gray-400">
          <p>No tienes hoteles agregados.</p>
        </div>
      ) : (
        <ul className="flex w-full flex-wrap items-start justify-center gap-4">
          {hotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} updateHotel={updateHotel} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default HotelsView;
