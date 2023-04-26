import React from "react";
import { Outlet } from "react-router-dom";
import Footer from '../../components/Footer/index'
import Header from '../../components/Header/index' 
const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
};

export default Layout;