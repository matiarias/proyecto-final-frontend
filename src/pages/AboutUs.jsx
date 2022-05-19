import React from "react";
import "../css/about-us.css";
import imagendemuestra from "../assets/imagendemuestra.png";
import matiArias from "../assets/matiarias-about-us.jpg";
import benjaGi from '../assets/benjagimenez.jpg'
import facuAnti from '../assets/facuantivero.jpg'
import lily from '../assets/liliana.jpg'

const AboutUs = () => {
  return (
    <>
      {/* aqui va el componente del navbar */}

      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-6 col-lg-6">
            <h1>Sobre Nosotros</h1>
            <p className="p-about-us">
              Somos un grupo de programadores de RollingCode School, de
              diferentes ciudades de Argentina, con un unico sueño, que es
              mediante la programación crear aplicaciones Web que logren hacer
              un poco mejor este mundo.
            </p>
          </div>

          <div className="col-12 col-md-6 my-4">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              <div className="col">
                <div className="card border-success h-100">
                  <img
                    src={matiArias}
                    className="card-img-top img-about-us"
                    alt="perfil Matias Arias"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Matias Arias</h5>

                    <div className="d-flex justify-content-around">
                      <a href="https://github.com/matiarias" target="_blank">
                        <i className="bi bi-github text-dark about-us-social-media"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/matiasarias27/"
                        target="_blank"
                      >
                        <i className="bi bi-linkedin text-dark about-us-social-media"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card border-primary h-100">
                  <img
                    src={imagendemuestra}
                    className="card-img-top img-about-us"
                    alt="perfil Mauro Romo"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Mauro Romo</h5>

                    <div className="d-flex justify-content-around">
                      <a href="https://github.com/MauroRomo1" target="_blank">
                        <i className="bi bi-github text-dark about-us-social-media"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/mauro-agust%C3%ADn-romo-76728a237"
                        target="_blank"
                      >
                        <i className="bi bi-linkedin text-dark about-us-social-media"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card border-warning h-100">
                  <img
                    src={lily}
                    className="card-img-top img-about-us"
                    alt="perfil Lily"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Lily</h5>

                    <div className="d-flex justify-content-around">
                      <a href="https://github.com/Liliana5362" target="_blank">
                        <i className="bi bi-github text-dark about-us-social-media"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="bi bi-linkedin text-dark about-us-social-media"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card border-danger h-100">
                  <img
                    src={imagendemuestra}
                    className="card-img-top img-about-us"
                    alt="perfil facundo cossio"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Facundo Cossio</h5>

                    <div className="d-flex justify-content-around">
                      <a href="#" target="_blank">
                        <i className="bi bi-github text-dark about-us-social-media"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="bi bi-linkedin text-dark about-us-social-media"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card border-secondary h-100">
                  <img
                    src={benjaGi}
                    className="card-img-top img-about-us"
                    alt="perfil benjamin gimenez"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Benjamin Gimenez</h5>

                    <div className="d-flex justify-content-around">
                      <a
                        href="https://github.com/BenjaminGimenez"
                        target="_blank"
                      >
                        <i className="bi bi-github text-dark about-us-social-media"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/benjamin-gimenez-837853239/"
                        target="_blank"
                      >
                        <i className="bi bi-linkedin text-dark about-us-social-media"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card border-danger h-100">
                  <img
                    src={facuAnti}
                    className="card-img-top img-about-us"
                    alt="perfil facu antivero"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Facundo Antivero</h5>

                    <div className="d-flex justify-content-around">
                      <a href="https://github.com/facuanti" target="_blank">
                        <i className="bi bi-github text-dark about-us-social-media"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/facundo-antivero-373358202"
                        target="_blank"
                      >
                        <i className="bi bi-linkedin text-dark about-us-social-media"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* aqui va el componente del footer */}
    </>
  );
};

export default AboutUs;
