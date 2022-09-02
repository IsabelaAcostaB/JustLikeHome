import React, { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const PaginationNumbers =({products, setProducts})=>{

    const [currentPage, setCurrentPage] = useState(1);

    const [productsPerPage, setProductsPerPage] = useState(6)

    //const [currentProducts, setCurrentProducts]= useState(null)

    const indexFirstProduct = currentPage*productsPerPage
    const indexLastProduct = indexFirstProduct+productsPerPage
    const currentProducts = products.slice(indexFirstProduct, indexLastProduct)

    const pages = Math.ceil(products.length/productsPerPage)

    /*
    
    const paginate =(pageNumber)=> setCurrentPage(pageNumber)
    */

   


    const showCurrentProducts =(event, page)=>{
        setCurrentPage(page);
        setProducts(currentProducts)
    }


  
    return(
        
        <Stack spacing={2}>
            <Pagination count={pages} color="primary" size='medium'
            onChange={showCurrentProducts}
            />
        </Stack>
    )

}
export default PaginationNumbers;
