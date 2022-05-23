import React, { useState } from "react";
import "../css/registro.css";
import LogoRegistro from "../assets/logo-registro.jpg";
import { useNavigate, Link } from "react-router-dom";
import LoginGoogle from "../components/LoginGoogle";

const Registro = () => {
  const [userValue, setUserValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

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
    let usuarios = { userValue, emailValue, passwordValue };
    localStorage.setItem("userForm", JSON.stringify(usuarios));
    console.log(usuarios);

    navigate("/login");
  };

  return (
    <div className="container">
      <div className="row card-registro my-3">
        <div className="col-12 col-md-6">
          <div className="card border-secondary">
            <div>
              <img
                src={LogoRegistro}
                className="card-img-top img-registro"
                alt="logo-registro"
              />
            </div>

            <div className="card-body card-background">
              <h5 className="registro-title text-center">Registro</h5>

              <form onSubmit={registrarse}>
                <div className="mb-2">
                  <label className="form-label">Nombre de Usuario</label>
                  <input
                    type="text"
                    className="form-control"
                    value={userValue}
                    onChange={userValueChange}
                    placeholder="Ingresa tu nombre de usuario"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={emailValue}
                    onChange={emailValueChange}
                    placeholder="Ingresa tu email"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={passwordValue}
                    onChange={passValueChange}
                    placeholder="Ingresa tu contraseña"
                  />
                </div>

                <button type="submit" className="btn btn-dark">
                  Registrar
                </button>
                <LoginGoogle />

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
