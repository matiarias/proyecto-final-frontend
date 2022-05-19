import React from 'react'

const NavBar = () => {
    return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-danger nav">
                <div className="container">
                    <div>
                        {/* <img src={logo} alt="logo de web" className="img-logo"/> */}
                    </div>
                    <a className="navbar-brand">NewTant</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            {/* <button className="btn btn-outline-success" type="submit">Iniciar sesion</button> */}
                        </form>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" >Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" >Registro</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" >Favoritos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar