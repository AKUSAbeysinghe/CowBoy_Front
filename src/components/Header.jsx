import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-4 flex items-center justify-between shadow-sm">
      {/* Logo */}
      <div className="font-bold text-2xl tracking-wide">COWBOY.</div>

      {/* Desktop Navigation (hidden on small screens) */}
      <div className="hidden md:flex items-center space-x-8">
        <div className="relative group">
          <a href="#" className="hover:text-gray-700 flex items-center">
            E-BIKES
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          {/* Dropdown for E-BIKES (example) */}
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Classic</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cross</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cross ST</a>
          </div>
        </div>

        <a href="#" className="hover:text-gray-700">
          ACCESSORIES
        </a>
        <a href="#" className="hover:text-gray-700">
          ADAPTIVE POWER
        </a>
        <a href="#" className="hover:text-gray-700">
          CONNECT
        </a>
        <div className="relative group">
          <a href="#" className="hover:text-gray-700 flex items-center">
            LEASING
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          {/* Dropdown for LEASING (example) */}
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Leasing Option 1</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Leasing Option 2</a>
          </div>
        </div>
      </div>

      {/* Actions (always visible on desktop, moved to mobile menu on small screens) */}
      <div className="hidden md:flex items-center space-x-4">
        <a href="#" className="text-sm font-medium hover:text-gray-700">
          BOOK A TEST RIDE
        </a>
        <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition duration-300">
          ORDER NOW
        </button>
        <button className="p-2">
          {/* Shopping Bag Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Button (hamburger) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          {/* Hamburger Icon */}
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu (initially hidden, shown when isMobileMenuOpen is true) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 z-20">
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">E-BIKES</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">ACCESSORIES</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">ADAPTIVE POWER</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">CONNECT</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">LEASING</a>
          <hr className="my-2" />
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">BOOK A TEST RIDE</a>
          <button className="w-full mt-2 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition duration-300">
            ORDER NOW
          </button>
          <button className="w-full mt-2 p-2 flex items-center justify-center">
            {/* Shopping Bag Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="text-gray-800">Bag</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;