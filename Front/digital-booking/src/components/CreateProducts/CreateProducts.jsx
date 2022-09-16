import React, { useState } from "react";
import bootstrap from "bootstrap";
import {Link, useNavigate} from "react-router-dom"
import SearchCities from "../SearchCities/SearchCities";
import Amenities from "../Products/Amenities";
import axios from "axios";
import Url from "../../util/Url";
import ProductHeader from "../Products/ProductHeader"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus, faXmark} from '@fortawesome/free-solid-svg-icons'
import create from "./create.css"

const CreateProducts =() => {
    
    const navigate = useNavigate();
    
    const [errorMessage, setErrorMessage]= useState(null)
    
    const [productData, setProductData]=useState({
        title: null,
        categoryId: null,
        images: [],
        descriptionTitle: null,
        description: null,
        amenitiesId: null,
        availability: null,
        policyId: null,
        cityId: null,
        reservation_id: null
    })


    //console.log(productData);
    
    const handleSubmit =(event)=>{
        event.preventDefault();

        const postProduct = async ()=>{

            try{

                const url = Url() + "api/product";
                const response = await axios.post(url, productData);
        

                if (response.status === 201){
                    navigate("/message")
                }
                else {
                    setErrorMessage("Lamentablemente, el producto no ha podido crearse. Por favor, intente más tarde")
                }
            }catch(error){
                //console.log(error)
                setErrorMessage("Lamentablemente, el producto no ha podido crearse. Por favor, intente más tarde")
            }

        }
        postProduct()

    }

    const sendMessage=()=>{
        navigate("/ConfirmationProduct")
    }
    
    //onClick={handleSubmit}

    const handleChange =(e)=>{
        const {name, value} = e.target
        setProductData({...productData, [name]:value});
    }

    const [formImages, setFormImg] =useState([])
    const [img, setImg]= useState(
        {
            imageURL: null,
            //main_img:null,
            title: null 
        }
    );

    const handleImg =(e)=>{
        //console.log(e.target.files);
        //console.log(e.target.value);
        //const {name, value} = e.target
        //img.imgName
        
        setImg({imageURL:e.target.value, title:getImageName(e.target.value)});
    }
    

    //let imagePath = e.target.files;
    //let locationAPI = locationReservation.split("/");
    //let location = locationAPI[2];

    const getImageName = imageName => {
        let name = imageName;
        let separatedName = name.split("/");
        let lastElement = separatedName.pop()
        return lastElement
    }    
    
    const addImage=()=>{
        
        //Capturar valor del input
        //Al apretar boton mas, pushea al array de imagenes ese valor
        //productData.images.push(image)
        //Vaciar input de imagenes

        // Se muestra debajo del input, los nombre de las imagenes que pusimos
        productData.images.push(img)
        setImg({imageURL:"", title:""})
    }


    const deleteImage =(i) =>{
        //sacar del array dependiendo de su key

        //let foundIndex = productData.images.indexOf(i);
        
        //productData.images.splice(foundIndex,1);
        
        let newArray = productData.images.filter(p=>{
            //p.imageURL !== i
        })

        setProductData({...productData, images:newArray})
        
        //console.log(productData);
    } 

    //console.log(productData.images.indexOf("https://justlikehome-images.s3.us-east-2.amazonaws.com/util/logo+fondo+blanco+header.jpg"));
    //"https://justlikehome-images.s3.us-east-2.amazonaws.com/util/logo+fondo+blanco+header.jpg"
    //"https://justlikehome-images.s3.us-east-2.amazonaws.com/util/casa-campo.jpg"

    //logo+fondo+blanco+header.png
    //casa-campo.jpg
    //value={productData.images}

    return(
    <div className="main">
        <ProductHeader title ={"Administración"}  path ={"/"}/>
        <h1 className="title-h1">Crear producto</h1>
        <div className="product-form">
            <form className="form-p">
                <div className="info-form">
                    <label htmlFor="title">Nombre Producto :</label>
                    <input type="text" name="title" id="product name" value={productData.title} onChange={handleChange} required/>
                    
                </div>

                <div className="info-form">
                    <label htmlFor="category">Categoría :</label>
                    <select name="category" className="select-input">
                        <option value=""> Elegir categoria</option>

                    </select>
                </div>

                <div className="info-form">
                    <label htmlFor={SearchCities}>Ciudad :</label>
                    <select name="cities" className="select-input">
                        <option value=""> Elegir ciudad</option>

                    </select>    
                </div>

                <div className="info-form">
                    <label htmlFor="description-title">Titulo de la descripción:</label>
                    <input type="textarea" name="description-title" id="description-title" value={productData.descriptionTitle} onChange={handleChange} 
                    placeholder="Hermosa casa de playa" required/>    
                </div>

                <div className="info-form">
                    <label htmlFor="description">Descripción:</label>
                    <input type="text" name="description" id="description" value={productData.description} onChange={handleChange} required/>    
                </div>

                <div className="info-form">
                    <label htmlFor="adress">Dirección :</label>
                    <input type="text" name="adress" id="adress" onChange={handleChange} required/>    
                </div>

                {/*
                <div>
                    <label htmlFor="latitude">Latitud :</label>
                    <input type="text" name="text" id="latitude" required/>    
                </div>

                <div>
                    <label htmlFor="length">Longitud :</label>
                    <input type="text" name="text" id="length" />    
                </div>
                */}

                <div className="info-form">
                    <label htmlFor={Amenities}>Características :</label>
                    <input type="checkbox" name="checkbox" id="characteristics" />    
                </div>

                <h2>Cargar imágenes</h2>
                
                <div className="info-form">
                    <label htmlFor="images">Agregue 5 o más imágenes y de ellas elija una como principal</label>
                    {/*
                    <input type="file" name="file" onChange={handleFiles}/>
                    */}

                    {/*
                    onClick={addImage} 
                    onClick={deleteImage}
                     onClick={deleteImage(image)}
                     getImageName(image)
                    */}
                    <div className="input-image">
                        <input type="text" name="url" onChange={handleImg} />
                        <FontAwesomeIcon icon={faCirclePlus} onClick={addImage}/>
                    </div>

                    
                    {productData.images.map((image, index) =>(
                        <div key={index} className="imageName-card">
                            <p>{image.title}</p>
                            <FontAwesomeIcon icon={faXmark} onClick={deleteImage(image)}/>
                        </div>
                    ))}
                </div>

                <div>
                    <p className="error">{errorMessage}</p>
                </div>
                <button className="button-2" onClick={handleSubmit}>Crear</button>



            </form>

            
        </div>
    </div>

    )
}


export default CreateProducts