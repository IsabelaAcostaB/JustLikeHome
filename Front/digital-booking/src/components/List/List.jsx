import React from "react";
import listado from "../listado.json";
import Header from './Header';
import Footer from "./Footer";
import "bootsrap";

function listado(){
<div className="card text-center">
    <img src="../listado.json/listado/img"/>
    <div className="card-body">
        <p className="card-text-secondary" src="../listado.json/listado/descripcion"></p>
         <a href="#!">Ver detalle</a>
         </div>
</div>
}
export default listado