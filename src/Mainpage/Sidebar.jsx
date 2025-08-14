import React from "react";
import './Sidebar.css';

const Sidebar = () => {
  return (
     <div className="container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="category active">Automobiles</div>
          <div className="category">Clothes and wear</div>
          <div className="category">Home interiors</div>
          <div className="category">Computer and tech</div>
          <div className="category">Tools, equipments</div>
          <div className="category">Sports and outdoor</div>
          <div className="category">Animal and pets</div>
          <div className="category">Machinery tools</div>
          <div className="category more-category">More category</div>
        </div>
      </div>
      </div>
  );
};

export default Sidebar;
