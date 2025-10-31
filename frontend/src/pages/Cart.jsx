import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <Link to="/" className="text-indigo-400 hover:underline">
          Continue Shopping →
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-gray-800 p-4 rounded-lg"
          >
            <div>
              <h2 className="text-xl">{item.name}</h2>
              <p className="text-gray-400">₹{item.price} × {item.quantity}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={clearCart}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
        >
          Clear Cart
        </button>
        <Link
          to="/checkout"
          className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
