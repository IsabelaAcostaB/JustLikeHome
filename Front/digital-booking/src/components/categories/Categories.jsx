import React from "react";
import categories from "./categorias.json";
import Cards from "../List/Card";

/* Acá llama a la funcion anterior y renderiza todo adentro del div, y esta termina siendo la funcion
    que se exporta a Lists.jsx. Ese archivo se exporta a Main. */
function ListarCat() {
    return (
        <div className="card-deck">
        <div class="d-flex-row">

            {Categorize()}


export default function Categories({handlerValueCount}){
    return(
        <div className="categories">         
            <h1>Categorías</h1>
            <p>Buscar por tipo de alojamiento</p>
            
            {categories.map(alojamiento => <Cards categories={alojamiento} handlerValueCount={handlerValueCount}/>)}
            
        </div>
        
    )
}

// const categoryOptions = categories?.map((c) => ({
//    label: c.titulo,
//    value: c.titulo,
//    id: c.id,
//   }));


