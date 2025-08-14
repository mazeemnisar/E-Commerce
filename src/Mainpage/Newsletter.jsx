import React from 'react'
import './Newsletter.css';
const Newsletter = () => {
  return (
    <div>
        <div className="newsletter-container">
      <h2 className="newsletter-title">Subscribe to our newsletter</h2>
      <p className="newsletter-subtitle">
        Get timely updates on your favorite products and never miss a special deal!
      </p>
      <form className="newsletter-form">
        <input type="email" placeholder="Email" className="newsletter-input" />
        <button type="submit" className="newsletter-button">Subscribe</button>
      </form>
    </div>
    </div>
  )
}

export default Newsletter
