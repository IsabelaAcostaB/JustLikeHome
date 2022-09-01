import React, {useState, useContext} from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FilterContext } from "../FilterContext";
import { DateRangePicker } from "react-date-range";
import SearchCities from "../SearchCities/SearchCities";
import "./searchbar.css";
import {format} from 'date-fns'
import defaultLocale from 'date-fns/locale/es'
import Loader from "react-js-loader"
import useWindowDimensions from "../../hooks/useWindowDimensions.jsx"

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [search, setSearch] = useState({ cityCode: null });
  const {setFilterData, handleFilterData} = useContext(FilterContext);
  
  const windowDimension = useWindowDimensions()
  
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const [dropCalendar, setDropCalendar] = useState(false)
  const showCalendar =()=>{
    setDropCalendar(true)
  }

  /*
  <SearchIcon 
            sx={{ fontSize: 40 }}
            style={{cursor: "pointer"}}
            
            onClick={() => handleFilterData(search)}

  ></SearchIcon>



  <div className="flex">
              <button className="button-2" onClick={resetInput}>
                Cancelar
              </button>
              <button className="button-2">Buscar</button>
  </div>
  */

 
  return (
    <div className="searchbar-container">
      <h1> Busca ofertas en casas, cabañas y mucho más</h1>

      <div className="search-bar">
        <SearchCities setSearch={setSearch} />
        <div className="search-bar">
          <div className="search-input">
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onClick={showCalendar}
              placeholder="Selecciona tus fechas"
            />
            
          </div>
        </div>

        {searchInput && (
          <div className="calendar-container">
            {windowDimension.width < 768 ?
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#E48561"]}
              onChange={handleSelect}
              locale= {defaultLocale}
              direction="horizontal"
              months={1} 
              showDateDisplay={false}
            />
            :
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#E48561"]}
              onChange={handleSelect}
              locale= {defaultLocale}
              direction="horizontal"
              months={2} 
              showDateDisplay={false}
            />
            }

            <div>
              <button className="button-search">Aplicar</button>
            </div>
            
          </div>
        )}

        <div className="button-search" onClick={() => handleFilterData(search)}>
          Buscar
        </div>


      </div>
    </div>
  );
}

export default SearchBar;