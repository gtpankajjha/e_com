// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import CartSummary from './components/cartSummary';
import LoginPage from './components/LoginPage';
import PaymentPage from './components/PaymentPage';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
// logic for add to cart
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const handleCartClick = () => {
  navigate('/cart'); // Navigate to cart summary page
 }; 
const handleCheckout = () => {
  if (loggedIn) {
    navigate('/payment');
  } else {
    navigate('/login');
  }
  setShowCart(false);  // <== Add this line to hide cart so Routes render properly
};

  return (
    <div>
   <Header 
  cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
  onCartClick={handleCartClick} 
/>
   <Routes>
  <Route path="/" element={<LandingPage addToCart={addToCart} />} />
  <Route path="/login" element={<LoginPage onLogin={() => setLoggedIn(true)} />} />
  <Route path="/payment" element={<PaymentPage />} />
  <Route path="/cart" element={<CartSummary cart={cart} onCheckout={handleCheckout} />} />
</Routes>

    {showCart && <CartSummary cart={cart} onCheckout={handleCheckout} />}
  </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}