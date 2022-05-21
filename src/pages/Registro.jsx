import React, { useState } from "react";
import "../css/registro.css";
import LogoRegistro from "../assets/logo-registro.png";
import { useNavigate, Link } from "react-router-dom";

const Registro = () => {
  const [userValue, setUserValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  // const [usuarios, setUsuarios] = useState([]);

  const userValueChange = ({ target }) => {
    // console.log(target.value);
    setUserValue(target.value);
  };

  const emailValueChange = ({ target }) => {
    // console.log(target.value);
    setEmailValue(target.value);
  };

  const passValueChange = ({ target }) => {
    // console.log(target.value);
    setPasswordValue(target.value);
  };

  let navigate = useNavigate();

  const registrarse = (e) => {
    e.preventDefault();
    // setUsuarios(...usuarios, userValue)
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row card-registro my-5">
        <div className="col-12 col-md-6">
          <div className="card border-secondary">
            <div className="d-flex justify-content-center py-3 bg-light">
              <img
                src={LogoRegistro}
                className="card-img-top"
                alt="logo-registro"
              />
            </div>

            <div className="card-body card-background">
              <h5 className="registro-title text-center">Registro</h5>

              <form onSubmit={registrarse}>
                <div className="mb-3">
                  <label className="form-label">Nombre de Usuario</label>
                  <input
                    type="text"
                    className="form-control"
                    value={userValue}
                    onChange={userValueChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={emailValue}
                    onChange={emailValueChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={passwordValue}
                    onChange={passValueChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-danger">
                  Registrar
                </button>
                <div className="text-center">
                  <Link className="link-iniciar-sesion" to="/login">
                    Iniciar Sesión
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
