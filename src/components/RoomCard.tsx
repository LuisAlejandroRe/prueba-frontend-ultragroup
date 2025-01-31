import { Room } from '../models/Room';

interface RoomCardProps {
  room: Room;
  updateRoom: Function;
}

const RoomCard = ({ room, updateRoom }: RoomCardProps) => {
  return (
    <li key={room.id} className="card-container my-2 gap-3">
      <div className="flex w-full justify-center border-b border-blue-300 py-3">
        <h3 className="font-aladin text-3xl font-semibold text-yellow-200">{room.name}</h3>
      </div>

      <span>Tipo de habitación: {room.type}</span>
      <span>
        Capacidad: {room.capacity} persona{room.capacity > 1 ? 's' : ''}
      </span>
      <span>Costo base: ${room.baseCost}</span>
      <span>Impuestos: ${room.taxes}</span>

      <span>
        Estado: <span className={room.isActive ? 'text-green-300' : 'text-red-300'}>{room.isActive ? 'Habilitada' : 'Deshabilitada'}</span>
      </span>

      <button className="main-button my-4" onClick={() => updateRoom(room.id, { isActive: !room.isActive })}>
        {room.isActive ? 'Deshabilitar' : 'Habilitar'}
      </button>
    </li>
  );
};

export default RoomCard;
