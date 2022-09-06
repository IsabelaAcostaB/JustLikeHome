import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import calendar from "../CalendarReservation/calendar.css";
import defaultLocale from 'date-fns/locale/es';
import { addDays } from 'date-fns';
import useWindowDimensions from "../../hooks/useWindowDimensions.jsx"
import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { FilterContext } from "../FilterContext";
import Url from "../../util/Url";
import { PoliciesRender } from '../Products/Product';
import bootsrap from "bootstrap";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import ConfirmationReservation from "./ConfirmationReservation";
import { Link } from "react-router-dom";






const Reservation = () => {
  let locationReservation = window.location.pathname;
  let locationAPI = locationReservation.split("/");
  let location = locationAPI[2];

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  const disabledDates = [1, 2, 3, 4, 5, 6]
  const windowDimension = useWindowDimensions()
  const { setFilterData, handleFilterData } = useContext(FilterContext);

  const [reservationInfo, setReservationInfo] = useState();

  function Fetch() {
    let url = Url() + "/api/product/product/" + location;
    useEffect(() => {
      axios
        .get(url)
        .then((response) => setReservationInfo(response.data))
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    }, [url]);
  }
  const [Dropdown, setDropdown] = useState(false)
  const abrirCerrarDropdown = () => (
    setDropdown(!Dropdown)
  )

  Fetch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>

      <div className="card">
        <div className='card-title'>Completá tus datos</div>
        <form>
          <div className="form-labels">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name="text" id="name" />



            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="city">Ciudad:</label>
            <input type="select" name="city" id="city" />

          </div>
        </form>
      </div>

      <div className="reservationBlock">

        <div className="calendarBlock">
          <h2>Fechas disponibles</h2>


          {windowDimension.width < 768 ?
           <div> <DateRange className="calendar-mobile"

              editableDateInputs={true}
              onChange={item => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              locale={defaultLocale}
            />
</div>
            :
<div>
            <DateRange className="calendar-tablet"
              onChange={item => setState([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
              locale={defaultLocale}
              disablePast

            />
</div>
          }




        </div>
      </div>



      {reservationInfo && (
        <div className="card">
          <div className="card-title">Detalle de Reserva</div>
          <img src={reservationInfo.images[1].imageURL} className="card-img-top" />
          <p className="card-title" key={reservationInfo.id}>
            <h2> {reservationInfo.title}</h2>
            <p className="card-text">{reservationInfo.description}</p>
          </p>
          <Link className="button-c" to={`/ConfirmationReservation/`}>Confirmar reserva</Link>
        </div>
      )}
      <div className='card'>
        <div className='card-title'>Tu horario de llegada </div>
      {/*  <Dropdown isOpen={Dropdown} toggle={abrirCerrarDropdown}>
          <DropdownToggle caret>
            Seleccionar hora de llegada
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>00:00 AM</DropdownItem>
            <DropdownItem> 01:00 AM</DropdownItem>
            <DropdownItem> 02:00 AM</DropdownItem>
            <DropdownItem> 03:00 AM</DropdownItem>
            <DropdownItem> 04:00 AM </DropdownItem>
            <DropdownItem> 05:00 AM</DropdownItem>
            <DropdownItem> 06:00 AM</DropdownItem>
            <DropdownItem> 07:00 AM</DropdownItem>
            <DropdownItem> 08:00 AM</DropdownItem>
            <DropdownItem> 09:00 AM </DropdownItem>
            <DropdownItem> 10:00 AM</DropdownItem>
            <DropdownItem> 11:00 AM</DropdownItem>
            <DropdownItem> 12:00 PM</DropdownItem>
            <DropdownItem> 13:00 PM</DropdownItem>
            <DropdownItem> 14:00 PM </DropdownItem>
            <DropdownItem> 15:00 PM</DropdownItem>
            <DropdownItem> 16:00 PM</DropdownItem>
            <DropdownItem> 17:00 PM </DropdownItem>
            <DropdownItem> 18:00 PM</DropdownItem>
            <DropdownItem> 19:00 PM</DropdownItem>
            <DropdownItem> 20:00 PM </DropdownItem>
            <DropdownItem> 21:00 PM</DropdownItem>
            <DropdownItem> 22:00 PM</DropdownItem>
            <DropdownItem> 23:00 PM </DropdownItem>


          </DropdownMenu>
        </Dropdown>
*/}
      </div>
      <div className="card">
        <div className="card-title">Cosas que tenés que saber</div>
        {reservationInfo && <PoliciesRender product={reservationInfo} />}

      </div>
    </div>

  )
}
export default Reservation