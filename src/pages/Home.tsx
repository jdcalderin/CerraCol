import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6 text-primary">Bienvenido a la Plataforma de Cotizaciones de Ventanas</h1>
      <p className="text-xl mb-8">Gestione diseños, vidrios, cotizaciones y usuarios de manera eficiente.</p>
      <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
        <Link to="/diseno" className="bg-primary text-white p-4 rounded-lg hover:bg-blue-800 transition">
          Crear Diseños
        </Link>
        <Link to="/vidrios" className="bg-accent text-white p-4 rounded-lg hover:bg-blue-600 transition">
          Gestionar Vidrios
        </Link>
        <Link to="/cotizaciones" className="bg-success text-white p-4 rounded-lg hover:bg-green-600 transition">
          Generar Cotizaciones
        </Link>
        <Link to="/usuarios" className="bg-warning text-white p-4 rounded-lg hover:bg-yellow-600 transition">
          Administrar Usuarios
        </Link>
      </div>
    </div>
  );
};

export default Home;