import Header from "../../components/Header/Index"
import SearchTemplate from "../../components/SearchPage/SearchTemplate"
import SearchBar from "../../components/Buscador/SearchBar"
import Footer from "../../components/Footer/Index"
import PaginationNumbers from "../../components/Pagination/Pagination";
import { useState } from "react";

const Search = () => {
    /*
    const [productsPerPage, setProductsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);

    const indexFirstProduct = (currentPage - 1) * productsPerPage;
    const indexLastProduct = indexFirstProduct + productsPerPage;
    const currentProducts = products.slice(indexFirstProduct, indexLastProduct);

    const pages = Math.ceil(products.length / productsPerPage);

    */
    return(
        <div className="main">
        <Header/>
        <SearchBar/>
        <SearchTemplate/>
        {/*<PaginationNumbers pages={pages} setCurrentPage={setCurrentPage} /> */}
        </div>
    )
}

export default Search