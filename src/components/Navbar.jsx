import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-white/90 backdrop-blur shadow-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gray-900 to-gray-700 text-white font-bold">
            KM
          </div>
          <span className="text-xl font-bold text-gray-900">XSPORTS</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#home" className="hover:text-blue-600 transition-colors">
            Home
          </a>
          <a href="#benefits" className="hover:text-blue-600 transition-colors">
            Kenapa Kami
          </a>
          <a href="#products" className="hover:text-blue-600 transition-colors">
            Produk
          </a>
          <a href="#testimoni" className="hover:text-blue-600 transition-colors">
            Testimoni
          </a>
          <a href="#lokasi" className="hover:text-blue-600 transition-colors">
            Lokasi
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
