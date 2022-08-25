import React, {useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import SearchCities from "../SearchCities/SearchCities";
import "./searchbar.css";


function SearchBar({searchCity}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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



 
  return (
    <div className="searchbar-container">
      <h1> Busca ofertas en casas, cabañas y mucho más</h1>

      <div className="search-bar">
        <SearchCities></SearchCities>
        <div className="search-bar">
          <div className="search-input">
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              placeholder="Selecciona tus fechas"
            />
            <SearchIcon 
            sx={{ fontSize: 40 }}
            style={{cursor: "pointer"}}
            onClick={()=> searchCity}
            ></SearchIcon>
          </div>
        </div>

        {searchInput && (
          <div className="calendar-container">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#E48561"]}
              onChange={handleSelect}
            />
            <div className="flex">
              <button className="button-2" onClick={resetInput}>
                Cancelar
              </button>
              <button className="button-2">Buscar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
