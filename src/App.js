import React from "react";
import Home from './Pages/Home/index'
import ProductDetail from './Pages/ProductDetail'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { data } from "./data";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetail data={data} />} />
          <Route path="*" element={<>4040page not found</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
