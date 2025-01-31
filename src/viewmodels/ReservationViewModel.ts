import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Reservation } from '../models/Reservation';
import { ReservationService } from '../services/ReservationService';

export const useReservationViewModel = (reservationService: ReservationService) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async (): Promise<void> => {
    setLoading(true);
    try {
      const data = await reservationService.getReservations();
      setReservations(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { reservations, loading, fetchReservations };
};
