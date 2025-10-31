import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-950 to-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto bg-black/40 p-8 rounded-2xl shadow-2xl border border-purple-900/50">
        <h1 className="text-4xl font-extrabold text-center text-purple-400 mb-8">
          Checkout
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center space-y-4">
            <p className="text-gray-300 text-lg">
              Your cart is empty 😕. Add something cool!
            </p>
            <Link
              to="/"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition"
            >
              Go Back to Shop
            </Link>
          </div>
        ) : (
          <>
            <ul className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between bg-purple-950/40 p-4 rounded-xl"
                >
                  <div>
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-sm text-purple-300">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold text-purple-400">
                    ₹{item.price * item.quantity}
                  </p>
                </li>
              ))}
            </ul>

            <div className="border-t border-purple-700 pt-4 flex justify-between text-lg font-semibold">
              <p>Total:</p>
              <p className="text-purple-400">₹{total}</p>
            </div>

            <div className="text-center mt-8">
              <Link
                to="/success"
                onClick={() => clearCart()}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
              >
                Confirm Order
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
