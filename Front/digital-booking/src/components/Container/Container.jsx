import React from "react";
import Header from "../Header/Index.jsx"
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Index.jsx"


const Container = ()=>{
    return(
        <div className="container">         
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Container