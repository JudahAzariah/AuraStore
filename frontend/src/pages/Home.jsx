import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { addToCart } = useCart();

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    image: "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4999,
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 1999,
    image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Laptop Backpack",
    price: 1499,
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=800&q=80",
  },
  {
  id: 5,
  name: "VR Headset",
  price: 8999,
  image: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=800&q=80",
},


];


  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-950 to-black text-white">
      {/* Hero Section */}
      <section className="text-center py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Define Your Style — <span className="text-purple-400">AURA Store</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto"
        >
          Futuristic fashion & gadgets — crafted for the modern you.
        </motion.p>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <ProductCard product={product} addToCart={addToCart} />
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-400 border-t border-gray-700/30 mt-8">
        © 2025 <span className="text-purple-400 font-semibold">AURA Store</span> — Demo Project
      </footer>
    </div>
  );
}
