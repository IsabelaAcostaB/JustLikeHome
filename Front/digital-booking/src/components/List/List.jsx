import React, {useContext, useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import styles from "../../styles/App.css";
import {FilterContext} from "../FilterContext"
import "bootstrap"
import axios from "axios"


//Acá se renderizan todas las cartas 
function Cards({products,productsCity}){

    
    const {filterData} = useContext(FilterContext);
  
    const results = filterData.cityCode === null ? products : productsCity
    
    return (results.map(item =>
       
        (<div  className="card card-shadow m-3 home-card">
            <div className="container-img-cards">
                <img src={item.img}  class="card-img-top"/>
            </div>
            <p className="card-title" key={item.id}>
                <h2> {item.title}</h2> 
                <p className="card-category">{item.category.title}</p>
                <p className="card-location"></p>
                    <FontAwesomeIcon icon={faLocationDot} className="location-icon"/> 
                    {item.city.name}
                
                <p className="card-description">{item.description}</p>

                <Link className="button-2" to={`/product/${item.id}`}>Ver Detalle</Link>
            </p>
        </div>)
    )
    ) 
}

function Listar({products, productsCity}){
    console.log(products)
    return (
        <div class= "card-deck ">
        <div className="cards-container-recommended">
            
            <Cards products={products} productsCity={productsCity}/>
    
        </div>
       </div>
    )
    }


export default Listar;