import React from 'react'
import './SavedForLater.css'; // Assuming you have a SavedForLater.css for styling  
import Phone1 from "../images/Phone1.jpg"
import Phone2 from "../images/Phone2.jpg" 
import Watch from "../images/Watch.jpg" 
import Laptop from "../images/Laptop.jpg"
const SavedForLater = () => {
  return (
  <div className="saved-wrapper">
      <div className="feature-icons">
        <div className="feature-item">
          <img src="https://img.icons8.com/ios-filled/24/000000/lock--v1.png" alt="Secure" />
          <div>
            <div className="feature-title">Secure payment</div>
            <div className="feature-subtext">Have you ever finally just</div>
          </div>
        </div>
        <div className="feature-item">
          <img src="https://img.icons8.com/ios-filled/24/000000/customer-support.png" alt="Support" />
          <div>
            <div className="feature-title">Customer support</div>
            <div className="feature-subtext">Have you ever finally just</div>
          </div>
        </div>
        <div className="feature-item">
          <img src="https://img.icons8.com/ios-filled/24/000000/delivery.png" alt="Delivery" />
          <div>
            <div className="feature-title">Free delivery</div>
            <div className="feature-subtext">Have you ever finally just</div>
          </div>
        </div>
      </div>

      <div className="saved-box">
        <div className="saved-title">Saved for later</div>
        <div className="product-grid">
          <div className="product-card">
            <img src={Phone1} alt="Tablet" />
            <div className="product-price">$99.50</div>
            <div className="product-desc">GoPro HERO6 4K Action Camera – Black</div>
            <div className="move-cart">🛒 Move to cart</div>
          </div>

          <div className="product-card">
            <img src={Phone2} alt="Phone" />
            <div className="product-price">$99.50</div>
            <div className="product-desc">GoPro HERO6 4K Action Camera – Black</div>
            <div className="move-cart">🛒 Move to cart</div>
          </div>

          <div className="product-card">
            <img src={Watch} alt="Watch" />
            <div className="product-price">$99.50</div>
            <div className="product-desc">GoPro HERO6 4K Action Camera – Black</div>
            <div className="move-cart">🛒 Move to cart</div>
          </div>

          <div className="product-card">
            <img src={Laptop} alt="Laptop" />
            <div className="product-price">$99.50</div>
            <div className="product-desc">GoPro HERO6 4K Action Camera – Black</div>
            <div className="move-cart">🛒 Move to cart</div>
          </div>
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

export default SavedForLater
