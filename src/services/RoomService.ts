import { collection, doc, DocumentData, getDocs, Query, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Room, RoomCreationDTO } from '../models/Room';

export class RoomService {
  private collectionRef = collection(db, 'rooms');

  async getRooms(filters?: Partial<RoomCreationDTO>): Promise<Room[]> {
    try {
      let q: Query<DocumentData, DocumentData> = this.collectionRef;

      const conditions = [];
      if (filters?.hotelId) conditions.push(where('hotelId', '==', filters.hotelId));
      if (filters?.name) conditions.push(where('name', '==', filters.name));
      if (filters?.type) conditions.push(where('type', '==', filters.type));
      if (filters?.location) conditions.push(where('location', '==', filters.location));
      if (filters?.baseCost !== undefined) conditions.push(where('baseCost', '==', filters.baseCost));
      if (filters?.taxes !== undefined) conditions.push(where('taxes', '==', filters.taxes));
      if (filters?.capacity !== undefined) conditions.push(where('capacity', '==', filters.capacity));
      if (filters?.isActive !== undefined) conditions.push(where('isActive', '==', filters.isActive));

      if (conditions.length > 0) {
        q = query(this.collectionRef, ...conditions);
      }

      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Room[];
    } catch (error) {
      console.error('Error obteniendo habitaciones:', error);
      throw new Error('No se pudo obtener la lista de habitaciones.');
    }
  }

  async createRoom(room: RoomCreationDTO): Promise<void> {
    try {
      const roomRef = doc(this.collectionRef);
      const roomData: Room = {
        ...room,
        id: roomRef.id,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      await setDoc(roomRef, roomData);
    } catch (error) {
      console.error('Error creando habitación:', error);
      throw new Error('No se pudo crear la habitación.');
    }
  }

  async updateRoom(id: string, data: Partial<Room>): Promise<void> {
    try {
      const roomRef = doc(this.collectionRef, id);
      await updateDoc(roomRef, data);
    } catch (error) {
      console.error('Error actualizando habitación:', error);
      throw new Error('No se pudo actualizar la habitación.');
    }
  }
}
