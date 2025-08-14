import React from 'react'
import './ProductGrid.css'; // Assuming you have a CSS file for styling
import Laptop from "../images/laptop.jpg";  
import Watch from "../images/watch.jpg";
import Phone from "../images/phone.jpg"; // Importing images
const ProductGrid1 = () => {
  return (
     <div className="container">
      <aside className="sidebar">
        <h3></h3>
        <form className="filter">
          <label><div type="checkbox" defaultChecked /> </label>
          <label><div type="checkbox" /> </label>
          <label><div type="checkbox" /> </label>
          <label><div type="checkbox" /> </label>
          <label><div type="checkbox" /> </label>
          <label><div type="checkbox" /> </label>
          <label><div type="checkbox" /> </label>
        </form>

        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
      </aside>

   <div className="product-grid">
          <div className="product-card">
            <img src={Laptop} alt="product" className="product-img" />
            <div className="product-info">
              <div className="price">
                <span className="new-price">$99.50</span>
                <span className="old-price">$1128.00</span>
              </div>
              <div className="product-rating">
                <span className="stars">★★★★★</span>
                <span className="rating">7.5</span>
              </div>
              <p className="description">GoPro HERO6 4K Action Camera - Black</p>
            </div>
          </div>

          <div className="product-card">
            <img src={Watch} alt="product" className="product-img" />
            <div className="product-info">
              <div className="price">
                <span className="new-price">$99.50</span>
                <span className="old-price">$1128.00</span>
              </div>
              <div className="product-rating">
                <span className="stars">★★★</span>
                <span className="rating">5.9</span>
              </div>
              <p className="description">GoPro HERO6 4K Action Camera - Black</p>
            </div>
          </div>

          <div className="product-card">
            <img src={Phone} alt="product" className="product-img" />
            <div className="product-info">
              <div className="price">
                <span className="new-price">$99.50</span>
                <span className="old-price">$1128.00</span>
              </div>
              <div className="product-rating">
                <span className="stars">★★★★</span>
                <span className="rating">7.5</span>
              </div>
              <p className="description">GoPro HERO6 4K Action Camera - Black</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProductGrid1
