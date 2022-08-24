import React, { useState, useEffect } from "react";
import ListarCat from "../../components/categories/Categories";
import axios from 'axios';
import SearchBar from "../../components/Buscador/SearchBar";
import Listar from "../../components/List/List";
import {FilterProvider} from "../../components/FilterContext"


const Home = ()=>{
    const [productInfo, setProductInfo] = useState([]);  

    let url = "http://18.216.199.175:8080/api/";
    useEffect(() => {
      axios.get(url)
      .then(response => setProductInfo(response.data))
            
      .catch(error => console.log(error))
    }, [url])
      
  
    return(
      <FilterProvider>
        <div className="main">
          <SearchBar></SearchBar>
          <h1 className="category-title">Bienvenido a Just like Home</h1>
            
          <h2 className="category-title">Selecciona un tipo de alojamiento</h2>
          <ListarCat/>
          <h2 className="recommendation-h2">Recomendados</h2>
          <Listar products={productInfo}/>
          <ul>
            
            {/*  {data && data.List.map(item => (
            <li key={item.ID}>
              <a href={item.url}>{item.title}</a>
            </li>
            ))} */}


          </ul>

        </div>
      </FilterProvider>
    )
}

export default Home
