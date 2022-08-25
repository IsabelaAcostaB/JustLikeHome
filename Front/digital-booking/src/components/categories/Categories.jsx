import React from "react";
import listado from "./categorias.json";
import Cards from "../List/Card";
import axios from 'axios';
import { useState, useEffect, useContext } from "react";
import { FilterContext } from "../FilterContext";


const Categorias= ()=>{
   
      const {handlerFilterData} = useContext(FilterContext);
      const [categoryInfo, setCategoryInfo] = useState([]);

      function Fetch(){

          let url = "http://18.217.103.69:8080/api/category/";
            

                useEffect(() => {
                axios.get(url)
                .then(response => setCategoryInfo(response.data/* .results */))
                    
                .catch(error => console.log(error))
                }, [url])
            }

        Fetch();
     
        return (
    
            categoryInfo.map(item => (
                
                <div key={item.id} className="card card-shadow m-3 home-card" onClick={()=>handlerFilterData({category : item.title})}>
                    <img src={item.imageURL}  class="card-img-top" />
                    <p className="card-title" key={item.id}>
                    <h2> {item.title}</h2> 
                    <p className="card-text">{item.description}</p>
                    </p>
                </div>
                
            )
            ) 
         )
}

/* Acá llama a la funcion anterior y renderiza todo adentro del div, y esta termina siendo la funcion
    que se exporta a Lists.jsx. Ese archivo se exporta a Main. */
function ListarCat() {
    return (
        <div className="card-deck">
            <div className="cards-container-category">
                {Categorias()}
            </div>
        </div>

    )}

export default ListarCat;