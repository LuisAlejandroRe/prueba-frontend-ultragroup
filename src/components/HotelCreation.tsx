import { HotelService } from '../services/HotelService';
import { useHotelCreationForm } from '../viewmodels/HotelCreationModel';
import CitySelect from './CitySelect';
import Loader from './Loader';

const hotelService = new HotelService();

interface HotelCreationProps {
  onSuccess?: Function;
}

export default function HotelCreation({ onSuccess }: HotelCreationProps) {
  const { isModalOpen, openModal, closeModal, formik } = useHotelCreationForm(hotelService, onSuccess);

  return (
    <>
      {formik.isSubmitting && <Loader />}

      <button className="main-button" onClick={() => openModal()}>
        Crear Hotel
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur">
          <div className="w-96 rounded-lg bg-custom-blue p-6 text-white shadow-custom">
            <h2 className="font-aladin mb-4 text-xl font-semibold">Crear Hotel</h2>

            <form onSubmit={formik.handleSubmit}>
              {/* Nombre del hotel */}
              <div className="mb-4">
                <label className="block text-sm font-medium">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className="w-full rounded border p-2"
                />
                {formik.touched.name && formik.errors.name && <p className="text-sm text-red-500">{formik.errors.name}</p>}
              </div>

              {/* Selector de ciudad */}
              <div className="mb-4">
                <label className="block text-sm font-medium">Ubicación</label>
                <CitySelect selectedCity={formik.values.location} onSelect={city => formik.setFieldValue('location', city)} />
                {formik.touched.location && formik.errors.location && <p className="text-sm text-red-500">{formik.errors.location}</p>}
              </div>

              {/* Switch para activar/desactivar hotel */}
              <div className="mb-4 flex items-center">
                <input type="checkbox" name="isActive" checked={formik.values.isActive} onChange={formik.handleChange} className="mr-2" />
                <label className="text-sm font-medium">Activo</label>
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
