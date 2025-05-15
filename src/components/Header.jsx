// src/components/Header.jsx
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.css';

const Header = ({ cartCount, onCartClick }) => (
  <header className="header">
    <h1 className="header-title">My Store</h1>
    <div className="cart-icon" onClick={onCartClick}>
      <FaShoppingCart size={24} />
      {cartCount > 0 && (
        <span className="cart-count">{cartCount}</span>
      )}
    </div>
  </header>
);

export default Header;
