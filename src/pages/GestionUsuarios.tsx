import React, { useState } from 'react';

const GestionUsuarios = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para crear/actualizar usuario
    console.log('Usuario guardado:', { nombre, email, rol });
    // Resetear el formulario
    setNombre('');
    setEmail('');
    setRol('');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Gestión de Usuarios</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="nombre" className="block mb-2">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rol" className="block mb-2">Rol</label>
          <select
            id="rol"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Seleccione un rol</option>
            <option value="asesor">Asesor Comercial</option>
            <option value="administrador">Administrador</option>
          </select>
        </div>
        <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          Guardar Usuario
        </button>
      </form>
    </div>
  );
};

export default GestionUsuarios;