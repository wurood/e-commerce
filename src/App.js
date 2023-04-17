import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/index';
import Category from './components/Category';
import Speaker from './components/Speaker';
import FreeDelivery from './components/Delivery/FreeDelivery';


function App() {
  return (
    <>
      <Home text="hello" />
      <FreeDelivery />
    </>
  );
}

export default App;
