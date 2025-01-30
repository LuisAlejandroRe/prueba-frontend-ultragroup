import { Link } from 'react-router-dom';
import { HotelList } from '../components/HotelList';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-8 py-12">
      <header className="flex w-11/12 max-w-screen-lg flex-col items-center justify-center gap-8 border-b border-gray-500 pb-4 lg:flex-row lg:justify-between">
        <h1 className="font-bonanova text-4xl font-bold uppercase text-blue-300">Mis Hoteles</h1>
        <Link to="/about" className="main-button">
          Volver al inicio
        </Link>
      </header>
      <HotelList />
    </main>
  );
};

export default Home;
