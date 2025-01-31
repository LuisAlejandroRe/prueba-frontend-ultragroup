import { Routes, Route } from 'react-router-dom';
import ReservationsView from '../views/ReservationsView';
import HotelDetailView from '../views/HotelDetailView';
import HotelsView from '../views/HotelsView';

export default function AgentRoutes() {
  return (
    <Routes>
      <Route path="hotels" element={<HotelsView />} />
      <Route path="hotel/:hotelId" element={<HotelDetailView />} />
      <Route path="reservations" element={<ReservationsView />} />
    </Routes>
  );
}
