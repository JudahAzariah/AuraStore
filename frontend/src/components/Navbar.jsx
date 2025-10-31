import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function Navbar() {
  const { cart } = useCart() || {}; // ✅ prevents 'undefined' errors
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Cart", path: "/cart" },
    { name: "Checkout", path: "/checkout" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-purple-900/60 via-indigo-900/60 to-purple-900/60 backdrop-blur-md shadow-lg border-b border-purple-800/40"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"
        >
          AURA Store
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-gray-300">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-lg font-medium transition duration-300 hover:text-white ${
                location.pathname === item.path ? "text-purple-400" : ""
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Cart Count */}
        <Link
          to="/cart"
          className="relative bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
        >
          🛒 Cart
          {Array.isArray(cart) && cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-xs font-bold rounded-full px-2 py-[2px]">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </motion.nav>
  );
}
