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
    
      const disabledDates=[1,2,3,4,5,6]
      const windowDimension = useWindowDimensions()
      const {setFilterData, handleFilterData} = useContext(FilterContext);

  const [reservationInfo, setReservationInfo] = useState();

  function Fetch() {
    let url = Url()+ "/api/product/product/" + location;
    useEffect(() => {
      axios
        .get(url)
        .then((response) => setReservationInfo(response.data))
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    }, [url]);
  }


  Fetch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return (
        <div>
        
        <div className="card">
            <h1>Completá tus datos</h1>
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
        <h2>Tu Horario de llegada</h2>

         <div className="reservationBlock">

      <div className="calendarBlock">
        <h2>Fechas disponibles</h2>
        
        
        {windowDimension.width < 768 ?
        <DateRange className="calendar-mobile"
        
          editableDateInputs={true}
          onChange={item => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
          locale= {defaultLocale}
        />

        :

        <DateRange className="calendar-tablet"
          onChange={item => setState([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={state}
          direction="horizontal"
          locale= {defaultLocale}
          disablePast
          
        />

        }
        


        
         </div>
        </div>
        
      
        
        {reservationInfo && (
          <div className="card">
        <div className="card-title">Detalle de Reserva</div>
        <img src={reservationInfo.images[1].imageURL}  class="card-img-top" /> 
          <p className="card-title" key={reservationInfo.id}>
            <h2> {reservationInfo.title}</h2> 
            <p className="card-text">{reservationInfo.description}</p>
          </p>
          </div>
        )}

<div className="card">
    <div className="card-title">Cosas que tenés que saber</div>


</div>
</div>

    )
    }
export default Reservation