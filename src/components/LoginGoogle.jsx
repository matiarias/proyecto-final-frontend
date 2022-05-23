import React from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";

const LoginGoogle = () => {
  let navigate = useNavigate();

  const responseGoogle = (response) => {
    console.log(response);

    if (response.error) {
      console.warn("Error en el registro de usuario con google");
    } else {
      console.log("Usuario Registrado con google");
      localStorage.setItem("auth", JSON.stringify(response.accessToken));
      localStorage.setItem("userGoogle", JSON.stringify(response.profileObj));
      navigate("/");
    }
  };

  return (
    <div className="google-login-registro text-center my-3">
      <GoogleLogin
        clientId="877760850378-q81jlodd8ftkpmni94p679p3p8i1v8re.apps.googleusercontent.com"
        buttonText="Registrate con Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default LoginGoogle;
