import { Link, NavLink } from 'react-router-dom';

const AgentNavbar = () => {
  return (
    <header className="flex w-11/12 max-w-screen-lg flex-col items-center justify-center gap-3">
      <h2 className="mb-4 w-full text-left text-lg font-bold text-white">🏨 Panel de Agente</h2>
      <nav className="flex w-full flex-col items-center justify-center gap-8 border-b border-gray-500 pb-4 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center gap-7 lg:flex-row">
          <NavLink
            to="/agent-dashboard/hotels"
            className={({ isActive }) => `font-aladin text-4xl font-bold uppercase transition ${isActive ? 'text-blue-300' : 'text-white'}`}
          >
            Mis Hoteles
          </NavLink>
          <NavLink
            to="/agent-dashboard/reservations"
            className={({ isActive }) => `font-aladin text-4xl font-bold uppercase transition ${isActive ? 'text-blue-300' : 'text-white'}`}
          >
            reservaciones
          </NavLink>
        </div>

        <Link to="/" className="main-button">
          Volver al inicio
        </Link>
      </nav>
    </header>
  );
};

export default AgentNavbar;
