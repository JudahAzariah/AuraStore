import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-900 via-indigo-950 to-black text-white text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="p-8 bg-black/40 rounded-2xl shadow-2xl border border-purple-800/40 max-w-md"
      >
        <h1 className="text-4xl font-extrabold text-purple-400 mb-4">
          🎉 Order Successful!
        </h1>
        <p className="text-gray-300 mb-6">
          Your order has been placed successfully.  
          You’ll receive your items soon!
        </p>
        <Link
          to="/"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-lg text-white font-semibold hover:scale-105 transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
