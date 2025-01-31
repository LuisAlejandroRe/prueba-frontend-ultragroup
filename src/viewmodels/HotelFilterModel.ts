import { useState } from 'react';
import { toast } from 'react-toastify';

import { Hotel, HotelFilter } from '../models/Hotel';
import { Room } from '../models/Room';
import { HotelService } from '../services/HotelService';
import { RoomService } from '../services/RoomService';

export interface HotelWithRooms extends Hotel {
  rooms: Room[];
}

export const useHotelFilterModel = (hotelService: HotelService, roomService: RoomService) => {
  const [hotels, setHotels] = useState<HotelWithRooms[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hotelFilters, setHotelFilters] = useState<HotelFilter>({
    checkInDate: '',
    checkOutDate: '',
    destinationCity: '',
    numberOfPeople: 0,
  });

  const fetchHotels = async (filters: HotelFilter): Promise<void> => {
    setHotelFilters(filters);
    setLoading(true);
    try {
      const rooms = await roomService.getRooms({ capacity: filters.numberOfPeople, location: filters.destinationCity, isActive: true });
      if (rooms.length === 0) return;

      const hotelsList = Array.from(new Set(rooms.map(room => room.hotelId)));
      const hotelsData = await Promise.all(hotelsList.map(async hotelId => hotelService.getHotelById(hotelId)));
      const data = hotelsData
        .filter(hotel => hotel !== null)
        .filter(hotel => hotel.isActive)
        .map(hotel => {
          const hotelRooms = rooms.filter(room => room.hotelId === hotel?.id);
          return { ...hotel, rooms: hotelRooms };
        });

      setHotels(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { hotels, hotelFilters, loading, fetchHotels };
};
