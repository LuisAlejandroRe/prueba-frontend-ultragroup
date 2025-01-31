import { Link } from 'react-router-dom';
import { Hotel } from '../models/Hotel';

interface HotelCardProps {
  hotel: Hotel;
  updateHotel: Function;
}

const HotelCard = ({ hotel, updateHotel }: HotelCardProps) => {
  return (
    <li className="card-container my-2 gap-6">
      <div className="flex w-full justify-center border-b border-blue-300 py-3">
        <h3 className="font-aladin text-3xl font-semibold text-yellow-200">{hotel.name}</h3>
      </div>
      <span>Ubicación: {hotel.location}</span>
      <span>
        Estado:{' '}
        <span className={hotel.isActive ? 'text-green-300' : 'text-red-300'}>{hotel.isActive ? 'Habilitado' : 'Deshabilitado'}</span>
      </span>
      <div className="flex items-center justify-center gap-5 px-5 py-4">
        <Link to={`/agent-dashboard/hotel/${hotel.id}`} className="main-button">
          Ver habitaciones
        </Link>
        <button className="main-button" onClick={() => updateHotel(hotel.id, { isActive: !hotel.isActive })}>
          {hotel.isActive ? 'Deshabilitar' : 'Habilitar'}
        </button>
      </div>
    </li>
  );
};

export default HotelCard;
