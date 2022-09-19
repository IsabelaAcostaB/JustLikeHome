import React from "react";
import Home from "./pages/Home/Home"
import app from "./styles/App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import Listar from "./components/List/List";
import ProductPage from "./pages/Product/ProductTemplate";
import {UserProvider} from "./components/UserContext";
import {FilterProvider} from "./components/FilterContext";
import Reservation from "./components/Reservation/Reservation"
import PrivateRoute from "./components/RequireAuth";
import ConfirmationReservation from "./components/Reservation/ConfirmationReservation";
import {ReservationProvider} from "./components/ReservationContext"
import SearchTemplate from "./components/SearchPage/SearchTemplate"
import Search from "./pages/Search/Search"
import CreateProducts from "./components/CreateProducts/CreateProducts";
function App() {

  return (
    <div className="App">

      <UserProvider>
      <FilterProvider>
      <ReservationProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/listar" element={<Listar />}/> 
          <Route path="/product/:id" element={<ProductPage />}/> 
          <Route path="/filtrado" element={<Search />}/> 


          <Route element={<PrivateRoute />}>
          <Route path="/product/reservation/:id" element={<Reservation />}/>
          <Route path="/ConfirmationReservation/" element={<ConfirmationReservation />}/> 
          </Route>
          <Route path="/administration" element={<CreateProducts />}/>


        </Routes>
        
        <Footer />
      </BrowserRouter>
      </ReservationProvider>
      </FilterProvider>
      </UserProvider>

    </div>
  )
};

export default App;

