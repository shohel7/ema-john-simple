import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h4 className="text-lg font-bold text-center mb-5">Order Summary</h4>
      <span className="space-y-4">
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: {cart.length}</p>
        <p>Total Shipping: {cart.length}</p>
        <p>Tax: {cart.length}</p>
        <p className="font-bold">Grand Total: {cart.length}</p>
      </span>
    </div>
  );
};

export default Cart;
