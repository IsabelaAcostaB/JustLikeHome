import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const PaginationNumbers =({pages,setCurrentPage})=>{

    const showCurrentProducts =(event, page)=>{
        event.preventDefault();
        setCurrentPage(page);

        console.log(page);

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
