import React from 'react'
import './List1.css';
import Phone1 from "../images/Phone1.jpg"
import Laptop from "../images/Laptop.jpg"
const List1 = () => {
  return (
      
          <div className="container">
      <div className="layout">
        <div className="sidebar">
          <h2>Features</h2>
          <ul>
            <li><input type="checkbox" /> Metallic</li>
            <li><input type="checkbox" /> Plastic cover</li>
            <li><input type="checkbox" /> 8GB Ram</li>
            <li><input type="checkbox" /> Super power</li>
            <li><input type="checkbox" /> Large Memory</li>
            <li className="see-all">See all</li>
          </ul>

          <h2>Price range</h2>
          <div className="price-range">
            <input type="range" min="0" max="999999" />
            <div className="price-range-controls">
              <input type="number" placeholder="Min" />
              <input type="number" placeholder="Max" />
              <button className="apply-btn">Apply</button>
            </div>
          </div>
        </div>

        <div className="products-list">
          <div className="product-card">
            <img
              src={Phone1}
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

          <div className="product-card">
            <img
              src={Laptop}
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

export default List1
