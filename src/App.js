import React from 'react';
import './App.css';
import FlashSales from './components/FlashSales';
import Best from './components/Best';
import Explore from './components/Explore';
function App() {
  return (
    <div className='App'>
      <FlashSales />
      <Best />
      <Explore />
    </div>
  );
}
export default App;
