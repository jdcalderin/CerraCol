import React, { useState } from 'react';

const Cotizaciones = () => {
  const [cliente, setCliente] = useState('');
  const [diseno, setDiseno] = useState('');
  const [vidrio, setVidrio] = useState('');
  const [ancho, setAncho] = useState('');
  const [alto, setAlto] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para generar la cotización
    console.log('Cotización generada:', { cliente, diseno, vidrio, ancho, alto });
    // Resetear el formulario
    setCliente('');
    setDiseno('');
    setVidrio('');
    setAncho('');
    setAlto('');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Generar Cotización</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="cliente" className="block mb-2">Cliente</label>
          <input
            type="text"
            id="cliente"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="diseno" className="block mb-2">Diseño</label>
          <select
            id="diseno"
            value={diseno}
            onChange={(e) => setDiseno(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Seleccione un diseño</option>
            {/* Aquí se cargarían los diseños disponibles */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="vidrio" className="block mb-2">Tipo de Vidrio</label>
          <select
            id="vidrio"
            value={vidrio}
            onChange={(e) => setVidrio(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Seleccione un tipo de vidrio</option>
            {/* Aquí se cargarían los tipos de vidrio disponibles */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="ancho" className="block mb-2">Ancho (m)</label>
          <input
            type="number"
            id="ancho"
            value={ancho}
            onChange={(e) => setAncho(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="alto" className="block mb-2">Alto (m)</label>
          <input
            type="number"
            id="alto"
            value={alto}
            onChange={(e) => setAlto(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Generar Cotización
        </button>
      </form>
    </div>
  );
};

export default Cotizaciones;