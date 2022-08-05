import React from "react";
import formSignIn from "../../styles/formSignIn.css"


const FormSignIn = () =>{
    return (
        <div>
            <form>
            <div className="form-header">
                <h2>Iniciar sesión</h2>
            </div>

            <div className="form-label">
                <label>
                    Correo electrónico:
                    <input type="text" id="email"/>
                </label>
                <label>
                    Contraseña:
                    <input type="password" id="password"/>
                </label>

            </div>


            <button className="button-2">Ingresar</button>

            <div className="go-sign">
                <a href="sign-up.html">¿Aún no tiene cuenta? <span>Registrese</span></a>
            </div>

        </form>

        </div>
    )
}

export default FormSignIn