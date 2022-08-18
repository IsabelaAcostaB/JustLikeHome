import React from "react";
import Home from "./pages/Home/Home"
import app from "./styles/App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import Product from "./pages/Product/Product.jsx"
import {UserProvider} from "./components/UserContext"

function App() {

  return (
    <div className="App">

      <UserProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/product" element={<Product />}/>

        </Routes>
        
        <Footer />
      </BrowserRouter>
      </UserProvider>

    </div>
  )
}

export default App;
