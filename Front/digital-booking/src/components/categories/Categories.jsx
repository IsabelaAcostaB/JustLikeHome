
import React from "react";
import Categories from "../categorias.json";
import Header from "../Header/Index.jsx";
import Footer from "../Footer/Index.jsx"



export default function categories({handlerValueCount}){
    return(
        <div className="categories">         
           <Header> </Header>
            <h1>Categorías</h1>
            <p>Buscar por tipo de alojamiento</p>
            {categories.map(alojamiento => 
            <Item categories={alojamiento} handlerValueCount={handlerValueCount}/>

           )}
            
            
            <Footer></Footer>
        </div>
        
    )
}

// const categoryOptions = categories?.map((c) => ({
//    label: c.titulo,
//    value: c.titulo,
//    id: c.id,
//   }));

