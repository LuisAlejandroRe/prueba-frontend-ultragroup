import { Link } from 'react-router-dom';

const TravelerNavbar = () => {
  return (
    <header className="flex w-11/12 max-w-screen-lg flex-col items-center justify-center gap-3">
      <nav className="flex w-full flex-col items-center justify-center gap-8 border-b border-gray-500 pb-4 lg:flex-row lg:justify-between">
        <h2 className="text-lg font-bold text-white">✈️ Panel de Viajero</h2>
        <Link to="/" className="main-button">
          Volver al inicio
        </Link>
      </nav>
    </header>
  );
};

export default TravelerNavbar;
