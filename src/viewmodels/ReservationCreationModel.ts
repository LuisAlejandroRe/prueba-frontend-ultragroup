import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ReservationCreationDTO } from '../models/Reservation';
import { ReservationService } from '../services/ReservationService';
import { toast } from 'react-toastify';

interface ReservationFormProps {
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  numberOfPeople: number;
  destinationCity: string;
}

export function useReservationCreationForm(
  reservationService: ReservationService,
  reservationData: ReservationFormProps,
  onSuccess?: Function
) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Función para generar pasajeros según numberOfPeople
  const generatePassengers = (count: number) =>
    Array.from({ length: count }, () => ({
      fullName: '',
      birthDate: '',
      gender: 'Male',
      documentType: 'Passport',
      documentNumber: '',
      email: '',
      contactPhone: '',
    }));

  const formik = useFormik({
    initialValues: {
      passengers: generatePassengers(reservationData.numberOfPeople),
      emergencyContact: {
        fullName: '',
        contactPhone: '',
      },
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      passengers: Yup.array()
        .of(
          Yup.object().shape({
            fullName: Yup.string().required('El nombre completo es requerido'),
            birthDate: Yup.string().required('La fecha de nacimiento es requerida'),
            gender: Yup.string().required('El género es requerido'),
            documentType: Yup.string().required('El tipo de documento es requerido'),
            documentNumber: Yup.string().required('El número de documento es requerido'),
            email: Yup.string().email('Correo inválido').required('El email es requerido'),
            contactPhone: Yup.string().required('El teléfono de contacto es requerido'),
          })
        )
        .min(1, 'Debe haber al menos un pasajero'),
      emergencyContact: Yup.object().shape({
        fullName: Yup.string().required('El nombre del contacto de emergencia es requerido'),
        contactPhone: Yup.string().required('El teléfono de contacto de emergencia es requerido'),
      }),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const newReservation: ReservationCreationDTO = {
          roomId: reservationData.roomId,
          checkInDate: reservationData.checkInDate,
          checkOutDate: reservationData.checkOutDate,
          numberOfPeople: reservationData.numberOfPeople,
          destinationCity: reservationData.destinationCity,
          passengers: values.passengers,
          emergencyContact: values.emergencyContact,
        };

        await reservationService.createReservation(newReservation);
        toast.success('Reserva creada exitosamente');
        resetForm();
        closeModal();
        if (onSuccess) onSuccess();
      } catch (error) {
        console.error('Error al crear reserva:', error);
        toast.error('Hubo un error al crear la reserva');
      } finally {
        setSubmitting(false);
      }
    },
  });

  // Actualizar el número de pasajeros si cambia numberOfPeople
  useEffect(() => {
    formik.setFieldValue('passengers', generatePassengers(reservationData.numberOfPeople));
  }, [reservationData.numberOfPeople]);

  return { isModalOpen, openModal, closeModal, formik };
}
