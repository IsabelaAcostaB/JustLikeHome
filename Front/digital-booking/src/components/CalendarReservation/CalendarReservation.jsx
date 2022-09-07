import React, {useState} from "react";
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import calendar from "./calendar.css"
import defaultLocale from 'date-fns/locale/es';
import useWindowDimensions from "../../hooks/useWindowDimensions.jsx"
import {Link} from 'react-router-dom';



const CalendarReservation =({id})=>{
  let location = window.location.pathname;
  
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  const disabledDates = [

    //2 y 3 de diciembre
    new Date(2022, 11, 3),
    new Date(2022, 11, 2),
    new Date(2022, 8, 10),
    new Date(2022, 8, 20),


  ]


  const windowDimension = useWindowDimensions()

  /*
  function handleSelect(ranges){
    console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }


  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }

          

  */

  return (
    <div className="reservationBlock">

      <div className="calendarBlock">
        <h2>Fechas disponibles</h2>
        
        
        {windowDimension.width < 768 ?
          <Calendar 
            direction="horizontal"
            showPreview = {false}
            locale= {defaultLocale}
            minDate={new Date()}
            months={1} 
            disabledDates={disabledDates}

          />

        :

        <Calendar 
            direction="horizontal"
            showPreview = {false}
            locale= {defaultLocale}
            minDate={new Date()}
            months={2} 
            disabledDates={disabledDates}

        />

        }

      </div>
      <div className="reservation-container">
      <div className="reservation">
        <h3>Agregá tus fechas de viaje para obtener precios exactos</h3>
        {/* <button className="button-c">Iniciar reserva</button> */}
        <Link className="button-c" to={`/reservation/${id}`}>Iniciar reserva</Link>
        
      </div>

    </div>
    </div>

  )
}

export default CalendarReservation