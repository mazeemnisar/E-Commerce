import React from "react";
import "./Header.css";
import Logo from "../images/logo.svg";  
const Header = () => {
  return (
    <header className="header">
      <div className="header1">
        <div className="logo">
          <img src={Logo} alt="Brand Logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="search" />
          <select>
            <option>All Categary</option>
          </select>
          <button>search</button>
        </div>
      </div>
      <div className="header2">
        <div className="icon">
          👤<span>Profile</span>
        </div>
        <div className="icon">
          💬<span>Messages</span>
        </div>
        <div className="icon">
          📦<span>Orders</span>
        </div>
        <div className="icon">
          🛒<span>My cart</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
