import React, { useContext, useState } from "react";
import header from "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import logo from "../../asserts/3.png";
import Sidebar from "../SideBar/Sidebar.jsx";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import { FilterContext } from "../../components/FilterContext";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Url from "../../util/Url";

const Header = () => {
  const { userData, setUserData } = useContext(UserContext);

  const { handleFilterData } = useContext(FilterContext);

  const navigate = useNavigate();

  const location = useLocation();

  const refreshPage = ()=>{
    window.location.reload();
 }

 /* const {userData, setUserData} = useContext(UserContext) */

  function logUser(){
    let token = localStorage.getItem("jwt");
    
    let decode; 

    if(token !== null){
      decode = jwt_decode(token);
      const getUser = async () => {
        let url = Url() + "/api/user/" + decode.userId;
        const result = await axios.get(url);
        let newUser = result.data;
        setUserData({
          name: newUser.name,
          lastName: newUser.lastName,
          isLogged: true,
          token: token
      });
      };
      getUser();
    }
  }

  logUser()

  const logOut = () => {
    localStorage.removeItem("jwt");
    const userDataOut = {
      name: null,
      lastName: null,
      isLogged: false,
      token: null,
      role:null
    };

    setUserData(userDataOut);
    navigate("/")
    refreshPage()
  };

  const firstLetter = () => {
    let completeName = `${userData.name} ${userData.lastName}`;
    let inicials = [];
    completeName.split(" ").map((word) => {
      inicials.push(word[0].toUpperCase());
    });

    let letters = inicials.join("");

    return letters;
  };

  const isAdmin = ()=>{
    if (userData.role === "ADMIN"){
    return(
      <div className="administration">
              <Link to="/administration"><h3>Administracion</h3></Link>
      </div>
    )
    }
  }


  return (
    <header>
      <div className="header-boxes">
        <Link
          to="/"
          onClick={(e) =>
            handleFilterData({
              cityCode: null,
              category: null,
              rangeOfDates: {
                checkIn: null,
                checkOut: null,
              },
            })
          }
        >
          <div className="logotype">
            <div className="logo">
              <img
                src="https://justlikehome-images.s3.us-east-2.amazonaws.com/util/logo+fondo+blanco+header.png"
                alt="logo Just Like"
              />
            </div>
          </div>
        </Link>

        {userData.isLogged ? (
          <div className="user-info">


            
            <div className="administration">
              <Link to="/administration"><h3>Administracion</h3></Link>
            </div>

            <div className="user-name">
              <div className="user-avatar">
                <p>{firstLetter()}</p>
              </div>

              <div className="user-log-name">
                <p>Hola,</p>
                <p className="name">{userData.name}</p>
              </div>
              <Link to="/" className="logOut" onClick={logOut}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </Link>
            </div>
          </div>
        ) : (
          <div className="user-login">
            <div className="login-buttons">
              {!(location.pathname === "/signUp") && (
                <div className="button-6 buttonSignUp">
                  <Link to="/signUp">Crear Cuenta</Link>
                </div>
              )}

              {!(location.pathname === "/signIn") && (
                <div className="button-6 buttonSignIn">
                  <Link to="/signIn">Iniciar sesión</Link>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="menu">
          <Sidebar />
        </div>
      </div>
    </header>
  );
};

export default Header;
