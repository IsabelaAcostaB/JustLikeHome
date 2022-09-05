import React, { useState, useContext, useEffect } from "react";
import { Container } from "react-bootstrap";

import axios from "axios";
import Url from "../../util/Url";


function SearchCities({setSearch}) {

  const [cities, setCities] = useState([]);

  useEffect(() => {
    let url = Url() + "/api/city";
    axios.get(url)
    .then(response => setCities(response.data))
    .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <div>
        <select name="city" onChange={(e)=>setSearch({cityCode: e.target.value, category: null})} className="search_cities">
          <option value="">Selecciona una ciudad</option>
          {cities.map((city, index) => (
            <option value={city.code} key={index}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SearchCities;

