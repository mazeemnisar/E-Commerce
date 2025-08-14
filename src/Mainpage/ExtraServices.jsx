import React from 'react'
import './ExtraServices.css';
import Pic from "../images/Pic.jpg"
import Pic1 from "../images/Pic1.jpg" 
import Pic2 from "../images/Pic2.jpg"
import Photo from "../images/Photo.jpg"
const ExtraServices = () => {
  return (
    <div>
       <div className="services-container">
      <h2 className="services-title">Our extra services</h2>
      <div className="services-grid">
        <div className="service-card">
          <img src={Pic} alt="Service 1" className="service-image" />
          <div className="service-overlay-icon">🔍</div>
          <div className="service-text">Source from Industry Hubs</div>
        </div>

        <div className="service-card">
          <img src={Pic1} alt="Service 2" className="service-image" />
          <div className="service-overlay-icon">🎨</div>
          <div className="service-text">Customize Your Products</div>
        </div>

        <div className="service-card">
          <img src={Pic2} alt="Service 3" className="service-image" />
          <div className="service-overlay-icon">✈️</div>
          <div className="service-text">Fast, reliable shipping by ocean or air</div>
        </div>

        <div className="service-card">
          <img src={Photo} alt="Service 4" className="service-image" />
          <div className="service-overlay-icon">📍</div>
          <div className="service-text">Product monitoring and inspection</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ExtraServices
