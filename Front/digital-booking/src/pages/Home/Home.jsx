import React, { useContext, useState, useEffect } from "react";
import ListarCat from "../../components/categories/Categories";
import SearchBar from "../../components/Buscador/SearchBar";
import Listar from "../../components/List/List";
import { FilterContext } from "../../components/FilterContext";
import { UserContext}from "../../components/UserContext";
import axios from "axios";
import PaginationNumbers from "../../components/Pagination/Pagination";
import Url from "../../util/Url";
import jwtDecode from "jwt-decode";
import jwt_decode from "jwt-decode";
import "./homefiltered.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  const [productsPerPage, setProductsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const indexFirstProduct = (currentPage - 1) * productsPerPage;
  const indexLastProduct = indexFirstProduct + productsPerPage;
  const currentProducts = products.slice(indexFirstProduct, indexLastProduct);

  const pages = Math.ceil(products.length / productsPerPage);

  /*---------------  Es el fetch para traer productos por ciudades -------------*/

  const { filterData } = useContext(FilterContext);
  useEffect(() => {
      const getAllProducts = async () => {
        const url = Url() + "/api/product";
        const result = await axios.get(url);
        setProducts(result.data);
      };
      getAllProducts();
    }
  , [filterData]);

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
