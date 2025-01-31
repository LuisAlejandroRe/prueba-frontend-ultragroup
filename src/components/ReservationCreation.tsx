import { ReservationService } from '../services/ReservationService';
import { useReservationCreationForm } from '../viewmodels/ReservationCreationModel';
import Loader from './Loader';

const reservationService = new ReservationService();

interface ReservationCreationProps {
  reservationData: {
    roomId: string;
    checkInDate: string;
    checkOutDate: string;
    numberOfPeople: number;
    destinationCity: string;
  };
  onSuccess?: Function;
}

export default function ReservationCreation({ reservationData, onSuccess }: ReservationCreationProps) {
  const { isModalOpen, openModal, closeModal, formik } = useReservationCreationForm(reservationService, reservationData, onSuccess);

  return (
    <>
      {formik.isSubmitting && <Loader />}

      <button className="main-button" onClick={() => openModal()}>
        Reservar
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-start justify-center overflow-y-auto bg-black bg-opacity-50 py-20 backdrop-blur">
          <div className="w-96 rounded-lg bg-custom-blue p-6 shadow-custom">
            <h2 className="mb-4 font-aladin text-xl font-semibold">Crear Reserva</h2>

            <form onSubmit={formik.handleSubmit}>
              {/* Pasajeros */}
              <div className="mb-4">
                <label className="block text-sm font-medium">Pasajeros ({reservationData.numberOfPeople})</label>
                {formik.values.passengers.map((passenger, index) => (
                  <div key={index} className="mb-4 border-b pb-4">
                    <h3 className="text-md font-semibold text-white">Pasajero {index + 1}</h3>

                    {/* Nombre completo */}
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-white">Nombre completo</label>
                      <input
                        type="text"
                        name={`passengers[${index}].fullName`}
                        placeholder="Nombre completo"
                        value={passenger.fullName}
                        onChange={formik.handleChange}
                        className="w-full rounded border p-2 text-black"
                      />
                      {formik.touched.passengers?.[index]?.fullName &&
                        typeof formik.errors.passengers?.[index] === 'object' &&
                        formik.errors.passengers?.[index]?.fullName && (
                          <p className="text-sm text-red-500">{formik.errors.passengers[index].fullName}</p>
                        )}
                    </div>

                    {/* Fecha de nacimiento */}
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-white">Fecha de nacimiento</label>
                      <input
                        type="date"
                        name={`passengers[${index}].birthDate`}
                        value={passenger.birthDate}
                        onChange={formik.handleChange}
                        className="w-full rounded border p-2 text-black"
                      />
                      {formik.touched.passengers?.[index]?.birthDate &&
                        typeof formik.errors.passengers?.[index] === 'object' &&
                        formik.errors.passengers?.[index]?.birthDate && (
                          <p className="text-sm text-red-500">{formik.errors.passengers[index].birthDate}</p>
                        )}
                    </div>

                    {/* Género */}
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-white">Género</label>
                      <select
                        name={`passengers[${index}].gender`}
                        value={passenger.gender}
                        onChange={formik.handleChange}
                        className="w-full rounded border p-2 text-black"
                      >
                        <option value="">Seleccione una opción</option>
                        <option value="Male">Masculino</option>
                        <option value="Female">Femenino</option>
                        <option value="Other">Otro</option>
                      </select>
                      {formik.touched.passengers?.[index]?.gender &&
                        typeof formik.errors.passengers?.[index] === 'object' &&
                        formik.errors.passengers?.[index]?.gender && (
                          <p className="text-sm text-red-500">{formik.errors.passengers[index].gender}</p>
                        )}
                    </div>

                    {/* Tipo de documento */}
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-white">Tipo de documento</label>
                      <select
                        name={`passengers[${index}].documentType`}
                        value={passenger.documentType}
                        onChange={formik.handleChange}
                        className="w-full rounded border p-2 text-black"
                      >
                        <option value="">Seleccione una opción</option>
                        <option value="Passport">Pasaporte</option>
                        <option value="ID">Cédula</option>
                        <option value="DriverLicense">Licencia de conducir</option>
                      </select>
                      {formik.touched.passengers?.[index]?.documentType &&
                        typeof formik.errors.passengers?.[index] === 'object' &&
                        formik.errors.passengers?.[index]?.documentType && (
                          <p className="text-sm text-red-500">{formik.errors.passengers[index].documentType}</p>
                        )}
                    </div>

                    {/* Número de documento */}
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-white">Número de documento</label>
                      <input
                        type="text"
                        name={`passengers[${index}].documentNumber`}
                        placeholder="Número de documento"
                        value={passenger.documentNumber}
                        onChange={formik.handleChange}
                        className="w-full rounded border p-2 text-black"
                      />
                      {formik.touched.passengers?.[index]?.documentNumber &&
                        typeof formik.errors.passengers?.[index] === 'object' &&
                        formik.errors.passengers?.[index]?.documentNumber && (
                          <p className="text-sm text-red-500">{formik.errors.passengers[index].documentNumber}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-white">Correo electrónico</label>
                      <input
                        type="email"
                        name={`passengers[${index}].email`}
                        placeholder="Correo electrónico"
                        value={passenger.email}
                        onChange={formik.handleChange}
                        className="w-full rounded border p-2 text-black"
                      />
                      {formik.touched.passengers?.[index]?.email &&
                        typeof formik.errors.passengers?.[index] === 'object' &&
                        formik.errors.passengers?.[index]?.email && (
                          <p className="text-sm text-red-500">{formik.errors.passengers[index].email}</p>
                        )}
                    </div>

                    {/* Teléfono de contacto */}
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-white">Teléfono de contacto</label>
                      <input
                        type="text"
                        name={`passengers[${index}].contactPhone`}
                        placeholder="Teléfono de contacto"
                        value={passenger.contactPhone}
                        onChange={formik.handleChange}
                        className="w-full rounded border p-2 text-black"
                      />
                      {formik.touched.passengers?.[index]?.contactPhone &&
                        typeof formik.errors.passengers?.[index] === 'object' &&
                        formik.errors.passengers?.[index]?.contactPhone && (
                          <p className="text-sm text-red-500">{formik.errors.passengers[index].contactPhone}</p>
                        )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contacto de Emergencia */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">Contacto de Emergencia</label>
                <input
                  type="text"
                  name="emergencyContact.fullName"
                  placeholder="Nombre completo"
                  value={formik.values.emergencyContact.fullName}
                  onChange={formik.handleChange}
                  className="w-full rounded border p-2 text-black"
                />
                {formik.touched.emergencyContact?.fullName && formik.errors.emergencyContact?.fullName && (
                  <p className="text-sm text-red-500">{formik.errors.emergencyContact.fullName}</p>
                )}

                <input
                  type="text"
                  name="emergencyContact.contactPhone"
                  placeholder="Teléfono"
                  value={formik.values.emergencyContact.contactPhone}
                  onChange={formik.handleChange}
                  className="mt-2 w-full rounded border p-2 text-black"
                />
                {formik.touched.emergencyContact?.contactPhone && formik.errors.emergencyContact?.contactPhone && (
                  <p className="text-sm text-red-500">{formik.errors.emergencyContact.contactPhone}</p>
                )}
              </div>

              {/* Botones */}
              <div className="flex justify-center space-x-2">
                <button type="button" className="main-button" onClick={() => closeModal()}>
                  Cancelar
                </button>
                <button type="submit" className="main-button" disabled={formik.isSubmitting}>
                  {formik.isSubmitting ? 'Guardando...' : 'Guardar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
