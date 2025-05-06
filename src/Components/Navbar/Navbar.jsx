
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src="../../public/NODO.png" alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Menu */}
      <ul className="flex gap-8 text-gray-800 text-lg font-medium">
        <li><a href="#inicio" className="hover:text-blue-500">Inicio</a></li>
        <li><a href="#servicios" className="hover:text-blue-500">Servicios</a></li>
        <li><a href="#nosotros" className="hover:text-blue-500">Nosotros</a></li>
        <li><a href="#contacto" className="hover:text-blue-500">Contacto</a></li>
      </ul>

      {/* Redes sociales */}
      <div className="flex gap-4 text-blue-600 text-xl">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>
    </nav>
  );
};

export default Navbar;
