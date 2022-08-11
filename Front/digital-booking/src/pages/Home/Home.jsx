import React from "react";

import ListarCat from "../../components/categories/Categories";

import Cards from "../../components/List/Lists";


const Home = ()=>{
    return(
        <div className="main">

            <h1>Bienvenidos a la home</h1>
            <ListarCat></ListarCat>

        </div>
    )
}

export default Home