import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from '../Header/index' 
import Hero from '../Hero/index'
import Footer from '../Footer/index'
import ColorsButton from '../ColorButtons/index'
import './style.css';

function index() {
  return (

    <>
     <CssBaseline/>
     <Container maxWidth="lg" >
        <Header />
      </Container>

      <Container maxWidth="lg" >
        <Hero />
      </Container>

      <Container maxWidth="lg" >

        <Footer />
      </Container>
   
  {/* <ColorsButton /> */}
    </>

  )
}

export default index