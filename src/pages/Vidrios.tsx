import React, { useState } from 'react';

const Vidrios = () => {
  const [tipo, setTipo] = useState('');
  const [espesor, setEspesor] = useState('');
  const [precioM2, setPrecioM2] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar el vidrio
    console.log('Vidrio guardado:', { tipo, espesor, precioM2 });
    // Resetear el formulario
    setTipo('');
    setEspesor('');
    setPrecioM2('');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Gestionar Vidrios</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="tipo" className="block mb-2">Tipo de Vidrio</label>
          <input
            type="text"
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="espesor" className="block mb-2">Espesor (mm)</label>
          <input
            type="number"
            id="espesor"
            value={espesor}
            onChange={(e) => setEspesor(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="precioM2" className="block mb-2">Precio por m²</label>
          <input
            type="number"
            id="precioM2"
            value={precioM2}
            onChange={(e) => setPrecioM2(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Guardar Vidrio
        </button>
      </form>
    </div>
  );
};

export default Vidrios;