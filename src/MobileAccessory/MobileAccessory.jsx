import React from 'react'
import Phone from "../images/phone.jpg";
import Phone2 from "../images/Phone2.jpg"
import Phone1 from "../images/Phone1.jpg";
import './MobileAccessory.css'; // Assuming you have a CSS file for styling
const MobileAccessory = () => {
  return (
        <div className="contain">
      <div className="sidebar">
        <h2 className="section-title">Category</h2>
        <ul className="list">
          <li>Mobile accessory</li>
          <li>Electronics</li>
          <li>Smartphones</li>
          <li>Modern tech</li>
          <li className="link">See all</li>
        </ul>

        <h2 className="section-title">Brands</h2>
        <ul className="list">
          <li><input type="checkbox" checked readOnly /> Samsung</li>
          <li><input type="checkbox" checked readOnly /> Apple</li>
          <li><input type="checkbox" readOnly /> Huawei</li>
          <li><input type="checkbox" checked readOnly /> Poco</li>
          <li><input type="checkbox" readOnly /> Lenovo</li>
          <li className="link">See all</li>
        </ul>
      </div>

      <div className="main-content">
        <main className="product-main">
          <div className="product-header">
            <div className="product-count">
              12,911 items in <strong>Mobile accessory</strong>
            </div>
            <div className="product-actions">
              <label>
                <input type="checkbox" /> Verified only
              </label>
              <select>
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <div className="view-icons">
                <span className="grid-icon">▦</span>
                <span className="list-icon">☰</span>
              </div>
            </div>
          </div>
        </main>

        <div className="filters">
          <span className="tag">Samsung <span className="remove">×</span></span>
          <span className="tag">Apple <span className="remove">×</span></span>
          <span className="tag">Poco <span className="remove">×</span></span>
          <span className="tag">Metallic <span className="remove">×</span></span>
          <span className="tag">4 star <span className="remove">×</span></span>
          <span className="tag">3 star <span className="remove">×</span></span>
          <span className="clear-link">Clear all filter</span>
        </div>

        <div className="product-grid">
          <div className="product-card">
            <img src={Phone} alt="product" className="product-img" />
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
            <img src={Phone2} alt="product" className="product-img" />
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
            <img src={Phone1} alt="product" className="product-img" />
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
    </div>
  )
}

export default MobileAccessory
