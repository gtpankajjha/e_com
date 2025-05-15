import React from 'react';
import './CartSummary.css';

const CartSummary = ({ cart, onCheckout }) => (
  <div className="cart-summary">
    <h2>Cart Summary</h2>
    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <div>
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            {item.name} (x{item.quantity}) - ${item.price * item.quantity}
          </div>
        ))}
        <button className="checkout-button" onClick={onCheckout}>
          Checkout
        </button>
      </div>
    )}
  </div>
);

export default CartSummary;
