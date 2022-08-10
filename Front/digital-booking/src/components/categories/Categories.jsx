import React from "react";
import categories from "./categorias.json";
import Cards from "../List/Card";




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


