import React from 'react'
import "./App.css";

import Header from "./Mainpage/Header.jsx";
import TopNav from "./Mainpage/TopNav.jsx";
  import Sidebar from "./Mainpage/Sidebar";
 import Banner from "./Mainpage/Banner";
 import RightPanel from "./Mainpage/RightPanel";
 import Deals from "./Mainpage/Deals";
 import HomeAndOutdoor from "./Mainpage/HomeAndOutdoor";
 import Consumer from "./Mainpage/Consumer";
 import Form from "./Mainpage/Form.jsx";
 import Recommended from "./Mainpage/Recommended.jsx";
 import ExtraServices from "./Mainpage/ExtraServices.jsx";
 import SuppliersByRegion from "./Mainpage/SuppliersByRegion.jsx";
 import Newsletter from "./Mainpage/Newsletter.jsx";
 import Footer from "./Mainpage/Footer.jsx";
const Main1 = () => {
  return (
    <div>
      <Header />
      <TopNav />
  <div className="main">
        <Sidebar />
        <Banner />
        <RightPanel />
      </div>
      <Deals />
      <HomeAndOutdoor />
      <Consumer />
      <Form />
      <Recommended />
      <ExtraServices />
      <SuppliersByRegion />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Main1
