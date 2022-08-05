import React from "react";
import sideBar from "../../styles/sideBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


function Sidebar(){
    return (
        <div className="side-bar">
            <div className="side-bar-out">
                <div className="side-bar-out-elements">
                    
                        <FontAwesomeIcon icon={faX} />
                    
                    <h2>Menú</h2>
                </div>
            
            </div>
        

            <div className="side-bar-options">
                <ul>
                    <li>
                        
                        <h3>Crear cuenta</h3>
                        
                        
                    </li>
                    <li>
                        
                        <h3>Iniciar sesión</h3>
                        
                 
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

export default Sidebar