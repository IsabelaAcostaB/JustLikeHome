import React, { createContext, useState } from "react";


/*
const userLogs ={
    logged: {
        display: "unset"
    },

    noLogged: {
        display: "none"
    }


const users = {
    registeredUsers: null,
    sessionUser: null
}

export const UsersContext = createContext(users);

export default function ProviderComponent({children}) {
    const [constextUsers, setConstextUsers] = useState(users);
    const updateContext = (updates) => set
}

const UserContext = createContext();

//export default UserContext

*/



/*----------- OTRA MANERA -----------*/

export const UserContext = createContext();


export const UserProvider =({children})=>{
    const [userData, setUserData] = useState({
        name: null,
        lastName: null,
        isLogged: false
    });

    return (
        <UserContext.Provider value ={{userData,setUserData}}>
            {children}
        </UserContext.Provider>
    )
}
