import React from "react";
import listado from "./categorias.json";
import Cards from "../List/Card";



function Categorize(){
    return (listado.categories.map(item =>
        (<div key={item.id} className="card card-shadow m-3 home-card">
        <img src={item.image}  class="card-img-top" />
        <p className="card-title" key={item.id}>
           <h2> {item.nombre}</h2> 
          <p className="card-text">{item.caption}</p>
            <a href="#!"class="btn btn-primary">Ver Listado</a>
        </p>

        </div>)
    )
    ) 
}


/* Acá llama a la funcion anterior y renderiza todo adentro del div, y esta termina siendo la funcion
    que se exporta a Lists.jsx. Ese archivo se exporta a Main. */
function ListarCat() {
    return (
        <div className="card-deck">
        <div class="d-flex-row">

            {Categorize()}

        </div>
        </div>

    )}

export default ListarCat;