import React from 'react'
import './RelatedProducts.css'; // Assuming you have a CSS file for styling
import Wallet from "../images/Wallet.jpg"; // Assuming you have a Wallet image
import Watch from "../images/Watch.jpg"; // Assuming you have a Watch image 
import Headphones from "../images/Headphones.jpg"; // Assuming you have a Headphones image
import Pent from "../images/Pent.jpg"; // Assuming you have a Pent image  
import Kettle from "../images/Kettle.jpg"; // Assuming you have a Kettle image
import Home from "../images/Home.jpg"; // Assuming you have a Home image
const RelatedProducts = () => {
  return (
     <div className="related-container">
      <h3 className="related-title">Related products</h3>
      <div className="products-row">
        <div className="product-card">
          <img src={Wallet} alt="Product" className="product-image" />
          <p className="product-name">Xiaomi Redmi 8 Original</p>
          <p className="product-price">$32.00~$40.00</p>
        </div>
        <div className="product-card">
          <img src={Watch} alt="Product" className="product-image" />
          <p className="product-name">Xiaomi Redmi 8 Original</p>
          <p className="product-price">$32.00~$40.00</p>
        </div>
        <div className="product-card">
          <img src={Headphones} alt="Product" className="product-image" />
          <p className="product-name">Xiaomi Redmi 8 Original</p>
          <p className="product-price">$32.00~$40.00</p>
        </div>
        <div className="product-card">
          <img src={Pent} alt="Product" className="product-image" />
          <p className="product-name">Xiaomi Redmi 8 Original</p>
          <p className="product-price">$32.00~$40.00</p>
        </div>
        <div className="product-card">
          <img src={Kettle} alt="Product" className="product-image" />
          <p className="product-name">Xiaomi Redmi 8 Original</p>
          <p className="product-price">$32.00~$40.00</p>
        </div>
        <div className="product-card">
          <img src={Home} alt="Product" className="product-image" />
          <p className="product-name">Xiaomi Redmi 8 Original</p>
          <p className="product-price">$32.00~$40.00</p>
        </div>
      </div>

      <div className="discount-banner">
        <div className="discount-text">
          <h4>Super discount on more than 100 USD</h4>
          <p>Have you ever finally just write dummy info</p>
        </div>
        <button className="shop-button">Shop now</button>
      </div>
    </div>
  )
}

export default RelatedProducts
