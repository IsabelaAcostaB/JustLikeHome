import React, {useContext, useState, useEffect} from "react";
import ListarCat from "../../components/categories/Categories";
import SearchBar from "../../components/Buscador/SearchBar";
import Listar from "../../components/List/List";
import {FilterContext} from "../../components/FilterContext"
import axios from "axios"
import PaginationNumbers from "../../components/Pagination/Pagination";
import Url from "../../util/Url";

const Home = ()=>{
    const [products, setProducts] = useState([]);

    //const [loading, setLoading] = useState(false);
      
    //ACA LO DE PAGINACION
    const [productsPerPage, setProductsPerPage] = useState(7)
    const [currentPage, setCurrentPage ] = useState(null);


    const indexFirstProduct = (currentPage-1)*productsPerPage
    const indexLastProduct = indexFirstProduct+(productsPerPage-1)
    const currentProducts = products.slice(indexFirstProduct, indexLastProduct)

    const pages = Math.ceil(products.length/productsPerPage);


    
  /*---------------  Es el fetch para traer productos por ciudades -------------*/
 
  const {filterData} = useContext(FilterContext)
  useEffect(()=>{
    if (filterData.category){
      const getProductsByCategory = async ()=>{
        const url = Url()+ `/api/productCategory/code/${filterData.category}`;
        const result = await axios.get(url);
        setProducts(result.data)
      }
      getProductsByCategory()
    }
    else if (filterData.cityCode){
      const getProductsByCity = async ()=>{
        const url = Url()+ `/api/productCity/id/${filterData.cityCode}`;
        const result = await axios.get(url);
        setProducts(result.data)
      }
      getProductsByCity()
    }
    else{
      const getAllProducts = async ()=>{
        const url = Url()+ "/api/product";
        const result = await axios.get(url);
        setProducts(result.data)
      }
      getAllProducts()
    }
  }, [filterData])

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
      <Listar products={currentProducts} />
      <PaginationNumbers pages ={pages} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default Home;
