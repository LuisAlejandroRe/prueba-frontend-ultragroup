import TravelerNavbar from '../components/TravelerNavbar';
import HotelSearch from '../components/HotelSearch';

const TravelerDashboard = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-8 py-12">
      <TravelerNavbar />
      <HotelSearch />
    </main>
  );
};

export default TravelerDashboard;
