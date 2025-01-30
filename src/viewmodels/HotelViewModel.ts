import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Hotel, HotelCreationDTO } from '../models/Hotel';
import { HotelService } from '../services/HotelService';

export const useHotelViewModel = (hotelService: HotelService) => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async (): Promise<void> => {
    setLoading(true);
    try {
      const data = await hotelService.getHotels();
      setHotels(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateHotel = async (id: string, data: Partial<HotelCreationDTO>): Promise<void> => {
    try {
      await hotelService.updateHotel(id, { ...data, updatedAt: Date.now() });
      toast.success('Hotel actualizado!');
      fetchHotels();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return { hotels, loading, fetchHotels, updateHotel };
};
