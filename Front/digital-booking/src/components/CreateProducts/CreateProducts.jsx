
import React, { useState, useEffect, useContext } from "react";
import bootstrap from "bootstrap";
import { Link, useNavigate } from "react-router-dom"
import SearchCities from "../SearchCities/SearchCities";
import Amenities from "../Products/Amenities";
import axios from "axios";
import ListarCat from "../categories/Categories";
import createTypography from "@mui/material/styles/createTypography";
import Url from "../../util/Url";
import ProductHeader from "../Products/ProductHeader"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faXmark, faStar } from '@fortawesome/free-solid-svg-icons'
import create from "./create.css"
import { IndexRoute } from "react-router-3";
import Radio from '@mui/material/Radio';



const CreateProducts = () => {
    const [categoriesInfo, setCategoriesInfo] = useState([]);
    const [cities, setCities] = useState([]);
    const [amenities, setAmenities] = useState([]);


    useEffect(() => {
        const urlCity = Url() + "/api/city";
        axios.get(urlCity)
            .then(response => setCities(response.data))
            .catch(error => console.log(error))
        const url = Url() + "/api/category/";
        axios
            .get(url)
            .then((response) => setCategoriesInfo(response.data))
            .catch((error) => console.log(error));
        const urlAmenities = Url() + "/api/amenity";
        axios
            .get(urlAmenities)
            .then((response) => setAmenities(response.data))
            .catch((error) => console.log(error));


    }, []);






    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState(null)

    const [productData, setProductData] = useState({
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

    const handleSubmit = (event) => {
        event.preventDefault();

        const postProduct = async () => {

            try {

                const url = Url() + "api/product";
                const response = await axios.post(url, productData);


                if (response.status === 201) {
                    navigate("/message")
                }
                else {
                    setErrorMessage("Lamentablemente, el producto no ha podido crearse. Por favor, intente más tarde")
                }
            } catch (error) {
                //console.log(error)
                setErrorMessage("Lamentablemente, el producto no ha podido crearse. Por favor, intente más tarde")
            }

        }
        postProduct()

    }

    const sendMessage = () => {
        navigate("/ConfirmationProduct")
    }

    //onClick={handleSubmit}

    const handleChange = (e) => {
        const { name, value } = e.target
        setProductData({ ...productData, [name]: value });
    }


    const [img, setImg] = useState(
        {
            imageURL: null,
            main_img: null,
            title: null,

        }
    );

    const handleImg = (e) => {

        setImg({ imageURL: e.target.value, main_img: "0", title: getImageName(e.target.value) });
    }


    const getImageName = imageName => {
        let name = imageName;
        let separatedName = name.split("/");
        let lastElement = separatedName.pop()
        return lastElement
    }

    const addImage = () => {

        productData.images.push(img)
        setImg({ imageURL: "", title: "" })
    }


    const deleteImage = (index) => {
        const allImages = [...productData.images]
        allImages.splice(index, 1);
        setProductData({ ...productData, images: allImages })


    }


    // RADIO BUTTON

    const [selectedValue, setSelectedValue] = useState('');

    const handleChangeRadioButton = (event) => {
        setSelectedValue(event.target.value);
    };

    const RadioButton = ({ ix }) => {


        const controlProps = (item) => ({
            checked: selectedValue === item,
            onChange: handleChangeRadioButton,
            value: item,
            name: 'image',
            inputProps: { 'aria-label': item },
        });

        console.log(controlProps().value);
        console.log(selectedValue);

        //si el radio button está marcado, entonces setear main image en 1.


        return (
            <Radio
                {...controlProps('image' + ix)}
                sx={{
                    color: "#496270",
                    '&.Mui-checked': {
                        color: "#e48561",
                    },
                    '& .MuiSvgIcon-root': {
                        fontSize: 20,
                    },
                }}
            />
        )

    }








    //console.log(productData.images.indexOf("https://justlikehome-images.s3.us-east-2.amazonaws.com/util/logo+fondo+blanco+header.jpg"));
    //"https://justlikehome-images.s3.us-east-2.amazonaws.com/util/logo+fondo+blanco+header.jpg"
    //"https://justlikehome-images.s3.us-east-2.amazonaws.com/util/casa-campo.jpg"

    //logo+fondo+blanco+header.png
    //casa-campo.jpg
    //value={productData.images}

    return (

        <div className="main">
            <ProductHeader title={"Administración"} path={"/"} />
            <div className="create-product-block">
                <h1 className="title-h1">Crear producto</h1>

                <form className="product-form">
                    <div className="info-form">
                        <label htmlFor="title">Nombre Producto :</label>
                        <input type="text" name="title" id="product name" value={productData.title} onChange={handleChange} required />

                    </div>

                    <div className="info-form">
                        <label htmlFor="select">Categoría :</label>
                        <select name="category" className="select-input">
                            <option value="">Seleccione una categoría</option>
                            {categoriesInfo.map((category, index) => (
                                <option value={category.id} key={index}>{category.title}</option>
                            ))}
                        </select>

                    </div>

                    <div className="info-form">
                        <label htmlFor="select">Ciudad :</label>
                        <select name="city" className="select-input">
                            <option value="">Seleccione la ciudad</option>
                            {cities.map((city, index) => (
                                <option value={city.code} key={index}>
                                    {city.name}
                                </option>

                            ))}

                        </select>
                    </div>
                    <div className="info-form">
                        <label htmlFor="description-title">Titulo de la descripción:</label>
                        <input type="textarea" name="description-title" id="description-title" value={productData.descriptionTitle} onChange={handleChange}
                            placeholder="Hermosa casa de playa" required />
                    </div>

                    <div className="info-form">
                        <label htmlFor="description">Descripción:</label>
                        <textarea name="description" className="description-form" minLength={"100"} maxLength={"1500"} autoCapitalize="sentences"
                            value={productData.description} onChange={handleChange} required></textarea>
                    </div>

                    <div className="info-form">
                        <label htmlFor="adress">Dirección :</label>
                        <input type="text" name="adress" id="adress" onChange={handleChange} required />
                    </div>


                    <div className="amenities-block">
                        <h2>Características</h2>
                    
                        {amenities.map((amenitie, index) => (
                        <label key={index} className="amenitie"><input className="amenitie-checkbox" type="checkbox" id="amenitie" value="first_checkbox"/>{ amenitie.title }</label>     
                            ))}
                        
                    </div>

                    <div className="images-block">
                        <h2>Cargar imágenes</h2>

                        <div className="info-form">
                            <label htmlFor="images">Agregue 5 o más imágenes y de ellas elija una como principal</label>


                            <div className="input-image">
                                <input type="text" name="url" onChange={handleImg} placeholder="Inserte https://"/>
                                <FontAwesomeIcon icon={faCirclePlus} onClick={addImage} />
                            </div>


                            {productData.images.map((image, index) => (
                            <div key={index} className="imageName-card">
                                <RadioButton ix={index} />
                                <label htmlFor="image">{image.title}</label>
                                <FontAwesomeIcon icon={faXmark} onClick={() => deleteImage(index)} />
                            </div>
                            ))}

                        </div>
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