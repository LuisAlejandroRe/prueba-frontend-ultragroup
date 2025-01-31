import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Reservation, ReservationCreationDTO } from '../models/Reservation';

export class ReservationService {
  private collectionRef = collection(db, 'reservations');

  async getReservations(): Promise<Reservation[]> {
    try {
      const snapshot = await getDocs(this.collectionRef);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Reservation[];
    } catch (error) {
      console.error('Error obteniendo reservaciones:', error);
      throw new Error('No se pudo obtener la lista de reservaciones.');
    }
  }

  async createReservation(reservation: ReservationCreationDTO): Promise<void> {
    try {
      const reservationRef = doc(this.collectionRef);
      const reservationData: Reservation = {
        ...reservation,
        id: reservationRef.id,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      await setDoc(reservationRef, reservationData);
    } catch (error) {
      console.error('Error creando reservación:', error);
      throw new Error('No se pudo crear el reservación.');
    }
  }
}
