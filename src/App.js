
import React from "react";
import Home from './components/Home/index'
import FlashSales from './components/FlashSales';
import Best from './components/Best';
import Explore from './components/Explore';
// import ItemViewer from './components/ItemViewer';
import NewArrival from './components/NewArrival';
import Features from './components/Features';
import Router from './Route';


function App() {
  return (
    <div className='App'>
      <Home />
      <FlashSales />
      <Best />
      <Explore />
      <NewArrival />
      <Features />
      {/* <ItemViewer/> */}
      <Router />

    </div>
  );
}
export default App;
