import React from 'react'
import "./HomeAndOutdoor.css";
import Sofa from "../images/sofa.jpg";
import Dishes from "../images/dishes.jpg";
import Watch from "../images/watch.jpg";
import Blander from "../images/blander.jpg";
import Mixer from "../images/mixer.jpg";
import Home from "../images/home.jpg";
const HomeAndOutdoor = () => {
  return (
     <div className="home-outdoor-wrapper">
      <div className="left-panel">
        <div className="left-content">
          <div className="text-block">
            <h3>Home and outdoor</h3>
            <button>Source now</button>
          </div>
          <div className="image-block">
          </div>
        </div>
      </div>

      <div className="grid-panel">
        <div className="grid-item">
          <img src={Sofa} alt="Soft chairs" />
          <p>Soft chairs</p>
          <span>From <strong>USD 19</strong></span>
        </div>
        <div className="grid-item">
          <img src={Sofa} alt="Sofa & chair" />
          <p>Sofa & chair</p>
          <span>From <strong>USD 19</strong></span>
        </div>
        <div className="grid-item">
          <img src={Dishes} alt="Kitchen dishes" />
          <p>Kitchen dishes</p>
          <span>From <strong>USD 19</strong></span>
        </div>
        <div className="grid-item">
          <img src={Watch} alt="Smart watches" />
          <p>Smart watches</p>
          <span>From <strong>USD 19</strong></span>
        </div>
        <div className="grid-item">
          <img src={Mixer} alt="Kitchen mixer" />
          <p>Kitchen mixer</p>
          <span>From <strong>USD 19</strong></span>
        </div>
        <div className="grid-item">
          <img src={Blander} alt="Blenders" />
          <p>Blenders</p>
          <span>From <strong>USD 19</strong></span>
        </div>
        <div className="grid-item">
          <img src={Home} alt="Home appliance" />
          <p>Home appliance</p>
          <span>From <strong>USD 19</strong></span>
        </div>
        <div className="grid-item">
          <img src={Mixer} alt="Coffee maker" />
          <p>Coffee maker</p>
          <span>From <strong>USD 19</strong></span>
        </div>
      </div>
    </div>
    
  )
}

export default HomeAndOutdoor
