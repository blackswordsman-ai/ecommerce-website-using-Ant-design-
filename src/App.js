import React from 'react';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'antd/dist/reset.css';
import './App.css';
import themeConfig from './theme/themeConfig';
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import FAQ from './pages/FAQ';
import Cart from './pages/Cart';
import Categories from './pages/Categories';
import Deals from './pages/Deals';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

import { CartProvider } from './context/CartContext';

function App() {
  return (
    <ConfigProvider theme={themeConfig}>
      <CartProvider>
        <Router>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </MainLayout>
        </Router>
      </CartProvider>
    </ConfigProvider>
  );
}





export default App;

