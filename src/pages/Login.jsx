import React, { useState } from "react";
import LoginGoogle from "../components/LoginGoogle";
import LogoLogin from "../assets/img-login.jpg";
import { useNavigate, Link } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameLogin = ({ target }) => {
    // console.log(target.value);
    setUserName(target.value);
  };

  const passwordLogin = ({ target }) => {
    // console.log(target.value);
    setPassword(target.value);
  };

  let navigate = useNavigate();

  const handleSubmitLogin = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="container">
        <div className="row card-login mt-5">
          <div className="col-12 col-md-6">
            <div className="card border-secondary">
              <div>
                <img
                  src={LogoLogin}
                  className="card-img-top img-login"
                  alt="imagen-login"
                />
              </div>

              <div className="card-body card-bg">
                <h5 className="login-title text-center"> Inicio Sesión</h5>
                <form onSubmit={handleSubmitLogin}>
                  <div className="form-group mb-2">
                    <label className="form-label">Nombre de Usuario</label>
                    <input
                      className="form-control"
                      type="text"
                      name="usuario"
                      value={userName}
                      onChange={userNameLogin}
                      placeholder="Ingresa tu nombre de usuario"
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      value={password}
                      onChange={passwordLogin}
                      placeholder="Ingresa tu contraseña"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-danger">
                    Iniciar Sesión
                  </button>
                  <LoginGoogle />

                  <div className="text-center">
                    <Link className="link-registrarte" to="/registro">
                      Registrate
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default Login;
