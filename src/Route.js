import React from 'react'
import HomePage from './Pages/HomePage'
import ProductDetail from './Pages/ProductDetail'
import Layout from './Pages/Layout'
import { Routes, Route, BrowserRouter } from "react-router-dom"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/Product" element={<ProductDetail />} />
                </Route>
                <Route path="*" element={<>4040page not found</>} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router
