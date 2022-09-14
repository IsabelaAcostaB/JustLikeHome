import React, { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Url from "../util/Url";


export const UserContext = createContext();


export const UserProvider =({children})=>{
    const [userData, setUserData] = useState({
        name: null,
        lastName: null,
        isLogged: false,
        token: null
    });

  

    return (
        <UserContext.Provider value ={{userData,setUserData}}>
            {children}
        </UserContext.Provider>
    )
}
