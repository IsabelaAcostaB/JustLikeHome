import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Url from "../../util/Url";
import "./formSignIn.css";

const FormSignIn = () => {
  const { userData, setUserData } = useContext(UserContext);

  const [validData, setValidData] = useState(true);
  let urlReservation = localStorage.getItem("url");
  
  const navigate = useNavigate();

  const getValues = (target) => {
    return {
      email: target.email.value,
      password: target.password.value,
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userDataForm = getValues(event.target);

    const url = Url() + "/api/authentication/sign-in";
    const result = await axios.post(url, userDataForm);

    if (result.request.status === 200) {
      const userDataLog = {
        name: result.data.name,
        lastName: result.data.lastName,
        email: result.data.email,
        isLogged: true,
        token: result.data.token,
        role: result.data.role,
      };

      if (result.data.token) {
        localStorage.setItem("jwt", result.data.token);
      }

      setUserData(userDataLog);
      if(urlReservation){
        navigate(`/product/reservation/${urlReservation}`);
      } else {
        navigate("/");
      }
      
    } else {
      setValidData(false);
    }
  };

  return (
    <div className="main-signIn">
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Iniciar sesión</h2>
        </div>

        <div className="form-labels">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="password">Contraseña:</label>
          <input type="password" name="password" id="password" />
        </div>
        <p className={validData ? "hide" : "error"}>
          Por favor vuelva a intentarlo, sus credenciales son inválidas
        </p>

        <button className="button-2" type="submit" >
          Ingresar
        </button>

        <div className="go-sign">
          <Link to="/signUp">
            <p>
              ¿Aún no tiene cuenta? <span>Registrese</span>
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormSignIn;
