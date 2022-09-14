import React, { useContext, useState, useEffect } from "react";
import ListarCat from "../../components/categories/Categories";
import SearchBar from "../../components/Buscador/SearchBar";
import Listar from "../../components/List/List";
import { FilterContext } from "../../components/FilterContext";
import axios from "axios";
import PaginationNumbers from "../../components/Pagination/Pagination";
import Url from "../../util/Url";
import jwtDecode from "jwt-decode";
import jwt_decode from "jwt-decode";

const Home = () => {
  const [products, setProducts] = useState([]);

  //const [loading, setLoading] = useState(false);

  //ACA LO DE PAGINACION
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const indexFirstProduct = (currentPage - 1) * productsPerPage;
  const indexLastProduct = indexFirstProduct + productsPerPage;
  const currentProducts = products.slice(indexFirstProduct, indexLastProduct);

  const pages = Math.ceil(products.length / productsPerPage);

  /*---------------  Es el fetch para traer productos por ciudades -------------*/

  const { filterData } = useContext(FilterContext);
  useEffect(() => {
    if (
      filterData.rangeOfDates.checkIn &&
      filterData.rangeOfDates.checkOut &&
      filterData.cityCode
    ) {
      //console.log('por city code y rango fecha')
      const getProductsByCityAndDates = async () => {
        //let  checkIn = filterData.rangeOfDates.checkIn.replaceAll("/", "-");
        //let  checkOut = filterData.rangeOfDates.checkOut.replaceAll("/", "-");

        const url =
          Url() +
          `/api/product/${filterData.cityCode}/${filterData.rangeOfDates.checkIn}/${filterData.rangeOfDates.checkOut}`;
        /*          const url = `http://18.217.103.69:8080/api/product/${filterData.cityCode}/${filterData.rangeOfDates.checkIn}/${filterData.rangeOfDates.checkOut}`;
         */ const result = await axios.get(url);
        setProducts(result.data);
      };
      getProductsByCityAndDates();
    } else if (
      filterData.rangeOfDates.checkIn &&
      filterData.rangeOfDates.checkOut
    ) {
      //console.log('por rango fechas')

      const getProductsByDates = async () => {
        let checkIn = filterData.rangeOfDates.checkIn.replaceAll("/", "-");
        let checkOut = filterData.rangeOfDates.checkOut.replaceAll("/", "-");

        const url = Url() + `/api/product/${checkIn}/${checkOut}`;
        console.log(url);
        const result = await axios.get(url);

        setProducts(result.data);
      };
      getProductsByDates();
    } else if (filterData.category) {
      //console.log('por categoria')
      const getProductsByCategory = async () => {
        const url =
          Url() + `/api/product/productCategory/code/${filterData.category}`;
        const result = await axios.get(url);
        setProducts(result.data);
      };
      getProductsByCategory();
    } else if (filterData.cityCode) {
      //console.log('por city code')
      const getProductsByCity = async () => {
        const url =
          Url() + `/api/product/productCity/id/${filterData.cityCode}`;
        const result = await axios.get(url);
        setProducts(result.data);
      };
      getProductsByCity();
    } else {
      const getAllProducts = async () => {
        const url = Url() + "/api/product";
        const result = await axios.get(url);
        setProducts(result.data);
      };
      getAllProducts();
    }
  }, [filterData]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className="main">
      <SearchBar />
      <h1 className="category-title">Bienvenido a Just like Home</h1>
      <h2 className="category-title">Selecciona un tipo de alojamiento</h2>
      <ListarCat />
      <h2 className="recommendation-h2">Recomendados</h2>
      <Listar products={currentProducts} />

      <PaginationNumbers pages={pages} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;
