import React, { useState } from 'react';

const DisenoVentanas = () => {
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar el diseño
    console.log('Diseño guardado:', { codigo, nombre, descripcion });
    // Resetear el formulario
    setCodigo('');
    setNombre('');
    setDescripcion('');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-primary">Crear Diseño de Ventana</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="codigo" className="block mb-2 text-text">Código del Diseño</label>
          <input
            type="text"
            id="codigo"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nombre" className="block mb-2 text-text">Nombre del Diseño</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="descripcion" className="block mb-2 text-text">Descripción</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            rows={4}
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-800 transition">
          Guardar Diseño
        </button>
      </form>
    </div>
  );
};

export default DisenoVentanas;