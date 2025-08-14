import React from 'react'
import './Detail.css'; // Assuming you have a CSS file for styling
import Shirt from "../images/Shirt.jpg"
import Shirt2 from "../images/Shirt2.jpg"
const Detail = () => {
  return (
   <div className="wrapper">
      <div className="product-box">

        {/* Left Side – Image */}
        <div className="left">
          <img className="main-image" src={Shirt} alt="Product" />
          <div className="thumbnails">
            <img src={Shirt2} alt="Thumb" />
            <img src={Shirt} alt="Thumb" />
            <img src={Shirt2} alt="Thumb" />
            <img src={Shirt} alt="Thumb" />
            <img src={Shirt2} alt="Thumb" />
          </div>
        </div>

        {/* Middle Section – Product Info */}
        <div className="middle">
          <h1 className="title">
            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </h1>
 <div className="rating-section">
        <div className="star-rating">
          <span className="star filled">★</span>
          <span className="star filled">★</span>
          <span className="star filled">★</span>
          <span className="star filled">★</span>
          <span className="star">★</span>
        </div>
        <span className="review-count">(18 review)</span>
        <span className='review-count'>154 Sold</span>
      </div>

     

          <div className="price-row">
            <span className="price">$90.00    <br /><span>50-100 pcs</span></span>
            <span className="price">$90.00     <br /><span>100-700 pcs</span>     </span>
            <span className="price special">$70.00  <br /><span>700+ pcs</span></span>
          </div>

          <table className="details">
            <tbody>
              <tr><td>Price:</td><td>Negotiable</td></tr>
              <tr><td>Type:</td><td>Classic t-shirts</td></tr>
              <tr><td>Packaging:</td><td>Plastic, vacuum sealed</td></tr>
              <tr><td>Customization:</td><td>Customized logo and design custom packaging</td></tr>
              <tr><td>Return policy:</td><td>Refund Policy</td></tr>
              <tr><td>Warranty:</td><td>2 years full warranty</td></tr>
            </tbody>
          </table>
        </div>

        {/* Right Section – Supplier Info */}
       <div className="supplier-info">
      <div className="supplier-header">
        <div className="supplier-avatar">R</div>
        <div className="supplier-details">
          <div className="supplier-label">Supplier</div>
          <div className="supplier-name">Guangzhou Trading L.L.C.</div>
        </div>
      </div>
      
      <div className="supplier-location">
        <span className="flag">🇩🇪</span>
        <span className="location-text">Germany, Berlin</span>
      </div>
      
      <div className="supplier-stats">
        <div className="stat-item">
          <span className="stat-icon">✓</span>
          <span className="stat-text">Verified Seller</span>
        </div>
        <div className="stat-item">
          <span className="stat-icon">🌐</span>
          <span className="stat-text">Worldwide shipping</span>
        </div>
      </div>
      
      <div className="action-buttons">
        <button className="send-inquiry-btn">Send Inquiry</button>
        <button className="seller-profile-btn">Seller's profile</button>
      </div>
      
      <div className="save-for-later">
        <span className="heart-icon">♡</span>
        <span className="save-text">Save for later</span>
      </div>
    </div>

      </div>
    </div>
  )
}

export default Detail
