import React, { useState, useEffect, useContext } from "react";
import Url from "../../util/Url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { ImagesRender } from "../List/List";
import axios from "axios";
import jwt_decode from "jwt-decode";

function MyReservationsTemplate(){
    let token = localStorage.getItem("jwt");
    let decode = jwt_decode(token);
    const [reservations, setReservations] = ([])


    function Fetch() {
        let url = Url() + "api/reservation/userReservation/" + decode.userId;
        useEffect(() => {
          axios
            .get(url)
            .then((response) => setReservations(response.data))
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error));
        }, [url]);
      }
      Fetch();

    return(
        reservations.map((item)=> (
            <div className="card-deck">
                <div className="card reservation-product-info">
                {/* <ImagesRender item={item} /> */}
                    <div className="info-reservation-and-product">
                        <div className="card-title" key={item.id}>
                            <h2> {item.title}</h2>
                            <p className="card-location">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className="location-icon"
                            />
                            {item.city.name}, {item.city.country}
                            </p>
                        </div>
                        <div className="dates">
                            {/* <h3>
                            Check In: {day}/{month}/{year}
                            </h3>
                            <h3>
                            Check Out: {dayE}/{monthE}/{yearE}
                            </h3> */}
                        </div>
                    </div>
                </div>
              </div>
        ))
    )
}

export default MyReservationsTemplate