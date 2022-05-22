import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/footer.css";
import logoNav from "../assets/logonav.png";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer-container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4">
            <div>
              <h4 className="text-center title-neptuno">Somos Neptuno</h4>
              <p className="text-center">
                Somos un Blog con diferentes Noticias de todo el mundo, que te
                atraparan!
              </p>
            </div>

            <div className="text-center mt-4">
              <img className="img-footer" src={logoNav} alt="logo-footer" />
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-4">
            <h5 className="text-center title-noticias">Neptuno Noticias</h5>
            <div className="text-center">
              <p>
                <Link className="links-noticias" to="error404">
                  El mundo hoy
                </Link>
              </p>
              <p>
                <Link className="links-noticias" to="error404">
                  Viajes
                </Link>
              </p>
              <p>
                <Link className="links-noticias" to="error404">
                  Cine
                </Link>
              </p>
              <p>
                <Link className="links-noticias" to="error404">
                  Musica
                </Link>
              </p>
              <p>
                <Link className="links-noticias" to="error404">
                  Deportes
                </Link>
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-4">
            <div className="text-center">
              <h5 className="text-center title-contact">Contactanos</h5>
              <p>
                <i className="bi bi-house-door icons-contact-footer"></i> Gral.
                Paz 576 - San Miguel de Tucumán - Argentina
              </p>
              <p>
                <i className="bi bi-envelope icons-contact-footer"></i>{" "}
                academy@rollingcodeschool.com
              </p>
              <p>
                <i className="bi bi-whatsapp icons-contact-footer"></i> +54 381
                578-3030
              </p>
            </div>

            <div>
              <h6 className="text-center title-social-media">Nuestras Redes</h6>
              <div className="text-center">
                <Link to="/error404">
                  <i className="bi bi-facebook icons-social-footer"></i>
                </Link>
                <Link to="/error404">
                  <i className="bi bi-twitter icons-social-footer"></i>
                </Link>
                <Link to="/error404">
                  <i className="bi bi-google icons-social-footer"></i>
                </Link>
                <Link to="/error404">
                  <i className="bi bi-instagram icons-social-footer"></i>
                </Link>
              </div>

              <p className="text-center mt-2">© 2022 Copyright:</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
