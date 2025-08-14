import React from 'react'
import Header from "./Mainpage/Header.jsx";
import TopNav from "./Mainpage/TopNav.jsx";
import Breadcrumb from "./Productpage/Breadcrumb.jsx";
 import MobileAccessory from "./MobileAccessory/MobileAccessory.jsx";
import ProductGrid from "./MobileAccessory/ProductGrid.jsx";
import ProductGrid1 from "./MobileAccessory/ProductGrid1.jsx";
import Pagination from "./Productpage/Pagination.jsx";
import Newsletter from "./Mainpage/Newsletter.jsx";
import Footer from "./Mainpage/Footer.jsx";
const Mobile = () => {
  return (
    <div>
        <Header />
        <TopNav />
        <Breadcrumb />
       <MobileAccessory />
  <ProductGrid />
  <ProductGrid1 />
   <Pagination />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Mobile
