import { useRoomViewModel } from '../viewmodels/RoomViewModel';
import { RoomService } from '../services/RoomService';
import Loader from '../components/Loader';
import RoomCreation from '../components/RoomCreation';
import RoomCard from '../components/RoomCard';

const roomService = new RoomService();

const RoomDetailView = () => {
  const { rooms, loading, hotelId, fetchRooms, updateRoom } = useRoomViewModel(roomService);

  return (
    <div className="w-11/12 max-w-screen-lg p-6">
      <header className="mb-8 flex w-full flex-col items-center justify-between gap-7">
        <RoomCreation hotelId={hotelId!} onSuccess={fetchRooms} />
        <h2 className="font-aladin text-3xl font-bold text-white">Lista de habitaciones del hotel</h2>
      </header>
      {loading ? (
        <Loader />
      ) : rooms.length === 0 ? (
        <div className="flex w-full justify-center text-center text-lg text-gray-400">
          <p>No hay habitaciones disponibles en este hotel.</p>
        </div>
      ) : (
        <ul className="flex w-full flex-wrap items-start justify-center gap-4">
          {rooms.map(room => (
            <RoomCard key={room.id} room={room} updateRoom={updateRoom} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RoomDetailView;
