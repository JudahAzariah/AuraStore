import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-8 py-6 border-t border-white/5">
      <div className="container px-6 text-center text-gray-400">
        © {new Date().getFullYear()} AURA Store — Demo project
      </div>
    </footer>
  )
}
