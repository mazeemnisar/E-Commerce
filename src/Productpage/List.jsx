import React from "react";
import "./List.css";
import Phone from "../images/Phone.jpg"
import Gaming from "../images/Gaming.jpg"
import Phone1 from "../images/Phone1.jpg"
const List = () => {
  return (
    <div>
      <div className="product-page">
        <aside className="sidebar">
          <div className="filter-group">
            <h4>Category</h4>
            <ul>
              <li>
                <a href="#">Mobile accessory</a>
              </li>
              <li>
                <a href="#">Electronics</a>
              </li>
              <li>
                <a href="#">Smartphones</a>
              </li>
              <li>
                <a href="#">Modern tech</a>
              </li>
              <li>
                <a href="#">See all</a>
              </li>
            </ul>
          </div>
          <div className="filter-group">
            <h4>Brands</h4>
            <ul>
              <li>
                <input type="checkbox" /> Samsung
              </li>
              <li>
                <input type="checkbox" /> Apple
              </li>
              <li>
                <input type="checkbox" /> Huawei
              </li>
              <li>
                <input type="checkbox" /> Pocco
              </li>
              <li>
                <input type="checkbox" /> Lenovo
              </li>
              <li>
                <a href="#">See all</a>
              </li>
            </ul>
            
          </div>
        </aside>

        <main className="product-main">
          <div className="product-header">
            <div className="product-count">
              12,911 items in <strong>Mobile accessory</strong>
            </div>
            <div className="product-actions">
              <label>
                <input type="checkbox" /> Verified only
              </label>
              <select>
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <div className="view-icons">
                <span className="grid-icon">▦</span>
                <span className="list-icon">☰</span>
              </div>
            </div>
          </div>

          <div className="product-list">
            <div className="product-card">
              <img
                src={Phone}
                alt="Canon Camera"
              />
              <div className="product-info">
                <h3>Canon Cmera EOS 2000, Black 10x zoom</h3>
                <div className="product-price">
                  <span className="current-price">$998.00</span>
                
                </div>
                 <div className="product-meta">
                ★ 7.5 • 154 orders • <span className="green-text">Free Shipping</span>
              </div>
                <p className="product-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <a href="#" className="details-link">
                  View details
                </a>
              </div>
                          <div className="wishlist-btn">♡</div>

            </div>

            <div className="product-card">
              <img
                src={Gaming}
                alt="GoPro Camera"
              />
              <div className="product-info">
                <h3>GoPro HERO6 4K Action Camera - Black</h3>
                <div className="product-price">
                  <span className="current-price">$998.00</span>
                </div>
                 <div className="product-meta">
                ★ 7.5 • 154 orders • <span className="green-text">Free Shipping</span>
              </div>
                <p className="product-desc">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit
                </p>
                <a href="#" className="details-link">
                  View details
                </a>
              </div>
                          <div className="wishlist-btn">♡</div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default List;
