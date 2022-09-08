import React from "react";
import confirmacion from "./confirmacion.png";
import bootstrap from "bootstrap";
import {Link} from "react-router-dom"

const ConfirmationReservation =() =>{
    return(
<div className="card">
    <img src="./confirmacion.png" className="card-img-top"/>
    <div className="card-title">¡Muchas Gracias!</div>
    <div className="card-body">Su reserva se ha realizado con éxito</div>
    <Link className="button-c" to={"/"}>OK</Link>
</div>
    )
}

export default ConfirmationReservation