import formData from "../../db/formData"
import React, { useState, useContext } from "react";
import {Link} from "react-router-dom"
import formSignIn from "./formSignIn.css"
import { UserContext } from "../UserContext.jsx";
import {useNavigate} from "react-router-dom"

const FormSignIn = () =>{

    const {setUserData} = useContext(UserContext)

    const [validData, setValidData] = useState(true);

    const navigate = useNavigate();

    const getValues = (target) =>{
        return {
            email: target.email.value,
            password: target.password.value,
        }
    }

    const handleSubmit = event =>{
        event.preventDefault();

        const data = getValues(event.target);

        const users = JSON.parse(localStorage.getItem('users'));

        const foundUser = users.find(user => user.email === data.email && user.password === data.password)
        

        if (foundUser){
            const userDataLog = {
                name: foundUser.name,
                lastName: foundUser.lastName,
                isLogged: true
            }

            setUserData(userDataLog);
            navigate("/")


        }else{
            setValidData(false)
        }
    }



    return (
        <div className="main">
            <form onSubmit={handleSubmit}>
                <div className="form-header">
                    <h2>Iniciar sesión</h2>
                </div>

                <div className="form-labels">
                    <label htmlFor="email">Correo electrónico:</label>
                    <input type="email"  name="email" id="email"/>
                    
                
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" name="password" id="password"/>
                    
                </div>
                <p className ={validData?"hide":"error"}>Por favor vuelva a intentarlo, sus credenciales son inválidas</p>
        


                <button className="button-2" type="submit" >Ingresar</button>

                <div className="go-sign">
                    <Link to="/signUp">
                        <p>¿Aún no tiene cuenta? <span>Registrese</span></p>
                    </Link>
                </div>

            </form>

        </div>
    )
}

export default FormSignIn