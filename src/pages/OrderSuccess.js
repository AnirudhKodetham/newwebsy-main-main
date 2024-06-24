import React from "react";
import "../styles/OrderSuccess.css"; 
import heroImage from "../assets/images/hero.png"; 

const OrderSuccess = () => {
  return (
    <div className="order-success-container">
      <h1>Wohoo! Your order is placed!!🎉</h1>
      <h3>Your order will be delivered in 45 mins</h3>
      <h4>Please leave us a rating!!</h4>
      <img src={heroImage} alt="Order Success" className="hero-image" />
    </div>
  );
};

export default OrderSuccess;
