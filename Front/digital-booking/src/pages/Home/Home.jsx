import React from "react";
import ListarCat from "../../components/categories/Categories";
import List from "../../components/List/Lists";
import SearchBar from "../../components/Buscador/SearchBar";



const Home = ()=>{

    return(
        <div className="main">
          <SearchBar></SearchBar>
          <h1 className="category-title">Bienvenido a Just like Home</h1>
            
          <h2 className="category-title">Selecciona un tipo de alojamiento</h2>
          <ListarCat></ListarCat>
          <h2 className="recommendation-h2">Recomendados</h2>

          <List />

          <ul>
            
     
          </ul>


        </div>
    )
}

export default Home