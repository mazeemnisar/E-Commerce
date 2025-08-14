import React from 'react'
import Header from "./Mainpage/Header.jsx";
import TopNav from "./Mainpage/TopNav.jsx";
import Breadcrumb from "./Productpage/Breadcrumb.jsx";
 import List from "./Productpage/List.jsx";
import List1 from "./Productpage/List1.jsx";
import List2 from "./Productpage/List2.jsx"; // Assuming you have a List2 component
import Pagination from "./Productpage/Pagination.jsx"; // Assuming you have a Pagination component
import Newsletter from "./Mainpage/Newsletter.jsx";
 import Footer from "./Mainpage/Footer.jsx";
const Product = () => {
  return (
    <div>
        <Header />
        <TopNav />
        <Breadcrumb />
       <List />
      <List1 />
      <List2 />
      <Pagination />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Product
