import React, { createContext, useState } from "react";

export const FilterContext = createContext();


export const FilterProvider =({children})=>{
    const [filterData, setFilterData] = useState({
        cityName: null,
        category: null
      
    });

    const handleFilterData = newValues => {
        setFilterData({...filterData, ...newValues})
    }

    return (
        <FilterContext.Provider value ={{filterData, handleFilterData}}>
            {children}
        </FilterContext.Provider>
    )
}
