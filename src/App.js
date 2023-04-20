
import React from "react";
import Home from './components/Home/index'
import FlashSales from './components/FlashSales';
import Best from './components/Best';
import Explore from './components/Explore';
// import ItemViewer from './components/ItemViewer';
import NewArrival from './components/NewArrival';
import Features from './components/Features';
import Router from './Route';
import Category from "./components/Category";


function App() {
  return (
    <div className='App'>
      <Home />
      <FlashSales />
      <Category />
      <Best />
      <Explore />
      <NewArrival />
      <Features />
    </div>
  );
}
export default App;
