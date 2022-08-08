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
    
                    </div>
                
                </div>
            
    
                <div className="side-bar-options">
                    <ul>
                        <li className="sign-up">
                            
                            <Link to="/signUp">
                                <h3>Crear cuenta</h3>
                            </Link>
                            
                            
                        </li>
                        <li className="sign-in">
                            <Link to="/signIn" >
                                <h3>Iniciar sesión</h3>
                            </Link>
                            
                            
                     
                        </li>
    
                    </ul>


                    
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