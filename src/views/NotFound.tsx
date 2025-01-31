import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-8">
      <h1 className="text-5xl font-bold text-white">404 Página no encontrada</h1>
      <p className="text-xl text-white">Discúlpa, la página que buscas no existe</p>
      <Link to="/" className="text-xl text-blue-300 underline">
        Volver al inicio
      </Link>
    </main>
  );
};

export default NotFound;
