import React, { useState} from "react";
import sideBar from "./sideBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {Link} from "react-router-dom"


function Sidebar(){
    const [showSideBar, setShowSideBar] = useState(false);
    if (showSideBar) {
        return (
       
            <div className="side-bar">
                <div className="side-bar-out">
                    <div className="side-bar-out-elements">
                        
                        <FontAwesomeIcon icon={faX} onClick={()=>setShowSideBar(false)}/>
                        
                        <h2>Menú</h2>

                        <div className="user-info-bar hide">
                            <div className="user-avatar-bar">
                                <h2>NU</h2>
                            </div>
                            
                            <p>Hola,</p>
                            <p className="name-bar"></p>
                        </div>
                        

                    </div>
                
                </div>
            
    
                <div className="side-bar-options">
                    <ul className="options">

                        <li>
                            <Link to="/" onClick={()=>setShowSideBar(false)}> 
                                <h3>Home</h3>
                            </Link>
                        </li>
                        
                        <li className="sign-up">
                            
                            <Link to="/signUp" onClick={()=>setShowSideBar(false)}>
                                <h3>Crear cuenta</h3>
                            </Link>
                            
                            
                        </li>
                        <li className="sign-in">
                            <Link to="/signIn" onClick={()=>setShowSideBar(false)}>
                                <h3>Iniciar sesión</h3>
                            </Link>
                        </li>     
                    </ul>

                    <Link className="hide" to="/">¿Deseas <span>cerrar sesión?</span></Link>

                    

                    
                </div>
    
                <div className="side-bar-social-media">
                    <ul>
                        <li><FontAwesomeIcon icon={faFacebook} /></li>
                        <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
                        <li><FontAwesomeIcon icon={faTwitter} /></li>
                        <li><FontAwesomeIcon icon={faInstagram} /></li>
    
                    </ul>
                </div>
    
            </div>  
  

            
        )  
        
        
    }    
    return (<FontAwesomeIcon icon={faBars} onClick={()=>{setShowSideBar(true)}}  />)

    
}

export default Sidebar