<<<<<<< HEAD
import React from "react";
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-brand" to='/'>
          <img src='https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png' className="logo_tamaño"></img>
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
=======
import React from 'react'

export const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width={30} height={24} className="d-inline-block align-text-top" />
                        Bootstrap
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}
>>>>>>> 5de10346fed87e02e5bd29d1463f1e0ec4e554d4
