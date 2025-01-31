import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { RoomCreationDTO } from '../models/Room';
import { RoomService } from '../services/RoomService';

export function useRoomCreationForm(roomService: RoomService, hotelId: string, onSuccess?: Function) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      type: '',
      location: '',
      baseCost: 0,
      taxes: 0,
      capacity: 1,
      isActive: true,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('El nombre de la habitación es requerido'),
      type: Yup.string().required('El tipo de habitación es requerido'),
      location: Yup.string().required('La ubicación es requerida'),
      baseCost: Yup.number().min(0, 'El costo base no puede ser negativo').required('El costo base es requerido'),
      taxes: Yup.number().min(0, 'Los impuestos no pueden ser negativos'),
      capacity: Yup.number().min(1, 'La capacidad debe ser al menos 1').required('La capacidad es requerida'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const newRoom: RoomCreationDTO = {
          hotelId,
          name: values.name,
          type: values.type,
          location: values.location,
          baseCost: values.baseCost,
          taxes: values.taxes,
          capacity: values.capacity,
          isActive: values.isActive,
        };

        await roomService.createRoom(newRoom);
        toast.success('Habitación creada exitosamente');
        resetForm();
        closeModal();
        if (onSuccess) onSuccess();
      } catch (error) {
        console.error('Error al crear la habitación:', error);
        toast.error('Hubo un error al crear la habitación');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return { isModalOpen, openModal, closeModal, formik };
}
