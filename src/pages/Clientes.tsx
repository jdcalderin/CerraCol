import React, { useState } from 'react';

interface Cliente {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
}

const clientesMock: Cliente[] = [
  { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', telefono: '123-456-7890' },
  { id: 2, nombre: 'María García', email: 'maria@example.com', telefono: '098-765-4321' },
];

const Clientes = () => {
  const [busqueda, setBusqueda] = useState('');
  const [clientesEncontrados, setClientesEncontrados] = useState<Cliente[]>([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nuevoCliente, setNuevoCliente] = useState({ nombre: '', email: '', telefono: '' });

  const buscarClientes = () => {
    const resultados = clientesMock.filter(
      (cliente) =>
        cliente.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        cliente.email.toLowerCase().includes(busqueda.toLowerCase())
    );
    setClientesEncontrados(resultados);
    if (resultados.length === 0) {
      setMostrarFormulario(true);
    } else {
      setMostrarFormulario(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar el nuevo cliente
    console.log('Nuevo cliente:', nuevoCliente);
    // Resetear el formulario y la búsqueda
    setNuevoCliente({ nombre: '', email: '', telefono: '' });
    setBusqueda('');
    setMostrarFormulario(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-primary">Gestión de Clientes</h2>
      <div className="mb-4">
        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar cliente por nombre o email"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          onClick={buscarClientes}
          className="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          Buscar
        </button>
      </div>

      {clientesEncontrados.length > 0 && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Clientes encontrados:</h3>
          <ul>
            {clientesEncontrados.map((cliente) => (
              <li key={cliente.id} className="mb-2 p-2 border rounded">
                <p><strong>Nombre:</strong> {cliente.nombre}</p>
                <p><strong>Email:</strong> {cliente.email}</p>
                <p><strong>Teléfono:</strong> {cliente.telefono}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {mostrarFormulario && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Crear nuevo cliente:</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                id="nombre"
                value={nuevoCliente.nombre}
                onChange={(e) => setNuevoCliente({ ...nuevoCliente, nombre: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={nuevoCliente.email}
                onChange={(e) => setNuevoCliente({ ...nuevoCliente, email: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                value={nuevoCliente.telefono}
                onChange={(e) => setNuevoCliente({ ...nuevoCliente, telefono: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <button type="submit" className="bg-success text-white px-4 py-2 rounded hover:bg-green-600 transition">
              Guardar Cliente
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Clientes;