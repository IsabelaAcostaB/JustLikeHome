
import React from "react";
import formSignUp from "./formSignUp.css"


const FormSignUp = () => {

    
    /*
    const dataForm = formData

    const getValues = (target) =>{
        return {
            name:target.name.value,
            lastName: target.lastName.value,
            email: target.email.value,
            password: target.password.value,
            repPassword: target.repPassword.value

        }
    }

    const validInput = (event)=> {
        const data = getValues(event.target)

        const nameError = []
        if (data.name =="" ||data.name.length<3){
            errors.push("")
        }

    }

    const handleSubmit = event =>{
        event.preventDefault();

    }
    */


    return(
        <div className="main">
            <form >
                <div className="form-header">
                    <h2>Crear cuenta</h2>
                </div>

                <div className="form-labels">

                    <div className="name-label">
                        <label >Nombre: </label>
                        <input type="text" id="name" name="name"/>
                        <p className="error"></p>
                        
                    </div>
                    
                    
                    <div className="last-name-label">
                        <label >Apellido:</label>
                        <input type="text" id="lastName"  name="lastName"/>
                    </div>
                    
                    
                    <label className="email-label">Correo electrónico:</label>
                    <input type="email" id="email" name="email"/>
                    
                    <label className="password-label">Contraseña:</label>
                    <input type="password" id="password" name="password"/>
                    
                    <label className="password-rep-label">Repetir contraseña:</label>
                    <input type="password" id="repPassword"name="repPassword"/>
                    
                </div>


                <button type="submit" className="button-2">Crear Cuenta</button>

                <div className="go-sign">
                    <a href="sign-in.html">¿Ya tienes una cuenta? <span> Iniciar sesión</span></a>
                </div>

            </form>
        </div>
    )
}

export default FormSignUp
