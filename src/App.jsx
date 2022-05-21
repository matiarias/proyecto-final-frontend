import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Registro from "./pages/Registro";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <ProtectedRoutes> */}
          <Route path="/" element={<Home />} />
          {/* </ProtectedRoutes> */}

          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="error404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="error404" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
