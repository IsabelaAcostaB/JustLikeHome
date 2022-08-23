import React from "react";
/* import products from "./products.json" */

function Amenities({product}){
    /* console.log("IAKDKLASDA"), */
    return(product.amenities.map(item => (
        <div key={item.id}>
            {console.log("IAKDKLASDA")}
            {console.log(item.title)}
            <img src={item.icon}/>
            {<p>{item.title}</p>}
        </div>
    )))
}

export default Amenities;