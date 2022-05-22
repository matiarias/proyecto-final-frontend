import React from "react";
import logoNav from "../assets/logonav.png";
import "../css/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav">
        <div className="container">
          <div>
            <Link to="/" className="navbar-brand text-white">
              <img className="img-nav mx-2" src={logoNav} alt="logo-nav" />
              Neptuno
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon icon-light"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <button className="btn btn-success me-3">
              <i className="bi bi-star"></i>
            </button>

            <ul className="navbar-nav mb-lg-0 mx-4">
              <li className="nav-item">
                <Link className="nav-link links-nav" to="/">
                  Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link links-nav" to="/about">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>

            <button className="btn btn-dark">Cerrar Sesión</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
