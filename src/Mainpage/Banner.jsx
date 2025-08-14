import React from 'react'
import './Banner.css';

const Banner = () => {
  return (
     <div className="main-content">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h2 className="hero-subtitle">Latest trending</h2>
            <h1 className="hero-title">Electronic items</h1>
            <button className="learn-more-btn">Learn more</button>
          </div>

          {/* Product Images */}
          <div className="product-images">
            {/* Laptop */}
            <div className="laptop">
              <div className="laptop-screen"></div>
              <div className="laptop-base"></div>
            </div>

            {/* Phone */}
            <div className="phone">
              <div className="phone-screen"></div>
              <div className="phone-bottom"></div>
            </div>

            {/* Headphones */}
            <div className="headphones">
              <div className="headband"></div>
              <div className="ear-cup left"></div>
              <div className="ear-cup right"></div>
            </div>
          </div>
          </div>
          </div>
  )
}

export default Banner
