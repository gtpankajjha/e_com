// src/components/PaymentPage.jsx
import React from 'react';
import './PaymentPage.css';

const PaymentPage = () => (
  <div className="payment-container">
    <h2 className="payment-title">Payment Page</h2>
    <p className="payment-description">Please enter your payment details below:</p>

    <form className="payment-form">
      <input type="text" placeholder="Cardholder Name" className="payment-input" />
      <input type="text" placeholder="Card Number" className="payment-input" />
      <div className="payment-row">
        <input type="text" placeholder="Expiry (MM/YY)" className="payment-input half" />
        
      </div>
      <input type="text" placeholder="CVV" className="payment-input" />
      <button type="submit" className="payment-button">Pay Now</button>
    </form>
  </div>
);

export default PaymentPage;
