import React from 'react'
import './ProductGrid.css'; // Assuming you have a CSS file for styling
import Gaming from "../images/gaming.jpg"; 
import Camera from "../images/camera.jpg"; 
import Phone2 from "../images/Phone2.jpg"; // Importing images  
const ProductGrid = () => {
  return (
  <div className="container">
      <aside className="sidebar">
        <h3>Features</h3>
        <form className="filter">
          <label><input type="checkbox" defaultChecked /> Metallic</label>
          <label><input type="checkbox" /> Plastic cover</label>
          <label><input type="checkbox" /> 8GB Ram</label>
          <label><input type="checkbox" /> Super power</label>
          <label><input type="checkbox" /> Large Memory</label>
          <button className="see-all" type="button">See all</button>
        </form>

        <h3>Price range</h3>
        <h3>Condition</h3>
        <h3>Ratings</h3>
        <h3>Manufacturer</h3>
      </aside>

    <div className="product-grid">
          <div className="product-card">
            <img src={Phone2} alt="product" className="product-img" />
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
            <img src={Gaming} alt="product" className="product-img" />
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
            <img src={Camera} alt="product" className="product-img" />
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

export default ProductGrid
