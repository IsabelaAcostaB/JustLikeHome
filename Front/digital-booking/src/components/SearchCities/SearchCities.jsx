
import React, { useState, useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FilterContext } from "../FilterContext";
import axios from "axios"


function SearchCities() {
  
  const {handleFilterData} = useContext(FilterContext);
  

  const [cities, setCities] = useState([])
  let url = "http://18.217.103.69:8080/api/city";
  useEffect(() => {
    axios.get(url)
    .then(response => setCities(response.data))
    .catch(error => console.log(error))
  }, [url])

  function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }
  
  return (
    <div>
      <div>
        <select name="city" onChange={(e)=>handleFilterData({cityName :  e.target.value})} className="search_cities">
          
          <option value="">Selecciona una ciudad</option>
          {cities.map((city, index) => (
            <option value={city.name} key={index}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SearchCities;
