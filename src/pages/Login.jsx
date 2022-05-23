import React from "react";
import LoginGoogle from "../components/LoginGoogle";
import LogoLogin from "../assets/img-login.jpg";
import { useNavigate, Link } from "react-router-dom";
import "../css/login.css";

const Login = () => {
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
                <form>
                  <div className="form-group mb-2">
                    <label>
                      <b>Usuario</b>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Ingresa tu nombre de usuario"
                      name="usuario"
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>
                      <b>Contraseña</b>
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Ingresa tu contraseña"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-danger">
                    Registrar
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
