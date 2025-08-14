import React from "react";
import "./Pagination.css";
const Pagination = () => {
  return (
    <div className="pagination-container">
      <div className="show-dropdown">
        <span> </span>
        <select className="items-select">
          <option>Show 10</option>
          <option>Show 15</option>
          <option>Show 20</option>
          <option>Show 50</option>
        </select>
      </div>
      <div className="pagination">
        <button className="page-btn prev">‹</button>
        <button className="page-btn current">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="page-btn next">›</button>
      </div>
    </div>
  );
};

export default Pagination;
