import React from 'react'
import "./TopNav.css";


const TopNav = () => {
  return (
    <nav className="navbar">
        <div className="nav1">
            <button className="btn">☰ All category</button>
            <a href="#">Hot offers</a>
             <a href="#">Gift boxes</a>
            <a href="#">Projects</a>
            <a href="#">Menu item</a>
            <a href="#">Help</a>
</div>
<div className="nav2">
    <select>
        <option>English, USD</option>
        <option>Pakistan</option>
        <option>China</option>
    </select>
    <select className='az'>
        <option>Ship To</option>
    </select>
</div>
    </nav>
  )
}

export default TopNav
