import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Header from '../../components/Header/index' 
import Hero from '../../components/Hero/index'
import Footer from '../../components/Footer/index'
import ColorsButton from '../../components/ColorButtons/index'
import FlashSales from '../../components/FlashSales';
import Best from '../../components/Best';
import Explore from '../../components/Explore';
import NewArrival from '../../components/NewArrival';
import Features from '../../components/Features';
import Container from '@mui/material/Container';
import Category from "../../components/Category";

import Speaker from "../../components/Speaker";
import './style.css';

function index() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" >
        <Header />
        <Hero />
        <Container sx={{ maxWidth:'95%'  }} maxWidth={false} >
          <FlashSales />
          <Category />
          <Best />
          <br/><br/><br/>
          <Speaker />
          <Explore />
          <NewArrival />
          <Features />
        </Container>
        <Footer />
      </Container>
    </>
  )
}
export default index