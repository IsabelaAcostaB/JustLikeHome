import React, { useState, useContext } from "react";
import sideBar from "./sideBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {Link} from "react-router-dom"
import { UserContext}from "../UserContext.jsx"
import {useNavigate} from "react-router-dom"


function Sidebar(){
    const {userData, setUserData} = useContext(UserContext)

    const navigate = useNavigate();
    const logOut = () =>{
        const userDataOut = {
            name: null,
            lastName: null,
            isLogged: false
        }
    
        setUserData(userDataOut);
        navigate("/")
    }

    /*
    const firstLetter = (name, lastName) =>{
        let completeName = name;
        completeName.push(lastName)
        let inicials =[];
        completeName.split(" ").map((word) =>{
            inicials.push(word[0].toUpperCase())
        })
      
        let letters = inicials.join('')
        return letters
    }
    
    {firstLetter(userData.name,userData.lastName)}

    */


    const [showSideBar, setShowSideBar] = useState(false);
    if (showSideBar) {
        return (
       
            <div className="side-bar">
                <div className="side-bar-out">
                    <div className="side-bar-out-elements">
                        
                        <FontAwesomeIcon icon={faX} onClick={()=>setShowSideBar(false)}/>
                        
                        {userData.isLogged? 
                        <div className="user-info-bar">
                            <div className="user-avatar-bar">
                                <h2>AVL</h2>
                            </div>
                            
                            <p>Hola,</p>
                            <p className="name-bar">{userData.name}</p>
                        </div>
                        
                        :
                        <h2>Menú</h2>
                        }

                    </div>
                
                </div>
            
    
                <div className="side-bar-options">
                    
                    {userData.isLogged ? 
                     <Link  to="/" onClick={logOut} className="logOut-Bar">¿Deseas<span> cerrar sesión?</span></Link>
                    
                    :
                    
                    <ul className="options">
                        
                        <li className="sign-up-side-bar">
                            
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
                    
                    }
                    
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