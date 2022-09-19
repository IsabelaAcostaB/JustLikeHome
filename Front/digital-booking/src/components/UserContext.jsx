import React, { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Url from "../util/Url";


export const UserContext = createContext();


export const UserProvider =({children})=>{
    /* let token = localStorage.getItem("jwt");
    let decode = jwt_decode(token); */

    const [userData, setUserData] = useState({
        name: null,
        lastName: null,
        isLogged: false,
        token: null,
        role: null
    });

    /* const [response, setResponse] = useState(null) */


   /*  function GetUser(){
        let url = Url() + "/api/user/" + decode.userId;
        
        useEffect(() => {
          axios
            .get(url)
            .then((response) => setResponse(response.data))
            .catch((error) => console.log(error));
        }, [url]);
        console.log(response)
    }
    GetUser() */

    /* function persistUser(){
        let user = {name: null,
            lastName: null,
            isLogged: false,
            token: null}
        if(token != null && userData.isLogged == false){
            GetUser()
            console.log(response)
            user.name = response.name
            user.lastName = response.lastName
            user.isLogged = true
            user.token = token
            return user
        } else {
            return user
        }
    }

    persistUser() */
 
    return (
        <UserContext.Provider value ={{userData,setUserData}}>
            {children}
        </UserContext.Provider>
    )
}
