import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Room, RoomCreationDTO } from '../models/Room';
import { RoomService } from '../services/RoomService';

export const useRoomViewModel = (roomService: RoomService) => {
  const { hotelId } = useParams<{ hotelId: string }>();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (hotelId) {
      fetchRooms({ hotelId });
    }
  }, [hotelId]);

  const fetchRooms = async (filters?: Partial<RoomCreationDTO>): Promise<void> => {
    setLoading(true);
    try {
      const data = await roomService.getRooms(filters);
      setRooms(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateRoom = async (id: string, data: Partial<RoomCreationDTO>): Promise<void> => {
    try {
      await roomService.updateRoom(id, { ...data, updatedAt: Date.now() });
      toast.success('Habitación actualizada!');
      fetchRooms();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return { rooms, loading, hotelId, fetchRooms, updateRoom };
};
