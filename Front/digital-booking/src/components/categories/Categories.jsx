import React from "react";
import categorias from "./categorias.json";




function Categorize() {
    
    return (
       

        <>     {categorias.categorias.map(item =>
        (<div key={item.id}>
            <div className="card card-shadow" class="card-img-top">
                <img src={item.image} />
                <h1 className="card-title-align-left" key={item.nombre}>{item.nombre}</h1>
                 <p className="card-text"key={item.caption}>{item.caption}</p>
                
            </div>
        </div>)

        )}</>
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
    )
}




//código sin cards
//    <div className="categories">
//      <Header> </Header>
//    <h1>Categorías</h1>
//   <p>Buscar por tipo de alojamiento</p>
//     {categories.map(alojamiento => 
// <Item categories={alojamiento} handlerValueCount={handlerValueCount}/>

// )}


//  <Footer></Footer>
//  </div>


// const categoryOptions = categories?.map((c) => ({
//    label: c.titulo,
//    value: c.titulo,
//    id: c.id,
//   }));
export default Categorize
