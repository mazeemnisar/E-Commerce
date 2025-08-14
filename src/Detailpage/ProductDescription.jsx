import React from 'react'
import './ProductDescription.css'; // Assuming you have a CSS file for styling
import Coat from "../images/Coat.jpg";
import Shirt from "../images/Shirt.jpg";  
import Jacket from "../images/Jacket.jpg"; // Assuming you have a Jacket image
import Shirt2 from "../images/Shirt2.jpg"; // Assuming you have a Shirt2 image
import Bag from "../images/Bag.jpg"; // Assuming you have a Bag image 
const ProductDescription = () => {
  return (
    <div className="container">
      <div className="main-box">
        <div className="tabs">
          <span className="tab active">Description</span>
          <span className="tab">Reviews</span>
          <span className="tab">Shipping</span>
          <span className="tab">About seller</span>
        </div>

        <p className="description-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <table className="specs-table">
          <tbody>
            <tr>
              <td>Model</td>
              <td>#8786867</td>
            </tr>
            <tr>
              <td>Style</td>
              <td>Classic style</td>
            </tr>
            <tr>
              <td>Certificate</td>
              <td>ISO-898921212</td>
            </tr>
            <tr>
              <td>Size</td>
              <td>34mm x 450mm x 19mm</td>
            </tr>
            <tr>
              <td>Memory</td>
              <td>36GB RAM</td>
            </tr>
          </tbody>
        </table>

        <ul className="features">
          <li>✓ Some great feature name here</li>
          <li>✓ Lorem ipsum dolor sit amet, consectetur</li>
          <li>✓ Duis aute irure dolor in reprehenderit</li>
          <li>✓ Some great feature name here</li>
        </ul>
      </div>

      <div className="sidebar">
        <h4>You may like</h4>
        <ul className="recommendations">
          <li>
            <img src={Coat} alt="gffggf" />
            <div>
              <p>Men Blazers Sets Elegant Formal</p>
              <span>$7.00 - $99.50</span>
            </div>
          </li>
          <li>
            <img src={Shirt} alt="ffff" />
            <div>
              <p>Men Shirt Sleeve Polo Contrast</p>
              <span>$7.00 - $99.50</span>
            </div>
          </li>
          <li>
            <img src={Jacket} alt="zGYzg" />
            <div>
              <p>Apple Watch Series Space Gray</p>
              <span>$7.00 - $99.50</span>
            </div>
          </li>
          <li>
            <img src={Shirt2} alt="zHz" />
            <div>
              <p>Basketball Crew Socks Long Stuff</p>
              <span>$7.00 - $99.50</span>
            </div>
          </li>
          <li>
            <img src={Bag} alt="fshg" />
            <div>
              <p>New Summer Men's castrol T-Shirts</p>
              <span>$7.00 - $99.50</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProductDescription
