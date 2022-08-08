import formData from "../../db/formData"
import React, { useState} from "react";
import {Link} from "react-router-dom"


const FormSignIn = () =>{

    const [stateData, setStateData] = useState(false);

    const userData = formData;

    const getValues = (target) =>{
        return {
            email: target.email.value,
            password: target.password.value,
        }
    }

    const handleSubmit = event =>{
        event.preventDefault();

        const data = getValues(event.target);

        for (var i in userData) {
            if (data.email !== userData[i].email && data.password !==userData[i].password){
                setStateData(true)
            }
        }
        
    }

    return (
        <div className="main">
            <form onSubmit={handleSubmit}>
                <div className="form-header">
                    <h2>Iniciar sesión</h2>
                </div>

                <div className="form-labels">
                    <label for="email">Correo electrónico:</label>
                    <input type="email"  name="email" id="email"/>
                    
                
                    <label>Contraseña:</label>
                    <input type="password" name="password" id="password"/>
                    
                </div>
                <p className="error">{stateData? "Los datos son incorrectos. Por favor vuelve a intentarlo ": " "}</p>


                <button className="button-2" type="submit" >Ingresar</button>

                <div className="go-sign">
                    <Link to="/signUp">
                        <p>¿Aún no tiene cuenta?<span>Registrese</span></p>
                    </Link>
                </div>

            </form>

        </div>
    )
}

export default FormSignIn