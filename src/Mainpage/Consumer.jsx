import React from 'react'
import './Consumer.css';
import Watch from "../images/watch.jpg";
import Camera from "../images/camera.jpg";
import Headphones from "../images/headphones.jpg";
import Gaming from "../images/gaming.jpg";
import Laptop from "../images/laptop.jpg";
import Kettle from "../images/kettle.jpg";
import Phone from "../images/phone.jpg";
const Consumer = () => {
  return (
    <div>
      <div className="home-outdoor-wrapper">
      <div className="left-panel">
        <div className="left-content">
          <div className="text-block">
            <h3> Consumer<br />
              electronics and<br />
              gadgets</h3>
            <button>Source now</button>
          </div>
          <div className="image-block">
          </div>
        </div>
      </div>

      <div className="grid-panel">
        <div className="grid-item">
          <img src={Watch} alt="Smart watches" />
          <p>Smart watches</p>
          <span>From <strong>USD 19</strong></span>
        </div>
        <div className="grid-item">
          <img src={Camera} alt="Sofa & chair" />
          <p>Cameras</p>
          <span>From <strong>USD 89</strong></span>
        </div>
        <div className="grid-item">
          <img src={Headphones} alt="Kitchen dishes" />
          <p>Headphones</p>
          <span>From <strong>USD 10</strong></span>
        </div>
        <div className="grid-item">
          <img src={Watch} alt="Smart watches" />
          <p>Smart watches</p>
          <span>From <strong>USD 90</strong></span>
        </div>
        <div className="grid-item">
          <img src={Gaming} alt="Kitchen mixer" />
          <p>Gaming set</p>
          <span>From <strong>USD 35</strong></span>
        </div>
        <div className="grid-item">
          <img src={Laptop} alt="Laptops & PC" />
          <p>Laptops & PC</p>
          <span>From <strong>USD 340</strong></span>
        </div>
        <div className="grid-item">
          <img src={Phone} alt="Home appliance" />
          <p>Smartphones</p>
          <span>From <strong>USD 19</strong></span>
        </div>
        <div className="grid-item">
          <img src={Kettle} alt="Coffee maker" />
          <p>Electric kattle</p>
          <span>From <strong>USD 240</strong></span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Consumer
