import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Header from '../Header/index' 
import Hero from '../Hero/index'
import Footer from '../Footer/index'
import ColorsButton from '../ColorButtons/index'
import FlashSales from '../FlashSales';
import Best from '../Best';
import Explore from '../Explore';
// import ItemViewer from './components/ItemViewer';
import NewArrival from '../NewArrival';
import Features from '../Features';
import Container from '@mui/material/Container';
import Category from "../Category";

import Speaker from "../Speaker";
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