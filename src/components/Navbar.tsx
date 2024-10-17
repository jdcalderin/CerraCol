import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Square, Grid, FileText, Users, Menu, X, UserPlus } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavItem = ({ to, icon: Icon, children }: { to: string; icon: React.ElementType; children: React.ReactNode }) => (
    <Link
      to={to}
      className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded transition-colors duration-200"
      onClick={() => setIsOpen(false)}
    >
      <Icon className="w-5 h-5 mr-2" />
      {children}
    </Link>
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Home className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-gray-800">Cotizaciones de Ventanas</span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavItem to="/diseno" icon={Square}>Diseño</NavItem>
            <NavItem to="/vidrios" icon={Grid}>Vidrios</NavItem>
            <NavItem to="/cotizaciones" icon={FileText}>Cotizaciones</NavItem>
            <NavItem to="/usuarios" icon={Users}>Usuarios</NavItem>
            <NavItem to="/clientes" icon={UserPlus}>Clientes</NavItem>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem to="/diseno" icon={Square}>Diseño</NavItem>
            <NavItem to="/vidrios" icon={Grid}>Vidrios</NavItem>
            <NavItem to="/cotizaciones" icon={FileText}>Cotizaciones</NavItem>
            <NavItem to="/usuarios" icon={Users}>Usuarios</NavItem>
            <NavItem to="/clientes" icon={UserPlus}>Clientes</NavItem>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;