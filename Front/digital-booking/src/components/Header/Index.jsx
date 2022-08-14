import React, { useContext, useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import './header.css';
import logo from "../../asserts/icons/LogoJLH2.png"
import Sidebar from "../SideBar/Sidebar.jsx"
import { Link } from "react-router-dom"
import UserContext from "../context"
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from 'react-date-range';
import SearchCities from "../SearchCities/SearchCities";





function Header ()  {
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
      
        <header className="col-3">
            <div className="header-boxes">
                <Link to="/" >
                    <div className="logotype">
                        <div className="logo">
                            <img className="header__icon" src={logo} alt="logo Just Like"/>
                        </div>
                    </div>
                </Link>
            
            
                
            <div className="header__center">
            <SearchCities/>
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="text"placeholder="Inicia tu búsqueda"
                />
                <SearchIcon/>
            </div>  

                

                <div className="user-login">
                    <div className="login-buttons">
                        <div className="button-6 buttonSignUp" >
                            <Link to="/signUp" >Crear Cuenta</Link>
                        </div>
            
                        <div className="button-6 buttonSignIn">
                            <Link to="/signIn" >Iniciar sesión</Link>
                        </div>
                    </div>
                    
                </div>
                
                
                <div className="user-info">
                    <div className="user-name">
                        <div className="user-avatar">
                            <p>NU</p>
                        </div>
                        <p className="name">Hola, </p>
                    </div>
                    <Link to="/">Cerrar sesión</Link>
                </div>

                
                <div className="menu">
                    <Sidebar />
                </div>
                

            </div>

            {searchInput && 
                <div>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate = {new Date()}
                        rangeColors={["#E48561"]}
                        onChange={handleSelect}
                    />
                     <div className="flex">
                        <button onClick={resetInput} className="flex-grow">Cancelar</button>
                        <button className="flex-grow">Buscar</button>
                    </div>
                
                </div>  
                }
           
            
        </header>
    )
}
    

export default Header