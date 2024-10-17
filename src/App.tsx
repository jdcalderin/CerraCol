import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DisenoVentanas from './pages/DisenoVentanas';
import Vidrios from './pages/Vidrios';
import Cotizaciones from './pages/Cotizaciones';
import GestionUsuarios from './pages/GestionUsuarios';
import Clientes from './pages/Clientes';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diseno" element={<DisenoVentanas />} />
            <Route path="/vidrios" element={<Vidrios />} />
            <Route path="/cotizaciones" element={<Cotizaciones />} />
            <Route path="/usuarios" element={<GestionUsuarios />} />
            <Route path="/clientes" element={<Clientes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;