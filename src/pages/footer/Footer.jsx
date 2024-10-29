import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-auto py-3 text-center">
      <div className="container">
        <p>&copy; 2024 K-Bootcamps. Todos los derechos reservados.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#" className="text-white">
              Sobre Nosotros
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white">
              Contacto
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-white">
              Política de Privacidad
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
