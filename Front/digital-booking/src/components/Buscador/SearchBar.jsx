import React, { useContext, useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom"
import UserContext from "../context"
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from 'react-date-range';
import SearchCities from "../SearchCities/SearchCities";
import "./searchbar.css"

function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const resetInput = () => {
        setSearchInput("");
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const user = useContext(UserContext)
    

return (

    <div className="searchbar-container">
    <h1> Busca ofertas en hoteles, casas y mucho más</h1>

    <div className="search-bar">
        <SearchCities></SearchCities>
            {/* <SearchCities/> */}
            <div className="search-input">
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="text"placeholder="Inicia tu búsqueda"
                />
                
                <SearchIcon></SearchIcon>
            </div> 
            </div>

            </div> 
)
}

export default SearchBar;