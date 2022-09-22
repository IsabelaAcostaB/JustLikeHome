import React, { useState, useEffect, useContext } from "react";
import Url from "../../util/Url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { ImagesRender } from "../List/List";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Loader from "../../util/Loader";

function MyReservationsTemplate() {
  let token = localStorage.getItem("jwt");
  let decode = jwt_decode(token);
  const [reservations, setReservations] = useState([]);
  const [loading, isLoading] = useState(true);

  const Fetch = () => {
    let url = Url() + "/api/reservation/userReservation/" + decode.userId;
    if (reservations.length === 0) {
      const getAllReservations = async () => {
        const result = await axios.get(url);
        setReservations(result.data) 
      };
      getAllReservations();
    }else if (reservations.length > 0 && loading){
        isLoading(false)
    }

  };


  function RenderReservations() {
    Fetch();
    return (
      <div className="reservations-container">
        {reservations &&
          reservations.map((item) => (
            <div className="card ">
              <ImagesRender item={item.product} />
              <div className="info-reservation-and-product">
                <div className="card-title" key={item.id}>
                  <h2> {item.product.title}</h2>
                  <p className="card-location">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="location-icon"
                    />
                    {item.product.city.name}, {item.product.city.country}
                  </p>
                </div>
                <div className="dates">
                  <h3>Check In: {item.checkIn}</h3>
                  <h3>Check Out: {item.checkOut}</h3>
                  <h3>Horario: {item.checkIn_hour}</h3>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }

  return (
    <div>
      <h2 className="details" id="details">Detalles de reservas</h2>
      <section className={loading ? "" : "hide"}><Loader/></section>
      <section className={loading ? "hide" : ""}><RenderReservations/></section>
    </div>
  );
}

export default MyReservationsTemplate;
