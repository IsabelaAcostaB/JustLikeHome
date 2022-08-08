import React from "react";
import listado from "../listado.json";
import Header from './Header';
import Footer from "./Footer";
import "bootsrap";

function listado(){
<div className="card text-center">
    <img src="../listado.json/listado/img"/>
    <div className="card-body">
    <img src="../listado.json/listado/img" key={listado.id}/>  
            {
                listado.map(listado =>{return (
                
                    <p className="card-text-secondary" key={listado.id}>
                        {listado.description}
                    </p>
                    )
                
                } )
            }
        
         <a href="#!">Ver detalle</a>
         </div>
</div>
}
export default listado