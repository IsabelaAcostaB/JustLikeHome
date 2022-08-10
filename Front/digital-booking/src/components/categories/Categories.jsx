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

        </div>
        </div>

    )}

export default ListarCat;