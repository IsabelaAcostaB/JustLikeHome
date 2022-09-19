import React, { useState, useEffect, useContext } from "react";
import bootstrap from "bootstrap";
import {Link} from "react-router-dom"
import SearchCities from "../SearchCities/SearchCities";
import Amenities from "../Products/Amenities";
import axios from "axios";
import ListarCat from "../categories/Categories";
import Url from "../../util/Url";
import createTypography from "@mui/material/styles/createTypography";

const CreateProducts=()=>{
const CategoriesInfo =() => {
    
    function Fetch() {
        const [categoriesInfo, setCategoriesInfo] = useState([]);

        let url = Url() + "/api/category/"; 
        useEffect(() => {
          axios
            .get(url)
            .then((response) => setCategoriesInfo(response.data))
            .catch((error) => console.log(error));
        }, [url]);
      }
      
    
    
    return(
<div className="card">
    <h1>Administración de Productos</h1>
    <div className="card-title">Crear producto</div>
    <div>
            <label htmlFor="nombre">Nombre Producto :</label>
            <input type="text" name="text" id="product name" />
            </div>
            <div>
            <label htmlFor="select">Categoría :</label>
           <select name="category" className="select-input">
           {CategoriesInfo.map((CategoriesInfo, index) => (
                        <option value={CategoriesInfo.code} key={index}>{CategoriesInfo.name}</option>
                        ))}
                    </select>

 
            </div>
            <div>
            <label htmlFor="select">Ciudad :</label>
            <select name="city" className="search_cities">
            <option value="">Seleccione la ciudad</option>
          {SearchCities.map((city, index) => (
            <option value={city.code} key={index}>
              {city.name}
            </option>
          ))}           

                    </select>    
            </div>
            <div>
            <label htmlFor="description">Descripción :</label>
            <input type="textarea" name="textarea" id="description" />    
            </div>
            <div>
            <label htmlFor="adress">Dirección :</label>
            <input type="text" name="text" id="adress" />    
            </div>
            <div>
            <label htmlFor="latitude">Latitud :</label>
            <input type="text" name="text" id="latitude" />    
            </div>
            <div>
            <label htmlFor="length">Longitud :</label>
            <input type="text" name="text" id="length" />    
            </div>
            <div>
            <label htmlFor="checkbox">Características :</label>
            <input type="checkbox" name="checkbox" id="characteristics" />   
            <option>{Amenities.map}</option> 
            </div>

</div>
    )
}
}
export default CreateProducts