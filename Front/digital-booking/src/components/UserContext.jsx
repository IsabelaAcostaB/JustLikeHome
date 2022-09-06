import React, { createContext, useState } from "react";
//import jwt from 'jwt-decode'



export const UserContext = createContext();


export const UserProvider =({children})=>{
    const [userData, setUserData] = useState({
        name: null,
        lastName: null,
        isLogged: false,
        token: null
    });


    //const decode = jwt.decode(userData.token)
    //const userById = JSON.parse(decode.userId)

    /*
    useEffect(()=>{
        const getUser = async ()=>{
            try{

                const url = `http://18.217.103.69:8080/api/user/${userById}`;
                const response = await axios.get(url);
                
        

               
            }catch(error){
                console.log(error)
    
            }

        }
        getUser()
    },[])

    */

    return (
        <UserContext.Provider value ={{userData,setUserData}}>
            {children}
        </UserContext.Provider>
    )
}
