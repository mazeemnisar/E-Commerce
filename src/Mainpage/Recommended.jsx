import React from 'react'
import './Recommended.css';
import Shirt from "../images/shirt.jpg";
import Jacket from "../images/jacket.jpg";
import Coat from "../images/coat.jpg";
import Wallet from "../images/wallet.jpg";
import Bag from "../images/bag.jpg";
import Pent from "../images/pent.jpg";
import Headphones from "../images/headphones.jpg";  
import Kettle from "../images/kettle.jpg";
const Recommended = () => {
  return (
     <div className="recommended-container">
      <h2 className="recommended-title">Recommended items</h2>
      <div className="recommended-grid">
        <div className="item-card">
          <img src={Shirt} alt="Item 1" />
          <div className="item-price">$12.67</div>
          <div className="item-name">T-shirts with multiple colors</div>
          <div className="item-origin">From United States</div>
        </div>

        <div className="item-card">
          <img src={Jacket} alt="Item 2" />
          <div className="item-price">$28.67</div>
          <div className="item-name">Brown winter coat</div>
          <div className="item-origin">From Germany</div>
        </div>

        <div className="item-card">
          <img src={Coat} alt="Item 3" />
          <div className="item-price">$12.67</div>
          <div className="item-name">Blue formal suit</div>
          <div className="item-origin">From United Kingdom</div>
        </div>

        <div className="item-card">
          <img src={Wallet} alt="Item 4" />
          <div className="item-price">$9.00</div>
          <div className="item-name">Leather wallet</div>
          <div className="item-origin">From India</div>
        </div>

        <div className="item-card">
          <img src={Bag} alt="Item 5" />
          <div className="item-price">$39.00</div>
          <div className="item-name">Blue backpack</div>
          <div className="item-origin">From China</div>
        </div>

        <div className="item-card">
          <img src={Pent} alt="Item 6" />
          <div className="item-price">$8.00</div>
          <div className="item-name">Short jeans</div>
          <div className="item-origin">From Vietnam</div>
        </div>

        <div className="item-card">
          <img src={Headphones} alt="Item 7" />
          <div className="item-price">$39.99</div>
          <div className="item-name">Wireless headphones</div>
          <div className="item-origin">From China</div>
        </div>

        <div className="item-card">
          <img src={Kettle} alt="Item 8" />
          <div className="item-price">$39.00</div>
          <div className="item-name">Blue backpack</div>
          <div className="item-origin">From China</div>
        </div>

        <div className="item-card">
          <img src={Coat} alt="Item 9" />
          <div className="item-price">$25.00</div>
          <div className="item-name">Clay pot</div>
          <div className="item-origin">From India</div>
        </div>

        <div className="item-card">
          <img src={Kettle} alt="Item 10" />
          <div className="item-price">$19.00</div>
          <div className="item-name">Black kettle</div>
          <div className="item-origin">From Germany</div>
        </div>
      </div>
    </div>
        
  )
}

export default Recommended
