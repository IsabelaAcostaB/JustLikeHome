import React from "react";

/* import listado from "../../../public/listado.json"; */
import listado from "./listado.json";
import styles from "../../styles/App.css";
import "bootstrap"



/* Acá se renderizan todas las cartas */
function Cards(){
    return (listado.listado.map(item =>
        (<div key={item.id} className="card card-shadow m-3 home-card">
        <img src={item.img}  class="card-img-top" />
        <p className="card-title" key={item.id}>
           <h2> {item.title}</h2> 
          <p className="card-text">{item.description}</p>
            <a href="#!"class="btn btn-primary">Ver Listado</a>
        </p>

        </div>)
    )
    ) 
}

/* Acá llama a la funcion anterior y renderiza todo adentro del div, y esta termina siendo la funcion
    que se exporta a Lists.jsx. Ese archivo se exporta a Main. */ 
function Listar(){
    return (
        <div class= "d-flex flex-wrap ">
        <div className="row mt-2 p-3">
        
            {Cards()}
    
        </div>
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



