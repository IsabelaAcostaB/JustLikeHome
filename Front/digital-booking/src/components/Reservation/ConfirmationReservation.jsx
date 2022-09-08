import React from "react";
import confirmacion from "./confirmacion.png";
import bootstrap from "bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const ConfirmationReservation = () => {
  return (
    <div className="main main-reservation">
      <div className="card reservation-card">
        <FontAwesomeIcon
          icon={faCheckCircle}
            className="confirmation-icon"
        />

        <div className="card-title">¡Muchas Gracias!</div>
        <div className="card-body">Su reserva se ha realizado con éxito</div>
        <Link className="button-c" to={"/"}>
          OK
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationReservation;
