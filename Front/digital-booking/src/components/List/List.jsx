import React from "react";

/* import listado from "../../../public/listado.json"; */
import listado from "./listado.json";

import "bootstrap";

/* Acá se renderizan todas las cartas */
function Cards(){
    return (listado.listado.map(item =>
        (<div key={item.id}>
        <img src={item.img}/>
        <p className="card-text-secondary" key={item.id}>
            {item.description}
        </p>
        </div>)
    )
    ) 
}

/* Acá llama a la funcion anterior y renderiza todo adentro del div, y esta termina siendo la funcion
    que se exporta a Lists.jsx. Ese archivo se exporta a Main. */ 
function Listar(){
    return (
        <div className="card text-center">
        
            {Cards()}
        
        </div>
    )
    }
    /* return (<div className="card text-center">
    
     
            {
                listado.map(listado =>{return (
                    <div key={listado.id}>
                    <img src={listado.img}/>
                    <p className="card-text-secondary" key={listado.id}>
                        {listado.description}
                    </p>
                    </div>
                    )
                } )
            }
         <a href="#!">Ver detalle</a>
         </div>
</div>)
 */
/* listado.map(listado =>{return (
    <div key={listado.id}>
    <img src={listado.img}/>
    <p className="card-text-secondary" key={listado.id}>
        {listado.description}
    </p>
    </div>
    )
}) */


/* LA QUE ANDA */
/*  return (listado.listado.map(item =>
    (<div key={item.id}>
    <img src={item.img}/>
    <p className="card-text-secondary" key={item.id}>
        {item.description}
    </p>
    </div>)
)
)  */


export default Listar;