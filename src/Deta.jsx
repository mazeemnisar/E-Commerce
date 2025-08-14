import React from 'react'
import Header from "./Mainpage/Header.jsx";
import TopNav from "./Mainpage/TopNav.jsx";
import Breadcrumb from "./Productpage/Breadcrumb.jsx";
import Detail from "./Detailpage/Detail.jsx";
import ProductDescription from "./Detailpage/ProductDescription.jsx";
import RelatedProducts from "./Detailpage/RelatedProducts.jsx";
import Footer from "./Mainpage/Footer.jsx"; 
const Deta = () => {
  return (
    <div>
      <Header />
        <TopNav />
        <Breadcrumb />
       < Detail />
  <ProductDescription />
  <RelatedProducts />
      <Footer />
    </div>
  )
}

export default Deta;
