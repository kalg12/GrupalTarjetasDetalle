import React from "react";
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-brand" to='/'>
          <img src='https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png' className="logo_tamaño" alt="Imagen de inicio"></img>
          </ul>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to='/inicio'>
                Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/nosotros'>
                Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/contacto'>
                Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/producto'>
                Producto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
};
