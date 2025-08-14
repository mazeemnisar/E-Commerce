import React from 'react'
import './Breadcrumb.css';
const Breadcrumb = () => {
  return (
    <div className="breadcrumb-container">
      <nav className="breadcrumb-nav">
        <a href="#" className="breadcrumb-link">Home</a>
        <span className="breadcrumb-separator">{'>'}</span>
        <a href="#" className="breadcrumb-link">Clothings</a>
        <span className="breadcrumb-separator">{'>'}</span>
        <a href="#" className="breadcrumb-link">Men's wear</a>
        <span className="breadcrumb-separator">{'>'}</span>
        <span className="breadcrumb-current">Summer clothing</span>
      </nav>
    </div>
  )
}

export default Breadcrumb
