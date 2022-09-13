import React from "react";
import bootstrap from "bootstrap";
import {Link} from "react-router-dom"
import SearchCities from "../SearchCities/SearchCities";
import Amenities from "../Products/Amenities";

const CreateProducts =() => {
    
    
    return(
<div className="card">
    <h1>Administración de Productos</h1>
    <div className="card-title">Crear producto</div>
    <div>
            <label htmlFor="nombre">Nombre Producto :</label>
            <input type="text" name="text" id="product name" />
            </div>
            <div>
            <label htmlFor="category">Categoría :</label>
            <input type="select" name="select" id="category" />    
            </div>
            <div>
            <label htmlFor={SearchCities}>Ciudad :</label>
            <input type="select" name="select" id="city" />    
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
            <label htmlFor={Amenities}>Características :</label>
            <input type="checkbox" name="checkbox" id="characteristics" />    
            </div>

</div>
    )
}

export default CreateProducts