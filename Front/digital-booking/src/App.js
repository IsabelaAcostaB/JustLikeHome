import React from "react";
import Home from "./pages/Home/Home"
import app from "./styles/App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import Listar from "./components/List/List";
// import HomeRegister from "./pages/EjRegistro/HomeRegister"
import ProductPage from "./pages/Product/ProductTemplate";
import {UserProvider} from "./components/UserContext";
import {FilterProvider} from "./components/FilterContext";
import Reservation from "./components/Reservation/Reservation"


function App() {

  return (
    <div className="App">

      <UserProvider>
      <FilterProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/reservation/:id" element={<Reservation />}/>
          <Route path="/listar" element={<Listar />}/> 
          <Route path="/product/:id" element={<ProductPage />}/> 

        </Routes>
        
        <Footer />
      </BrowserRouter>
      </FilterProvider>
      </UserProvider>

    </div>
  )
};

export default App;

