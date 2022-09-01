import React, {useState} from "react";
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import calendar from "./calendar.css"
import defaultLocale from 'date-fns/locale/es';
import { addDays } from 'date-fns';
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

  const disabledDates=[1,2,3,4,5,6]
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
            minDate={addDays(new Date(), 0)}
            months={1} 

          />

        :

        <Calendar 
            direction="horizontal"
            showPreview = {false}
            locale= {defaultLocale}
            minDate={addDays(new Date(), 0)}
            months={2} 

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