import React from "react";

/* import listado from "../../../public/listado.json"; */
import listado from "./listado.json";
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
                {/* <a href="#!"></a> */}
                {/* <Link to= "/product/:`{item.id}`"  className="button-2">Ver Detalle</Link> */}

                <Link className="button-2" to={`/product/${item.id}`}>Ver Detalle</Link>



            </p>
        </div>)
    )
    ) 
}

/* Acá llama a la funcion anterior y renderiza todo adentro del div, y esta termina siendo la funcion
    que se exporta a Lists.jsx. Ese archivo se exporta a Main. */ 
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
    /* return (<div className="card text-center">
    
     
            {
                listado.map(listado =>{return (
                    <div key={listado.id}>
                    <img src={listado.img}/>
                    <p className="card-text-secondary" key={listado.id}>
                        {listado.description}
                    </p>
                    </div>
                    )
                } )
            }
         <a href="#!">Ver detalle</a>
         </div>
</div>)

/* listado.map(listado =>{return (
    <div key={listado.id}>
    <img src={listado.img}/>
    <p className="card-text-secondary" key={listado.id}>
        {listado.description}
    </p>
    </div>
    )
}) */


/* LA QUE ANDA */
/*  return (listado.listado.map(item =>
    (<div key={item.id}>
    <img src={item.img}/>
    <p className="card-text-secondary" key={item.id}>
        {item.description}
    </p>
    </div>)
)
)  */


export default Listar;



