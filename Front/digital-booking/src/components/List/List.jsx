import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import styles from "../../styles/App.css";
import "bootstrap"


/* Acá se renderizan todas las cartas */
function Cards({products}){
    return (products.map(item =>
        /* console.log(item) */
        (<div /* key={item.id} */ className="card card-shadow m-3 home-card">
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

function Listar({products}){
    console.log(products)
    return (
        <div class= "card-deck ">
        <div className="cards-container-recommended">
            
            <Cards products={products}/>
    
        </div>
       </div>
    )
    }


export default Listar;



