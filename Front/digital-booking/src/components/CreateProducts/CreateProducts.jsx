
import React, { useState, useEffect, useContext } from "react";
import bootstrap from "bootstrap";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import Url from "../../util/Url";
import ProductHeader from "../Products/ProductHeader"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faXmark, faStar } from '@fortawesome/free-solid-svg-icons'
import create from "./create.css"
import Radio from '@mui/material/Radio';
//import PolicyCard from "./Policy Card/PolicyCard";



const CreateProducts = () => {
    const [categoriesInfo, setCategoriesInfo] = useState([]);
    const [cities, setCities] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [policies, setPolicies]= useState([]);


    
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

        const urlPolicy = Url() + "/api/policy";
        axios
            .get(urlPolicy)
            .then((response) =>  setPolicies(response.data))
            .catch((error) => console.log(error));
            

    }, []);

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState(null)
    const [isSubmit, setIsSubmit]= useState(false);
    const [formErrors, setFormErrors]=useState({});
    


    const [formValues, setFormValues]=useState({
        title: null,
        categoryId: null,
        images: [],
        descriptionTitle: null,
        description: null,
        amenitiesId: [],
        availability: true,
        policyId: 1,
        cityId: null,
        reservation_id: null
    }
)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({...formValues, [name]:value});
    }


    
    const validInput = (values)=>{
        const errors ={}
        //const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

        if(!values.title){
            errors.title = "El título es obligatorio"
        }else if(values.title.length<3){
            errors.title = "El título tiene que tener más de 3 caracteres"
        }

        if (!values.categoryId){
            errors.categoryId = "La categoria es obligatoria"
        } 

        if (!values.cityId){
            errors.cityId = "La ciudad es obligatoria"
        }

        if (!values.descriptionTitle){
            errors.descriptionTitle = "El titulo de la descripción es obligatorio"
        }else if (values.descriptionTitle.length>=30 || values.descriptionTitle.length<4){
            errors.descriptionTitle = "El titulo tiene que tener entre 4 a 30 caracteres"
        }

        if (!values.description){
            errors.description = "La descripción es obligatoria"
        }else if (values.description.length>=1500 || values.description.length<100){
            errors.description = "El titulo tiene que tener entre 100 a 1500 caracteres"
        }

        if (!values.address){
            errors.address = "La dirección es obligatoria"
        }
        

        if (!values.amenitiesId){
            errors.amenitiesId = "Seleccione una característica"
        }

        if (!values.images){
            errors.images = "Este campo es obligatorio"
        }else if (values.images.length<5){
            errors.images = "Agregue 5 o más imágenes"
        }

        return errors;
    }
 
    

    const handleSubmit =(event)=>{
        event.preventDefault();
        setFormErrors(validInput(formValues))
        setIsSubmit(true)
    }

    
    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && isSubmit){


            let token = localStorage.getItem("jwt");
            
            const productData ={
  
                title: formValues.title,
                categoryId: formValues.categoryId,
                images: formValues.images,
                descriptionTitle: formValues.descriptionTitle,
                description: formValues.description,
                amenitiesId: formValues.amenitiesId,
                availability: true,
                policyId: 1,
                cityId: formValues.cityId,
                reservation_id: null
            }

            

            const postProduct = async () => {

                try {
    
                    const url = Url() + "api/product";
                    const response = await axios.post(url, productData,{
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      }
                    );
    
    
                    if (response.status === 201) {
                        navigate("/message")
                    }
                    else {
                        setErrorMessage("Lamentablemente, el producto no ha podido crearse. Por favor, intente más tarde")
                    }
                } catch (error) {
              
                    setErrorMessage("Lamentablemente, el producto no ha podido crearse. Por favor, intente más tarde")
                }
    
            }
            postProduct()

        }
    },[formErrors]);

    //console.log(formValues);

    // CARACTERISTICAS
    const [amenetieId, setAmenetieId] = useState(
        {
            id: null
        }
    )

    const handleCheckbox = (e) =>{
        if (e.target.checked){
            setAmenetieId({id:e.target.value})
            formValues.amenitiesId.push(amenetieId)
        } else{
            let amenitiesArray = formValues.amenitiesId.filter( e => e.target.value !== amenetieId.id)
            setFormValues({ ...formValues, amenitiesId: amenitiesArray })
        }
    
    }

    /*
    
        setAmenetieId({id: null})
    */

    // IMAGENES
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

        formValues.images.push(img)
        setImg({ imageURL: "", title: "" })
    }


    const deleteImage = (index) => {
        const allImages = [...formValues.images]
        allImages.splice(index, 1);
        setFormValues({ ...formValues, images: allImages })
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

        

        //si el radio button está marcado, entonces setear main image en 1.

        /*
        if(controlProps('image' + ix).checked){
            setImg({...img, main_img:'1'})
        }
        */
        

        //console.log(productData.images)

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
                        <input type="text" name="title" id="title" value={formValues.title} onChange={handleChange} />
                        <p className="error">{formErrors.title}</p>
                    </div>

                    <div className="info-form">
                        <label htmlFor="categoryId">Categoría :</label>
                        <select name="categoryId" className="select-input"  onChange={handleChange}>
                            <option value="">Seleccione una categoría</option>
                            {categoriesInfo.map((category, index) => (
                                <option value={formValues.categoryId} key={index} >{category.title}</option>
                            ))}
                        </select>
                        <p className="error">{formErrors.categoryId}</p>

                    </div>

                    <div className="info-form">
                        <label htmlFor="cityId">Ciudad :</label>
                        <select name="cityId" className="select-input"  onChange={handleChange} >
                            <option value="">Seleccione la ciudad</option>
                            {/*value={city.id} */}
                            {cities.map((city, index) => (
                                <option value={formValues.cityId} key={index}>
                                    {city.name}
                                </option>

                            ))}

                        </select>
                        <p className="error">{formErrors.cityId}</p>
                    </div>
                    <div className="info-form">
                        <label htmlFor="description-title">Titulo de la descripción:</label>
                        <input type="textarea" name="descriptionTitle" id="descriptionTitle" value={formValues.descriptionTitle} onChange={handleChange}
                            placeholder="Hermosa casa de playa" required />
                        <p className="error">{formErrors.descriptionTitle}</p>
                    </div>

                    <div className="info-form">
                        <label htmlFor="description">Descripción:</label>
                        <textarea name="description" className="description-form" minLength={"100"} maxLength={"1500"} autoCapitalize="sentences"
                            value={formValues.description} onChange={handleChange} required></textarea>
                        <p className="error">{formErrors.description}</p>
                    </div>

                    <div className="info-form">
                        <label htmlFor="address">Dirección :</label>
                        {/* value={formValues.address} onChange={handleChange}*/}
                        <input type="text" name="address" id="address" required />
                        <p className="error">{formErrors.address}</p>
                    </div>


                    <div className="amenities-block">
                        <h2>Características</h2>
                    
                        {amenities.map((amenitie, index) => (
                        <label key={index} className="amenitie"><input className="amenitie-checkbox" type="checkbox" id="amenitie" value={amenitie.id}
                        onChange={handleCheckbox}
                        
                        />{ amenitie.title }</label>     
                        ))}

                        <p className="error">{formErrors.amenetiesId}</p>
                        
                    </div>

                    <div className="images-block">
                        <h2>Cargar imágenes</h2>

                        <div className="info-form">
                            <label htmlFor="images">Agregue 5 o más imágenes y de ellas elija una como principal</label>


                            <div className="input-image">
                                <input type="text" name="url" onChange={handleImg} placeholder="Inserte https://"/>
                                <FontAwesomeIcon icon={faCirclePlus} onClick={addImage} />
                                
                            </div>
                            <p className="error">{formErrors.images}</p>

                            {formValues.images.map((image, index) => (
                            <div key={index} className="imageName-card">
                                <RadioButton ix={index} />
                                <label htmlFor="image">{image.title}</label>
                                <FontAwesomeIcon icon={faXmark} onClick={() => deleteImage(index)} />
                            </div>
                            ))}

                        </div>
                    </div>


                    {/* defaultValue={policy.rules}
                    defaultValue={policy.health_safety}
                    defaultValue={policy.cancellation_policy}
                    
                    
                    */}
                    <div className="policy-block">
                        <h2>Políticas de la propiedad</h2>

                        
                        <label htmlFor="rules">Normas de la casa:</label>
                        <textarea name="rules" className="description-form" minLength={"20"} maxLength={"500"} autoCapitalize="sentences"
                            ></textarea>
                    
                        <label htmlFor="health-safety">Salud y seguridad:</label>
                        <textarea name="health-safety" className="description-form" minLength={"20"} maxLength={"500"} autoCapitalize="sentences"
                             ></textarea>

                        <label htmlFor="cancellation-policy">Políticas de cancelación:</label>
                        <textarea name="cancellation-policy" className="description-form" minLength={"20"} maxLength={"500"} autoCapitalize="sentences"
                             ></textarea>
                        

                        {/* 
                        {policies.map((policy, index) =>(  
                            <PolicyCard ix={index} rules={policy.rules} healthAndSafety={policy.health_safety} cancellationPolicy={policy.cancellation_policy}/> 
                        ))}
                        */}

                        
                        
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