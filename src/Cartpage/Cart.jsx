import React from 'react'
import './Cart.css'; // Assuming you have a Cart.css for styling
import Shirt from "../images/Shirt.jpg"
import Bag from "../images/Bag.jpg"
import Lamp from "../images/Lamp.jpg"
import Westran from "../images/Westran.png" 
import Master from "../images/Master.png"
import Paypal from "../images/Paypal.webp"
import Visa from "../images/Visa.png" 
import Apple from "../images/Apple.png"

const Cart = () => {
  return (
       <div className="container full-width">
      <div className="cart-box">
        <div className="cart-left">
          <h3>My cart (3)</h3>

          <div className="cart-item">
            <img src={Shirt} alt="product" />
            <div className="item-info">
              <p className="item-title">T-shirts with multiple colors, for men and lady</p>
              <p className="item-sub">Size: medium, Color: blue, Material: Plastic</p>
              <p className="item-seller">Seller: Artel Market</p>
              <div className="item-buttons">
                <button className="remove">Remove</button>
                <button className="save">Save for later</button>
              </div>
            </div>
            <div className="item-price">
              <span>$78.99</span>
              <select>
                <option>Qty: 9</option>
              </select>
            </div>
          </div>

          <div className="cart-item">
            <img src={Bag} alt="product" />
            <div className="item-info">
              <p className="item-title">T-shirts with multiple colors, for men and lady</p>
              <p className="item-sub">Size: medium, Color: blue, Material: Plastic</p>
              <p className="item-seller">Seller: t-shirt factory LLC</p>
              <div className="item-buttons">
                <button className="remove">Remove</button>
                <button className="save">Save for later</button>
              </div>
            </div>
            <div className="item-price">
              <span>$39.00</span>
              <select>
                <option>Qty: 3</option>
              </select>
            </div>
          </div>

          <div className="cart-item">
            <img src={Lamp} alt="product" />
            <div className="item-info">
              <p className="item-title">T-shirts with multiple colors, for men and lady</p>
              <p className="item-sub">Size: medium, Color: blue, Material: Plastic</p>
              <p className="item-seller">Seller: Artel Market</p>
              <div className="item-buttons">
                <button className="remove">Remove</button>
                <button className="save">Save for later</button>
              </div>
            </div>
            <div className="item-price">
              <span>$170.56</span>
              <select>
                <option>Qty: 1</option>
              </select>
            </div>
          </div>

          <div className="footer-buttons">
            <button className="back">⬅ Back to shop</button>
            <button className="remove-all">Remove all</button>
          </div>
        </div>

        <div className="cart-right">
          <div className="coupon-box">
            <p className="coupon-title">Have a coupon?</p>
            <div className="coupon-input">
              <input type="text" placeholder="Add coupon" />
              <button className="apply">Apply</button>
            </div>
          </div>

          <div className="summary">
            <div className="row">
              <span>Subtotal:</span>
              <span>$1403.97</span>
            </div>
            <div className="row">
              <span>Discount:</span>
              <span className="red">- $80.00</span>
            </div>
            <div className="row">
              <span>Tax:</span>
              <span className="green">+ $34.00</span>
            </div>
            <div className="row total">
              <span>Total:</span>
              <span>$1357.97</span>
            </div>
          </div>

          <button className="checkout">Checkout</button>

          <div className="payments">
            <img src={Westran} alt="mastercard" />
            <img src={Master} alt="mastercard" />
            <img src={Visa} alt="visa" />
            <img src={Paypal} alt="paypal" />
            <img src={Apple} alt="apple pay" />

          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Cart
