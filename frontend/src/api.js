import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  timeout: 5000
})

export default api

// helper fallback demo data (import and use where needed)
export const demoProducts = [
  {
    id: 1,
    name: "Quantum Hoodie",
    price: 1299,
    image: "https://images.unsplash.com/photo-1602810318681-6b0bd2ad2ce5?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1"
  },
  {
    id: 2,
    name: "Cyber Sneakers",
    price: 3999,
    image: "https://images.unsplash.com/photo-1552346988-4c9f2efc0a5f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2"
  },
  {
    id: 3,
    name: "Chrono Watch",
    price: 8999,
    image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3"
  },
  {
    id: 4,
    name: "Aura Buds",
    price: 2499,
    image: "https://images.unsplash.com/photo-1585386959984-a41552231693?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=4"
  }
]
