import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./product.css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShareSquare } from "@fortawesome/free-regular-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import ProductHeader from "./ProductHeader";
import Amenities from "./Amenities";
import useWindowDimensions from './Window';
import CarouselRender from "../Carousel/Carousel";
import CarouselDesktopRender from "../Carousel/CarouselDesktop";
import CalendarReservation from "../CalendarReservation/CalendarReservation";
import Url from "../../util/Url";

function ImagesRender({ product }) {
  const slicedArray = product.images.slice(0, 4);
  /* slicedArray=product.images */

  return slicedArray.map((item) => (
    <div>
      <img src={item.imageURL} />
    </div>
  ));
}

function PoliciesRender({ product }) {
  let rules = product.policy.rules;
  let arrayRules = rules.split(",");
  let health_safety = product.policy.health_safety;
  let arrayHealth = health_safety.split(",");
  let cancellation_policy = product.policy.cancellation_policy;
  let arrayCancellation = cancellation_policy.split(",");
  
  return (
    <div className="policies-container">
      <div className="rules-container">
        <h3>Normas de la casa</h3>
        <ul type="none">
          {arrayRules.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div className="healthSafety-container">
        <h3>Salud y seguridad</h3>
        <ul type="none">
        {arrayHealth.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div className="cancellation-container">
        <h3>Política de cancelación</h3>
        <ul type="none">
        {arrayCancellation.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


function Product() {
  const [productInfo, setProductInfo] = useState();
  const {width, height} = useWindowDimensions();
  let location = window.location.pathname;
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  /* ------- CODIGO PARA EL FETCH DEL PRODUCTO ------- */
  function Fetch() {
    let url = Url()+ "/api/product" + location;
    useEffect(() => {
      axios
        .get(url)
        .then((response) => setProductInfo(response.data))
        .catch((error) => console.log(error));
    }, [url]);
  }

  Fetch();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  /* ----- Tipo de carousel renderizado segun device width ----- */
  function CarouselDevice({width, product}){
    if(width >= 1024){
      return (
        <div className={isActive ? "carousel-container-show" : "carousel-container"}>
          <FontAwesomeIcon icon={faCircleXmark} className="carousel-close" onClick={handleToggle}/>
        <CarouselRender product={product} interval='100000'/>
        </div>
      )
    } else{
      return(
      <CarouselRender product={product} interval="3000"/>
      )
    }
  }

  return (
    <div className="main">
      {productInfo && (
        <div className="main">
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
              <FontAwesomeIcon icon={faShareSquare} />
              <FontAwesomeIcon icon={faHeart} />
            </div>

            <div className="gallery-container">
              <div id="mainImage">
                <img src={productInfo.images[4].imageURL} />
              </div>
              <ImagesRender product={productInfo} />
              
            </div>
            <p className="gallery-p" onClick={handleToggle}>Ver más</p>
            
            {/* <FontAwesomeIcon icon={faCircleXmark} className="carousel-close" onClick={handleToggle}/> */}
            <CarouselDevice width={width} product={productInfo}/> 
            <div className="description">
              <h2>{productInfo.description_title}</h2>
              <p>{productInfo.description}</p>
            </div>
            <div className="amenities">
              <h2>¿Qué ofrece este lugar?</h2>
              <hr></hr>
              <div className="characteristics">
                <Amenities product={productInfo} />
              </div>
            </div>

            <CalendarReservation id={productInfo.id}/>
            <div className="policies">
              <h2>Qué tenés que saber</h2>
              <hr></hr>
              <PoliciesRender product={productInfo} />

              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
