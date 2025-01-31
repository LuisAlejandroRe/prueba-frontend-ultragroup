import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Hotel, HotelCreationDTO } from '../models/Hotel';

export class HotelService {
  private collectionRef = collection(db, 'hotels');

  async getHotels(): Promise<Hotel[]> {
    try {
      const snapshot = await getDocs(this.collectionRef);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Hotel[];
    } catch (error) {
      console.error('Error obteniendo hoteles:', error);
      throw new Error('No se pudo obtener la lista de hoteles.');
    }
  }

  async getHotelById(id: string): Promise<Hotel | null> {
    try {
      const hotelRef = doc(this.collectionRef, id);
      const docSnap = await getDoc(hotelRef);
      if (!docSnap.exists()) return null;
      return { id: docSnap.id, ...docSnap.data() } as Hotel;
    } catch (error) {
      console.error('Error obteniendo hotel:', error);
      throw new Error('No se pudo obtener datos de hotel.');
    }
  }

  async createHotel(hotel: HotelCreationDTO): Promise<void> {
    try {
      const hotelRef = doc(this.collectionRef);
      const hotelData: Hotel = {
        ...hotel,
        id: hotelRef.id,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      await setDoc(hotelRef, hotelData);
    } catch (error) {
      console.error('Error creando hotel:', error);
      throw new Error('No se pudo crear el hotel.');
    }
  }

  async updateHotel(id: string, data: Partial<Hotel>): Promise<void> {
    try {
      const hotelRef = doc(this.collectionRef, id);
      await updateDoc(hotelRef, data);
    } catch (error) {
      console.error('Error actualizando hotel:', error);
      throw new Error('No se pudo actualizar el hotel.');
    }
  }
}
