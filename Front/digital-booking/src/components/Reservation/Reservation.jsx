import ConfirmationReservation from "./ConfirmationReservation";
import { Link } from "react-router-dom";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import calendar from "../CalendarReservation/calendar.css";
import defaultLocale from "date-fns/locale/es";
import useWindowDimensions from "../../hooks/useWindowDimensions.jsx";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FilterContext } from "../FilterContext";
import Url from "../../util/Url";
import { PoliciesRender2 } from "../Products/Product";
import bootsrap from "bootstrap";
import "./reservation.css";
import ProductHeader from "../Products/ProductHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { ImagesRender } from "../List/List";
import moment from "moment";
import { ReservationContext } from "../ReservationContext";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
/* import {
  Dropdown,
  DropdownItem as option,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap"; */
import { useNavigate } from "react-router-dom";

import { UserContext } from "../UserContext.jsx";

const Reservation = () => {
  let locationReservation = window.location.pathname;
  let locationAPI = locationReservation.split("/");
  let location = locationAPI[3];
  const { userData, setUserData } = useContext(UserContext);
  const [reservationError, setReservationError] = useState(false);
  const [isActive, setActive] = useState(false);

  // RANGO DE FECHAS DEL CALENDARIO
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),

      key: "selection",
    },
  ]);

  const startDate = state[0].startDate;
  const endDate = state[0].endDate;

  const year = startDate.getFullYear();
  const month = startDate.getMonth();
  const day = startDate.getDate();

  const yearE = endDate.getFullYear();
  const monthE = endDate.getMonth();
  const dayE = endDate.getDate();

  function sendedDateFomatter(date) {
    const d = moment(date);
    return d.format("YYYY-MM-DD");
  }

  // DESHABILITA LAS FECHAS RESERVADAS EN EL CALENDARIO

  const { reservationsDates } = useContext(ReservationContext);

  const getRange = (startDate, endDate, type = "days") => {
    let fromDate = moment(startDate);
    let toDate = moment(endDate);
    let diff = toDate.diff(fromDate, type);
    let range = [];
    for (let i = 0; i <= diff; i++) {
      range.push(moment(startDate).add(i, type)._d);
    }
    return range;
  };

  const disabledDates = [];

  let allDays = [];
  reservationsDates.map((rd) => {
    allDays = [...allDays, ...getRange(rd.checkIn, rd.checkOut)];
  });

  const days = allDays;

  days.map((d) => {
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();

    disabledDates.push(new Date(year, month, day));
  });

  const windowDimension = useWindowDimensions();

  const [reservationInfo, setReservationInfo] = useState();

  function Fetch() {
    let url = Url() + "/api/product/" + location;
    useEffect(() => {
      axios
        .get(url)
        .then((response) => setReservationInfo(response.data))
        .catch((error) => console.log(error));
    }, [url]);
  }
  Fetch();

  const [Dropdown, setDropdown] = useState(false);
  const abrirCerrarDropdown = () => setDropdown(!Dropdown);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* --------------- POST ------------------- */

  let checkInhour = "10:00";
  let token = localStorage.getItem("jwt");

  const navigate = useNavigate();

  let data = {};
  function CreateReservationData() {
    data = {
      product: {
        id: reservationInfo.id,
      },
      checkIn: sendedDateFomatter(startDate),
      checkIn_hour: checkInhour,
      checkOut: sendedDateFomatter(endDate),
      user: {
        id: 1111,
      },
    };
  }

  const postProductReservationDays = async () => {
    CreateReservationData();
    try {
      const url = Url() + "api/reservation";
      const result = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (result.request.status === 201) {
        navigate("/ConfirmationReservation");
      } else {
        setReservationError(true);
        setActive(true);
      }
    } catch (e) {
      setReservationError(true);
      setActive(true);
      console.log(e.message);
    }
  };

 
  const handleToggle = () => {
    setActive(!isActive);
  };

  function RenderErrorMessage() {
    if (isActive) {
      return (
        
        <div className="reservation-error">
          {
          console.log(reservationError)}
          {console.log(isActive)}
            <FontAwesomeIcon
            icon={faCircleXmark}
            className="carousel-close"
            onClick={handleToggle}
          />  
          <h2>Lamentablemente la reserva no ha podido realizarse</h2>
          <p>Por favor, intente más tarde</p>
          <button className="button-c button-error">Aceptar</button>
        </div>
      );
    }
  }
console.log(reservationInfo)
  return (
    <div className="main">
      {reservationInfo && (
        <ProductHeader
          category={reservationInfo.category.title}
          title={reservationInfo.title}
          path={`/product/${reservationInfo.id}`}
        />
      )}
      <h2 className="reservation-data-h2">Completá tus datos</h2>
      <div className="card reservation-container">
        <form className="reservation-form">
          <div className="form-labels-reservation">
            <div>
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                name="text"
                id="name"
                defaultValue={userData.name}
              />
            </div>
            <div>
              <label htmlFor="apellido">Apellido:</label>
              <input
                type="text"
                name="text"
                id="lastname"
                defaultValue={userData.lastName}
              />
            </div>
            <div>
              <label htmlFor="email">Correo Electrónico:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="city">Ciudad:</label>
              <input type="select" name="city" id="city" />
            </div>
          </div>
        </form>
      </div>
      <h2 className="reservation-dates-h2">Fechas disponibles</h2>
      <div className="reservationBlock">
        <div className="calendarBlock">
          {windowDimension.width < 768 ? (
            <div>
              {" "}
              <DateRange
                className="calendar-mobile"
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                locale={defaultLocale}
                minDate={new Date()}
                disabledDates={disabledDates}
              />
            </div>
          ) : (
            <div>
              <DateRange
                className="calendar-tablet"
                onChange={(item) => setState([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={state}
                direction="horizontal"
                locale={defaultLocale}
                minDate={new Date()}
                disabledDates={disabledDates}
              />
            </div>
          )}
        </div>
      </div>
      <h2 className="card-title reservation-times-h2">
        Tu horario de llegada{" "}
      </h2>
      <div className="card reservation-times-info">
        <div>
          <select
            name="check-in-hour"
            className="search_cities select_checkin-hour"
          >
            <option defaultValue="">Selecciona tu hora de llegada</option>
            <option>00:00 AM</option>
            <option> 01:00 AM</option>
            <option> 02:00 AM</option>
            <option> 03:00 AM</option>
            <option> 04:00 AM </option>
            <option> 05:00 AM</option>
            <option> 06:00 AM</option>
            <option> 07:00 AM</option>
            <option> 08:00 AM</option>
            <option> 09:00 AM </option>
            <option> 10:00 AM</option>
            <option> 11:00 AM</option>
            <option> 12:00 PM</option>
            <option> 13:00 PM</option>
            <option> 14:00 PM </option>
            <option> 15:00 PM</option>
            <option> 16:00 PM</option>
            <option> 17:00 PM </option>
            <option> 18:00 PM</option>
            <option> 19:00 PM</option>
            <option> 20:00 PM </option>
            <option> 21:00 PM</option>
            <option> 22:00 PM</option>
            <option> 23:00 PM </option>
          </select>
        </div>
        <p>
          Tu habitación va a estar lista para el check-in entre las x y las x
        </p>
      </div>

      <h2 className="card-title reservation-title-h2">Detalle de Reserva</h2>

      {reservationInfo && (
        <div className="card reservation-product-info">
          <ImagesRender item={reservationInfo} />
          <div className="card-title" key={reservationInfo.id}>
            <h2> {reservationInfo.title}</h2>
            <p className="card-location">
              <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
              {reservationInfo.city.name}, {reservationInfo.city.country}
            </p>
          </div>
          <div className="dates">
            <h3>
              Check In: {day}/{month}/{year}
            </h3>
            <h3>
              Check Out: {dayE}/{monthE}/{yearE}
            </h3>
          </div>

          <button className="button-c" onClick={postProductReservationDays}>
            Confirmar reserva
          </button>
        </div>
      )}

      <div>
        {reservationInfo && <PoliciesRender2 product={reservationInfo} />}
      </div>
      <RenderErrorMessage />
    </div>
  );
};
export default Reservation;