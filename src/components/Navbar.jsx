import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false); // State for mobile menu toggle

  return (
    <nav className="p-4 shadow-lg rounded-b-xl" style={{backgroundColor: '#FFB300'}}>
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        {/* Brand Logo/Name - Updated with image */}
        <Link to="/" className="flex items-center rounded-lg p-2 transition-colors duration-300">
          <img 
            src="https://res.cloudinary.com/duhabjmtf/image/upload/v1753902630/business_ce30ka.png" 
            alt="Telugu's Kitchen - Traditionally Made Telangana Foods"
            className="h-12 sm:h-16 w-auto"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
          aria-label="Toggle navigation"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>

        {/* Navigation Links - Responsive layout */}
        <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 text-lg">
            <li>
              <Link
                to="/"
                className={`block py-2 px-4 rounded-lg transition-colors duration-300 ${
                  location.pathname === '/' ? 'bg-orange-700 text-white' : 'text-white hover:bg-orange-700 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`block py-2 px-4 rounded-lg transition-colors duration-300 ${
                  location.pathname === '/products' ? 'bg-orange-700 text-white' : 'text-white hover:bg-orange-700 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 px-4 rounded-lg transition-colors duration-300 ${
                  location.pathname === '/about' ? 'bg-orange-700 text-white' : 'text-white hover:bg-orange-700 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-4 rounded-lg transition-colors duration-300 ${
                  location.pathname === '/contact' ? 'bg-orange-700 text-white' : 'text-white hover:bg-orange-700 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};