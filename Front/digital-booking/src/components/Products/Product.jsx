import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./product.css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShareSquare } from "@fortawesome/free-regular-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import ProductHeader from "./ProductHeader";
/* import Carousel from "react-multi-carousel"; */


function Product() {
  const [productInfo, setProductInfo] = useState();
 
  let location = window.location.pathname;

  /* ------- CODIGO PARA EL FETCH DEL PRODUCTO ------- */
  function Fetch() {
    let url = "http://18.216.199.175:8080/api" + location;
    useEffect(() => {
      axios.get(url)
        .then((response) => setProductInfo(response.data))
        .catch((error) => console.log(error));
    }, [url]);
  }

  Fetch();

  return(
    
    <div className="main">
      {productInfo && <div className="main">
        <ProductHeader
          category={productInfo.category.title}
          title={productInfo.title}
        />
        <div className="product">
          <div className="product-location-container">

            <div className="product-location">
              <p>
                {productInfo.city.name}, {productInfo.city.country}
              </p>
              <p>
                <FontAwesomeIcon icon={faMap} /> A 320m del centro
              </p>
            </div>

            <div className="product-rating">
              <div>
                <p>Muy bueno</p>
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <p>8</p>
            </div>
          </div>


          <div className="socialIcons">
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faShareSquare} />
          </div>

          <div className="gallery-container">
            <img src={productInfo.images.main} alt="" />
            <div className="mini-gallery">
              <img src={productInfo.images.other1} alt="" />
              <img src={productInfo.images.other2} alt="" />
              <img src={productInfo.images.other3} alt="" />
              <img src={productInfo.images.other4} alt="" />
            </div>
          </div>
          <div className="description">
            <h2>{productInfo.description_title}</h2>
            <p>{productInfo.description}</p>
          </div>
          <div className="amenities">

          </div>
        </div>
      </div>
    } 
    </div>

  )
}

export default Product;
