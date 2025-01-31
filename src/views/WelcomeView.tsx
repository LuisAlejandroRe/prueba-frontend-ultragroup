import { Link } from 'react-router-dom';

const WelcomeView = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div className="card-container w-11/12 max-w-md gap-4">
        <h2 className="font-aladin w-full text-balance border-b border-blue-300 px-12 py-5 text-center text-3xl font-bold uppercase">
          🌍 Bienvenido a nuestra plataforma de viajes
        </h2>
        <p className="text-lg text-gray-400">¿Cómo deseas explorar el mundo hoy?</p>
        <p className="mb-7 text-xl font-semibold">Selecciona tu rol para continuar</p>

        <div className="flex flex-col gap-5 pb-8">
          <Link className="main-button w-full" to="/traveler-dashboard">
            ✈️ Soy Viajero
          </Link>
          <Link className="main-button w-full" to="/agent-dashboard/hotels">
            🏨 Soy Agente de Viajes
          </Link>
        </div>
      </div>
    </main>
  );
};

export default WelcomeView;
