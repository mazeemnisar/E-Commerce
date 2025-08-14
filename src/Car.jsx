import React from 'react'
import Header from "./Mainpage/Header.jsx";
import Cart from "./Cartpage/Cart.jsx";
import SavedForLater from "./Cartpage/SavedForLater.jsx"; // Assuming you have a SavedForLater component
import Footer from "./Mainpage/Footer.jsx"
const Car = () => {
  return (
    <div>
        <Header />
       <Cart />
      <SavedForLater />
      <Footer/>
    </div>
  )
}

export default Car;
