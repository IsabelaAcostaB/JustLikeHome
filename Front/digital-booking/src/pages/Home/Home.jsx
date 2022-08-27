import React, {useContext, useState, useEffect} from "react";
import ListarCat from "../../components/categories/Categories";
import SearchBar from "../../components/Buscador/SearchBar";
import Listar from "../../components/List/List";
import {FilterProvider} from "../../components/FilterContext"
import {FilterContext} from "../../components/FilterContext"
import axios from "axios"

const Home = ()=>{
    const [products, setProducts] = useState([]);

      
  
    
  /*---------------  Es el fetch para traer productos por ciudades -------------*/
 
  const {filterData} = useContext(FilterContext)
  useEffect(()=>{
    if (filterData.category){
      const getProductsByCategory = async ()=>{
        const url = `http://18.217.103.69:8080/api/productCategory/code/${filterData.category}`;
        const result = await axios.get(url);
        setProducts(result.data)
      }
      getProductsByCategory()
    }
    else if (filterData.cityCode){
      const getProductsByCity = async ()=>{
        const url = `http://18.217.103.69:8080/api/productCity/id/${filterData.cityCode}`;
        const result = await axios.get(url);
        setProducts(result.data)
      }
      getProductsByCity()
    }
    else{
      const getAllProducts = async ()=>{
        const url = "http://18.217.103.69:8080/api";
        const result = await axios.get(url);
        setProducts(result.data)
      }
      getAllProducts()
    }
  }, [filterData])
  /*----------------- FETCH PARA FILTRAR POR CATEGORIAS --------
  const [productByCategory, setProductByCategory]=useState([])
  useEffect(()=>{
    if (filterData.category){
      const getProductsByCategory = async ()=>{
      const url = `http://localhost:8080/api/category/name/${filterData.category}`;
      const result = await axios.get(url);
    
      //console.log(result.data);
      setProductByCategory(result.data)
      }
      getProductsByCategory()
    }
  },[])
*/
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  return(
    <div className="main">
      <SearchBar />
      <h1 className="category-title">Bienvenido a Just like Home</h1>
      <h2 className="category-title">Selecciona un tipo de alojamiento</h2>
      <ListarCat/>
      <h2 className="recommendation-h2">Recomendados</h2>
      <Listar products={products} />
    </div>
  )
}

export default Home;
