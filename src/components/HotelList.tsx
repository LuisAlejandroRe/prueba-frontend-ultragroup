import { useHotelViewModel } from '../viewmodels/HotelViewModel';
import { HotelService } from '../services/HotelService';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import HotelCreation from './HotelCreation';

const hotelService = new HotelService();

export const HotelList = () => {
  const { hotels, loading, fetchHotels, updateHotel } = useHotelViewModel(hotelService);

  return (
    <div className="w-11/12 max-w-screen-lg p-6">
      <header className="mb-8 flex w-full flex-col items-center justify-between gap-7">
        <HotelCreation onSuccess={fetchHotels} />
        <h2 className="font-bonanova text-3xl font-bold text-white">Lista de Hoteles</h2>
      </header>
      {loading ? (
        <Loader />
      ) : (
        <ul className="flex w-full flex-wrap items-start justify-center gap-4">
          {hotels.map(hotel => (
            <li
              key={hotel.id}
              className="bg-custom-blue my-2 flex flex-col items-center justify-between gap-6 rounded-3xl border border-gray-500 text-white"
            >
              <div className="flex w-full justify-center border-b border-blue-300 py-3">
                <h3 className="font-bonanova text-3xl font-semibold text-yellow-200">{hotel.name}</h3>
              </div>
              <span className="">Ubicación: {hotel.location}</span>
              <span className="">
                Estado:{' '}
                <span className={hotel.isActive ? 'text-green-300' : 'text-red-300'}>
                  {hotel.isActive ? 'Habilitado' : 'Deshabilitado'}
                </span>
              </span>
              <div className="flex items-center justify-center gap-5 px-5 py-4">
                <Link to={`/hotel/${hotel.id}`} className="main-button">
                  Ver habitaciones
                </Link>
                <button className="main-button" onClick={() => updateHotel(hotel.id, { isActive: !hotel.isActive })}>
                  {hotel.isActive ? 'Deshabilitar' : 'Habilitar'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
