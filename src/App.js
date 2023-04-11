import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/index';
import Category from './components/Category';
import Speaker from './components/Speaker';


function App() {
  return (
    <>
      <Home text="hello" />
      <Speaker />
    </>
  );
}

export default App;
