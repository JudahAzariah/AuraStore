import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="card-glass p-4 rounded-2xl text-center shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/30">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-3"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Available";
        }}
      />
      <h3 className="font-bold text-lg text-white">{product.name}</h3>
      <p className="text-purple-300 mb-2">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="btn bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
