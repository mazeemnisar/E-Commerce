import React from 'react'
import './SuppliersByRegion.css';
const SuppliersByRegion = () => {
  return (
    <div class="suppliers-container">
    <h2 class="suppliers-title">Suppliers by region</h2>
    <div class="suppliers-grid">
      <div class="supplier-item">
        <span class="supplier-flag">🇦🇪</span>
        <div class="supplier-info">
          <div class="supplier-country">Arabic Emirates</div>
          <a href="#" class="supplier-url">shopname.ae</a>
        </div>
      </div>
      <div class="supplier-item">
        <span class="supplier-flag">🇦🇺</span>
        <div class="supplier-info">
          <div class="supplier-country">Australia</div>
          <a href="#" class="supplier-url">shopname.au</a>
        </div>
      </div>
      <div class="supplier-item">
        <span class="supplier-flag">🇺🇸</span>
        <div class="supplier-info">
          <div class="supplier-country">United States</div>
          <a href="#" class="supplier-url">shopname.us</a>
        </div>
      </div>
      <div class="supplier-item">
        <span class="supplier-flag">🇷🇺</span>
        <div class="supplier-info">
          <div class="supplier-country">Russia</div>
          <a href="#" class="supplier-url">shopname.ru</a>
        </div>
      </div>
      <div class="supplier-item">
        <span class="supplier-flag">🇮🇹</span>
        <div class="supplier-info">
          <div class="supplier-country">Italy</div>
          <a href="#" class="supplier-url">shopname.it</a>
        </div>
      </div>
      <div class="supplier-item">
        <span class="supplier-flag">🇩🇰</span>
        <div class="supplier-info">
          <div class="supplier-country">Denmark</div>
          <a href="#" class="supplier-url">shopname.com.dk</a>
        </div>
      </div>
      <div class="supplier-item">
        <span class="supplier-flag">🇫🇷</span>
        <div class="supplier-info">
          <div class="supplier-country">France</div>
          <a href="#" class="supplier-url">shopname.com.fr</a>
        </div>
      </div>
      <div class="supplier-item">
        <span class="supplier-flag">🇨🇳</span>
        <div class="supplier-info">
          <div class="supplier-country">China</div>
          <a href="#" class="supplier-url">shopname.cn</a>
        </div>
      </div>
      <div class="supplier-item">
        <span class="supplier-flag">🇬🇧</span>
        <div class="supplier-info">
          <div class="supplier-country">Great Britain</div>
          <a href="#" class="supplier-url">shopname.co.uk</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SuppliersByRegion
