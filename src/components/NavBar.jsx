import React from "react";
import logoNav from "../assets/logonav.png";
import "../css/navbar.css";
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg nav">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand d-flex align-items-center text-white" href="#">
                        <img className="img-nav mx-2" src={logoNav} alt="logo-nav" />
                        Neptuno
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar">

                        <form className="d-flex" role="search">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-secondary" type="submit">Search</button>
                            <button className="btn btn-success ms-4">
                                <i className="bi bi-star"></i>
                            </button>
                        </form>


                        <ul className="navbar-nav mb-lg-0" >
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='*'>lalala</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to='/about'>About Us</Link>
                            </li>
                        </ul>
                        <button className="btn btn-dark" type="submit">Cerrar Sesión</button>
                    </div>

                </div>
            </nav>
        </>
    );
};

export default NavBar;
