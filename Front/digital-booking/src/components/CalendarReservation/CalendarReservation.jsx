import React, {useState} from "react";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import calendar from "./calendar.css"
import defaultLocale from 'date-fns/locale/es';
import { addDays } from 'date-fns';
import useWindowDimensions from "../../hooks/useWindowDimensions.jsx"



const CalendarReservation =()=>{

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
            

      <div className="reservation-container">
      <div className="reservation">
        <h3>Agregá tus fechas de viaje para obtener precios exactos</h3>
        <button className="button-c">Iniciar reserva</button>
      </div>

    </div>
    </div>

  )
}

export default CalendarReservation