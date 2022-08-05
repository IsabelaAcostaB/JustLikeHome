import React from "react";
import header from "../../styles/header.css"
import logo from "../../asserts/icons/logo 1.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Sidebar from "../SideBar/Sidebar.jsx"

const Header = () => {

    return (
        <header>
            <div className="header-boxes">
                <div className="logotype">
                    <a className="logo" href="">
                        <img src={logo} alt="logo Digital Booking" />
                    </a>
                    <a className="phrase" href="home.html">Sentite como en tu hogar</a>
                </div>

                <div className="user-login">
                    <div className="login-buttons">
                        <div className="button-6">
                            <a href="sign-up.html">Crear cuenta</a>
                        </div>
                        <div className="button-6">
                            <a href="sign-in.html">Iniciar sesion</a>
                        </div>

                    </div>
                </div>

                <div className="user-info">
                    <div className="user-avatar">NU</div>
                    <p>Nombre Usuario</p>
                    <a href="">Cerrar sesión</a>
                </div>


                <div className="menu">
                    <FontAwesomeIcon icon={faBars}/>
             
                </div>

                

            </div>
        </header>
    )
}

export default Header