// src/components/LandingPage.jsx
import React from 'react';
import './LandingPage.css';

const products = [
  { id: 1, name: 'Product A', price: 100 },
  { id: 2, name: 'Product B', price: 150 },
  { id: 3, name: 'Product C', price: 200 },
  { id: 4, name: 'Product D', price: 250 },
];

const LandingPage = ({ addToCart }) => (
  <div className="landing-container">
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-price">Price: ${product.price}</p>
        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>
);

export default LandingPage;
