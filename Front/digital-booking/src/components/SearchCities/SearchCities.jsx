import cities from "./co.json"
import React, { useState } from 'react';
import { Container } from "react-bootstrap";
function SearchCities () {

    const[cityId, setCityId]=useState('');
    

    
  const handleCity=(e)=>{
    const getCityId= e.target.value;
    setCityId(getCityId);
  }

    return (
    <div>           
            <select name='city'  onChange={(e)=>handleCity(e)}>
            <option value="">--Selecciona una ciudad--</option>
            {
            cities.map( (getCity,index)=>(
                <option value={getCity.id} key={index}>{getCity.admin_name}</option> 
            ))
            } 
            </select>           
        </div>
        
        
        
)  
}

export default SearchCities;