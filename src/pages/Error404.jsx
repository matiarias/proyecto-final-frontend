import React from "react";
import error404 from "../assets/error404.gif";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../css/error404.css";

const Error404 = () => {
  return (
    <>
      <NavBar />

      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-12">
            <img className="img-error404" src={error404} alt="error404" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Error404;
