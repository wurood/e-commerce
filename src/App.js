import React from "react";
import Home from './Pages/Home/index'
import Layout from './Pages/Layout'
import ProductDetail from './Pages/ProductDetail'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { data } from "./data";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/product/:productId" element={<ProductDetail data={data} />} />
            </Route>
            <Route path="*" element={<>4040page not found</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
