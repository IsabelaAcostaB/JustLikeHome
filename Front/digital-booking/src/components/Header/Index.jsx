import React, { useContext } from "react"
import header from "./header.css"
import logo from "../../asserts/icons/logo 1.svg"
import Sidebar from "../SideBar/Sidebar.jsx"
import { Link } from "react-router-dom"
import UserContext from "../context"


const Header = () => {

    const user = useContext(UserContext)
    
    return (
      
        <header>
            <div className="header-boxes">
                <Link to="/" >
                    <div className="logotype">
                    
                        <div className="logo">
                            <img src={logo} alt="logo Digital Booking"/>
                        </div>
                
                        <p className="phrase">Sentite como en tu hogar
                        </p>

                    </div>
                </Link>

                
                <div className="user-login">
                    <div className="login-buttons">
                        <div className="button-6 buttonSignUp" >
                            <Link to="/signUp" >Crear Cuenta</Link>
                        </div>
            
                        <div className="button-6 buttonSignIn">
                            <Link to="/signIn" >Iniciar sesión</Link>
                        </div>
                    </div>
                    
                </div>

                <div className="user-info">
                    <div className="user-name">
                        <div className="user-avatar">
                            <p>NU</p>
                        </div>
                        <p className="name">Hola, </p>
                    </div>
                    
                    
                    <Link to="/">Cerrar sesión</Link>
                </div>


                <div className="menu">
                    <Sidebar />
                </div>

                

            </div>
            
        </header>
    )
}
    

export default Header