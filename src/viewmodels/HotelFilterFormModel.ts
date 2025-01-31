import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

export function useHotelFilterForm(onSubmit: Function) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const formik = useFormik({
    initialValues: {
      checkInDate: '',
      checkOutDate: '',
      numberOfPeople: 1,
      destinationCity: '',
    },
    validationSchema: Yup.object({
      checkInDate: Yup.string().required('La fecha de entrada es requerida'),
      checkOutDate: Yup.string().required('La fecha de salida es requerida'),
      numberOfPeople: Yup.number().min(1, 'Debe haber al menos una persona').required('El número de personas es requerido'),
      destinationCity: Yup.string().required('La ciudad de destino es requerida'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        onSubmit(values);
        closeModal();
      } catch (error) {
        console.error('Error al aplicar filtro:', error);
        toast.error('Hubo un error al aplicar el filtro');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return { isModalOpen, openModal, closeModal, formik };
}
