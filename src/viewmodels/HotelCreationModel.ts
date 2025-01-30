import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { HotelCreationDTO } from '../models/Hotel';
import { HotelService } from '../services/HotelService';

export function useHotelCreationForm(hotelService: HotelService, onSuccess?: Function) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      location: '',
      isActive: true,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('El nombre es requerido'),
      location: Yup.string().required('La ubicación es requerida'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const newHotel: HotelCreationDTO = {
          name: values.name,
          location: values.location,
          isActive: values.isActive,
        };

        await hotelService.createHotel(newHotel);
        toast.success('Hotel creado exitosamente');
        resetForm();
        closeModal();
        if (onSuccess) onSuccess();
      } catch (error) {
        console.error('Error al crear hotel:', error);
        toast.error('Hubo un error al crear el hotel');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return { isModalOpen, openModal, closeModal, formik };
}
