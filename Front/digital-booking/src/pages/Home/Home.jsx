import React, {useState} from "react";

import ListarCat from "../../components/categories/Categories";

import List from "../../components/List/Lists";

import SearchBar from "../../components/Buscador/SearchBar";



const Home = ()=>{

    const [filters, setFilters] = useState(
        {
            cityId: null,
            category: null
        }
    )

    
    return(
        <div className="main">
            <SearchBar onChange={(cityId)=>{setFilters({...filters, cityId})}} ></SearchBar>
            <h1 className="category-title">Bienvenido a Just like Home</h1>
            
            <h2 className="category-title">Selecciona un tipo de alojamiento</h2>
            <ListarCat></ListarCat>
            <h2 className="recommendation-h2">Recomendados</h2>
            <List filter={filters}/>

        </div>
    )
}

export default Home