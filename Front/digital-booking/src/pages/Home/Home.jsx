import React from "react";
import Cards from "../../components/List/Lists";
import Categorize from "../../components/Categories/Categories"

const Home = ()=>{
    return(
        <div className="main">
            <h1>Home</h1>
            <h2>Buscar por tipo de Alojamiento</h2>
            <Categorize/>
        <h2>Recomendaciones</h2>
            
            <Cards/>
           
            
           
        </div>
    )
}

export default Home