
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      {/* Logo */}
      <div className="container-navbar">
        <img src="../../public/NODO.png" alt="Logo" className="logo-navbar" />
      </div>

      {/* Menu */}
      <div  class="navbar-menu" id="navbarMenu" >
        <ul className="navbar-nav">
            <li><a href="#inicio" className="nav-inicio">Inicio</a></li>
            <li><a href="#servicios" className="nav-servicios">Servicios</a></li>
            <li><a href="#nosotros" className="nav-nosotros">Nosotros</a></li>
            <li><a href="#contacto" className="nav-contacto">Contacto</a></li>
        </ul>
      </div>

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
