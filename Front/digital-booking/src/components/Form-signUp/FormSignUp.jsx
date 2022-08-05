import React from "react";
import formSignUp from "../../styles/formSignUp.css"


const FormSignUp = () => {
    return(
        <div>
            <form>
                <div className="form-header">
                    <h2>Crear cuenta</h2>
                </div>

                <div className="form-label">
                    <label className="name-label">
                        Nombre:
                        <input type="text" id="name"/>
                    
                    </label>
                    <label className="last-name-label">
                        Apellido:
                        <input type="text" id="last-name"/>
                    </label>
                    <label className="email-label">
                        Correo electrónico:
                        <input type="text" id="email"/>
                    </label>
                    <label className="password-label">
                        Contraseña:
                        <input type="password" id="password"/>
                    </label>
                    <label className="password-rep-label">
                        Repetir contraseña:
                        <input type="password" id="password-rep"/>
                    </label>
                </div>


                <button className="button-2">Crear Cuenta</button>

                <div className="go-sign">
                    <a href="sign-in.html">¿Ya tienes una cuenta? <span> Iniciar sesión</span></a>
                </div>

            </form>
        </div>
    )
}

export default FormSignUp
