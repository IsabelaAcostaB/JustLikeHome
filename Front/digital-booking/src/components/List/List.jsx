import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { fawashingmachine } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "../../styles/App.css";
import "bootstrap";
import AcortarDescripcion from "./Description";

/* import Loader from "react-js-loader"; */

function AmenitiesIcons({ product }) {
  return (
    <div className="card-amenities">
      {product.amenities.map((item) => (
        <img src={item.icon} />
      ))}
    </div>
  );
}

function ImagesRender({item}){
  let mainImage;
  for (let i = 0; i < item.images.length; i++) {
    if (item.images[i].main_img){
      mainImage = item.images[i].imageURL
    }
    
  }

  return (
    <img src={mainImage} class="card-img-top" />
  )
}

function Cards({ products }) {
  /*  if (loading){
    return <Loader type="spinner-circle" bgColor={"#384d58"} title={"Buscando"} color={'#e48561'} size={50} />
  } */

  return products.map((item) => (
    <div className="card card-shadow m-3 home-card">
      <div className="container-img-cards">
        
        {/* <img src={item.images[4].imageURL} class="card-img-top" />
        <img src={item.images[4].imageURL} class="card-img-top" /> */}
        <ImagesRender item={item}/>
      </div>
      <p className="card-title" key={item.id}>
        <h2> {item.title}</h2>
        <p className="card-category">{item.category.title}</p>
        <p className="card-location">
          <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
          {item.city.name}
        </p>
        {/* <p className="card-description">{item.description}</p>  */}
        <AmenitiesIcons product={item} />
        <AcortarDescripcion item={item} />
        <Link className="button-2" to={`/product/${item.id}`}>
          Ver Detalles
        </Link>
      </p>
    </div>
  ));
}

function Listar({ products }) {
  return (
    <div class="card-deck ">
      <div className="cards-container-recommended">
        <Cards products={products} />
      </div>
    </div>
  );
}

export default Listar;
