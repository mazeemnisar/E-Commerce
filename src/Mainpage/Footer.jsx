import React from 'react'
import Logo from '../images/logo.svg';
import App from "../images/app.png";
import play from "../images/play.webp"
import './Footer.css';
const Footer = () => {
  return (
      <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={Logo} alt="Brand Logo" />
            </div>
          <p className="footer-description">
            Best information about the company<br /> goes here but now lorem ipsum is
            <br /> used.
          </p>
          <div className="footer-socials">
            <span>🔵</span>
            <span>🔷</span>
            <span>⚪</span>
            <span>🔘</span>
            <span>⚫</span>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li>About Us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Partnership</h4>
            <ul>
              <li>About Us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Information</h4>
            <ul>
              <li>Help Center</li>
              <li>Money Refund</li>
              <li>Shipping</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>For users</h4>
            <ul>
              <li>Login</li>
              <li>Register</li>
              <li>Settings</li>
              <li>My Orders</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Get app</h4>
            <div className="footer-apps">
              <img src={App} alt="App Store" />
              <img src={play} alt="Google Play" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">© 2025 Ecommerce.</div>
        <div className="footer-language">
          <span>⬇️</span>
          <span>🇺🇸 English</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
