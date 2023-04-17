import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/index';
import Router from './Route';

function App() {
  return (
    <>
      <Home text="hello" />
      <Router />
    </>
  );
}

export default App;
