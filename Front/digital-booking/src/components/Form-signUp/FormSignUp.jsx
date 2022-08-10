import React, {useState} from "react";
import formSignUp from "./formSignUp.css"

const FormSignUp = () => {
    const [errorName, setErrorName] = useState(false);
    const [errorLastName, setErrorLastName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorRepPassword, setErrorRepPassword] = useState(false);
    const getValues = target => ({
        name: target.name.value,
        lastName: target.lastName.value,
        email: target.email.value,
        password: target.password.value,
        repPassword: target.repPassword.value
    })

    const handleSubmit = event => {
        event.preventDefault();
        const data = getValues(event.target);
        localStorage.setItem('users', JSON.stringify([data]));
        
        /*
        if (data.name ==="" ||data.name.length<3){
            setErrorName(true)
        }
        if (data.lastName ==="" ||data.lastName.length<3){
            setErrorLastName(true)
        }
        if (data.email ==="" || !data.email.includes("@")){
            setErrorEmail(true)
        }
        if (data.password===""||data.password.length>=15||data.password.length<6){
            setErrorPassword(true)
        }
        if (data.repPassword !== data.password){
            setErrorRepPassword(true)
        }
        */
    }

    return(
        <div className="main">
            <form  onSubmit={handleSubmit}>
                <div className="form-header">
                    <h2>Crear cuenta</h2>
                </div>
                <div className="form-labels">

                    <div className="name-label">
                        <label htmlForm="name">Nombre: </label>
                        <input type="text" id="name" name="name"
                        />
                        <p className={errorName?"error":"hide"}>El nombre es obligatorio y tiene que tener más de 3 letras</p>
                        
                    </div>
                    
                    
                    <div className="last-name-label">
                        <label htmlForm="lastName">Apellido:</label>
                        <input type="text" id="lastName"  name="lastName"
                        />
                        <p className={errorLastName?"error":"hide"}>El apellido es obligatorio y tiene que tener más de 3 letras</p>
                    </div>
                    
                    
                    <label className="email-label" htmlForm="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" 
                    />
                    <p className={errorEmail?"error":"hide"}>El email es obligatorio y tiene que incluir un @</p>
                    
                    <label className="password-label" htmlForm="password">Contraseña:</label>
                    <input ype="password" id="password" name="password"
                    />
                    <p className={errorPassword?"error":"hide"}>La contraseña es obligatoria y tiene que tener entre 6 a 15 caracteres</p>
                    
                    <label className="password-rep-label" htmlForm="repPassword">Repetir contraseña:</label>
                    <input ype="password" id="repPassword"name="repPassword"
                    />
                    <p className={errorRepPassword?"error":"hide"}>Las contraseñas tienen que coincidir</p>
                    
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
