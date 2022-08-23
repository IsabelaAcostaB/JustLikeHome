import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./product.css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShareSquare } from "@fortawesome/free-regular-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import product from "./products.json";
import ProductHeader from "./ProductHeader";
/* import Carousel from "react-multi-carousel"; */

function Product({productId}) {
  /* const [productInfo, setProductInfo] = useState(product); */
  const [productInfo, setProductInfo] = useState();

  /* ------- CODIGO PARA EL FETCH DEL PRODUCTO ------- */
  function Fetch(){
    
      let url = "http://18.216.199.175:8080/api/product/" + productId;
      useEffect(() => {
          axios.get(url)
              .then(response => setProductInfo(response.data))
              .catch(error => console.log(error))
      }, [url])
        }

    Fetch();

  /* function carouselGallery() {
    <Carousel
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
    >
      <div>
        <img src="assets/1.jpeg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="assets/2.jpeg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="assets/3.jpeg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="assets/4.jpeg" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src="assets/5.jpeg" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img src="assets/6.jpeg" />
        <p className="legend">Legend 6</p>
      </div>
    </Carousel>;
  } */

  return (
    
    (
      <div className="main">
        <ProductHeader
          category={productInfo.category.title}
          title={productInfo.title}
        />
        <div className="product">
          <div className="product-location-container">
            <div className="product-location">
              <p>{productInfo.city.name}, {productInfo.city.name}</p>
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
          <div>
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
            <p>{productInfo.description}</p>
          </div>
        </div>
      </div>
    )
  );
}

export default Product;
