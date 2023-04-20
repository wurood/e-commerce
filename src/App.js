import React from "react";
import Home from './components/Home/index'
import ProductDetail from './Pages/ProductDetail'
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Product" element={<ProductDetail />} />
                <Route path="*" element={<>4040page not found</>} />
            </Routes>
        </BrowserRouter>
    </>
  );
}
export default App;
