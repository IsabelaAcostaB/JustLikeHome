import React, {useContext, useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import styles from "../../styles/App.css";
import {FilterContext} from "../FilterContext";
import "bootstrap";
import axios from "axios";


/* Acá se renderizan todas las cartas */
function Cards({products}){


    const {filterData} = useContext(FilterContext)
    const [productsByCity, setProductsByCity]=useState([])
    useEffect(() => {
        if (filterData.cityName) {

            const getProductsByCity = async ()=>{
                const url = `http://localhost:8080/api/city/name/${encodeURIComponent(filterData.cityName)}`;
                const result = await axios.get(url);
    
                //console.log(result.data);
                setProductsByCity(result.data)
            }
            getProductsByCity()
        }
    }, [filterData]);

    const [productByCategory, setProductByCategory]=useState([])
    useEffect(()=>{
        if (filterData.category){
            const getProductsByCategory = async ()=>{
                const url = `http://localhost:8080/api/category/name/${filterData.category}`;
                const result = await axios.get(url);
    
                //console.log(result.data);
                setProductByCategory(result.data)
            }
            getProductsByCategory()
        }
        
    },[])



    return (products.map(item =>
        /* console.log(item) */
        (<div /* key={item.id} */ className="card card-shadow m-3 home-card">
            <div className="container-img-cards">
                <img src={item.images[4].imageURL}  class="card-img-top"/>
            </div>
            <p className="card-title" key={item.id}>
                <h2> {item.title}</h2> 
                <p className="card-category">{item.category.title}</p>
                <p className="card-location">
                    <FontAwesomeIcon icon={faLocationDot} className="location-icon"/> 
                    {item.city.name}
                    </p>
                
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



