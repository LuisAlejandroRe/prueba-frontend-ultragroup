import { HotelFilter } from '../models/Hotel';
import { useHotelFilterForm } from '../viewmodels/HotelFilterFormModel';
import CitySelect from './CitySelect';
import Loader from './Loader';

interface HotelFilterModalProps {
  onSubmit: (filters: HotelFilter) => void;
}

export default function HotelFilterModal({ onSubmit }: HotelFilterModalProps) {
  const { isModalOpen, openModal, closeModal, formik } = useHotelFilterForm(onSubmit);

  return (
    <>
      <button className="main-button" onClick={openModal}>
        Buscar hotel
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur">
          <div className="w-96 rounded-lg bg-custom-blue p-6 shadow-custom">
            <h2 className="font-aladin mb-4 text-xl font-semibold text-white">Filtrar Hoteles</h2>

            {formik.isSubmitting && <Loader />}

            <form onSubmit={formik.handleSubmit}>
              {/* Fecha de entrada */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">Fecha de Entrada</label>
                <input
                  type="date"
                  name="checkInDate"
                  value={formik.values.checkInDate}
                  onChange={formik.handleChange}
                  className="w-full rounded border p-2"
                />
                {formik.touched.checkInDate && formik.errors.checkInDate && (
                  <p className="text-sm text-red-500">{formik.errors.checkInDate}</p>
                )}
              </div>

              {/* Fecha de salida */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">Fecha de Salida</label>
                <input
                  type="date"
                  name="checkOutDate"
                  value={formik.values.checkOutDate}
                  onChange={formik.handleChange}
                  className="w-full rounded border p-2"
                />
                {formik.touched.checkOutDate && formik.errors.checkOutDate && (
                  <p className="text-sm text-red-500">{formik.errors.checkOutDate}</p>
                )}
              </div>

              {/* Número de personas */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">Número de Personas</label>
                <input
                  type="number"
                  name="numberOfPeople"
                  value={formik.values.numberOfPeople}
                  onChange={formik.handleChange}
                  className="w-full rounded border p-2"
                />
                {formik.touched.numberOfPeople && formik.errors.numberOfPeople && (
                  <p className="text-sm text-red-500">{formik.errors.numberOfPeople}</p>
                )}
              </div>

              {/* Ciudad de destino */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">Ciudad de Destino</label>
                <CitySelect selectedCity={formik.values.destinationCity} onSelect={city => formik.setFieldValue('destinationCity', city)} />
                {formik.touched.destinationCity && formik.errors.destinationCity && (
                  <p className="text-sm text-red-500">{formik.errors.destinationCity}</p>
                )}
              </div>

              {/* Botones */}
              <div className="flex justify-center space-x-2">
                <button type="button" className="main-button" onClick={closeModal}>
                  Cancelar
                </button>
                <button type="submit" className="main-button" disabled={formik.isSubmitting}>
                  {formik.isSubmitting ? 'Filtrando...' : 'Filtrar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
