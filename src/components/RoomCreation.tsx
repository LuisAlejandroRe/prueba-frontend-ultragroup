import { useRoomCreationForm } from '../viewmodels/RoomCreationModel';
import { RoomService } from '../services/RoomService';
import Loader from './Loader';
import CitySelect from './CitySelect';

const roomService = new RoomService();

interface RoomCreationProps {
  hotelId: string;
  onSuccess?: Function;
}

export default function RoomCreation({ hotelId, onSuccess }: RoomCreationProps) {
  const { isModalOpen, openModal, closeModal, formik } = useRoomCreationForm(roomService, hotelId, onSuccess);

  return (
    <>
      {formik.isSubmitting && <Loader />}

      <button className="main-button" onClick={() => openModal()}>
        Crear Habitación
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur">
          <div className="w-96 rounded-lg bg-custom-blue p-6 shadow-custom">
            <h2 className="mb-4 font-aladin text-xl font-semibold text-white">Crear Habitación</h2>

            <form onSubmit={formik.handleSubmit}>
              {/* Nombre de la habitación */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className="w-full rounded border p-2"
                />
                {formik.touched.name && formik.errors.name && <p className="text-sm text-red-500">{formik.errors.name}</p>}
              </div>

              {/* Tipo de habitación */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">Tipo de Habitación</label>
                <input
                  type="text"
                  name="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  className="w-full rounded border p-2"
                />
                {formik.touched.type && formik.errors.type && <p className="text-sm text-red-500">{formik.errors.type}</p>}
              </div>

              {/* Selector de ciudad */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">Ubicación</label>
                <CitySelect selectedCity={formik.values.location} onSelect={city => formik.setFieldValue('location', city)} />
                {formik.touched.location && formik.errors.location && <p className="text-sm text-red-500">{formik.errors.location}</p>}
              </div>

              {/* Costo base */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">Costo Base</label>
                <input
                  type="number"
                  name="baseCost"
                  value={formik.values.baseCost}
                  onChange={formik.handleChange}
                  className="w-full rounded border p-2"
                />
                {formik.touched.baseCost && formik.errors.baseCost && <p className="text-sm text-red-500">{formik.errors.baseCost}</p>}
              </div>

              {/* Impuestos */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">Impuestos</label>
                <input
                  type="number"
                  name="taxes"
                  value={formik.values.taxes}
                  onChange={formik.handleChange}
                  className="w-full rounded border p-2"
                />
                {formik.touched.taxes && formik.errors.taxes && <p className="text-sm text-red-500">{formik.errors.taxes}</p>}
              </div>

              {/* Capacidad */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">Capacidad</label>
                <input
                  type="number"
                  name="capacity"
                  value={formik.values.capacity}
                  onChange={formik.handleChange}
                  className="w-full rounded border p-2"
                />
                {formik.touched.capacity && formik.errors.capacity && <p className="text-sm text-red-500">{formik.errors.capacity}</p>}
              </div>

              {/* Switch para activar/desactivar habitación */}
              <div className="mb-4 flex items-center">
                <input type="checkbox" name="isActive" checked={formik.values.isActive} onChange={formik.handleChange} className="mr-2" />
                <label className="text-sm font-medium text-white">Activo</label>
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
