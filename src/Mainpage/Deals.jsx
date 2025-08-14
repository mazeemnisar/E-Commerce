import React from 'react'
import "./Deals.css";
import Watch from "../images/watch.jpg";
import Laptop from "../images/laptop.jpg";
import Camera from "../images/camera.jpg";
import Headphone from "../images/headphone.jpg";
const Deals = () => {
  return (
   <section className="deals-section">
      <div className="deals-left">
        <h3 className="deals-title">Deals and offers</h3>
        <p className="deals-subtitle">Hygiene equipments</p>

        <div className="timer">
          <div className="timer-box active">
            <div className="timer-number">04</div>
            <div className="timer-label">Days</div>
          </div>
          <div className="timer-box">
            <div className="timer-number">13</div>
            <div className="timer-label">Hour</div>
          </div>
          <div className="timer-box">
            <div className="timer-number">34</div>
            <div className="timer-label">Min</div>
          </div>
          <div className="timer-box">
            <div className="timer-number">56</div>
            <div className="timer-label">Sec</div>
          </div>
        </div>
      </div>

      <div className="deals-products">
        <div className="product-card">
          <img src={Watch} alt="Smart watches" />
          <p>Smart watches</p>
          <span className="discount">-25%</span>
        </div>
        <div className="product-card">
          <img src={Laptop} alt="Laptops" />
          <p>Laptops</p>
          <span className="discount">-15%</span>
        </div>
        <div className="product-card">
          <img src={Camera} alt="GoPro cameras" />
          <p>GoPro cameras</p>
          <span className="discount">-40%</span>
        </div>
        <div className="product-card">
          <img src={Headphone} alt="Headphones" />
          <p>Headphones</p>
          <span className="discount">-25%</span>
        </div>
        <div className="product-card">
          <img src={Camera} alt="Canon cameras" />
          <p>Canon cameras</p>
          <span className="discount">-25%</span>
        </div>
      </div>
    </section>
  )
}

export default Deals
