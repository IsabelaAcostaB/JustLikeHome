import React from "react";

import ListarCat from "../../components/categories/Categories";

import Cards from "../../components/List/Lists";


const Home = ()=>{
    return(
        <div className="main">

            <h1>Bienvenidos a la home</h1>
            <h2>Seleccione un tipo de alojamiento</h2>
            <ListarCat></ListarCat>
            <h2>Recomendaciones</h2>
            <List/>

        </div>
    )
}

export default Home