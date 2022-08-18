import React, {useState} from "react";

/* import listado from "../../../public/listado.json"; */
import listado from "./listado.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import cities from "../SearchCities/co.json";

import styles from "../../styles/App.css";
import "bootstrap"
import { useEffect } from "react";





/* Acá se renderizan todas las cartas */
function Cards({filter}){
    
    const [flats, setFlats] = useState(listado.listado);
    const cityId = filter.cityId
    const [useData, setUseData] = useState(
        {
            data:null,
            loading:true,
            error: null
        }
        )



    const getProductsByCity = async(name)=>{
        try {
            return await axios(`/api/city/name/${name}`)
        } catch (error){
            setUseData({error: error});
        } finally {
            setUseData({loading:false});
        }
    }

    
    useEffect(() => {
        if (filter.cityId) {
            const foundCity = cities.find(city => city.id === parseInt(filter.cityId, 10));
            const filteredFlats = getProductsByCity(foundCity.city) 
            setFlats(filteredFlats)
        }
    }, [filter]);

    

    return (flats.map(item =>
        (<div key={item.id} className="card card-shadow m-3 home-card">
            <div className="container-img-cards">
                <img src={item.img}  class="card-img-top"/>
            </div>
            <p className="card-title" key={item.id}>
                <h2> {item.title}</h2> 
                <p className="card-category">{item.category}</p>
                <p className="card-location">
                    <FontAwesomeIcon icon={faLocationDot} className="location-icon"/> 
                    {item.location}
                </p>
                <p className="card-description">{item.description}</p>
                <a href="#!"className="button-2">Ver Detalle</a>
            </p>
        </div>)
    )
    ) 
}

/* Acá llama a la funcion anterior y renderiza todo adentro del div, y esta termina siendo la funcion
    que se exporta a Lists.jsx. Ese archivo se exporta a Main. */ 
function Listar({filter}){
    return (
        <div class= "card-deck ">
        <div className="cards-container-recommended">
            <Cards filter={filter} />
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



