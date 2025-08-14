import React from 'react'
import './Form.css';
const Form = () => {
  return (
     <div className="inquiry-section">
      <div className="left-content">
        <div className="text-group">
        <h2>An easy way to send<br />requests to all suppliers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
      </div>
</div>
      <div className="form-card">
        <h4>Send quote to suppliers</h4>
        <input type="text" placeholder="What item you need?" />
        <textarea placeholder="Type more details..." rows="3"></textarea>
        <div className="form-row">
          <input type="text" placeholder="Quantity" />
          <select>
            <option>Pcs</option>
            <option>Kg</option>
            <option>Liters</option>
          </select>
        </div>
        <button>Send Inquiry</button>
      </div>
    </div>
  )
}

export default Form
