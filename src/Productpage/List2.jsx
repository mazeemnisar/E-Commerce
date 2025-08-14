import React from 'react'
import './List2.css';   
import Watch from "../images/Watch.jpg"
import Headphones from "../images/Headphones.jpg"
const List2 = () => {
  return (
         <div className="container">
      <div className="layout">
        <div className="sidebar">
          <h2>Condition</h2>
          <ul className="radio-list">
            <li><input type="radio" name="condition" /> Any</li>
            <li><input type="radio" name="condition" /> Refurbished</li>
            <li><input type="radio" name="condition" /> Brand new</li>
            <li><input type="radio" name="condition" /> Old items</li>
          </ul>

          <h2>Ratings</h2>
          <ul className="checkbox-list">
            <li><input type="checkbox" /> ★★★★★</li>
            <li><input type="checkbox" /> ★★★★☆</li>
            <li><input type="checkbox" /> ★★★☆☆</li>
            <li><input type="checkbox" /> ★★☆☆☆</li>
          </ul>
        </div>

        <div className="products-list">
          <div className="product-card">
            <img
              src={Watch}
              className="product-img"
              alt="Product"
            />
            <div className="product-info">
              <div className="product-title">GoPro HERO6 4K Action Camera - Black</div>
              <div className="product-price">
                $998.00 <span className="strikethrough">$1242.00</span>
              </div>
              <div className="product-meta">
                ★ 7.5 • 154 orders • <span className="green-text">Free Shipping</span>
              </div>
              <div className="product-description">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              </div>
              <div className="view-details">View details</div>
            </div>
            <div className="wishlist-btn">♡</div>
          </div>

          <div className="product-card">
            <img
              src={Headphones}
              className="product-img"
              alt="Product"
            />
            <div className="product-info">
              <div className="product-title">GoPro HERO6 4K Action Camera - Black</div>
              <div className="product-price">$998.00</div>
              <div className="product-meta">
                ★ 7.5 • 154 orders • <span className="green-text">Free Shipping</span>
              </div>
              <div className="product-description">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              </div>
              <div className="view-details">View details</div>
            </div>
            <div className="wishlist-btn">♡</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List2
